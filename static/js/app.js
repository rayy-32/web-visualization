//defining the url
const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

//defining empty arrays to store data
let allData = [];
let subjects = [];
let values = [];
let labels = [];
let hoverText = [];

//using d3 to read in data
d3.json(url).then(function(data) {
    //console.log(data.samples);

    //defining the data array
    let initData = data.samples[0];

    let trace = {
        x: initData.sample_values.slice(0, 10),
        y: initData.otu_ids.slice(0, 10),
        type: 'bar',
        text: initData.otu_labels.slice(0, 10),
        orientation: 'h'
    };

    let traceData = [trace];

    let layout = {
        title: 'test',
        height: 600,
        width: 800
    };

    Plotly.newPlot('sample-metadata', traceData, layout);

    for (let i = 0; i < data.samples.length; i++) {
        let row = data.samples[i];
        //console.log(row);
        //console.log(row.id);
        //console.log(row.otu_ids);
        //console.log(row.otu_labels);
        //console.log(row.sample_values);
        subjects.push(row.id);
        allData.push(row);
        //values.push(row.sample_values.slice(0, 10));
        //labels.push(row.otu_ids.slice(0, 10));
        //hoverText.push(row.otu_labels.slice(0, 10));
    };
});
console.log(allData);

/*
d3.selectAll('#selDataset').on('change', addData);

function addData() {
    let dropdownMenu = d3.select('#selDataset');
    let testSubject = dropdownMenu.property('value');

    let data = allData.find();
    let x = [];
    let y = [];
    let text = [];

    for (let s = 0; s < subjects.length; s++) {
        if (testSubject === subjects[s]) {
            x = '';
            y = '';
            text = '';
        }
    };
    
    Plotly.restyle('sample-metadata','x',[x]);
    Plotly.restyle('sample-metadata','y',[y]);
    Plotly.restyle('sample-metadata','text',[text]);
    
}
*/

//function init() {};