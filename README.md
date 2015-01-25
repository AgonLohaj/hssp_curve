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
