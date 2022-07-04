const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

/*
const loc = '/data/samples.json'
data = d3.json(loc);
console.log(data);
*/

///*

let dataset = [];

d3.json(url).then(function(data) {
    //console.log(data);
    console.log(data.samples);
    dataset = data.samples;
});
//*/

console.log(dataset);


//let dropdownMenu = d3.select('#selDataset');

//let data = d3.json(url);
//console.log(data);

//let values = sample_values
//let labels = otu_ids
//let hoverText = otu_labels


//function init() {};