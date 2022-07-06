//defining the url
const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

//defining empty arrays to store data
let allData = [];
let values = [];
let labels = [];
let hoverText = [];

//using d3 to read in data, then pushing it to arrays
d3.json(url).then(function(data) {

    //console.log(data.samples);

    for (let i = 0; i < data.samples.length; i++) {
        let row = data.samples[i]
        //console.log(row);
        //console.log(row.id);
        //console.log(row.otu_ids);
        //console.log(row.otu_labels);
        //console.log(row.sample_values);

        allData.push(row);
        //values.push(row.sample_values.slice(0, 10));
        //labels.push(row.otu_ids.slice(0, 10));
        //hoverText.push(row.otu_labels.slice(0, 10));

    }  
});
console.log(allData);

/*
//defining the data array
let trace = {
    x: values,
    y: labels,
    type: 'bar',
    text: hoverText,
    orientation: 'h'
};

let traceData = [trace];

let layout = {
    title: 'test',
    margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 100
    }
};

Plotly.newPlot('sample-metadata', traceData, layout);
*/

/*
d3.selectAll('#selDataset').on('change', addData);

function addData() {
    let dropdownMenu = d3.select('#selDataset');
    let testSubject = dropdownMenu.property('value');

    let data = allData.find()
    
    updatePlotly(data);
}

function updatePlotly(newData) {
    Plotly.restyle('','',[newData])
}
*/

//function init() {};