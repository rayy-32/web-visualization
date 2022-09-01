//defining the url
const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

//read in data
function readdata(sample) {
    d3.json(url).then(function(data) {
        let metadata = data.metadata;
        let allResults = metadata.filter(sampleObj => sampleObj.id == sample);
        let result = allResults[0];
        let PANEL = d3.select("#sample-metadata");
        PANEL.html("");

        for (key in result) {
            PANEL.append('h5').text(`${key.toUpperCase()}: ${result[key]}`);
        };
    });
}

//format and create charts
function createChart(sample) {
    d3.json(url).then(function(data) {
        let samples = data.samples;
        let allResults = samples.filter(sampleObj => sampleObj.id == sample);
        let result = allResults[0];

        let otu_ids = result.otu_ids;
        let otu_labels = result.otu_labels;
        let sample_values = result.sample_values;

        let chartLayout = {
            title: 'Bacteria Cultures per Sample',
            hovermode: 'closest',
            xaxis: {title: 'OTU ID'}
        };

        let chartData = [
            {
                x: otu_ids,
                y: sample_values,
                text: otu_labels,
                mode: 'markers',
                marker: {
                    size: sample_values,
                    color: otu_ids,
                    colorscale: 'Portland'
                }
            }
        ];

        //create bubble chart
        Plotly.newPlot('bubble', chartData, chartLayout);

        let yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
        let barData = [
            {
                y: yticks,
                x: sample_values.slice(0, 10).reverse(),
                text: otu_labels.slice(0, 10).reverse(),
                type: "bar",
                orientation: "h",
            }
        ];

        let barLayout = {
        title: "Top 10 Bacteria Cultures Found",
        };

        //create bar chart
        Plotly.newPlot("bar", barData, barLayout);
    });
}

//populate dashboard with initial data
function init() {
    let selector = d3.select("#selDataset");

    d3.json(url).then((data) => {
        let names = data.names;

        for (let i = 0; i < names.length; i++) {
            selector
                .append('option')
                .text(names[i])
                .property('value', names[i]);
        };

        let sampleOne = names[0];
        createChart(sampleOne);
        readdata(sampleOne);
    });
}

//read in new data when selection changes
function newSelection(newSample) {
    createChart(newSample);
    readdata(newSample);
}

//initialize page
init();