require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var strVar="";
strVar += "";
strVar += "  	<div id=\"container\">";
strVar += "		<h1 id=\"title\">HSSP CURVE<\/h1>";
strVar += "		<div id=\"description\">";
strVar += "			Visualize the HSSP curve and impose the BLAST-derived sequence alignments and allow the user to dynamically filter and export the data shown on the graph for better insights.";
strVar += "		<\/div>";
strVar += "		<br\/>";
strVar += "		";
strVar += "		<div id=\"input_wrapper\">";
strVar += "			<div class=\"row\">";
strVar += "				<div class=\"col-sm-3 nopadding\">";
strVar += "					Choose from file:";
strVar += "					<div class=\"row\">";
strVar += "						<div class=\"input-group\">";
strVar += "							<input id=\"fileToUpload\" class=\"filestyle\" type=\"file\" name=\"fileToUpload\">";
strVar += "						<\/div>";
strVar += "					<\/div>	 ";
strVar += "				<\/div>";
strVar += "				";
strVar += "				<div class=\"col-sm-1 nopadding\">				";
strVar += "				<\/div>				";
strVar += "				";
strVar += "				<div class=\"col-sm-8 nopadding\">";
strVar += "					Content:";
strVar += "					<div class=\"row\">	";
strVar += "						<div class=\"col-sm-12 nopadding\">";
strVar += "							<div class=\"input-group\">";
strVar += "								<textarea class=\"form-control\" id=\"xmlArea\" rows=\"1\" style=\"width: 100%; margin-top: 0px; margin-bottom: 0px;\"><\/textarea> ";
strVar += "							<\/div>";
strVar += "						<\/div>";
strVar += "					<\/div>";
strVar += "					<div class=\"row content-buttons\">	";
strVar += "						<div class=\"col-sm-4 nopadding\">";
strVar += "							<div class=\"input-group\">";
strVar += "								<button class=\"form-control\" id=\"show_graph\">Extract Graph<\/button>		";
strVar += "							<\/div>";
strVar += "						<\/div>	 ";
strVar += "						<div class=\"col-sm-2 nopadding\">";
strVar += "							<div class=\"input-group\">";
strVar += "								<input type=\"button\" class=\"form-control\" value=\"Clear\" onclick=\"javascript:eraseText();\"> ";
strVar += "							<\/div>";
strVar += "						<\/div>						";
strVar += "						<div class=\"col-sm-6 nopadding\">";
strVar += "						<\/div>	 						";
strVar += "					<\/div>";
strVar += "				<\/div>";
strVar += "				";
strVar += "				<br\/><br\/>";
strVar += "				<p style=\"display:none\">";
strVar += "				Blast Output automatically parsed into JSON:			";
strVar += "				<textarea id=\"jsonArea\" rows=\"8\"><\/textarea> ";
strVar += "				<br\/><br\/> ";
strVar += "				<\/p>";
strVar += "			<\/div>";
strVar += "		<\/div>";
strVar += "";
strVar += "		<div class=\"row\">";
strVar += "			<br\/>";
strVar += "		<\/div>";
strVar += "		";
strVar += "		<div class=\"row filter_wrapper\">";
strVar += "			<div class=\"row\">";
strVar += "				<h3>Filters<\/h3>";
strVar += "			<\/div>";
strVar += "";
strVar += "<!--";
strVar += "			<div class=\"filter\">";
strVar += "			Show >= 100% <input type=\"checkbox\" id=\"aboveOrEqualTo100\">";
strVar += "			<\/div>";
strVar += "	  		<br\/>";
strVar += "-->	  		";
strVar += "	  		<div class=\"filter\">";
strVar += "				<div class=\"row\">";
strVar += "					";
strVar += "					<div class=\"col-sm-6 nopadding\">";
strVar += "						<div class=\"row\">Filter based on HSSP score:<\/div>";
strVar += "						<div class=\"row\">";
strVar += "						<div class=\"col-sm-3\">";
strVar += "							<div class=\"input-group\">";
strVar += "								<input style=\"width: 100%;\" class=\"form-control\" type=\"text\" id=\"from\" value=\"-90\">";
strVar += "							<\/div>";
strVar += "						<\/div>";
strVar += "						<div class=\"nopadding col-sm-6\">";
strVar += "							<div id=\"slider-range\"><\/div>";
strVar += "						<\/div>";
strVar += "";
strVar += "						<div class=\"col-sm-3\">";
strVar += "							<div class=\"input-group\">";
strVar += "								<input style=\"width: 100%;\" class=\"form-control\" type=\"text\" id=\"to\" value=\"80.5\">";
strVar += "							<\/div>";
strVar += "						<\/div>";
strVar += "						<\/div>";
strVar += "					<\/div>";
strVar += "					<div class=\"col-sm-1 nopadding\">					";
strVar += "					<\/div>	";
strVar += "					<div class=\"col-sm-5 nopadding\">";
strVar += "						<div class=\"row\">HSSP-curve distance:<\/div>";
strVar += "						<div class=\"row hssp_curve_slider\">	";
strVar += "							<div class=\"col-sm-12\">		";
strVar += "								<div class=\"row\">	";
strVar += "									<input type=\"range\" name=\"hssp_curve_value\" id=\"hssp_curve_distance\" step=\"1\" value=\"0\" min=\"-19\" max=\"20\">";
strVar += "								<\/div>	";
strVar += "								<div class=\"row center\">						  	";
strVar += "									<span id=\"range_value\">53<\/span>";
strVar += "								<\/div>						  	";
strVar += "							<\/div>";
strVar += "						<\/div>";
strVar += "					<\/div>	";
strVar += "				<\/div>";
strVar += "			<\/div>";
strVar += "			<br>";
strVar += "		<\/div>";
strVar += "";
strVar += "		<div id=\"placeholder\"><\/div>";
strVar += "		<p style=\"display:none\" id=\"export\">Export:";
strVar += "			<br\/>";
strVar += "			<a href=\"javascript:void(0)\" download=\"below.txt\" id=\"below\">Download #elements below the hssp curve<\/a>";
strVar += "			<br\/>";
strVar += "			<a href=\"javascript:void(0)\" download=\"above.txt\" id=\"above\">Download #elements above the hssp curve<\/a>";
strVar += "		<\/p>";
strVar += "		<br\/><br\/><br\/><br\/><br\/><br\/>";
strVar += "	<\/div>";

var content = function(){};

content.html = strVar;

module.exports = content;

},{}],"hssp-curve":[function(require,module,exports){
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
},{"./content.js":1}]},{},["hssp-curve"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvY29udGVudC5qcyIsImxpYi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIHN0clZhcj1cIlwiO1xuc3RyVmFyICs9IFwiXCI7XG5zdHJWYXIgKz0gXCIgIFx0PGRpdiBpZD1cXFwiY29udGFpbmVyXFxcIj5cIjtcbnN0clZhciArPSBcIlx0XHQ8aDEgaWQ9XFxcInRpdGxlXFxcIj5IU1NQIENVUlZFPFxcL2gxPlwiO1xuc3RyVmFyICs9IFwiXHRcdDxkaXYgaWQ9XFxcImRlc2NyaXB0aW9uXFxcIj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFZpc3VhbGl6ZSB0aGUgSFNTUCBjdXJ2ZSBhbmQgaW1wb3NlIHRoZSBCTEFTVC1kZXJpdmVkIHNlcXVlbmNlIGFsaWdubWVudHMgYW5kIGFsbG93IHRoZSB1c2VyIHRvIGR5bmFtaWNhbGx5IGZpbHRlciBhbmQgZXhwb3J0IHRoZSBkYXRhIHNob3duIG9uIHRoZSBncmFwaCBmb3IgYmV0dGVyIGluc2lnaHRzLlwiO1xuc3RyVmFyICs9IFwiXHRcdDxcXC9kaXY+XCI7XG5zdHJWYXIgKz0gXCJcdFx0PGJyXFwvPlwiO1xuc3RyVmFyICs9IFwiXHRcdFwiO1xuc3RyVmFyICs9IFwiXHRcdDxkaXYgaWQ9XFxcImlucHV0X3dyYXBwZXJcXFwiPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0PGRpdiBjbGFzcz1cXFwicm93XFxcIj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiY29sLXNtLTMgbm9wYWRkaW5nXFxcIj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHRDaG9vc2UgZnJvbSBmaWxlOlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHRcdDxpbnB1dCBpZD1cXFwiZmlsZVRvVXBsb2FkXFxcIiBjbGFzcz1cXFwiZmlsZXN0eWxlXFxcIiB0eXBlPVxcXCJmaWxlXFxcIiBuYW1lPVxcXCJmaWxlVG9VcGxvYWRcXFwiPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0PFxcL2Rpdj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHQ8XFwvZGl2Plx0IFwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHQ8XFwvZGl2PlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcIjtcbnN0clZhciArPSBcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiY29sLXNtLTEgbm9wYWRkaW5nXFxcIj5cdFx0XHRcdFwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHQ8XFwvZGl2Plx0XHRcdFx0XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOCBub3BhZGRpbmdcXFwiPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdENvbnRlbnQ6XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwicm93XFxcIj5cdFwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIG5vcGFkZGluZ1xcXCI+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInhtbEFyZWFcXFwiIHJvd3M9XFxcIjFcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMTAwJTsgbWFyZ2luLXRvcDogMHB4OyBtYXJnaW4tYm90dG9tOiAwcHg7XFxcIj48XFwvdGV4dGFyZWE+IFwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0XHQ8XFwvZGl2PlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0PFxcL2Rpdj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHQ8XFwvZGl2PlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcInJvdyBjb250ZW50LWJ1dHRvbnNcXFwiPlx0XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNCBub3BhZGRpbmdcXFwiPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwic2hvd19ncmFwaFxcXCI+RXh0cmFjdCBHcmFwaDxcXC9idXR0b24+XHRcdFwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0XHQ8XFwvZGl2PlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0PFxcL2Rpdj5cdCBcIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yIG5vcGFkZGluZ1xcXCI+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB2YWx1ZT1cXFwiQ2xlYXJcXFwiIG9uY2xpY2s9XFxcImphdmFzY3JpcHQ6ZXJhc2VUZXh0KCk7XFxcIj4gXCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHRcdDxcXC9kaXY+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHQ8XFwvZGl2Plx0XHRcdFx0XHRcdFwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgbm9wYWRkaW5nXFxcIj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHRcdDxcXC9kaXY+XHQgXHRcdFx0XHRcdFx0XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0PFxcL2Rpdj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFx0PFxcL2Rpdj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdDxiclxcLz48YnJcXC8+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdDxwIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmVcXFwiPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRCbGFzdCBPdXRwdXQgYXV0b21hdGljYWxseSBwYXJzZWQgaW50byBKU09OOlx0XHRcdFwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHQ8dGV4dGFyZWEgaWQ9XFxcImpzb25BcmVhXFxcIiByb3dzPVxcXCI4XFxcIj48XFwvdGV4dGFyZWE+IFwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHQ8YnJcXC8+PGJyXFwvPiBcIjtcbnN0clZhciArPSBcIlx0XHRcdFx0PFxcL3A+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHQ8XFwvZGl2PlwiO1xuc3RyVmFyICs9IFwiXHRcdDxcXC9kaXY+XCI7XG5zdHJWYXIgKz0gXCJcIjtcbnN0clZhciArPSBcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0PGJyXFwvPlwiO1xuc3RyVmFyICs9IFwiXHRcdDxcXC9kaXY+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XCI7XG5zdHJWYXIgKz0gXCJcdFx0PGRpdiBjbGFzcz1cXFwicm93IGZpbHRlcl93cmFwcGVyXFxcIj5cIjtcbnN0clZhciArPSBcIlx0XHRcdDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdDxoMz5GaWx0ZXJzPFxcL2gzPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0PFxcL2Rpdj5cIjtcbnN0clZhciArPSBcIlwiO1xuc3RyVmFyICs9IFwiPCEtLVwiO1xuc3RyVmFyICs9IFwiXHRcdFx0PGRpdiBjbGFzcz1cXFwiZmlsdGVyXFxcIj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFNob3cgPj0gMTAwJSA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGlkPVxcXCJhYm92ZU9yRXF1YWxUbzEwMFxcXCI+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHQ8XFwvZGl2PlwiO1xuc3RyVmFyICs9IFwiXHQgIFx0XHQ8YnJcXC8+XCI7XG5zdHJWYXIgKz0gXCItLT5cdCAgXHRcdFwiO1xuc3RyVmFyICs9IFwiXHQgIFx0XHQ8ZGl2IGNsYXNzPVxcXCJmaWx0ZXJcXFwiPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IG5vcGFkZGluZ1xcXCI+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPkZpbHRlciBiYXNlZCBvbiBIU1NQIHNjb3JlOjxcXC9kaXY+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiY29sLXNtLTNcXFwiPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHN0eWxlPVxcXCJ3aWR0aDogMTAwJTtcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJmcm9tXFxcIiB2YWx1ZT1cXFwiLTkwXFxcIj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHRcdFx0PFxcL2Rpdj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHRcdDxcXC9kaXY+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJub3BhZGRpbmcgY29sLXNtLTZcXFwiPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0XHQ8ZGl2IGlkPVxcXCJzbGlkZXItcmFuZ2VcXFwiPjxcXC9kaXY+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHQ8XFwvZGl2PlwiO1xuc3RyVmFyICs9IFwiXCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjb2wtc20tM1xcXCI+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgc3R5bGU9XFxcIndpZHRoOiAxMDAlO1xcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInRvXFxcIiB2YWx1ZT1cXFwiODAuNVxcXCI+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHRcdDxcXC9kaXY+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHQ8XFwvZGl2PlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0PFxcL2Rpdj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHQ8XFwvZGl2PlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xIG5vcGFkZGluZ1xcXCI+XHRcdFx0XHRcdFwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdDxcXC9kaXY+XHRcIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNSBub3BhZGRpbmdcXFwiPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwicm93XFxcIj5IU1NQLWN1cnZlIGRpc3RhbmNlOjxcXC9kaXY+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJyb3cgaHNzcF9jdXJ2ZV9zbGlkZXJcXFwiPlx0XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMlxcXCI+XHRcdFwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XHRcIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVxcXCJyYW5nZVxcXCIgbmFtZT1cXFwiaHNzcF9jdXJ2ZV92YWx1ZVxcXCIgaWQ9XFxcImhzc3BfY3VydmVfZGlzdGFuY2VcXFwiIHN0ZXA9XFxcIjFcXFwiIHZhbHVlPVxcXCIwXFxcIiBtaW49XFxcIi0xOVxcXCIgbWF4PVxcXCIyMFxcXCI+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHRcdFx0PFxcL2Rpdj5cdFwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcInJvdyBjZW50ZXJcXFwiPlx0XHRcdFx0XHRcdCAgXHRcIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGlkPVxcXCJyYW5nZV92YWx1ZVxcXCI+NTM8XFwvc3Bhbj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHRcdFx0XHQ8XFwvZGl2Plx0XHRcdFx0XHRcdCAgXHRcIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHRcdFx0PFxcL2Rpdj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHRcdDxcXC9kaXY+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0PFxcL2Rpdj5cdFwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHQ8XFwvZGl2PlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0PFxcL2Rpdj5cIjtcbnN0clZhciArPSBcIlx0XHRcdDxicj5cIjtcbnN0clZhciArPSBcIlx0XHQ8XFwvZGl2PlwiO1xuc3RyVmFyICs9IFwiXCI7XG5zdHJWYXIgKz0gXCJcdFx0PGRpdiBpZD1cXFwicGxhY2Vob2xkZXJcXFwiPjxcXC9kaXY+XCI7XG5zdHJWYXIgKz0gXCJcdFx0PHAgc3R5bGU9XFxcImRpc3BsYXk6bm9uZVxcXCIgaWQ9XFxcImV4cG9ydFxcXCI+RXhwb3J0OlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0PGJyXFwvPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApXFxcIiBkb3dubG9hZD1cXFwiYmVsb3cudHh0XFxcIiBpZD1cXFwiYmVsb3dcXFwiPkRvd25sb2FkICNlbGVtZW50cyBiZWxvdyB0aGUgaHNzcCBjdXJ2ZTxcXC9hPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0PGJyXFwvPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApXFxcIiBkb3dubG9hZD1cXFwiYWJvdmUudHh0XFxcIiBpZD1cXFwiYWJvdmVcXFwiPkRvd25sb2FkICNlbGVtZW50cyBhYm92ZSB0aGUgaHNzcCBjdXJ2ZTxcXC9hPlwiO1xuc3RyVmFyICs9IFwiXHRcdDxcXC9wPlwiO1xuc3RyVmFyICs9IFwiXHRcdDxiclxcLz48YnJcXC8+PGJyXFwvPjxiclxcLz48YnJcXC8+PGJyXFwvPlwiO1xuc3RyVmFyICs9IFwiXHQ8XFwvZGl2PlwiO1xuXG52YXIgY29udGVudCA9IGZ1bmN0aW9uKCl7fTtcblxuY29udGVudC5odG1sID0gc3RyVmFyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQ7XG4iLCIvKlxuICogaHNzcC1jdXJ2ZVxuICogaHR0cHM6Ly9naXRodWIuY29tL2JhcmRobG9oYWovaHNzcC1jdXJ2ZVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBiYXJkaGxvaGFqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIgbGljZW5zZS5cbiAqL1xuXG4vKipcbkBjbGFzcyBoc3NwY3VydmVcbiAqL1xuXG52YXIgY29udGVudCA9IHJlcXVpcmUoJy4vY29udGVudC5qcycpO1xuXG52YXIgaHNzcGN1cnZlID0gZnVuY3Rpb24ob3B0cyl7XG5cdHRoaXMuZWwgPSBvcHRzLmVsO1xuXHR0aGlzLmVsLmlubmVySFRNTCA9IGNvbnRlbnQuaHRtbDtcblx0XG5cdGlmICh0eXBlb2Ygb3B0cy5zaG93RGVzY3JpcHRpb24gIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0dGhpcy5zaG93RGVzY3JpcHRpb24gPSBvcHRzLnNob3dEZXNjcmlwdGlvbjtcblx0fSBlbHNlIHtcblx0XHR0aGlzLnNob3dEZXNjcmlwdGlvbiA9IGZhbHNlO1xuXHR9XG5cdFxuXHRpZiAodHlwZW9mIG9wdHMuc2hvd1RpdGxlICE9PSAndW5kZWZpbmVkJykge1xuXHRcdHRoaXMuc2hvd1RpdGxlID0gb3B0cy5zaG93VGl0bGU7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5zaG93VGl0bGUgPSBmYWxzZTtcblx0fVxuXHRcblx0dGhpcy5kYXRhID0gb3B0cy5kYXRhO1xuXG5cdHRoaXMucmVuZGVyID0gZnVuY3Rpb24oKXtcblxuXHRcdHZhciBmcm9tID0gbnVsbDtcblx0XHR2YXIgdG8gPSBudWxsO1xuXHRcdFx0XG5cdFx0dmFyIG1pbl9oc3NwX3Njb3JlID0gLTkwOyAvLyB3aWxsIGJlIGZvdW5kIGJhc2VkIG9uIHRoZSBibGFzdCBpbnB1dFxuXHRcdHZhciBtYXhfaHNzcF9zY29yZSA9IDgwLjU7IC8vIHdpbGwgYmUgZm91bmQgYmFzZWQgb24gdGhlIGJsYXN0IGlucHV0XG5cdFx0dmFyIG1heF9zZXF1ZW5jZV9hbGlnbm1lbnRfbGVuZ3RoID0gMDtcblxuXHRcdHZhciBoc3NwX2N1cnZlX2Rpc3RhbmNlID0gMDtcblxuXHRcdHZhciBvcmlnaW5hbF9kYXRhID0gW107XG5cdFx0dmFyIGRhdGEgPSBbXTtcblx0XHR2YXIgcGxhY2Vob2xkZXIgPSAkKFwiI3BsYWNlaG9sZGVyXCIpO1xuXHRcdHZhciBncmFwaDtcblx0XG5cdFx0aWYodGhpcy5zaG93VGl0bGUgPT0gZmFsc2Upe1xuXHRcdFx0JCh0aGlzLmVsKS5maW5kKFwiI3RpdGxlXCIpLmhpZGUoKTtcblx0XHR9XG5cblx0XHRpZih0aGlzLnNob3dEZXNjcmlwdGlvbiA9PSBmYWxzZSl7XG5cdFx0XHQkKHRoaXMuZWwpLmZpbmQoXCIjZGVzY3JpcHRpb25cIikuaGlkZSgpO1x0XHRcdFx0XHRcblx0XHR9XG5cblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZVRvVXBsb2FkJykub25jaGFuZ2UgPSBmdW5jdGlvbigpe1xuXHRcdCAgdmFyIGZpbGUgPSB0aGlzLmZpbGVzWzBdO1xuXHRcdCAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cdFx0ICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24ocHJvZ3Jlc3NFdmVudCl7XG5cdFx0XHQvLyBFbnRpcmUgZmlsZVxuXHRcdFx0JChcIiN4bWxBcmVhXCIpLnZhbCh0aGlzLnJlc3VsdCk7XG5cdFx0XHRpbml0aWFsaXNlKCk7XG5cdFx0ICB9O1xuXHRcdCAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIHBsb3RQb2ludHMoKXtcblx0XHRcdHBsYWNlaG9sZGVyLmhpZ2hjaGFydHMoe1xuXHRcdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0XHR0ZXh0OiAnSFNTUCBDdXJ2ZSdcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHhBeGlzOiB7XG5cdFx0XHRcdFx0XHR0aXRsZToge1xuXHRcdFx0XHRcdFx0XHRlbmFibGVkOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHR0ZXh0OiAnbnVtYmVyIG9mIGFsaWduZWQgcmVzaWR1ZXMnXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0Zmxvb3IgOjAsXHRcdFx0XHRcblx0XHRcdFx0XHRcdHNob3dMYXN0TGFiZWw6IHRydWVcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHlBeGlzOiB7XG5cdFx0XHRcdFx0XHR0aXRsZToge1xuXHRcdFx0XHRcdFx0XHR0ZXh0OiAnJSBzZXF1ZW5jZSBpZGVudGl0eSdcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRmbG9vciA6MCxcblx0XHRcdFx0XHRcdGNlaWxpbmcgOjEwMFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y2hhcnQ6IHtcblx0XHRcdFx0XHRcdHpvb21UeXBlOiAneHknLFxuXHRcdFx0XHRcdFx0c3BhY2luZ1RvcDogNjBcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGxlZ2VuZDoge1xuXHRcdFx0XHRcdFx0bGF5b3V0OiAndmVydGljYWwnLFx0XG5cdFx0XHRcdFx0XHRhbGlnbjogJ3JpZ2h0JyxcdFx0XHRcblx0XHRcdFx0XHRcdHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuXHRcdFx0XHRcdFx0eTogLTEwLFxuXHRcdFx0XHRcdFx0eDogLTM1LFxuXHRcdFx0XHRcdFx0ZmxvYXRpbmc6IHRydWUsXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IChIaWdoY2hhcnRzLnRoZW1lICYmIEhpZ2hjaGFydHMudGhlbWUubGVnZW5kQmFja2dyb3VuZENvbG9yKSB8fCAnI0ZGRkZGRicsXG5cdFx0XHRcdFx0XHRib3JkZXJXaWR0aDogMVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dG9vbHRpcDoge1xuXHRcdFx0XHRcdFx0aGlkZURlbGF5OiAxMDAsXG5cdFx0XHRcdFx0XHRmb3JtYXR0ZXI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5zZXJpZXMubmFtZSA9PSBcImhzc3AgY3VydmVcIikge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmKHRoaXMuc2VyaWVzLm5hbWUgPT0gXCJudW1iZXJcIikge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdHZhciBiZWxvd19vcl9hYm92ZSA9IHRoaXMucG9pbnQuaWQ7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0aWYodGhpcy5wb2ludC5pZCA9PSAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRiZWxvd19vcl9hYm92ZSA9IFwiYWJvdmVcIjtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0YmVsb3dfb3JfYWJvdmUgPSBcImJlbG93XCI7XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMucG9pbnQueSArICcgcGFpcnMgb2YgcHJvdGVpbnMgJytiZWxvd19vcl9hYm92ZSsnIHRoZSBoc3NwIGN1cnZlPGJyLz48YnIvPjxpPkNsaWNrIHRvIGRvd25sb2FkPC9pPic7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuICc8Yj5IU1NQIHNjb3JlOiAnK3RoaXMucG9pbnQuaHNzcF9zY29yZS50b0ZpeGVkKDIpKyc8L2I+PGJyLz4lIHNlcXVlbmNlIGlkZW50aXR5OiAnK3RoaXMucG9pbnQueS50b0ZpeGVkKDIpKyc8YnIvPm51bWJlciBvZiBhbGlnbmVkIHJlc2lkdWVzOiAnK3RoaXMucG9pbnQueC50b0ZpeGVkKDIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0XHRcdHNlcmllczogZGF0YVxuXHRcdFx0fSk7XG5cdFx0XHRncmFwaCA9IHBsYWNlaG9sZGVyLmhpZ2hjaGFydHMoKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBpbml0aWFsaXNlKCl7XG5cdFx0XHRtYXhfc2VxdWVuY2VfYWxpZ25tZW50X2xlbmd0aCA9IDA7XG5cdFx0XHQkKFwiI2Zyb21cIikudmFsKG1pbl9oc3NwX3Njb3JlKTtcblx0XHRcdCQoXCIjdG9cIikudmFsKG1heF9oc3NwX3Njb3JlKTtcblx0XHRcdGZyb20gPSBtaW5faHNzcF9zY29yZTtcdFxuXHRcdFx0dG8gPSBtYXhfaHNzcF9zY29yZTtcblx0XHRcdGZldGNoRGF0YSgpO1xuXHRcdFx0ZGF0YSA9IGpRdWVyeS5leHRlbmQodHJ1ZSwgW10sIG9yaWdpbmFsX2RhdGEpO1xuXHRcdFx0cGxvdEhzc3BDdXJ2ZShmYWxzZSk7XG5cdFxuXHRcdFx0cmVmcmVzaERvd25sb2FkYWJsZUNvbnRlbnQoZmFsc2UpO1xuXHRcdFx0cGxvdFBvaW50cygpO1xuXHRcdH1cblxuXHRcdC8qXG5cdFx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdFRoaXMgbWV0aG9kIHJlZnJlc2hlcyB0aGUgdmlzdWFsaXNhdGlvbiBiYXNlZCBvbiB0aGUgaW5wdXQgZmllbGRzLiBJdCBmaXJzdCBleHRyYWN0cyB0aGUgZGF0YSBhbmQgdGhlbiBwbG90cyBpdCB0byB0aGUgZ3JhcGgsXG5cdFx0XHRNdWx0aXBsZSBkYXRhIGFyZSBhbGxvd2VkIHRvIGJlIHBsb3RlZCBvdmVyIHRoZSBzYW1lIGdyYXBoXG5cdFx0Ki9cblx0XHRmdW5jdGlvbiByZWxvYWREYXRhKCl7XG5cdFx0XHQvLyBUaGUgZGF0YSBpcyBhbHJlYWR5IHRoZXJlLCBmaW5kIGFuZCByZWZyZXNoIGJhc2VkIG9uIHRoZSBuZXcgbWluIGFuZCBtYXggaHNzcCBzY29yZVxuXHRcdFx0dmFyIGhzc3BfY3VydmU7XG5cdFx0XHQvLyBGaW5kIGFuZCBzdG9yZSBoc3NwIGN1cnZlXG5cdFx0XHRmb3IodmFyIGkgPSBkYXRhLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRcdGlmKGRhdGFbaV0ubmFtZSA9PT0gXCJoc3NwIGN1cnZlXCIpIHtcblx0XHRcdFx0ICAgaHNzcF9jdXJ2ZSA9IGRhdGFbaV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGRhdGEgPSBqUXVlcnkuZXh0ZW5kKHRydWUsIFtdLCBvcmlnaW5hbF9kYXRhKTtcblx0XHRcdGRhdGEucHVzaChoc3NwX2N1cnZlKTtcblx0XHRcdHJlZnJlc2hEb3dubG9hZGFibGVDb250ZW50KHRydWUpO1xuXHRcdFx0Zm9yKHZhciBpID0wOyBpPCBkYXRhLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0aWYoZ3JhcGguc2VyaWVzW2ldLm5hbWUgIT0gXCJoc3NwIGN1cnZlXCIgJiYgZ3JhcGguc2VyaWVzW2ldLm5hbWUgIT0gXCJudW1iZXJcIil7XG5cdFx0XHRcdFx0Z3JhcGguc2VyaWVzW2ldLnNldERhdGEoZGF0YVtpXS5kYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly9wbG90ID0gJC5wbG90KHBsYWNlaG9sZGVyLCBjaG9pY2VzLCBvcHRpb25zKTtcblx0XHR9XG5cdFx0ZnVuY3Rpb24gbWFrZVRleHRGaWxlKHRleHQpIHtcblx0XHRcdHZhciBkYXRhID0gbmV3IEJsb2IoW3RleHRdLCB7dHlwZTogJ3RleHQvcGxhaW4nfSk7XG5cdFx0XHQvLyByZXR1cm5zIGEgVVJMIHlvdSBjYW4gdXNlIGFzIGEgaHJlZlxuXHRcdFx0cmV0dXJuIHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGRhdGEpO1xuXHRcdH07XG5cblx0XHR2YXIgYWJvdmVVcmw7XG5cdFx0dmFyIGJlbG93VXJsO1xuXG5cdFx0ZnVuY3Rpb24gcmVmcmVzaERvd25sb2FkYWJsZUNvbnRlbnQocmVmcmVzaEdyYXBoKXtcblx0XHRcdHZhciBiZWxvd1plcm8gPSAwO1xuXHRcdFx0dmFyIGFib3ZlWmVybyA9IDA7XG5cdFx0XHR2YXIgYmVsb3daZXJvRGF0YSA9IFwiXCI7XG5cdFx0XHR2YXIgYWJvdmVaZXJvRGF0YSA9IFwiXCI7XG5cdFx0XHR2YXIgcHJldl9oaXRfYWJvdmVfaWQgPSBcIlwiO1xuXHRcdFx0dmFyIHByZXZfaGl0X2JlbG93X2lkID0gXCJcIjtcblx0XHRcdHZhciBoZWFkZXJJbmZvID0gICAgXCIjIEhJVCAtIE5hbWUgb2YgYSBCTEFTVCBIaXRcXHJcXG5cIiArXG5cdFx0XHRcdFx0XHRcdFx0XCIjIElERSAtIFBlcmNlbnQgaWRlbnRpdHkgaW4gYWxpZ25tZW50XFxyXFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRcdFwiIyBMQUxJIC0gTGVuZ3RoIG9mIGFsaWdubWVudCwgZXhjbHVkaW5nIGdhcHNcXHJcXG5cIiArXG5cdFx0XHRcdFx0XHRcdFx0XCIjIEhTU1AgLSBIU1NQLURpc3RhbmNlIHVzaW5nIGZvcm11bGEgZnJvbSBCLiBSb3N0J3MgSFNTUC1QYXBlciAxOTk5XFxyXFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRcdFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXFxyXFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRcdFwiIyBQYXJhbWV0ZXJzOlxcclxcblwiO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRhYm92ZVplcm9EYXRhICs9ICAgIFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXFxyXFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRcdFwiIyBQYWlycyBvZiBQcm90ZWlucyB3aXRoIGhzc3Agc2NvcmUgZ3JlYXRlciB0aGVuIHRoZSBoc3NwIGN1cnZlXFxyXFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRcdGhlYWRlckluZm8gKyBcblx0XHRcdFx0XHRcdFx0XHRcIiMgTWluaW11bSBIU1NQIFNjb3JlOlwiICsgKGhzc3BfY3VydmVfZGlzdGFuY2UqMTAwKS50b0ZpeGVkKDIpICsgXCJcXHJcXG5cIiArXG5cdFx0XHRcdFx0XHRcdFx0XCIjIE1heGltdW0gSFNTUCBTY29yZTpcIiArIHRvICsgXCJcXHJcXG5cIjs7XG5cdFx0XHRiZWxvd1plcm9EYXRhICs9ICAgIFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXFxyXFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRcdFwiIyBQYWlycyBvZiBQcm90ZWlucyB3aXRoIGhzc3Agc2NvcmUgbG93ZXIgdGhlbiB0aGUgaHNzcCBjdXJ2ZVxcclxcblwiICtcblx0XHRcdFx0XHRcdFx0XHRoZWFkZXJJbmZvICtcblx0XHRcdFx0XHRcdFx0XHRcIiMgTWluaW11bSBIU1NQIFNjb3JlOlwiICsgZnJvbSArIFwiXFxyXFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRcdFwiIyBNYXhpbXVtIEhTU1AgU2NvcmU6XCIgKyAoaHNzcF9jdXJ2ZV9kaXN0YW5jZSoxMDApLnRvRml4ZWQoMikgKyBcIlxcclxcblwiOztcblx0XG5cdFx0XHRmb3IodmFyIGkgPSBkYXRhLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRcdGlmKGRhdGFbaV0ubmFtZSAhPSBcImhzc3AgY3VydmVcIil7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR2YXIgaXRlcmF0aW9uSGVhZGVyID1cIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xcclxcblwiICsgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBcIiNROiBcIiArIGRhdGFbaV0uaXRlcmF0aW9uX25hbWUgKyBcIlxcclxcblwiICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0IFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXFxyXFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgXCJISVQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSURFICAgICAgICAgTEFMSSAgICAgICAgICAgIEhTU1BcXHJcXG5cIjtcblx0XHRcdFx0XHR2YXIgaXRlcmF0aW9uSGFzQWJvdmUgPSAwO1xuXHRcdFx0XHRcdHZhciBpdGVyYXRpb25IYXNCZWxvdyA9IDA7XG5cdFx0XHRcdFx0dmFyIHZhbHVlcyA9IGRhdGFbaV0uZGF0YTtcblx0XHRcdFxuXHRcdFx0XHRcdGZvcih2YXIgaiA9IHZhbHVlcy5sZW5ndGggLSAxOyBqID49IDA7IGotLSkge1xuXHRcdFx0XHRcdFx0Ly8gaWYgd2UgaGF2ZSBhIG1pbiBhbmQgbWF4IGhzc3Agc2NvcmUgKGZldGNoZWQgZnJvbSBhbGwgdGhlIGFsaWdubWVudHMpLCBjaGVjayBmb3IgZmlsdGVyc1xuXHRcdFx0XHRcdFx0dmFyIGhzc3Bfc2NvcmUgPSB2YWx1ZXNbal0uaHNzcF9zY29yZTtcblx0XHRcdFx0XHRcdGlmKGhzc3Bfc2NvcmUgPCBmcm9tIHx8IGhzc3Bfc2NvcmUgPiB0byl7XG5cdFx0XHRcdFx0XHRcdHZhbHVlcy5zcGxpY2UoaiwgMSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNle1xuXHRcdFx0XHRcdFx0XHR2YXIgSUQgPSB2YWx1ZXNbal0uaWQ7XG5cdFx0XHRcdFx0XHRcdHdoaWxlKElELmxlbmd0aCA8IDQzKXtcblx0XHRcdFx0XHRcdFx0XHRJRCArPSBcIiBcIjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR2YXIgcGVyY2VudGFnZSA9IHZhbHVlc1tqXS55LnRvRml4ZWQoMikgICsgXCJcIjtcblx0XHRcdFx0XHRcdFx0d2hpbGUocGVyY2VudGFnZS5sZW5ndGggPCAxMil7XG5cdFx0XHRcdFx0XHRcdFx0cGVyY2VudGFnZSArPSBcIiBcIjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHR2YXIgYWxpZ25tZW50X2xlbmd0aCA9IHZhbHVlc1tqXS54ICArIFwiXCI7XG5cdFx0XHRcdFx0XHRcdHdoaWxlKGFsaWdubWVudF9sZW5ndGgubGVuZ3RoIDwgMTYpe1xuXHRcdFx0XHRcdFx0XHRcdGFsaWdubWVudF9sZW5ndGggKz0gXCIgXCI7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0dmFyIG5ld0xpbmUgPSBJRCArIHBlcmNlbnRhZ2UgKyBhbGlnbm1lbnRfbGVuZ3RoICsgaHNzcF9zY29yZS50b0ZpeGVkKDIpICsgXCJcXHJcXG5cIjtcblx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdGlmKGhzc3Bfc2NvcmU+PSAoaHNzcF9jdXJ2ZV9kaXN0YW5jZSoxMDApKXtcblx0XHRcdFx0XHRcdFx0XHRhYm92ZVplcm8rKztcblx0XHRcdFx0XHRcdFx0XHRpZihpdGVyYXRpb25IYXNBYm92ZSA9PSAwKXtcblx0XHRcdFx0XHRcdFx0XHRcdGFib3ZlWmVyb0RhdGEgKz0gaXRlcmF0aW9uSGVhZGVyO1xuXHRcdFx0XHRcdFx0XHRcdFx0aXRlcmF0aW9uSGFzQWJvdmUrKztcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0YWJvdmVaZXJvRGF0YSArPSBuZXdMaW5lO1xuXHRcdFx0XHRcdFx0XHRcdC8vYWJvdmVaZXJvRGF0YS5wdXNoKHZhbHVlc1tqXVszXSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0ZWxzZXtcblx0XHRcdFx0XHRcdFx0XHRiZWxvd1plcm8rKztcblx0XHRcdFx0XHRcdFx0XHRpZihpdGVyYXRpb25IYXNCZWxvdyA9PSAwKXtcblx0XHRcdFx0XHRcdFx0XHRcdGJlbG93WmVyb0RhdGEgKz0gaXRlcmF0aW9uSGVhZGVyO1xuXHRcdFx0XHRcdFx0XHRcdFx0aXRlcmF0aW9uSGFzQmVsb3crKztcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0YmVsb3daZXJvRGF0YSArPSBuZXdMaW5lO1xuXHRcdFx0XHRcdFx0XHRcdC8vYmVsb3daZXJvRGF0YS5wdXNoKHZhbHVlc1tqXVszXSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHZhciBwaWVfZGF0YSA9W3tcblx0XHRcdFx0XHRcdG5hbWU6ICcjIGFib3ZlIEhTU1AgQ3VydmUnLFxuXHRcdFx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdFx0XHR5OiBhYm92ZVplcm8sXG5cdFx0XHRcdFx0XHRjb2xvcjogSGlnaGNoYXJ0cy5nZXRPcHRpb25zKCkuY29sb3JzWzBdXG5cdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0bmFtZTogJyMgYmVsb3cgSFNTUCBDdXJ2ZScsXG5cdFx0XHRcdFx0XHRpZDogMixcblx0XHRcdFx0XHRcdHk6IGJlbG93WmVybyxcblx0XHRcdFx0XHRcdGNvbG9yOiBIaWdoY2hhcnRzLmdldE9wdGlvbnMoKS5jb2xvcnNbMV0gLy8gSm9obidzIGNvbG9yXG5cdFx0XHRcdFx0fV07XG5cdFx0XHR2YXIgcGllID0ge1xuXHRcdFx0XHRcdHR5cGU6ICdwaWUnLFxuXHRcdFx0XHRcdG5hbWU6IFwibnVtYmVyXCIsXG5cdFx0XHRcdFx0ZGF0YTogcGllX2RhdGEsXG5cdFx0XHRcdFx0Y2VudGVyOiBbMjAsICctMjIlJ10sXG5cdFx0XHRcdFx0c2l6ZTogNzAsXG5cdFx0XHRcdFx0c2hvd0luTGVnZW5kOiBmYWxzZSxcblx0XHRcdFx0XHRkYXRhTGFiZWxzIDp7XG5cdFx0XHRcdFx0XHRlbmFibGVkOiBmYWxzZVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZXZlbnRzOntcblx0XHRcdFx0XHRcdGNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdFx0XHRcdFx0XHRpZihldmVudC5wb2ludC5pZCA9PSAxKXtcblx0XHRcdFx0XHRcdFx0XHR2YXIgYWJvdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdmUnKTtcblx0XHRcdFx0XHRcdFx0XHRhYm92ZS5jbGljaygpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGVsc2V7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGJlbG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JlbG93Jyk7XG5cdFx0XHRcdFx0XHRcdFx0YmVsb3cuY2xpY2soKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdGRhdGEucHVzaChwaWUpO1xuXHRcdFx0aWYocmVmcmVzaEdyYXBoKXtcblx0XHRcdFx0Zm9yKHZhciBpID0wOyBpPCBncmFwaC5zZXJpZXMubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHRcdGlmKGdyYXBoLnNlcmllc1tpXS5uYW1lID09IHBpZS5uYW1lKXtcblx0XHRcdFx0XHRcdGdyYXBoLnNlcmllc1tpXS5zZXREYXRhKHBpZV9kYXRhKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHZhciBhYm92ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm92ZScpO1xuXHRcblx0XHRcdC8vUmV2b2tlIHByZXZpb3VzIHVybHNcblx0XHRcdHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKGFib3ZlVXJsKTtcblx0XHRcdHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKGJlbG93VXJsKTtcblx0XG5cdFx0XHRhYm92ZVVybCA9IG1ha2VUZXh0RmlsZShhYm92ZVplcm9EYXRhKTtcblx0XG5cdFx0XHRhYm92ZS5ocmVmID0gYWJvdmVVcmw7XG5cdFx0XHQvL2Fib3ZlLmhyZWYgPSBtYWtlVGV4dEZpbGUoSlNPTi5zdHJpbmdpZnkoYWJvdmVaZXJvRGF0YSkpO1xuXHRcdFx0dmFyIGJlbG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JlbG93Jyk7XG5cdFx0XHQvL2JlbG93LmhyZWYgPSBtYWtlVGV4dEZpbGUoSlNPTi5zdHJpbmdpZnkoYmVsb3daZXJvRGF0YSkpO1xuXHRcdFx0YmVsb3dVcmwgPSBtYWtlVGV4dEZpbGUoYmVsb3daZXJvRGF0YSk7XG5cdFx0XHRiZWxvdy5ocmVmID0gYmVsb3dVcmw7XG5cdFxuXHRcdFx0JCggXCIjYmVsb3dcIiApLmh0bWwoXCJEb3dubG9hZCBcIiArIGJlbG93WmVybyArIFwiIHBhaXJzIG9mIHByb3RlaW5zIGJlbG93IHRoZSBoc3NwIGN1cnZlXCIpO1xuXHRcdFx0JCggXCIjYWJvdmVcIiApLmh0bWwoXCJEb3dubG9hZCBcIiArIGFib3ZlWmVybyArIFwiIHBhaXJzIG9mIHByb3RlaW5zIGFib3ZlIHRoZSBoc3NwIGN1cnZlXCIpO1xuXHRcdH1cblxuXHRcdC8qXG5cdFx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdFRoaXMgZnVuY3Rpb24gcGxvdHMgdGhlIGhzc3BjdXJ2ZSBvdmVyIHRoZSBkYXRhIGV4dHJhY3RlZCBmcm9tIHRoZSBpbnB1dC5cblx0XHQqL1xuXHRcdGZ1bmN0aW9uIHBsb3RIc3NwQ3VydmUocmVmcmVzaEdyYXBoKXtcblx0XHRcdHZhciB2YWx1ZXMgPSBbXTtcblx0XG5cdFx0XHQvLyBUT0RPOiBjaGFuZ2UgMC02MDAgYmFzZWQgb24gdGhlIGFsaWduZWQgc2VxdWVuY2VzXG5cdFx0XHRmb3IoTCA9IDA7IEwgPD0gbWF4X3NlcXVlbmNlX2FsaWdubWVudF9sZW5ndGg7IEwrPTgpe1xuXHRcdFx0XHR2YXIgcGFpciA9IFtdO1xuXG5cdFx0XHRcdC8vIENhbGN1bGF0aW5nIFBJRCBiYXNlZCBvbiBMIC0gbnVtYmVyIG9mIHJlc2lkdWVzIGFsaWduZWQgXG5cdFx0XHRcdHZhciBQSUQgPSAwO1xuXHRcdFx0XHRpZihMIDw9MTEpe1xuXHRcdFx0XHRcdHBhaXIucHVzaChMKTtcblx0XHRcdFx0XHRQSUQgPSAxICsgaHNzcF9jdXJ2ZV9kaXN0YW5jZVxuXHRcdFx0XHRcdHBhaXIucHVzaChQSUQqMTAwKTtcblxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYoTCA8PSA0NTApe1xuXHRcdFx0XHRcdHZhciBQSUQgPSAoKDQ4MCAqIE1hdGgucG93KEwsIC0wLjMyKigxICsgTWF0aC5leHAoLUwvMTAwMCkpKSkvMTAwKSArIGhzc3BfY3VydmVfZGlzdGFuY2U7XG5cdFx0XHRcdFx0XHRwYWlyLnB1c2goTCk7XG5cdFx0XHRcdFx0XHRwYWlyLnB1c2goUElEKjEwMCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZXtcblx0XHRcdFx0XHRwYWlyLnB1c2goTCk7XG5cdFx0XHRcdFx0UElEID0gMC4xOTUgKyBoc3NwX2N1cnZlX2Rpc3RhbmNlO1xuXHRcdFx0XHRcdHBhaXIucHVzaChQSUQqMTAwKTtcblx0XHRcdFx0fVxuXHRcdFxuXHRcdFx0XHRpZighUElEIDwgMS4wKXtcblx0XHRcdFx0XHR2YWx1ZXMucHVzaChwYWlyKTtcdFx0XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHZhciByZXN1bHQgPSB7fTtcblx0XHRcdHJlc3VsdC5uYW1lID0gXCJoc3NwIGN1cnZlXCI7XG5cdFx0XHRyZXN1bHQuZGF0YSA9IHZhbHVlcztcblx0XHRcdHJlc3VsdC5saW5lV2lkdGggPSAyLFxuXHRcdFx0cmVzdWx0Lm1hcmtlciA9IHtyYWRpdXM6IDB9O1xuXHRcdFx0cmVzdWx0LnBvaW50U3RhcnQgPSAwO1xuXHRcdFx0ZGF0YS5wdXNoKHJlc3VsdCk7XG5cdFx0XHRpZihyZWZyZXNoR3JhcGgpe1xuXHRcdFx0XHRmb3IodmFyIGkgPTA7IGk8IGdyYXBoLnNlcmllcy5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdFx0aWYoZ3JhcGguc2VyaWVzW2ldLm5hbWUgPT0gcmVzdWx0Lm5hbWUpe1xuXHRcdFx0XHRcdFx0Z3JhcGguc2VyaWVzW2ldLnNldERhdGEodmFsdWVzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyB4bWwgdG8gc3RyaW5nIGhlbHBlciBtZXRob2Rcblx0XHRmdW5jdGlvbiB4bWxUb1N0cmluZyh4bWxEYXRhKSB7IFxuXHRcdFx0dmFyIHhtbFN0cmluZztcblx0XHRcdC8vSUVcblx0XHRcdGlmICh3aW5kb3cuQWN0aXZlWE9iamVjdCl7XG5cdFx0XHRcdHhtbFN0cmluZyA9IHhtbERhdGEueG1sO1xuXHRcdFx0fVxuXHRcdFx0Ly8gY29kZSBmb3IgTW96aWxsYSwgRmlyZWZveCwgT3BlcmEsIGV0Yy5cblx0XHRcdGVsc2V7XG5cdFx0XHRcdHhtbFN0cmluZyA9IChuZXcgWE1MU2VyaWFsaXplcigpKS5zZXJpYWxpemVUb1N0cmluZyh4bWxEYXRhKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB4bWxTdHJpbmc7XG5cdFx0fSAgIFxuXG5cdFx0Lypcblx0XHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0UGFyc2UgdGhlIGlucHV0IGZyb20gdGhlIHRleHQgZmllbGQgYW5kIHN0b3JlIHRoZSBkYXRhIGludG8gYSBkYXRhIHZhcmlhYmxlIHdoaWNoIHdpbGwgYmUgdXNlZCBsYXRlciB0byBwbG90XG5cdFx0Ki9cblx0XHRmdW5jdGlvbiBmZXRjaERhdGEoKXtcblxuXHRcdFx0b3JpZ2luYWxfZGF0YSA9IFtdO1xuXHRcdFx0dmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeSh4MmpzLnhtbF9zdHIyanNvbigkKFwiI3htbEFyZWFcIikudmFsKCkpKTtcblx0XHRcdCQoXCIjanNvbkFyZWFcIikudmFsKGpzb24pO1xuXHRcdFx0anNvbiA9IGpRdWVyeS5wYXJzZUpTT04oanNvbik7XG5cdFx0XHR2YXIgcmVzdWx0ID0ganNvbi5CbGFzdE91dHB1dC5CbGFzdE91dHB1dF9pdGVyYXRpb25zO1xuXHRcdFx0dmFyIGkgPSAxO1xuXHRcdFx0aWYoJC5pc0FycmF5KHJlc3VsdC5JdGVyYXRpb24pKXtcblx0XHRcdFx0JC5lYWNoKHJlc3VsdC5JdGVyYXRpb24sIGZ1bmN0aW9uKGtleSwgaXRlcmF0aW9uKXtcblx0XHRcdFx0XHRmZXRjaEl0ZXJhdGlvbihpdGVyYXRpb24sIGkpO1xuXHRcdFx0XHRcdGkrKztcblx0XHRcdFx0fSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0ZmV0Y2hJdGVyYXRpb24ocmVzdWx0Lkl0ZXJhdGlvbiwgaSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZmV0Y2hJdGVyYXRpb24oaXRlcmF0aW9uLCBpZCl7XG5cdFx0XHR2YXIgbGFiZWwgPSBpdGVyYXRpb25bXCJJdGVyYXRpb25fcXVlcnktZGVmXCJdO1xuXHRcdFx0dmFyIGhpdHMgPSBpdGVyYXRpb24uSXRlcmF0aW9uX2hpdHMuSGl0O1xuXHRcblx0XHRcdHZhciB2YWx1ZXMgPSBbXTtcblx0XHRcdGlmKCQuaXNBcnJheShoaXRzKSl7XG5cdFx0XHRcdCQuZWFjaChoaXRzLCBmdW5jdGlvbihrZXksIGl0ZXJhdGlvbkhpdCkge1xuXHRcdFx0XHQvL2Rpc3BsYXkgdGhlIGtleSBhbmQgdmFsdWUgcGFpclxuXHRcdFx0XHRcdHZhciBoc3AgPSBpdGVyYXRpb25IaXQuSGl0X2hzcHMuSHNwO1xuXHRcdFx0XHRcdHZhciBvcHRpbWFsX3BhaXIgPSBmZXRjaFBhaXJGcm9tSHNwKGl0ZXJhdGlvbkhpdCwgaHNwKTtcblx0XHRcdFx0XHRpZighalF1ZXJ5LmlzRW1wdHlPYmplY3Qob3B0aW1hbF9wYWlyKSl7XG5cdFx0XHRcdFx0XHR2YWx1ZXMucHVzaChvcHRpbWFsX3BhaXIpO1xuXHRcdFx0XHRcdH1cdFxuXHRcdFx0XHR9KTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHR2YXIgaHNwID0gaGl0cy5IaXRfaHNwcy5Ic3A7XG5cdFx0XHRcdHZhciBvcHRpbWFsX3BhaXIgPSBmZXRjaFBhaXJGcm9tSHNwKGhpdHMsIGhzcCk7XG5cdFx0XHRcdGlmKCFqUXVlcnkuaXNFbXB0eU9iamVjdChvcHRpbWFsX3BhaXIpKXtcblx0XHRcdFx0XHR2YWx1ZXMucHVzaChvcHRpbWFsX3BhaXIpO1xuXHRcdFx0XHR9XHRcblx0XHRcdH1cblx0XG5cdFx0XHR2YXIgcmVzdWx0ID0ge307XG5cdFx0XHRyZXN1bHQubmFtZSA9IFwiSXRlcmF0aW9uIFwiICsgaWQ7XG5cdFx0XHRyZXN1bHQuaXRlcmF0aW9uX25hbWUgPSBsYWJlbDtcblx0XHRcdHJlc3VsdC5kYXRhID0gdmFsdWVzO1xuXHRcdFx0cmVzdWx0LnR5cGUgPSBcInNjYXR0ZXJcIjtcblx0XHRcdHJlc3VsdC5tYXJrZXIgPSB7XG5cdFx0XHRcdHJhZGl1czogMixcblx0XHRcdFx0c3RhdGVzOiB7XG5cdFx0XHRcdFx0aG92ZXI6IHtcblx0XHRcdFx0XHRcdGVuYWJsZWQ6IHRydWUsXG5cdFx0XHRcdFx0XHRsaW5lQ29sb3I6ICdyZ2IoMTAwLDEwMCwxMDApJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHJlc3VsdC5zYXRhdGVzID0ge1xuXHRcdFx0XHRob3Zlcjoge1xuXHRcdFx0XHRcdG1hcmtlcjoge1xuXHRcdFx0XHRcdFx0ZW5hYmxlZDogZmFsc2Vcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRyZXN1bHQucG9pbnRTdGFydCA9IDA7XG5cdFx0XHRvcmlnaW5hbF9kYXRhLnB1c2gocmVzdWx0KTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBmZXRjaFBhaXJGcm9tSHNwKGhpdCwgaHNwKXtcblx0XHRcdC8vIEZyb20gdGhlIGJsYXN0IG91dHB1dCB0aGVyZSBhcmUgY2FzZXMgd2hlcmUgb25seSAxIGhpdCB3YXMgZm91bmQsIGluIHRoYXQgY2FzZSBhbiBvYmplY3Qgd2lsbCBiZSBwYXJzZWQgaGVyZSBvdGhlcndpc2UgdGhlIGhpdHMgYXJlIHN0b3JlZCBpbnRvIGFuIGFycmF5XG5cdFx0XHRpZigkLmlzQXJyYXkoaHNwKSkge1xuXHRcdFx0XHR2YXIgaHNwcyA9IFtdO1xuXHRcdFx0XHQvLyBJZiB0aGVyZSBhcmUgbXVsdGlwbGUgaHNwcyB0aGFuIHNlbGVjdCB0aGUgb3B0aW1hbCBvbmVcblx0XHRcdFx0JC5lYWNoKGhzcCwgZnVuY3Rpb24oa2V5LCBoc3BPYmplY3QpIHtcblx0XHRcdFx0XHR2YXIgcGFpciA9IGZldGNoSHNzcFBhaXIoaGl0LCBoc3BPYmplY3QpO1xuXHRcdFx0XHRcdGlmKCFqUXVlcnkuaXNFbXB0eU9iamVjdChwYWlyKSl7XG5cdFx0XHRcdFx0XHRoc3BzLnB1c2gocGFpcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dmFyIG9wdGltYWxfaHNwO1xuXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgaHNwcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmKGpRdWVyeS5pc0VtcHR5T2JqZWN0KG9wdGltYWxfaHNwKSl7XG5cdFx0XHRcdFx0XHRvcHRpbWFsX2hzcCA9IGhzcHNbaV07XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYoaHNwc1tpXS5oc3NwX3Njb3JlID4gb3B0aW1hbF9oc3AuaHNzcF9zY29yZSkge1xuXHRcdFx0XHRcdCAgIG9wdGltYWxfaHNwID0gaHNwc1tpXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG9wdGltYWxfaHNwO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGZldGNoSHNzcFBhaXIoaGl0LCBoc3ApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qXG5cdFx0XHRpbnB1dCBwYXJhbXM6XG5cdFx0XHRcdGl0ZXJhdGlvbkhpdDogb2JqZWN0XG5cdFx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdFRoaXMgbWV0aG9kIGV4dHJhY3RzIHRoZSBpbmZvcm1hdGlvbiBuZWVkZWQgZm9yIHBsb3RpbmcgdGhhdCBpcyB0aGUgcGFpciBvZiBudW1iZXIgb2YgcmVzaWR1ZXMgYWxpZ25lZCBhbmQgcGVyY2VudGFnZSBvZiBzZXF1ZW5jZSBzaW1pbGFyaXR5IGV4dHJhY3RlZCBmcm9tIHRoZSBvYmplY3RzIHJldGFpbmVkIGZyb20gdGhlIHhtbCBpbnB1dFxuXHRcdFx0b3V0cHV0OiBcblx0XHRcdFx0cGFpcjogb2YgbnVtYmVyIG9mIHJlc2lkdWVzIGFsaWduZWQgYW5kIHBlcmNlbnRhZ2Ugb2Ygc2VxdWVuY2Ugc2ltaWxhcml0eVxuXHRcdCovXG5cdFx0ZnVuY3Rpb24gZmV0Y2hIc3NwUGFpcihpdGVyYXRpb25IaXQsIGhzcE9iamVjdCl7XG5cblx0XHRcdHZhciBsZW5ndGggPSBwYXJzZUludChoc3BPYmplY3RbXCJIc3BfYWxpZ24tbGVuXCJdKSAtIGhzcE9iamVjdC5Ic3BfZ2Fwcztcblx0XHRcdHZhciBoaXRfbnVtID0gaXRlcmF0aW9uSGl0LkhpdF9udW07XG5cdFx0XHR2YXIgaWQgPSBpdGVyYXRpb25IaXQuSGl0X2lkO1xuXHRcdFx0dmFyIG51bWJlcl9hbGlnbmVkID0gcGFyc2VJbnQoaHNwT2JqZWN0LkhzcF9pZGVudGl0eSk7XG5cdFxuXHRcdFx0dmFyIFBJRCA9IG51bWJlcl9hbGlnbmVkKjEwMC9sZW5ndGg7XG5cdFx0XHR2YXIgaHNzcF9zY29yZSA9IDA7XG5cdFx0XHRpZihsZW5ndGggPD0gMTEpe1xuXHRcdFx0XHRoc3NwX3Njb3JlID0gUElEIC0gMTAwO1xuXHRcdFx0fSBlbHNlIGlmKGxlbmd0aCA8PSA0NTApe1xuXHRcdFx0XHRoc3NwX3Njb3JlID0gUElEIC0gKDQ4MCAqIE1hdGgucG93KGxlbmd0aCwgLTAuMzIqKDEgKyBNYXRoLmV4cCgtbGVuZ3RoLzEwMDApKSkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aHNzcF9zY29yZSA9IFBJRCAtIDE5LjU7XG5cdFx0XHR9XHRcblx0XG5cdFx0XHR2YXIgcGVyY2VudGFnZSA9IG51bWJlcl9hbGlnbmVkL2xlbmd0aDtcblxuXHRcdFx0dmFyIHBhaXIgPSB7fTtcblx0XHRcdGlmKHBlcmNlbnRhZ2UgPiAxKXtcblx0XHRcdFx0cmV0dXJuIHBhaXI7XG5cdFx0XHR9XG5cdFx0XHRpZihsZW5ndGggPiBtYXhfc2VxdWVuY2VfYWxpZ25tZW50X2xlbmd0aCl7XG5cdFx0XHRcdG1heF9zZXF1ZW5jZV9hbGlnbm1lbnRfbGVuZ3RoID0gbGVuZ3RoO1xuXHRcdFx0fVxuXHRcblx0XHRcdC8vIFdlIGZvcm0gbnVtYmVyX2FsaWduZWQgaW4gdGhlIHggYXhpcyBhbmQgcGVyY2VudGFnZSBpbiB5IGF4aXNcblx0XHRcdHBhaXIueCA9IHBhcnNlSW50KGxlbmd0aCk7XG5cdFx0XHRwYWlyLnkgPSBwZXJjZW50YWdlKjEwMDtcblx0XHRcdHBhaXIuaHNzcF9zY29yZSA9IGhzc3Bfc2NvcmU7XG5cdFx0XHRwYWlyLmlkID0gaWQ7XG5cdFx0XHRyZXR1cm4gcGFpcjtcblx0XHR9XG5cblx0XHQvKlxuXHRcdFx0aW5wdXQgcGFyYW1zOlxuXHRcdFx0XHR4bWw6IHhtbF9maWxlXG5cdFx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdFRoaXMgbWV0aG9kIGhhbmRlbHMgdGhlIG9uIHJlY2VpdmUgZGF0YSBmcm9tIHRoZSBhamF4IGZ1bmN0aW9uIHRoYXQgd2lsbCBsb2FkIGEgc2FtcGxlIGlucHV0IG9uIGZpcnN0IHJ1biBhbmQgdGhhbiBjYWxsIHRoZSB2aXN1YWxpc2F0aW9uXG5cdFx0Ki9cblx0XHRmdW5jdGlvbiBvbkRhdGFSZWNlaXZlZCh4bWwpIHtcblxuXHRcdFx0dmFyIHhtbF9zdHJpbmcgPSB4bWxUb1N0cmluZyh4bWwpO1xuXHRcdFx0JChcIiN4bWxBcmVhXCIpLnZhbCh4bWxfc3RyaW5nKTtcblx0XG5cdFx0XHRpbml0aWFsaXNlKCk7XG5cdFx0fVxuXG5cdFx0Ly8gQ2FsbCBhIHNhbXBsZSBpbnB1dCBkYXRhIGxvY2F0ZWQgd2l0aGluIHRoZSByZXBvc2l0b3J5IG9uIGZpcnN0IHJ1blxuXHRcdCQuYWpheCh7XG5cdFx0XHR1cmw6IHRoaXMuZGF0YSxcblx0XHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0XHRkYXRhVHlwZTogJ3htbCcsXG5cdFx0XHRzdWNjZXNzOiBvbkRhdGFSZWNlaXZlZFxuXHRcdH0pO1xuXG5cdFx0dmFyIHgyanMgPSBuZXcgWDJKUygpO1xuXHRcdC8qXG5cdFx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdENsaWNrIEhhbmRsZXIgZm9yIHRoZSBFeHRyYWN0IEdyYXBoIGJ1dHRvblxuXHRcdCovXG5cdFx0JChcIiNzaG93X2dyYXBoXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cdFx0XHRpbml0aWFsaXNlKCk7XG5cdFx0fSk7XG5cblxuXHRcdC8qXG5cdFx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdENsaWNrIEhhbmRsZXIgZm9yIHRoZSBGaWx0ZXIgYnV0dG9uIHdoaWNoIGZpbHRlcnMgdGhlIGdyYXBoIGJhc2VkIG9uIHRoZSByYW5nZSBvZiB2YWx1ZXMgKGZyb20tdG8pXG5cdFx0Ki9cblx0XHQvLyAkKFwiI2ZpbHRlcl9ncmFwaFwiKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHQvLyBcdGZyb20gPSAkKFwiI2Zyb21cIikudmFsKCk7XG5cdFx0Ly8gXHR0byA9ICQoXCIjdG9cIikudmFsKCk7XG5cdFx0Ly8gXHRyZWxvYWREYXRhKCk7XG5cdFx0Ly8gfSk7XG5cblx0XHRmdW5jdGlvbiBmaWx0ZXJfZ3JhcGgoKXtcblx0XHRcdGZyb20gPSAkKFwiI2Zyb21cIikudmFsKCk7XG5cdFx0XHR0byA9ICQoXCIjdG9cIikudmFsKCk7XG5cdFx0XHRyZWxvYWREYXRhKCk7XG5cdFx0fVxuXG5cdFx0Lypcblx0XHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0T24gbW91c2UgbW92ZSBoYW5kbGVzIHdoaWNoIHdyaXRlcyB0aGUgdmFsdWUgb2YgdGhlIHNsaWRlciBvbiB0aGUgbmV4dCBodG1sIGVsZW1lbnQgKGEgc3Bhbilcblx0XHQqL1xuXHRcdCQoJyNoc3NwX2N1cnZlX2Rpc3RhbmNlJykubW91c2Vtb3ZlKGZ1bmN0aW9uKCkge1xuXHRcdFx0JChcIiNyYW5nZV92YWx1ZVwiKS5odG1sKHBhcnNlSW50KCQodGhpcykudmFsKCkpKTtcblx0XHR9KTtcblxuXHRcdC8qXG5cdFx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdE9uIGNoYW5nZSBldmVudCBoYW5kbGVyIHdoaWNoIHdyaXRlcyB0aGUgdmFsdWUgb2YgdGhlIHNsaWRlciBvbiB0aGUgbmV4dCBodG1sIGVsZW1lbnQgKGEgc3BhbiksXG5cdFx0XHRzYXZlIHRoZSBuZXcgdmFsdWUgZm9yIHRoZSBoc3NwIGN1cnZlIGRpc3RhbmNlIGFuZCByZWZyZXNoZXMgdGhlIHZpc3VhbGl6YXRpb24uXG5cdFx0Ki9cblx0XHQkKCcjaHNzcF9jdXJ2ZV9kaXN0YW5jZScpLmNoYW5nZShmdW5jdGlvbigpIHtcblx0XHRcdCQodGhpcykubmV4dCgpLmh0bWwocGFyc2VJbnQoJCh0aGlzKS52YWwoKSkpO1xuXHRcblx0XHRcdGhzc3BfY3VydmVfZGlzdGFuY2UgPSAkKHRoaXMpLnZhbCgpLzEwMDtcblx0XG5cdFx0XHRkYXRhID0galF1ZXJ5LmV4dGVuZCh0cnVlLCBbXSwgb3JpZ2luYWxfZGF0YSk7XG5cdFx0XHRwbG90SHNzcEN1cnZlKHRydWUpO1xuXHRcdFx0cmVmcmVzaERvd25sb2FkYWJsZUNvbnRlbnQodHJ1ZSk7XG5cdFx0XHQvL2Zvcih2YXIgaSA9MDsgaTwgZGF0YS5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdC8vZ3JhcGguc2VyaWVzW2ldLnVwZGF0ZShkYXRhW2ldKTtcblx0XHRcdC8vfVxuXHRcdH0pO1xuXG5cdFx0JChcIjpmaWxlXCIpLmZpbGVzdHlsZSgpO1xuXG5cdFx0XHQkKCBcIiNzbGlkZXItcmFuZ2VcIiApLnNsaWRlcih7XG5cdFx0XHQgIHJhbmdlOiB0cnVlLFxuXHRcdFx0ICBtaW46IC05MCxcblx0XHRcdCAgbWF4OiA4MC41LFxuXHRcdFx0ICB2YWx1ZXM6IFsgLTkwLCA4MC41IF0sXG5cdFx0XHQgIHNsaWRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuXHRcdFx0XHRcdCQoXCIjZnJvbVwiKS52YWwodWkudmFsdWVzWyAwIF0pO1xuXHRcdFx0XHRcdCQoXCIjdG9cIikudmFsKHVpLnZhbHVlc1sgMSBdKTtcdCAgXHRcdFxuXHRcdFx0XHRcdGZpbHRlcl9ncmFwaCgpO1xuXHRcdFx0ICB9XG5cdFx0XHR9KTtcblx0XG5cdFx0JCgnI3RvJykua2V5dXAoZnVuY3Rpb24gKCkgeyBcblxuXHRcdFx0dmFyIHRvID0gJChcIiN0b1wiKS52YWwoKTtcblx0XHRcdGlmKHRvID4gODAuNSl7XG5cdFx0XHRcdCQoXCIjdG9cIikudmFsKDgwLjUpO1xuXHRcdFx0fVxuXHRcdFx0ZmlsdGVyX2dyYXBoKCk7IFxuXHRcblx0XHR9KTtcblx0XHQkKCcjZnJvbScpLmtleXVwKGZ1bmN0aW9uICgpIHsgXG5cblx0XHRcdHZhciBmcm9tID0gJChcIiNmcm9tXCIpLnZhbCgpO1xuXHRcdFx0aWYoZnJvbSA8IC05MCl7XG5cdFx0XHRcdCQoXCIjZnJvbVwiKS52YWwoLTkwKTtcblx0XHRcdH1cblx0XHRcdGZpbHRlcl9ncmFwaCgpOyBcblx0XHR9KTtcdFxuXG5cdCAgXG5cdFx0ZnVuY3Rpb24gZXJhc2VUZXh0KCl7XG5cdFx0XHQkKFwiI3htbEFyZWFcIikudmFsKFwiXCIpO1x0XG5cdFx0fVxuXHR9O1xuXG59OyAvLyBjbG9zaW5nIHRoZSBjb25zdHJ1Y3RvclxuXG5tb2R1bGUuZXhwb3J0cyA9IGhzc3BjdXJ2ZTsgIl19
