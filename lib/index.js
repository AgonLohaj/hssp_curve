/*
 * hssp-curve
 * https://github.com/bardhlohaj/hssp-curve
 *
 * Copyright (c) 2014 bardhlohaj
 * Licensed under the Apache 2 license.
 */

/**
@class hsspcurve
 */

var content = require('./content.js');

var hsspcurve = function(opts){
	this.el = opts.el;
	this.el.innerHTML = content.html;
	
	if (typeof opts.showDescription !== 'undefined') {
		this.showDescription = opts.showDescription;
	} else {
		this.showDescription = false;
	}
	
	if (typeof opts.showTitle !== 'undefined') {
		this.showTitle = opts.showTitle;
	} else {
		this.showTitle = false;
	}
	
	this.data = opts.data;

	this.render = function(){

		var from = null;
		var to = null;
			
		var min_hssp_score = -90; // will be found based on the blast input
		var max_hssp_score = 80.5; // will be found based on the blast input
		var max_sequence_alignment_length = 0;

		var hssp_curve_distance = 0;

		var original_data = [];
		var data = [];
		var placeholder = $("#placeholder");
		var graph;
	
		if(this.showTitle == false){
			$(this.el).find("#title").hide();
		}

		if(this.showDescription == false){
			$(this.el).find("#description").hide();					
		}

		document.getElementById('fileToUpload').onchange = function(){
		  var file = this.files[0];
		  var reader = new FileReader();
		  reader.onload = function(progressEvent){
			// Entire file
			$("#xmlArea").val(this.result);
			initialise();
		  };
		  reader.readAsText(file);
		};

		function plotPoints(){
			placeholder.highcharts({
					title: {
						text: 'HSSP Curve'
					},
					xAxis: {
						title: {
							enabled: true,
							text: 'number of aligned residues'
						},
						floor :0,				
						showLastLabel: true
					},
					yAxis: {
						title: {
							text: '% sequence identity'
						},
						floor :0,
						ceiling :100
					},
					chart: {
						zoomType: 'xy',
						spacingTop: 60
					},
					legend: {
						layout: 'vertical',	
						align: 'right',			
						verticalAlign: 'top',
						y: -10,
						x: -35,
						floating: true,
						backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
						borderWidth: 1
					},
					tooltip: {
						hideDelay: 100,
						formatter: function() {
							if (this.series.name == "hssp curve") {
								return false;
							} else if(this.series.name == "number") {
					
								var below_or_above = this.point.id;
					
								if(this.point.id == 1) {
									below_or_above = "above";
								} else {
									below_or_above = "below";							
								}
								return this.point.y + ' pairs of proteins '+below_or_above+' the hssp curve<br/><br/><i>Click to download</i>';
							} else {						
								return '<b>HSSP score: '+this.point.hssp_score.toFixed(2)+'</b><br/>% sequence identity: '+this.point.y.toFixed(2)+'<br/>number of aligned residues: '+this.point.x.toFixed(2);
							}
						}
					},
			
					series: data
			});
			graph = placeholder.highcharts();
		}

		function initialise(){
			max_sequence_alignment_length = 0;
			$("#from").val(min_hssp_score);
			$("#to").val(max_hssp_score);
			from = min_hssp_score;	
			to = max_hssp_score;
			fetchData();
			data = jQuery.extend(true, [], original_data);
			plotHsspCurve(false);
	
			refreshDownloadableContent(false);
			plotPoints();
		}

		/*
			description:
			This method refreshes the visualisation based on the input fields. It first extracts the data and then plots it to the graph,
			Multiple data are allowed to be ploted over the same graph
		*/
		function reloadData(){
			// The data is already there, find and refresh based on the new min and max hssp score
			var hssp_curve;
			// Find and store hssp curve
			for(var i = data.length - 1; i >= 0; i--) {
				if(data[i].name === "hssp curve") {
				   hssp_curve = data[i];
				}
			}
			data = jQuery.extend(true, [], original_data);
			data.push(hssp_curve);
			refreshDownloadableContent(true);
			for(var i =0; i< data.length; i++){
				if(graph.series[i].name != "hssp curve" && graph.series[i].name != "number"){
					graph.series[i].setData(data[i].data);
				}
			}
			//plot = $.plot(placeholder, choices, options);
		}
		function makeTextFile(text) {
			var data = new Blob([text], {type: 'text/plain'});
			// returns a URL you can use as a href
			return window.URL.createObjectURL(data);
		};

		var aboveUrl;
		var belowUrl;

		function refreshDownloadableContent(refreshGraph){
			var belowZero = 0;
			var aboveZero = 0;
			var belowZeroData = "";
			var aboveZeroData = "";
			var prev_hit_above_id = "";
			var prev_hit_below_id = "";
			var headerInfo =    "# HIT - Name of a BLAST Hit\r\n" +
								"# IDE - Percent identity in alignment\r\n" +
								"# LALI - Length of alignment, excluding gaps\r\n" +
								"# HSSP - HSSP-Distance using formula from B. Rost's HSSP-Paper 1999\r\n" +
								"###########################################################################\r\n" +
								"# Parameters:\r\n";
						
			aboveZeroData +=    "###########################################################################\r\n" +
								"# Pairs of Proteins with hssp score greater then the hssp curve\r\n" +
								headerInfo + 
								"# Minimum HSSP Score:" + (hssp_curve_distance*100).toFixed(2) + "\r\n" +
								"# Maximum HSSP Score:" + to + "\r\n";;
			belowZeroData +=    "###########################################################################\r\n" +
								"# Pairs of Proteins with hssp score lower then the hssp curve\r\n" +
								headerInfo +
								"# Minimum HSSP Score:" + from + "\r\n" +
								"# Maximum HSSP Score:" + (hssp_curve_distance*100).toFixed(2) + "\r\n";;
	
			for(var i = data.length - 1; i >= 0; i--) {
				if(data[i].name != "hssp curve"){
						
					var iterationHeader ="###########################################################################\r\n" + 
										 "#Q: " + data[i].iteration_name + "\r\n" +
										 "###########################################################################\r\n" +
										 "HIT                                        IDE         LALI            HSSP\r\n";
					var iterationHasAbove = 0;
					var iterationHasBelow = 0;
					var values = data[i].data;
			
					for(var j = values.length - 1; j >= 0; j--) {
						// if we have a min and max hssp score (fetched from all the alignments), check for filters
						var hssp_score = values[j].hssp_score;
						if(hssp_score < from || hssp_score > to){
							values.splice(j, 1);
						}
						else{
							var ID = values[j].id;
							while(ID.length < 43){
								ID += " ";
							}
							var percentage = values[j].y.toFixed(2)  + "";
							while(percentage.length < 12){
								percentage += " ";
							}
					
							var alignment_length = values[j].x  + "";
							while(alignment_length.length < 16){
								alignment_length += " ";
							}
							var newLine = ID + percentage + alignment_length + hssp_score.toFixed(2) + "\r\n";
				
							if(hssp_score>= (hssp_curve_distance*100)){
								aboveZero++;
								if(iterationHasAbove == 0){
									aboveZeroData += iterationHeader;
									iterationHasAbove++;
								}
								aboveZeroData += newLine;
								//aboveZeroData.push(values[j][3]);
							}
							else{
								belowZero++;
								if(iterationHasBelow == 0){
									belowZeroData += iterationHeader;
									iterationHasBelow++;
								}
								belowZeroData += newLine;
								//belowZeroData.push(values[j][3]);
							}
						}
					}
				}
			}
			var pie_data =[{
						name: '# above HSSP Curve',
						id: 1,
						y: aboveZero,
						color: Highcharts.getOptions().colors[0]
					}, {
						name: '# below HSSP Curve',
						id: 2,
						y: belowZero,
						color: Highcharts.getOptions().colors[1] // John's color
					}];
			var pie = {
					type: 'pie',
					name: "number",
					data: pie_data,
					center: [20, '-22%'],
					size: 70,
					showInLegend: false,
					dataLabels :{
						enabled: false
					},
					events:{
						click: function (event){
							if(event.point.id == 1){
								var above = document.getElementById('above');
								above.click();
							}
							else{
								var below = document.getElementById('below');
								below.click();
							}
						}
					}
				};
			data.push(pie);
			if(refreshGraph){
				for(var i =0; i< graph.series.length; i++){
					if(graph.series[i].name == pie.name){
						graph.series[i].setData(pie_data);
					}
				}
			}
			var above = document.getElementById('above');
	
			//Revoke previous urls
			window.URL.revokeObjectURL(aboveUrl);
			window.URL.revokeObjectURL(belowUrl);
	
			aboveUrl = makeTextFile(aboveZeroData);
	
			above.href = aboveUrl;
			//above.href = makeTextFile(JSON.stringify(aboveZeroData));
			var below = document.getElementById('below');
			//below.href = makeTextFile(JSON.stringify(belowZeroData));
			belowUrl = makeTextFile(belowZeroData);
			below.href = belowUrl;
	
			$( "#below" ).html("Download " + belowZero + " pairs of proteins below the hssp curve");
			$( "#above" ).html("Download " + aboveZero + " pairs of proteins above the hssp curve");
		}

		/*
			description:
			This function plots the hsspcurve over the data extracted from the input.
		*/
		function plotHsspCurve(refreshGraph){
			var values = [];
	
			// TODO: change 0-600 based on the aligned sequences
			for(L = 0; L <= max_sequence_alignment_length; L+=8){
				var pair = [];

				// Calculating PID based on L - number of residues aligned 
				var PID = 0;
				if(L <=11){
					pair.push(L);
					PID = 1 + hssp_curve_distance
					pair.push(PID*100);

				}
				else if(L <= 450){
					var PID = ((480 * Math.pow(L, -0.32*(1 + Math.exp(-L/1000))))/100) + hssp_curve_distance;
						pair.push(L);
						pair.push(PID*100);
				}
				else{
					pair.push(L);
					PID = 0.195 + hssp_curve_distance;
					pair.push(PID*100);
				}
		
				if(!PID < 1.0){
					values.push(pair);		
				}
			}
			var result = {};
			result.name = "hssp curve";
			result.data = values;
			result.lineWidth = 2,
			result.marker = {radius: 0};
			result.pointStart = 0;
			data.push(result);
			if(refreshGraph){
				for(var i =0; i< graph.series.length; i++){
					if(graph.series[i].name == result.name){
						graph.series[i].setData(values);
					}
				}
			}
		}

		// xml to string helper method
		function xmlToString(xmlData) { 
			var xmlString;
			//IE
			if (window.ActiveXObject){
				xmlString = xmlData.xml;
			}
			// code for Mozilla, Firefox, Opera, etc.
			else{
				xmlString = (new XMLSerializer()).serializeToString(xmlData);
			}
			return xmlString;
		}   

		/*
			description:
			Parse the input from the text field and store the data into a data variable which will be used later to plot
		*/
		function fetchData(){

			original_data = [];
			var json = JSON.stringify(x2js.xml_str2json($("#xmlArea").val()));
			$("#jsonArea").val(json);
			json = jQuery.parseJSON(json);
			var result = json.BlastOutput.BlastOutput_iterations;
			var i = 1;
			if($.isArray(result.Iteration)){
				$.each(result.Iteration, function(key, iteration){
					fetchIteration(iteration, i);
					i++;
				});
			}else{
				fetchIteration(result.Iteration, i);
			}
		}

		function fetchIteration(iteration, id){
			var label = iteration["Iteration_query-def"];
			var hits = iteration.Iteration_hits.Hit;
	
			var values = [];
			if($.isArray(hits)){
				$.each(hits, function(key, iterationHit) {
				//display the key and value pair
					var hsp = iterationHit.Hit_hsps.Hsp;
					var optimal_pair = fetchPairFromHsp(iterationHit, hsp);
					if(!jQuery.isEmptyObject(optimal_pair)){
						values.push(optimal_pair);
					}	
				});
			}else{
				var hsp = hits.Hit_hsps.Hsp;
				var optimal_pair = fetchPairFromHsp(hits, hsp);
				if(!jQuery.isEmptyObject(optimal_pair)){
					values.push(optimal_pair);
				}	
			}
	
			var result = {};
			result.name = "Iteration " + id;
			result.iteration_name = label;
			result.data = values;
			result.type = "scatter";
			result.marker = {
				radius: 2,
				states: {
					hover: {
						enabled: true,
						lineColor: 'rgb(100,100,100)'
					}
				}
			};
			result.satates = {
				hover: {
					marker: {
						enabled: false
					}
				}
			};
			result.pointStart = 0;
			original_data.push(result);
		}

		function fetchPairFromHsp(hit, hsp){
			// From the blast output there are cases where only 1 hit was found, in that case an object will be parsed here otherwise the hits are stored into an array
			if($.isArray(hsp)) {
				var hsps = [];
				// If there are multiple hsps than select the optimal one
				$.each(hsp, function(key, hspObject) {
					var pair = fetchHsspPair(hit, hspObject);
					if(!jQuery.isEmptyObject(pair)){
						hsps.push(pair);
					}
				});
				var optimal_hsp;
				for(var i = 0; i < hsps.length; i++) {
					if(jQuery.isEmptyObject(optimal_hsp)){
						optimal_hsp = hsps[i];
						continue;
					}
					if(hsps[i].hssp_score > optimal_hsp.hssp_score) {
					   optimal_hsp = hsps[i];
					}
				}
				return optimal_hsp;
			} else {
				return fetchHsspPair(hit, hsp);
			}
		}

		/*
			input params:
				iterationHit: object
			description:
			This method extracts the information needed for ploting that is the pair of number of residues aligned and percentage of sequence similarity extracted from the objects retained from the xml input
			output: 
				pair: of number of residues aligned and percentage of sequence similarity
		*/
		function fetchHsspPair(iterationHit, hspObject){

			var length = parseInt(hspObject["Hsp_align-len"]) - hspObject.Hsp_gaps;
			var hit_num = iterationHit.Hit_num;
			var id = iterationHit.Hit_id;
			var number_aligned = parseInt(hspObject.Hsp_identity);
	
			var PID = number_aligned*100/length;
			var hssp_score = 0;
			if(length <= 11){
				hssp_score = PID - 100;
			} else if(length <= 450){
				hssp_score = PID - (480 * Math.pow(length, -0.32*(1 + Math.exp(-length/1000))));
			} else {
				hssp_score = PID - 19.5;
			}	
	
			var percentage = number_aligned/length;

			var pair = {};
			if(percentage > 1){
				return pair;
			}
			if(length > max_sequence_alignment_length){
				max_sequence_alignment_length = length;
			}
	
			// We form number_aligned in the x axis and percentage in y axis
			pair.x = parseInt(length);
			pair.y = percentage*100;
			pair.hssp_score = hssp_score;
			pair.id = id;
			return pair;
		}

		/*
			input params:
				xml: xml_file
			description:
			This method handels the on receive data from the ajax function that will load a sample input on first run and than call the visualisation
		*/
		function onDataReceived(xml) {

			var xml_string = xmlToString(xml);
			$("#xmlArea").val(xml_string);
	
			initialise();
		}

		// Call a sample input data located within the repository on first run
		$.ajax({
			url: this.data,
			method: 'GET',
			dataType: 'xml',
			success: onDataReceived
		});

		var x2js = new X2JS();
		/*
			description:
			Click Handler for the Extract Graph button
		*/
		$("#show_graph").click(function(){
			initialise();
		});


		/*
			description:
			Click Handler for the Filter button which filters the graph based on the range of values (from-to)
		*/
		// $("#filter_graph").click(function() {
		// 	from = $("#from").val();
		// 	to = $("#to").val();
		// 	reloadData();
		// });

		function filter_graph(){
			from = $("#from").val();
			to = $("#to").val();
			reloadData();
		}

		/*
			description:
			On mouse move handles which writes the value of the slider on the next html element (a span)
		*/
		$('#hssp_curve_distance').mousemove(function() {
			$("#range_value").html(parseInt($(this).val()));
		});

		/*
			description:
			On change event handler which writes the value of the slider on the next html element (a span),
			save the new value for the hssp curve distance and refreshes the visualization.
		*/
		$('#hssp_curve_distance').change(function() {
			$(this).next().html(parseInt($(this).val()));
	
			hssp_curve_distance = $(this).val()/100;
	
			data = jQuery.extend(true, [], original_data);
			plotHsspCurve(true);
			refreshDownloadableContent(true);
			//for(var i =0; i< data.length; i++){
				//graph.series[i].update(data[i]);
			//}
		});

		$(":file").filestyle();

			$( "#slider-range" ).slider({
			  range: true,
			  min: -90,
			  max: 80.5,
			  values: [ -90, 80.5 ],
			  slide: function( event, ui ) {
					$("#from").val(ui.values[ 0 ]);
					$("#to").val(ui.values[ 1 ]);	  		
					filter_graph();
			  }
			});
	
		$('#to').keyup(function () { 

			var to = $("#to").val();
			if(to > 80.5){
				$("#to").val(80.5);
			}
			filter_graph(); 
	
		});
		$('#from').keyup(function () { 

			var from = $("#from").val();
			if(from < -90){
				$("#from").val(-90);
			}
			filter_graph(); 
		});	

	  
		function eraseText(){
			$("#xmlArea").val("");	
		}
	};

}; // closing the constructor

module.exports = hsspcurve; 