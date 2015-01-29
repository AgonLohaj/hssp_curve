# hssp-curve

[![NPM version](http://img.shields.io/npm/v/hssp-curve.svg)](https://www.npmjs.org/package/hssp-curve) 

> Visualize the HSSP curve and impose the BLAST-derived sequence alignments and allow the user to dynamically filter and export the data shown on the graph for better insights.

## Getting Started
Install the module with: 

`npm install hssp-curve`

A simple example how to use the component:

```javascript
var hssp_curve = require('hssp-curve');
var instance = new hssp_curve({el: yourDiv, data: "/single.xml"});
instance.render();
```

## About this project

Is is developed using jquery, jquery UI, bootstrap and highcharts.
The tool parses the xml input, turns it into readable json and then plots the data extracted from the json into the graph. It supports Blast output version BLASTP 2.2.29+. 
The input loaded here by default come from a sample output which may contain bad data so, for better understanding alignment result. For generating the alignment output, you can use <a href=\"http:\/\/blast.ncbi.nlm.nih.gov\/Blast.cgi\">BLAST<\/a>.
The algorithm for calculating HSSP Curve and HSSP ferenced from this <a href=\"http:\/\/www.ncbi.nlm.nih.gov\/pmc\/articles\/PMC169026\/?report=classic\">paper<\/a>.

In the blast output, multiple hits are parsed and from the hsp objects the best is chosen to be displayed in the graph. Taking into account the hssp curve distance and hssp score min and max values the tool will prepare the downloadable content and allow the user to export the data in text files.

When a new input file comes in, the tool will re-initialise the graph. Once it does so, all the filtering will be done by just refreshing the already displayed data (hiding and showing points, moving the curve and re-create the text documents to be downloaded).

Features:
Ability to filter based on hssp scores
Ability to zoom by selecting a part of the graph
Ability to download a screenshot of the graph or print it
Ability to download all the elements that are below or above the hssp curve in .txt format (hint: check out the pie chart)
Ability to show\/hide different data from the legend of the graph
Ability to define the distance from the hssp curve (0 being the original hssp curve)

## Documentation 

#### Constructor Method;

The constructor expects an array parameter with these elements:

**Parameter**: `el`
**Type**: `DOM element`
**Example**: `$("#yourDiv")`

**Parameter**: `data`
**Type**: `XML data reference`
**Example**: `/single.xml`

The constructor of the HSSP Curve is responsible for initializing the HSSP Curve and appending the fundamental html elements to `yourDiv`

```javascript
var instance = new hssp_curve({el: yourDiv, data: "/single.xml"});
```

#### Render Method;

The render method has no parameters.

This method will bind the event handlers to the html inputs and will render the graph.

```javascript
instance.render();
```

## Contributing

All contributions are welcome.

## Support

If you have any problem or suggestion please open an issue [here](https://github.com/bardhlohaj/hssp-curve/issues).

## Highcharts License (http://www.highcharts.com/)

This tool is build using highcharts which is a library free for personal websites, school sites, or non-profit organizations. If you are thinking to use this tool for other purposes, you need the highchart author's permissions. 

Quoted from highcharts website:
"Do you want to use products for a personal website, a school site or a non-profit organisation? Then you don't need the author's permission, just go on and download. For commercial websites and projects, see License and Pricing."
https://shop.highsoft.com/

## License 
This software is licensed under the Apache 2 license, quoted below.

Copyright (c) 2015, bardhlohaj

Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
