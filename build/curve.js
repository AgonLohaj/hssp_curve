require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var strVar="";
strVar += "";
strVar += "  	<div id=\"container\">";
strVar += "		<h1>HSSP CURVE<\/h1>";
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
strVar += "     <div class=\"row\">";
strVar += "			<br/>";
strVar += "		</div>";
strVar += "		<div class=\"alert alert-danger\">"
strVar += "			<button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>";
strVar += "			<h4>Error parsing the input!</h4>";
strVar += "			The input xml you have provided cannot be parsed. Please check the data and try again later.</br>";
strVar += "			Note that this version of the tool supports only Blast output version BLASTP 2.2.29+";
strVar += "		</div>";
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
strVar += "		<br\/>		<br\/>		<br\/>		<br\/>";
strVar += "		<div id=\"more_information\">";
strVar += "			The current implementation works with Blast output version BLASTP 2.2.29+. The input loaded here by default come from a sample output which may contain bad data so, for better understanding use your own alignment result. For generating the alignment output, you can use <a href=\"http:\/\/blast.ncbi.nlm.nih.gov\/Blast.cgi\">BLAST<\/a>.<br\/>The algorithm for calculating HSSP Curve and HSSP Values is referenced from this <a href=\"http:\/\/www.ncbi.nlm.nih.gov\/pmc\/articles\/PMC169026\/?report=classic\">paper<\/a>.<br\/>";
strVar += "			<br\/>Features:";
strVar += "			<br\/>&nbsp;&nbsp;&nbsp;&nbsp;Ability to filter based on hssp scores";
strVar += "			<br\/>&nbsp;&nbsp;&nbsp;&nbsp;Ability to zoom by selecting a part of the graph";
strVar += "			<br\/>&nbsp;&nbsp;&nbsp;&nbsp;Ability to download a screenshot of the graph or print it";
strVar += "			<br\/>&nbsp;&nbsp;&nbsp;&nbsp;Ability to download all the elements that are below or above the hssp curve in .txt format (hint: check out the pie chart)";
strVar += "			<br\/>&nbsp;&nbsp;&nbsp;&nbsp;Ability to show\/hide different data from the legend of the graph";
strVar += "			<br\/>&nbsp;&nbsp;&nbsp;&nbsp;Ability to define the distance from the hssp curve (0 being the original hssp curve)";
strVar += "		<\/div>";
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


		$(".close").click(function() {
			$(".alert").slideUp();
		});
		$(".alert").hide();
	
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
		
		/*
			input params:
				refreshGraph: a flag to indicate wether or not the method should refresh the data within the graph immediately,
							  if not true the graph will not be updated but rather should be initialized later by the caller of this method
			description:
				filters the data based on min and max hssp scores, stores the downloadable text files in memory and plots the pie chart into the graph
		*/
		function refreshDownloadableContent(refreshGraph){
			var belowZero = 0;
			var aboveZero = 0;
			var belowZeroData = "";
			var aboveZeroData = "";
			var prev_hit_above_id = "";
			var prev_hit_below_id = "";
			// header information on the extracted text files
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
						color: Highcharts.getOptions().colors[1]
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

			try{
				var json = JSON.stringify(x2js.xml_str2json($("#xmlArea").val()));
				$("#jsonArea").val(json);
				json = jQuery.parseJSON(json);
				original_data = [];
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
			catch(ex){
				$(".alert").slideDown();
			}
		}

		/*
			input params:
				iteration: the iteration object extracted from the xml
				id: an increasing integer used to name the iterations
			description:
			Extracts the data from each iteration object on the blast input, id is used to name the iterations
		*/
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
		/*
			input params:
				hit: the hit object passed on from the input
				hsp: the hsp objects passed on for the current hit object (Note that this may be an array or one objet
			description:
				Calculates and returns the optimal hsp score from multiple scores within each hit
			output:
				pair: of number of residues aligned and percentage of sequence similarity chosen optimally between multiple hsp or
				return the first calculated hssp pair in case of a single hsp object.
		*/
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
				iterationHit: object containing the hit definition from the input
				hspObject: the next object to be considered for the current iterationHit
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvY29udGVudC5qcyIsImxpYi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBzdHJWYXI9XCJcIjtcbnN0clZhciArPSBcIlwiO1xuc3RyVmFyICs9IFwiICBcdDxkaXYgaWQ9XFxcImNvbnRhaW5lclxcXCI+XCI7XG5zdHJWYXIgKz0gXCJcdFx0PGgxPkhTU1AgQ1VSVkU8XFwvaDE+XCI7XG5zdHJWYXIgKz0gXCJcdFx0PGRpdiBpZD1cXFwiZGVzY3JpcHRpb25cXFwiPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0VmlzdWFsaXplIHRoZSBIU1NQIGN1cnZlIGFuZCBpbXBvc2UgdGhlIEJMQVNULWRlcml2ZWQgc2VxdWVuY2UgYWxpZ25tZW50cyBhbmQgYWxsb3cgdGhlIHVzZXIgdG8gZHluYW1pY2FsbHkgZmlsdGVyIGFuZCBleHBvcnQgdGhlIGRhdGEgc2hvd24gb24gdGhlIGdyYXBoIGZvciBiZXR0ZXIgaW5zaWdodHMuXCI7XG5zdHJWYXIgKz0gXCJcdFx0PFxcL2Rpdj5cIjtcbnN0clZhciArPSBcIlx0XHQ8YnJcXC8+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XCI7XG5zdHJWYXIgKz0gXCJcdFx0PGRpdiBpZD1cXFwiaW5wdXRfd3JhcHBlclxcXCI+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMyBub3BhZGRpbmdcXFwiPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdENob29zZSBmcm9tIGZpbGU6XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwicm93XFxcIj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHRcdFx0PGlucHV0IGlkPVxcXCJmaWxlVG9VcGxvYWRcXFwiIGNsYXNzPVxcXCJmaWxlc3R5bGVcXFwiIHR5cGU9XFxcImZpbGVcXFwiIG5hbWU9XFxcImZpbGVUb1VwbG9hZFxcXCI+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHQ8XFwvZGl2PlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdDxcXC9kaXY+XHQgXCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdDxcXC9kaXY+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMSBub3BhZGRpbmdcXFwiPlx0XHRcdFx0XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdDxcXC9kaXY+XHRcdFx0XHRcIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImNvbC1zbS04IG5vcGFkZGluZ1xcXCI+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0Q29udGVudDpcIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlx0XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTAgbm9wYWRkaW5nXFxcIj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwieG1sQXJlYVxcXCIgcm93cz1cXFwiMVxcXCIgc3R5bGU9XFxcIndpZHRoOiAxMDAlOyBtYXJnaW4tdG9wOiAwcHg7IG1hcmdpbi1ib3R0b206IDBweDtcXFwiPjxcXC90ZXh0YXJlYT4gXCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHRcdDxcXC9kaXY+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHQ8XFwvZGl2PlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiY29sLXNtLTIgbm9wYWRkaW5nXFxcIj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHZhbHVlPVxcXCJDbGVhclxcXCIgb25jbGljaz1cXFwiamF2YXNjcmlwdDplcmFzZVRleHQoKTtcXFwiPiBcIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHRcdFx0PFxcL2Rpdj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHRcdDxcXC9kaXY+XHRcdFx0XHRcdFx0XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0PFxcL2Rpdj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlx0XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNCBub3BhZGRpbmdcXFwiPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0PFxcL2Rpdj5cdCBcdFx0XHRcdFx0XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNCBub3BhZGRpbmdcXFwiPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwic2hvd19ncmFwaFxcXCI+RXh0cmFjdCBHcmFwaDxcXC9idXR0b24+XHRcdFwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0XHQ8XFwvZGl2PlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0PFxcL2Rpdj5cdCBcIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImNvbC1zbS00IG5vcGFkZGluZ1xcXCI+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHQ8XFwvZGl2Plx0IFx0XHRcdFx0XHRcdFwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdDxcXC9kaXY+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdDxcXC9kaXY+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHQ8YnJcXC8+PGJyXFwvPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHQ8cCBzdHlsZT1cXFwiZGlzcGxheTpub25lXFxcIj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFx0Qmxhc3QgT3V0cHV0IGF1dG9tYXRpY2FsbHkgcGFyc2VkIGludG8gSlNPTjpcdFx0XHRcIjtcbnN0clZhciArPSBcIlx0XHRcdFx0PHRleHRhcmVhIGlkPVxcXCJqc29uQXJlYVxcXCIgcm93cz1cXFwiOFxcXCI+PFxcL3RleHRhcmVhPiBcIjtcbnN0clZhciArPSBcIlx0XHRcdFx0PGJyXFwvPjxiclxcLz4gXCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdDxcXC9wPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0PFxcL2Rpdj5cIjtcbnN0clZhciArPSBcIlx0XHQ8XFwvZGl2PlwiO1xuc3RyVmFyICs9IFwiXCI7XG5zdHJWYXIgKz0gXCJcdFx0PGRpdiBjbGFzcz1cXFwicm93XFxcIj5cIjtcbnN0clZhciArPSBcIlx0XHRcdDxiclxcLz5cIjtcbnN0clZhciArPSBcIlx0XHQ8XFwvZGl2PlwiO1xuc3RyVmFyICs9IFwiXHRcdFwiO1xuc3RyVmFyICs9IFwiXHRcdDxkaXYgY2xhc3M9XFxcInJvdyBmaWx0ZXJfd3JhcHBlclxcXCI+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHQ8aDM+RmlsdGVyczxcXC9oMz5cIjtcbnN0clZhciArPSBcIlx0XHRcdDxcXC9kaXY+XCI7XG5zdHJWYXIgKz0gXCJcIjtcbnN0clZhciArPSBcIjwhLS1cIjtcbnN0clZhciArPSBcIlx0XHRcdDxkaXYgY2xhc3M9XFxcImZpbHRlclxcXCI+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRTaG93ID49IDEwMCUgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBpZD1cXFwiYWJvdmVPckVxdWFsVG8xMDBcXFwiPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0PFxcL2Rpdj5cIjtcbnN0clZhciArPSBcIlx0ICBcdFx0PGJyXFwvPlwiO1xuc3RyVmFyICs9IFwiLS0+XHQgIFx0XHRcIjtcbnN0clZhciArPSBcIlx0ICBcdFx0PGRpdiBjbGFzcz1cXFwiZmlsdGVyXFxcIj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwicm93XFxcIj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHRcIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBub3BhZGRpbmdcXFwiPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwicm93XFxcIj5GaWx0ZXIgYmFzZWQgb24gSFNTUCBzY29yZTo8XFwvZGl2PlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwicm93XFxcIj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zXFxcIj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBzdHlsZT1cXFwid2lkdGg6IDEwMCU7XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwiZnJvbVxcXCIgdmFsdWU9XFxcIi05MFxcXCI+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHRcdDxcXC9kaXY+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHQ8XFwvZGl2PlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwibm9wYWRkaW5nIGNvbC1zbS02XFxcIj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHRcdFx0PGRpdiBpZD1cXFwic2xpZGVyLXJhbmdlXFxcIj48XFwvZGl2PlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0PFxcL2Rpdj5cIjtcbnN0clZhciArPSBcIlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiY29sLXNtLTNcXFwiPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHN0eWxlPVxcXCJ3aWR0aDogMTAwJTtcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0b1xcXCIgdmFsdWU9XFxcIjgwLjVcXFwiPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0XHQ8XFwvZGl2PlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0PFxcL2Rpdj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHRcdDxcXC9kaXY+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0PFxcL2Rpdj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMSBub3BhZGRpbmdcXFwiPlx0XHRcdFx0XHRcIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHQ8XFwvZGl2Plx0XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiY29sLXNtLTUgbm9wYWRkaW5nXFxcIj5cIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+SFNTUC1jdXJ2ZSBkaXN0YW5jZTo8XFwvZGl2PlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwicm93IGhzc3BfY3VydmVfc2xpZGVyXFxcIj5cdFwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTJcXFwiPlx0XHRcIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlx0XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cXFwicmFuZ2VcXFwiIG5hbWU9XFxcImhzc3BfY3VydmVfdmFsdWVcXFwiIGlkPVxcXCJoc3NwX2N1cnZlX2Rpc3RhbmNlXFxcIiBzdGVwPVxcXCIxXFxcIiB2YWx1ZT1cXFwiMFxcXCIgbWluPVxcXCItMTlcXFwiIG1heD1cXFwiMjBcXFwiPlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdFx0XHRcdDxcXC9kaXY+XHRcIjtcbnN0clZhciArPSBcIlx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJyb3cgY2VudGVyXFxcIj5cdFx0XHRcdFx0XHQgIFx0XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBpZD1cXFwicmFuZ2VfdmFsdWVcXFwiPjUzPFxcL3NwYW4+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHRcdFx0PFxcL2Rpdj5cdFx0XHRcdFx0XHQgIFx0XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHRcdDxcXC9kaXY+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRcdFx0XHQ8XFwvZGl2PlwiO1xuc3RyVmFyICs9IFwiXHRcdFx0XHRcdDxcXC9kaXY+XHRcIjtcbnN0clZhciArPSBcIlx0XHRcdFx0PFxcL2Rpdj5cIjtcbnN0clZhciArPSBcIlx0XHRcdDxcXC9kaXY+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHQ8YnI+XCI7XG5zdHJWYXIgKz0gXCJcdFx0PFxcL2Rpdj5cIjtcbnN0clZhciArPSBcIlwiO1xuc3RyVmFyICs9IFwiXHRcdDxkaXYgaWQ9XFxcInBsYWNlaG9sZGVyXFxcIj48XFwvZGl2PlwiO1xuc3RyVmFyICs9IFwiXHRcdDxwIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmVcXFwiIGlkPVxcXCJleHBvcnRcXFwiPkV4cG9ydDpcIjtcbnN0clZhciArPSBcIlx0XHRcdDxiclxcLz5cIjtcbnN0clZhciArPSBcIlx0XHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6dm9pZCgwKVxcXCIgZG93bmxvYWQ9XFxcImJlbG93LnR4dFxcXCIgaWQ9XFxcImJlbG93XFxcIj5Eb3dubG9hZCAjZWxlbWVudHMgYmVsb3cgdGhlIGhzc3AgY3VydmU8XFwvYT5cIjtcbnN0clZhciArPSBcIlx0XHRcdDxiclxcLz5cIjtcbnN0clZhciArPSBcIlx0XHRcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6dm9pZCgwKVxcXCIgZG93bmxvYWQ9XFxcImFib3ZlLnR4dFxcXCIgaWQ9XFxcImFib3ZlXFxcIj5Eb3dubG9hZCAjZWxlbWVudHMgYWJvdmUgdGhlIGhzc3AgY3VydmU8XFwvYT5cIjtcbnN0clZhciArPSBcIlx0XHQ8XFwvcD5cIjtcbnN0clZhciArPSBcIlx0XHQ8YnJcXC8+XHRcdDxiclxcLz5cdFx0PGJyXFwvPlx0XHQ8YnJcXC8+XCI7XG5zdHJWYXIgKz0gXCJcdFx0PGRpdiBpZD1cXFwibW9yZV9pbmZvcm1hdGlvblxcXCI+XCI7XG5zdHJWYXIgKz0gXCJcdFx0XHRUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiB3b3JrcyB3aXRoIEJsYXN0IG91dHB1dCB2ZXJzaW9uIEJMQVNUUCAyLjIuMjkrLiBUaGUgaW5wdXQgbG9hZGVkIGhlcmUgYnkgZGVmYXVsdCBjb21lIGZyb20gYSBzYW1wbGUgb3V0cHV0IHdoaWNoIG1heSBjb250YWluIGJhZCBkYXRhIHNvLCBmb3IgYmV0dGVyIHVuZGVyc3RhbmRpbmcgdXNlIHlvdXIgb3duIGFsaWdubWVudCByZXN1bHQuIEZvciBnZW5lcmF0aW5nIHRoZSBhbGlnbm1lbnQgb3V0cHV0LCB5b3UgY2FuIHVzZSA8YSBocmVmPVxcXCJodHRwOlxcL1xcL2JsYXN0Lm5jYmkubmxtLm5paC5nb3ZcXC9CbGFzdC5jZ2lcXFwiPkJMQVNUPFxcL2E+LjxiclxcLz5UaGUgYWxnb3JpdGhtIGZvciBjYWxjdWxhdGluZyBIU1NQIEN1cnZlIGFuZCBIU1NQIFZhbHVlcyBpcyByZWZlcmVuY2VkIGZyb20gdGhpcyA8YSBocmVmPVxcXCJodHRwOlxcL1xcL3d3dy5uY2JpLm5sbS5uaWguZ292XFwvcG1jXFwvYXJ0aWNsZXNcXC9QTUMxNjkwMjZcXC8/cmVwb3J0PWNsYXNzaWNcXFwiPnBhcGVyPFxcL2E+LjxiclxcLz5cIjtcbnN0clZhciArPSBcIlx0XHRcdDxiclxcLz5GZWF0dXJlczpcIjtcbnN0clZhciArPSBcIlx0XHRcdDxiclxcLz4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtBYmlsaXR5IHRvIGZpbHRlciBiYXNlZCBvbiBoc3NwIHNjb3Jlc1wiO1xuc3RyVmFyICs9IFwiXHRcdFx0PGJyXFwvPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO0FiaWxpdHkgdG8gem9vbSBieSBzZWxlY3RpbmcgYSBwYXJ0IG9mIHRoZSBncmFwaFwiO1xuc3RyVmFyICs9IFwiXHRcdFx0PGJyXFwvPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO0FiaWxpdHkgdG8gZG93bmxvYWQgYSBzY3JlZW5zaG90IG9mIHRoZSBncmFwaCBvciBwcmludCBpdFwiO1xuc3RyVmFyICs9IFwiXHRcdFx0PGJyXFwvPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO0FiaWxpdHkgdG8gZG93bmxvYWQgYWxsIHRoZSBlbGVtZW50cyB0aGF0IGFyZSBiZWxvdyBvciBhYm92ZSB0aGUgaHNzcCBjdXJ2ZSBpbiAudHh0IGZvcm1hdCAoaGludDogY2hlY2sgb3V0IHRoZSBwaWUgY2hhcnQpXCI7XG5zdHJWYXIgKz0gXCJcdFx0XHQ8YnJcXC8+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7QWJpbGl0eSB0byBzaG93XFwvaGlkZSBkaWZmZXJlbnQgZGF0YSBmcm9tIHRoZSBsZWdlbmQgb2YgdGhlIGdyYXBoXCI7XG5zdHJWYXIgKz0gXCJcdFx0XHQ8YnJcXC8+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7QWJpbGl0eSB0byBkZWZpbmUgdGhlIGRpc3RhbmNlIGZyb20gdGhlIGhzc3AgY3VydmUgKDAgYmVpbmcgdGhlIG9yaWdpbmFsIGhzc3AgY3VydmUpXCI7XG5zdHJWYXIgKz0gXCJcdFx0PFxcL2Rpdj5cIjtcbnN0clZhciArPSBcIlx0XHQ8YnJcXC8+PGJyXFwvPjxiclxcLz48YnJcXC8+PGJyXFwvPjxiclxcLz5cIjtcbnN0clZhciArPSBcIlx0PFxcL2Rpdj5cIjtcblxudmFyIGNvbnRlbnQgPSBmdW5jdGlvbigpe307XG5cbmNvbnRlbnQuaHRtbCA9IHN0clZhcjtcblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50O1xuIiwiLypcbiAqIGhzc3AtY3VydmVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9iYXJkaGxvaGFqL2hzc3AtY3VydmVcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgYmFyZGhsb2hhalxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyIGxpY2Vuc2UuXG4gKi9cblxuLyoqXG5AY2xhc3MgaHNzcGN1cnZlXG4gKi9cblxudmFyIGNvbnRlbnQgPSByZXF1aXJlKCcuL2NvbnRlbnQuanMnKTtcblxudmFyIGhzc3BjdXJ2ZSA9IGZ1bmN0aW9uKG9wdHMpe1xuXHR0aGlzLmVsID0gb3B0cy5lbDtcblx0dGhpcy5lbC5pbm5lckhUTUwgPSBjb250ZW50Lmh0bWw7XG4gIFxuXHR0aGlzLmRhdGEgPSBvcHRzLmRhdGE7XG5cblx0dGhpcy5yZW5kZXIgPSBmdW5jdGlvbigpe1xuXG5cdFx0dmFyIGZyb20gPSBudWxsO1xuXHRcdHZhciB0byA9IG51bGw7XG5cdFx0XHRcblx0XHR2YXIgbWluX2hzc3Bfc2NvcmUgPSAtOTA7IC8vIHdpbGwgYmUgZm91bmQgYmFzZWQgb24gdGhlIGJsYXN0IGlucHV0XG5cdFx0dmFyIG1heF9oc3NwX3Njb3JlID0gODAuNTsgLy8gd2lsbCBiZSBmb3VuZCBiYXNlZCBvbiB0aGUgYmxhc3QgaW5wdXRcblx0XHR2YXIgbWF4X3NlcXVlbmNlX2FsaWdubWVudF9sZW5ndGggPSAwO1xuXG5cdFx0dmFyIGhzc3BfY3VydmVfZGlzdGFuY2UgPSAwO1xuXG5cdFx0dmFyIG9yaWdpbmFsX2RhdGEgPSBbXTtcblx0XHR2YXIgZGF0YSA9IFtdO1xuXHRcdHZhciBwbGFjZWhvbGRlciA9ICQoXCIjcGxhY2Vob2xkZXJcIik7XG5cdFx0dmFyIGdyYXBoO1xuXG5cblx0XG5cdFxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlVG9VcGxvYWQnKS5vbmNoYW5nZSA9IGZ1bmN0aW9uKCl7XG5cdFx0ICB2YXIgZmlsZSA9IHRoaXMuZmlsZXNbMF07XG5cdFx0ICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblx0XHQgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihwcm9ncmVzc0V2ZW50KXtcblx0XHRcdC8vIEVudGlyZSBmaWxlXG5cdFx0XHQkKFwiI3htbEFyZWFcIikudmFsKHRoaXMucmVzdWx0KTtcblx0XHRcdGluaXRpYWxpc2UoKTtcblx0XHQgIH07XG5cdFx0ICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gcGxvdFBvaW50cygpe1xuXHRcdFx0cGxhY2Vob2xkZXIuaGlnaGNoYXJ0cyh7XG5cdFx0XHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0XHRcdHRleHQ6ICdIU1NQIEN1cnZlJ1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0eEF4aXM6IHtcblx0XHRcdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0XHRcdGVuYWJsZWQ6IHRydWUsXG5cdFx0XHRcdFx0XHRcdHRleHQ6ICdudW1iZXIgb2YgYWxpZ25lZCByZXNpZHVlcydcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRmbG9vciA6MCxcdFx0XHRcdFxuXHRcdFx0XHRcdFx0c2hvd0xhc3RMYWJlbDogdHJ1ZVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0eUF4aXM6IHtcblx0XHRcdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0XHRcdHRleHQ6ICclIHNlcXVlbmNlIGlkZW50aXR5J1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGZsb29yIDowLFxuXHRcdFx0XHRcdFx0Y2VpbGluZyA6MTAwXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjaGFydDoge1xuXHRcdFx0XHRcdFx0em9vbVR5cGU6ICd4eScsXG5cdFx0XHRcdFx0XHRzcGFjaW5nVG9wOiA2MFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0bGVnZW5kOiB7XG5cdFx0XHRcdFx0XHRsYXlvdXQ6ICd2ZXJ0aWNhbCcsXHRcblx0XHRcdFx0XHRcdGFsaWduOiAncmlnaHQnLFx0XHRcdFxuXHRcdFx0XHRcdFx0dmVydGljYWxBbGlnbjogJ3RvcCcsXG5cdFx0XHRcdFx0XHR5OiAtMTAsXG5cdFx0XHRcdFx0XHR4OiAtMzUsXG5cdFx0XHRcdFx0XHRmbG9hdGluZzogdHJ1ZSxcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogKEhpZ2hjaGFydHMudGhlbWUgJiYgSGlnaGNoYXJ0cy50aGVtZS5sZWdlbmRCYWNrZ3JvdW5kQ29sb3IpIHx8ICcjRkZGRkZGJyxcblx0XHRcdFx0XHRcdGJvcmRlcldpZHRoOiAxXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0b29sdGlwOiB7XG5cdFx0XHRcdFx0XHRoaWRlRGVsYXk6IDEwMCxcblx0XHRcdFx0XHRcdGZvcm1hdHRlcjogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnNlcmllcy5uYW1lID09IFwiaHNzcCBjdXJ2ZVwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYodGhpcy5zZXJpZXMubmFtZSA9PSBcIm51bWJlclwiKSB7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGJlbG93X29yX2Fib3ZlID0gdGhpcy5wb2ludC5pZDtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRpZih0aGlzLnBvaW50LmlkID09IDEpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGJlbG93X29yX2Fib3ZlID0gXCJhYm92ZVwiO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRiZWxvd19vcl9hYm92ZSA9IFwiYmVsb3dcIjtcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5wb2ludC55ICsgJyBwYWlycyBvZiBwcm90ZWlucyAnK2JlbG93X29yX2Fib3ZlKycgdGhlIGhzc3AgY3VydmU8YnIvPjxici8+PGk+Q2xpY2sgdG8gZG93bmxvYWQ8L2k+Jztcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gJzxiPkhTU1Agc2NvcmU6ICcrdGhpcy5wb2ludC5oc3NwX3Njb3JlLnRvRml4ZWQoMikrJzwvYj48YnIvPiUgc2VxdWVuY2UgaWRlbnRpdHk6ICcrdGhpcy5wb2ludC55LnRvRml4ZWQoMikrJzxici8+bnVtYmVyIG9mIGFsaWduZWQgcmVzaWR1ZXM6ICcrdGhpcy5wb2ludC54LnRvRml4ZWQoMik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRcdFx0c2VyaWVzOiBkYXRhXG5cdFx0XHR9KTtcblx0XHRcdGdyYXBoID0gcGxhY2Vob2xkZXIuaGlnaGNoYXJ0cygpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGluaXRpYWxpc2UoKXtcblx0XHRcdG1heF9zZXF1ZW5jZV9hbGlnbm1lbnRfbGVuZ3RoID0gMDtcblx0XHRcdCQoXCIjZnJvbVwiKS52YWwobWluX2hzc3Bfc2NvcmUpO1xuXHRcdFx0JChcIiN0b1wiKS52YWwobWF4X2hzc3Bfc2NvcmUpO1xuXHRcdFx0ZnJvbSA9IG1pbl9oc3NwX3Njb3JlO1x0XG5cdFx0XHR0byA9IG1heF9oc3NwX3Njb3JlO1xuXHRcdFx0ZmV0Y2hEYXRhKCk7XG5cdFx0XHRkYXRhID0galF1ZXJ5LmV4dGVuZCh0cnVlLCBbXSwgb3JpZ2luYWxfZGF0YSk7XG5cdFx0XHRwbG90SHNzcEN1cnZlKGZhbHNlKTtcblx0XG5cdFx0XHRyZWZyZXNoRG93bmxvYWRhYmxlQ29udGVudChmYWxzZSk7XG5cdFx0XHRwbG90UG9pbnRzKCk7XG5cdFx0fVxuXG5cdFx0Lypcblx0XHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0VGhpcyBtZXRob2QgcmVmcmVzaGVzIHRoZSB2aXN1YWxpc2F0aW9uIGJhc2VkIG9uIHRoZSBpbnB1dCBmaWVsZHMuIEl0IGZpcnN0IGV4dHJhY3RzIHRoZSBkYXRhIGFuZCB0aGVuIHBsb3RzIGl0IHRvIHRoZSBncmFwaCxcblx0XHRcdE11bHRpcGxlIGRhdGEgYXJlIGFsbG93ZWQgdG8gYmUgcGxvdGVkIG92ZXIgdGhlIHNhbWUgZ3JhcGhcblx0XHQqL1xuXHRcdGZ1bmN0aW9uIHJlbG9hZERhdGEoKXtcblx0XHRcdC8vIFRoZSBkYXRhIGlzIGFscmVhZHkgdGhlcmUsIGZpbmQgYW5kIHJlZnJlc2ggYmFzZWQgb24gdGhlIG5ldyBtaW4gYW5kIG1heCBoc3NwIHNjb3JlXG5cdFx0XHR2YXIgaHNzcF9jdXJ2ZTtcblx0XHRcdC8vIEZpbmQgYW5kIHN0b3JlIGhzc3AgY3VydmVcblx0XHRcdGZvcih2YXIgaSA9IGRhdGEubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdFx0aWYoZGF0YVtpXS5uYW1lID09PSBcImhzc3AgY3VydmVcIikge1xuXHRcdFx0XHQgICBoc3NwX2N1cnZlID0gZGF0YVtpXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZGF0YSA9IGpRdWVyeS5leHRlbmQodHJ1ZSwgW10sIG9yaWdpbmFsX2RhdGEpO1xuXHRcdFx0ZGF0YS5wdXNoKGhzc3BfY3VydmUpO1xuXHRcdFx0cmVmcmVzaERvd25sb2FkYWJsZUNvbnRlbnQodHJ1ZSk7XG5cdFx0XHRmb3IodmFyIGkgPTA7IGk8IGRhdGEubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHRpZihncmFwaC5zZXJpZXNbaV0ubmFtZSAhPSBcImhzc3AgY3VydmVcIiAmJiBncmFwaC5zZXJpZXNbaV0ubmFtZSAhPSBcIm51bWJlclwiKXtcblx0XHRcdFx0XHRncmFwaC5zZXJpZXNbaV0uc2V0RGF0YShkYXRhW2ldLmRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvL3Bsb3QgPSAkLnBsb3QocGxhY2Vob2xkZXIsIGNob2ljZXMsIG9wdGlvbnMpO1xuXHRcdH1cblx0XHRmdW5jdGlvbiBtYWtlVGV4dEZpbGUodGV4dCkge1xuXHRcdFx0dmFyIGRhdGEgPSBuZXcgQmxvYihbdGV4dF0sIHt0eXBlOiAndGV4dC9wbGFpbid9KTtcblx0XHRcdC8vIHJldHVybnMgYSBVUkwgeW91IGNhbiB1c2UgYXMgYSBocmVmXG5cdFx0XHRyZXR1cm4gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZGF0YSk7XG5cdFx0fTtcblxuXHRcdHZhciBhYm92ZVVybDtcblx0XHR2YXIgYmVsb3dVcmw7XG5cblx0XHRmdW5jdGlvbiByZWZyZXNoRG93bmxvYWRhYmxlQ29udGVudChyZWZyZXNoR3JhcGgpe1xuXHRcdFx0dmFyIGJlbG93WmVybyA9IDA7XG5cdFx0XHR2YXIgYWJvdmVaZXJvID0gMDtcblx0XHRcdHZhciBiZWxvd1plcm9EYXRhID0gXCJcIjtcblx0XHRcdHZhciBhYm92ZVplcm9EYXRhID0gXCJcIjtcblx0XHRcdHZhciBwcmV2X2hpdF9hYm92ZV9pZCA9IFwiXCI7XG5cdFx0XHR2YXIgcHJldl9oaXRfYmVsb3dfaWQgPSBcIlwiO1xuXHRcdFx0dmFyIGhlYWRlckluZm8gPSAgICBcIiMgSElUIC0gTmFtZSBvZiBhIEJMQVNUIEhpdFxcclxcblwiICtcblx0XHRcdFx0XHRcdFx0XHRcIiMgSURFIC0gUGVyY2VudCBpZGVudGl0eSBpbiBhbGlnbm1lbnRcXHJcXG5cIiArXG5cdFx0XHRcdFx0XHRcdFx0XCIjIExBTEkgLSBMZW5ndGggb2YgYWxpZ25tZW50LCBleGNsdWRpbmcgZ2Fwc1xcclxcblwiICtcblx0XHRcdFx0XHRcdFx0XHRcIiMgSFNTUCAtIEhTU1AtRGlzdGFuY2UgdXNpbmcgZm9ybXVsYSBmcm9tIEIuIFJvc3QncyBIU1NQLVBhcGVyIDE5OTlcXHJcXG5cIiArXG5cdFx0XHRcdFx0XHRcdFx0XCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcXHJcXG5cIiArXG5cdFx0XHRcdFx0XHRcdFx0XCIjIFBhcmFtZXRlcnM6XFxyXFxuXCI7XG5cdFx0XHRcdFx0XHRcblx0XHRcdGFib3ZlWmVyb0RhdGEgKz0gICAgXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcXHJcXG5cIiArXG5cdFx0XHRcdFx0XHRcdFx0XCIjIFBhaXJzIG9mIFByb3RlaW5zIHdpdGggaHNzcCBzY29yZSBncmVhdGVyIHRoZW4gdGhlIGhzc3AgY3VydmVcXHJcXG5cIiArXG5cdFx0XHRcdFx0XHRcdFx0aGVhZGVySW5mbyArIFxuXHRcdFx0XHRcdFx0XHRcdFwiIyBNaW5pbXVtIEhTU1AgU2NvcmU6XCIgKyAoaHNzcF9jdXJ2ZV9kaXN0YW5jZSoxMDApLnRvRml4ZWQoMikgKyBcIlxcclxcblwiICtcblx0XHRcdFx0XHRcdFx0XHRcIiMgTWF4aW11bSBIU1NQIFNjb3JlOlwiICsgdG8gKyBcIlxcclxcblwiOztcblx0XHRcdGJlbG93WmVyb0RhdGEgKz0gICAgXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcXHJcXG5cIiArXG5cdFx0XHRcdFx0XHRcdFx0XCIjIFBhaXJzIG9mIFByb3RlaW5zIHdpdGggaHNzcCBzY29yZSBsb3dlciB0aGVuIHRoZSBoc3NwIGN1cnZlXFxyXFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRcdGhlYWRlckluZm8gK1xuXHRcdFx0XHRcdFx0XHRcdFwiIyBNaW5pbXVtIEhTU1AgU2NvcmU6XCIgKyBmcm9tICsgXCJcXHJcXG5cIiArXG5cdFx0XHRcdFx0XHRcdFx0XCIjIE1heGltdW0gSFNTUCBTY29yZTpcIiArIChoc3NwX2N1cnZlX2Rpc3RhbmNlKjEwMCkudG9GaXhlZCgyKSArIFwiXFxyXFxuXCI7O1xuXHRcblx0XHRcdGZvcih2YXIgaSA9IGRhdGEubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdFx0aWYoZGF0YVtpXS5uYW1lICE9IFwiaHNzcCBjdXJ2ZVwiKXtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdHZhciBpdGVyYXRpb25IZWFkZXIgPVwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXFxyXFxuXCIgKyBcblx0XHRcdFx0XHRcdFx0XHRcdFx0IFwiI1E6IFwiICsgZGF0YVtpXS5pdGVyYXRpb25fbmFtZSArIFwiXFxyXFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcXHJcXG5cIiArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBcIkhJVCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJREUgICAgICAgICBMQUxJICAgICAgICAgICAgSFNTUFxcclxcblwiO1xuXHRcdFx0XHRcdHZhciBpdGVyYXRpb25IYXNBYm92ZSA9IDA7XG5cdFx0XHRcdFx0dmFyIGl0ZXJhdGlvbkhhc0JlbG93ID0gMDtcblx0XHRcdFx0XHR2YXIgdmFsdWVzID0gZGF0YVtpXS5kYXRhO1xuXHRcdFx0XG5cdFx0XHRcdFx0Zm9yKHZhciBqID0gdmFsdWVzLmxlbmd0aCAtIDE7IGogPj0gMDsgai0tKSB7XG5cdFx0XHRcdFx0XHQvLyBpZiB3ZSBoYXZlIGEgbWluIGFuZCBtYXggaHNzcCBzY29yZSAoZmV0Y2hlZCBmcm9tIGFsbCB0aGUgYWxpZ25tZW50cyksIGNoZWNrIGZvciBmaWx0ZXJzXG5cdFx0XHRcdFx0XHR2YXIgaHNzcF9zY29yZSA9IHZhbHVlc1tqXS5oc3NwX3Njb3JlO1xuXHRcdFx0XHRcdFx0aWYoaHNzcF9zY29yZSA8IGZyb20gfHwgaHNzcF9zY29yZSA+IHRvKXtcblx0XHRcdFx0XHRcdFx0dmFsdWVzLnNwbGljZShqLCAxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2V7XG5cdFx0XHRcdFx0XHRcdHZhciBJRCA9IHZhbHVlc1tqXS5pZDtcblx0XHRcdFx0XHRcdFx0d2hpbGUoSUQubGVuZ3RoIDwgNDMpe1xuXHRcdFx0XHRcdFx0XHRcdElEICs9IFwiIFwiO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHZhciBwZXJjZW50YWdlID0gdmFsdWVzW2pdLnkudG9GaXhlZCgyKSAgKyBcIlwiO1xuXHRcdFx0XHRcdFx0XHR3aGlsZShwZXJjZW50YWdlLmxlbmd0aCA8IDEyKXtcblx0XHRcdFx0XHRcdFx0XHRwZXJjZW50YWdlICs9IFwiIFwiO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdHZhciBhbGlnbm1lbnRfbGVuZ3RoID0gdmFsdWVzW2pdLnggICsgXCJcIjtcblx0XHRcdFx0XHRcdFx0d2hpbGUoYWxpZ25tZW50X2xlbmd0aC5sZW5ndGggPCAxNil7XG5cdFx0XHRcdFx0XHRcdFx0YWxpZ25tZW50X2xlbmd0aCArPSBcIiBcIjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR2YXIgbmV3TGluZSA9IElEICsgcGVyY2VudGFnZSArIGFsaWdubWVudF9sZW5ndGggKyBoc3NwX3Njb3JlLnRvRml4ZWQoMikgKyBcIlxcclxcblwiO1xuXHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0aWYoaHNzcF9zY29yZT49IChoc3NwX2N1cnZlX2Rpc3RhbmNlKjEwMCkpe1xuXHRcdFx0XHRcdFx0XHRcdGFib3ZlWmVybysrO1xuXHRcdFx0XHRcdFx0XHRcdGlmKGl0ZXJhdGlvbkhhc0Fib3ZlID09IDApe1xuXHRcdFx0XHRcdFx0XHRcdFx0YWJvdmVaZXJvRGF0YSArPSBpdGVyYXRpb25IZWFkZXI7XG5cdFx0XHRcdFx0XHRcdFx0XHRpdGVyYXRpb25IYXNBYm92ZSsrO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRhYm92ZVplcm9EYXRhICs9IG5ld0xpbmU7XG5cdFx0XHRcdFx0XHRcdFx0Ly9hYm92ZVplcm9EYXRhLnB1c2godmFsdWVzW2pdWzNdKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRlbHNle1xuXHRcdFx0XHRcdFx0XHRcdGJlbG93WmVybysrO1xuXHRcdFx0XHRcdFx0XHRcdGlmKGl0ZXJhdGlvbkhhc0JlbG93ID09IDApe1xuXHRcdFx0XHRcdFx0XHRcdFx0YmVsb3daZXJvRGF0YSArPSBpdGVyYXRpb25IZWFkZXI7XG5cdFx0XHRcdFx0XHRcdFx0XHRpdGVyYXRpb25IYXNCZWxvdysrO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRiZWxvd1plcm9EYXRhICs9IG5ld0xpbmU7XG5cdFx0XHRcdFx0XHRcdFx0Ly9iZWxvd1plcm9EYXRhLnB1c2godmFsdWVzW2pdWzNdKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dmFyIHBpZV9kYXRhID1be1xuXHRcdFx0XHRcdFx0bmFtZTogJyMgYWJvdmUgSFNTUCBDdXJ2ZScsXG5cdFx0XHRcdFx0XHRpZDogMSxcblx0XHRcdFx0XHRcdHk6IGFib3ZlWmVybyxcblx0XHRcdFx0XHRcdGNvbG9yOiBIaWdoY2hhcnRzLmdldE9wdGlvbnMoKS5jb2xvcnNbMF1cblx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRuYW1lOiAnIyBiZWxvdyBIU1NQIEN1cnZlJyxcblx0XHRcdFx0XHRcdGlkOiAyLFxuXHRcdFx0XHRcdFx0eTogYmVsb3daZXJvLFxuXHRcdFx0XHRcdFx0Y29sb3I6IEhpZ2hjaGFydHMuZ2V0T3B0aW9ucygpLmNvbG9yc1sxXSAvLyBKb2huJ3MgY29sb3Jcblx0XHRcdFx0XHR9XTtcblx0XHRcdHZhciBwaWUgPSB7XG5cdFx0XHRcdFx0dHlwZTogJ3BpZScsXG5cdFx0XHRcdFx0bmFtZTogXCJudW1iZXJcIixcblx0XHRcdFx0XHRkYXRhOiBwaWVfZGF0YSxcblx0XHRcdFx0XHRjZW50ZXI6IFsyMCwgJy0yMiUnXSxcblx0XHRcdFx0XHRzaXplOiA3MCxcblx0XHRcdFx0XHRzaG93SW5MZWdlbmQ6IGZhbHNlLFxuXHRcdFx0XHRcdGRhdGFMYWJlbHMgOntcblx0XHRcdFx0XHRcdGVuYWJsZWQ6IGZhbHNlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRldmVudHM6e1xuXHRcdFx0XHRcdFx0Y2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0XHRcdFx0XHRcdGlmKGV2ZW50LnBvaW50LmlkID09IDEpe1xuXHRcdFx0XHRcdFx0XHRcdHZhciBhYm92ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm92ZScpO1xuXHRcdFx0XHRcdFx0XHRcdGFib3ZlLmNsaWNrKCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0ZWxzZXtcblx0XHRcdFx0XHRcdFx0XHR2YXIgYmVsb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmVsb3cnKTtcblx0XHRcdFx0XHRcdFx0XHRiZWxvdy5jbGljaygpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0ZGF0YS5wdXNoKHBpZSk7XG5cdFx0XHRpZihyZWZyZXNoR3JhcGgpe1xuXHRcdFx0XHRmb3IodmFyIGkgPTA7IGk8IGdyYXBoLnNlcmllcy5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdFx0aWYoZ3JhcGguc2VyaWVzW2ldLm5hbWUgPT0gcGllLm5hbWUpe1xuXHRcdFx0XHRcdFx0Z3JhcGguc2VyaWVzW2ldLnNldERhdGEocGllX2RhdGEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dmFyIGFib3ZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3ZlJyk7XG5cdFxuXHRcdFx0Ly9SZXZva2UgcHJldmlvdXMgdXJsc1xuXHRcdFx0d2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwoYWJvdmVVcmwpO1xuXHRcdFx0d2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwoYmVsb3dVcmwpO1xuXHRcblx0XHRcdGFib3ZlVXJsID0gbWFrZVRleHRGaWxlKGFib3ZlWmVyb0RhdGEpO1xuXHRcblx0XHRcdGFib3ZlLmhyZWYgPSBhYm92ZVVybDtcblx0XHRcdC8vYWJvdmUuaHJlZiA9IG1ha2VUZXh0RmlsZShKU09OLnN0cmluZ2lmeShhYm92ZVplcm9EYXRhKSk7XG5cdFx0XHR2YXIgYmVsb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmVsb3cnKTtcblx0XHRcdC8vYmVsb3cuaHJlZiA9IG1ha2VUZXh0RmlsZShKU09OLnN0cmluZ2lmeShiZWxvd1plcm9EYXRhKSk7XG5cdFx0XHRiZWxvd1VybCA9IG1ha2VUZXh0RmlsZShiZWxvd1plcm9EYXRhKTtcblx0XHRcdGJlbG93LmhyZWYgPSBiZWxvd1VybDtcblx0XG5cdFx0XHQkKCBcIiNiZWxvd1wiICkuaHRtbChcIkRvd25sb2FkIFwiICsgYmVsb3daZXJvICsgXCIgcGFpcnMgb2YgcHJvdGVpbnMgYmVsb3cgdGhlIGhzc3AgY3VydmVcIik7XG5cdFx0XHQkKCBcIiNhYm92ZVwiICkuaHRtbChcIkRvd25sb2FkIFwiICsgYWJvdmVaZXJvICsgXCIgcGFpcnMgb2YgcHJvdGVpbnMgYWJvdmUgdGhlIGhzc3AgY3VydmVcIik7XG5cdFx0fVxuXG5cdFx0Lypcblx0XHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0VGhpcyBmdW5jdGlvbiBwbG90cyB0aGUgaHNzcGN1cnZlIG92ZXIgdGhlIGRhdGEgZXh0cmFjdGVkIGZyb20gdGhlIGlucHV0LlxuXHRcdCovXG5cdFx0ZnVuY3Rpb24gcGxvdEhzc3BDdXJ2ZShyZWZyZXNoR3JhcGgpe1xuXHRcdFx0dmFyIHZhbHVlcyA9IFtdO1xuXHRcblx0XHRcdC8vIFRPRE86IGNoYW5nZSAwLTYwMCBiYXNlZCBvbiB0aGUgYWxpZ25lZCBzZXF1ZW5jZXNcblx0XHRcdGZvcihMID0gMDsgTCA8PSBtYXhfc2VxdWVuY2VfYWxpZ25tZW50X2xlbmd0aDsgTCs9OCl7XG5cdFx0XHRcdHZhciBwYWlyID0gW107XG5cblx0XHRcdFx0Ly8gQ2FsY3VsYXRpbmcgUElEIGJhc2VkIG9uIEwgLSBudW1iZXIgb2YgcmVzaWR1ZXMgYWxpZ25lZCBcblx0XHRcdFx0dmFyIFBJRCA9IDA7XG5cdFx0XHRcdGlmKEwgPD0xMSl7XG5cdFx0XHRcdFx0cGFpci5wdXNoKEwpO1xuXHRcdFx0XHRcdFBJRCA9IDEgKyBoc3NwX2N1cnZlX2Rpc3RhbmNlXG5cdFx0XHRcdFx0cGFpci5wdXNoKFBJRCoxMDApO1xuXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZihMIDw9IDQ1MCl7XG5cdFx0XHRcdFx0dmFyIFBJRCA9ICgoNDgwICogTWF0aC5wb3coTCwgLTAuMzIqKDEgKyBNYXRoLmV4cCgtTC8xMDAwKSkpKS8xMDApICsgaHNzcF9jdXJ2ZV9kaXN0YW5jZTtcblx0XHRcdFx0XHRcdHBhaXIucHVzaChMKTtcblx0XHRcdFx0XHRcdHBhaXIucHVzaChQSUQqMTAwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNle1xuXHRcdFx0XHRcdHBhaXIucHVzaChMKTtcblx0XHRcdFx0XHRQSUQgPSAwLjE5NSArIGhzc3BfY3VydmVfZGlzdGFuY2U7XG5cdFx0XHRcdFx0cGFpci5wdXNoKFBJRCoxMDApO1xuXHRcdFx0XHR9XG5cdFx0XG5cdFx0XHRcdGlmKCFQSUQgPCAxLjApe1xuXHRcdFx0XHRcdHZhbHVlcy5wdXNoKHBhaXIpO1x0XHRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dmFyIHJlc3VsdCA9IHt9O1xuXHRcdFx0cmVzdWx0Lm5hbWUgPSBcImhzc3AgY3VydmVcIjtcblx0XHRcdHJlc3VsdC5kYXRhID0gdmFsdWVzO1xuXHRcdFx0cmVzdWx0LmxpbmVXaWR0aCA9IDIsXG5cdFx0XHRyZXN1bHQubWFya2VyID0ge3JhZGl1czogMH07XG5cdFx0XHRyZXN1bHQucG9pbnRTdGFydCA9IDA7XG5cdFx0XHRkYXRhLnB1c2gocmVzdWx0KTtcblx0XHRcdGlmKHJlZnJlc2hHcmFwaCl7XG5cdFx0XHRcdGZvcih2YXIgaSA9MDsgaTwgZ3JhcGguc2VyaWVzLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0XHRpZihncmFwaC5zZXJpZXNbaV0ubmFtZSA9PSByZXN1bHQubmFtZSl7XG5cdFx0XHRcdFx0XHRncmFwaC5zZXJpZXNbaV0uc2V0RGF0YSh2YWx1ZXMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIHhtbCB0byBzdHJpbmcgaGVscGVyIG1ldGhvZFxuXHRcdGZ1bmN0aW9uIHhtbFRvU3RyaW5nKHhtbERhdGEpIHsgXG5cdFx0XHR2YXIgeG1sU3RyaW5nO1xuXHRcdFx0Ly9JRVxuXHRcdFx0aWYgKHdpbmRvdy5BY3RpdmVYT2JqZWN0KXtcblx0XHRcdFx0eG1sU3RyaW5nID0geG1sRGF0YS54bWw7XG5cdFx0XHR9XG5cdFx0XHQvLyBjb2RlIGZvciBNb3ppbGxhLCBGaXJlZm94LCBPcGVyYSwgZXRjLlxuXHRcdFx0ZWxzZXtcblx0XHRcdFx0eG1sU3RyaW5nID0gKG5ldyBYTUxTZXJpYWxpemVyKCkpLnNlcmlhbGl6ZVRvU3RyaW5nKHhtbERhdGEpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHhtbFN0cmluZztcblx0XHR9ICAgXG5cblx0XHQvKlxuXHRcdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRQYXJzZSB0aGUgaW5wdXQgZnJvbSB0aGUgdGV4dCBmaWVsZCBhbmQgc3RvcmUgdGhlIGRhdGEgaW50byBhIGRhdGEgdmFyaWFibGUgd2hpY2ggd2lsbCBiZSB1c2VkIGxhdGVyIHRvIHBsb3Rcblx0XHQqL1xuXHRcdGZ1bmN0aW9uIGZldGNoRGF0YSgpe1xuXG5cdFx0XHRvcmlnaW5hbF9kYXRhID0gW107XG5cdFx0XHR2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KHgyanMueG1sX3N0cjJqc29uKCQoXCIjeG1sQXJlYVwiKS52YWwoKSkpO1xuXHRcdFx0JChcIiNqc29uQXJlYVwiKS52YWwoanNvbik7XG5cdFx0XHRqc29uID0galF1ZXJ5LnBhcnNlSlNPTihqc29uKTtcblx0XHRcdHZhciByZXN1bHQgPSBqc29uLkJsYXN0T3V0cHV0LkJsYXN0T3V0cHV0X2l0ZXJhdGlvbnM7XG5cdFx0XHR2YXIgaSA9IDE7XG5cdFx0XHRpZigkLmlzQXJyYXkocmVzdWx0Lkl0ZXJhdGlvbikpe1xuXHRcdFx0XHQkLmVhY2gocmVzdWx0Lkl0ZXJhdGlvbiwgZnVuY3Rpb24oa2V5LCBpdGVyYXRpb24pe1xuXHRcdFx0XHRcdGZldGNoSXRlcmF0aW9uKGl0ZXJhdGlvbiwgaSk7XG5cdFx0XHRcdFx0aSsrO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRmZXRjaEl0ZXJhdGlvbihyZXN1bHQuSXRlcmF0aW9uLCBpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBmZXRjaEl0ZXJhdGlvbihpdGVyYXRpb24sIGlkKXtcblx0XHRcdHZhciBsYWJlbCA9IGl0ZXJhdGlvbltcIkl0ZXJhdGlvbl9xdWVyeS1kZWZcIl07XG5cdFx0XHR2YXIgaGl0cyA9IGl0ZXJhdGlvbi5JdGVyYXRpb25faGl0cy5IaXQ7XG5cdFxuXHRcdFx0dmFyIHZhbHVlcyA9IFtdO1xuXHRcdFx0aWYoJC5pc0FycmF5KGhpdHMpKXtcblx0XHRcdFx0JC5lYWNoKGhpdHMsIGZ1bmN0aW9uKGtleSwgaXRlcmF0aW9uSGl0KSB7XG5cdFx0XHRcdC8vZGlzcGxheSB0aGUga2V5IGFuZCB2YWx1ZSBwYWlyXG5cdFx0XHRcdFx0dmFyIGhzcCA9IGl0ZXJhdGlvbkhpdC5IaXRfaHNwcy5Ic3A7XG5cdFx0XHRcdFx0dmFyIG9wdGltYWxfcGFpciA9IGZldGNoUGFpckZyb21Ic3AoaXRlcmF0aW9uSGl0LCBoc3ApO1xuXHRcdFx0XHRcdGlmKCFqUXVlcnkuaXNFbXB0eU9iamVjdChvcHRpbWFsX3BhaXIpKXtcblx0XHRcdFx0XHRcdHZhbHVlcy5wdXNoKG9wdGltYWxfcGFpcik7XG5cdFx0XHRcdFx0fVx0XG5cdFx0XHRcdH0pO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHZhciBoc3AgPSBoaXRzLkhpdF9oc3BzLkhzcDtcblx0XHRcdFx0dmFyIG9wdGltYWxfcGFpciA9IGZldGNoUGFpckZyb21Ic3AoaGl0cywgaHNwKTtcblx0XHRcdFx0aWYoIWpRdWVyeS5pc0VtcHR5T2JqZWN0KG9wdGltYWxfcGFpcikpe1xuXHRcdFx0XHRcdHZhbHVlcy5wdXNoKG9wdGltYWxfcGFpcik7XG5cdFx0XHRcdH1cdFxuXHRcdFx0fVxuXHRcblx0XHRcdHZhciByZXN1bHQgPSB7fTtcblx0XHRcdHJlc3VsdC5uYW1lID0gXCJJdGVyYXRpb24gXCIgKyBpZDtcblx0XHRcdHJlc3VsdC5pdGVyYXRpb25fbmFtZSA9IGxhYmVsO1xuXHRcdFx0cmVzdWx0LmRhdGEgPSB2YWx1ZXM7XG5cdFx0XHRyZXN1bHQudHlwZSA9IFwic2NhdHRlclwiO1xuXHRcdFx0cmVzdWx0Lm1hcmtlciA9IHtcblx0XHRcdFx0cmFkaXVzOiAyLFxuXHRcdFx0XHRzdGF0ZXM6IHtcblx0XHRcdFx0XHRob3Zlcjoge1xuXHRcdFx0XHRcdFx0ZW5hYmxlZDogdHJ1ZSxcblx0XHRcdFx0XHRcdGxpbmVDb2xvcjogJ3JnYigxMDAsMTAwLDEwMCknXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0cmVzdWx0LnNhdGF0ZXMgPSB7XG5cdFx0XHRcdGhvdmVyOiB7XG5cdFx0XHRcdFx0bWFya2VyOiB7XG5cdFx0XHRcdFx0XHRlbmFibGVkOiBmYWxzZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHJlc3VsdC5wb2ludFN0YXJ0ID0gMDtcblx0XHRcdG9yaWdpbmFsX2RhdGEucHVzaChyZXN1bHQpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGZldGNoUGFpckZyb21Ic3AoaGl0LCBoc3Ape1xuXHRcdFx0Ly8gRnJvbSB0aGUgYmxhc3Qgb3V0cHV0IHRoZXJlIGFyZSBjYXNlcyB3aGVyZSBvbmx5IDEgaGl0IHdhcyBmb3VuZCwgaW4gdGhhdCBjYXNlIGFuIG9iamVjdCB3aWxsIGJlIHBhcnNlZCBoZXJlIG90aGVyd2lzZSB0aGUgaGl0cyBhcmUgc3RvcmVkIGludG8gYW4gYXJyYXlcblx0XHRcdGlmKCQuaXNBcnJheShoc3ApKSB7XG5cdFx0XHRcdHZhciBoc3BzID0gW107XG5cdFx0XHRcdC8vIElmIHRoZXJlIGFyZSBtdWx0aXBsZSBoc3BzIHRoYW4gc2VsZWN0IHRoZSBvcHRpbWFsIG9uZVxuXHRcdFx0XHQkLmVhY2goaHNwLCBmdW5jdGlvbihrZXksIGhzcE9iamVjdCkge1xuXHRcdFx0XHRcdHZhciBwYWlyID0gZmV0Y2hIc3NwUGFpcihoaXQsIGhzcE9iamVjdCk7XG5cdFx0XHRcdFx0aWYoIWpRdWVyeS5pc0VtcHR5T2JqZWN0KHBhaXIpKXtcblx0XHRcdFx0XHRcdGhzcHMucHVzaChwYWlyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR2YXIgb3B0aW1hbF9oc3A7XG5cdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBoc3BzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYoalF1ZXJ5LmlzRW1wdHlPYmplY3Qob3B0aW1hbF9oc3ApKXtcblx0XHRcdFx0XHRcdG9wdGltYWxfaHNwID0gaHNwc1tpXTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihoc3BzW2ldLmhzc3Bfc2NvcmUgPiBvcHRpbWFsX2hzcC5oc3NwX3Njb3JlKSB7XG5cdFx0XHRcdFx0ICAgb3B0aW1hbF9oc3AgPSBoc3BzW2ldO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gb3B0aW1hbF9oc3A7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gZmV0Y2hIc3NwUGFpcihoaXQsIGhzcCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Lypcblx0XHRcdGlucHV0IHBhcmFtczpcblx0XHRcdFx0aXRlcmF0aW9uSGl0OiBvYmplY3Rcblx0XHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0VGhpcyBtZXRob2QgZXh0cmFjdHMgdGhlIGluZm9ybWF0aW9uIG5lZWRlZCBmb3IgcGxvdGluZyB0aGF0IGlzIHRoZSBwYWlyIG9mIG51bWJlciBvZiByZXNpZHVlcyBhbGlnbmVkIGFuZCBwZXJjZW50YWdlIG9mIHNlcXVlbmNlIHNpbWlsYXJpdHkgZXh0cmFjdGVkIGZyb20gdGhlIG9iamVjdHMgcmV0YWluZWQgZnJvbSB0aGUgeG1sIGlucHV0XG5cdFx0XHRvdXRwdXQ6IFxuXHRcdFx0XHRwYWlyOiBvZiBudW1iZXIgb2YgcmVzaWR1ZXMgYWxpZ25lZCBhbmQgcGVyY2VudGFnZSBvZiBzZXF1ZW5jZSBzaW1pbGFyaXR5XG5cdFx0Ki9cblx0XHRmdW5jdGlvbiBmZXRjaEhzc3BQYWlyKGl0ZXJhdGlvbkhpdCwgaHNwT2JqZWN0KXtcblxuXHRcdFx0dmFyIGxlbmd0aCA9IHBhcnNlSW50KGhzcE9iamVjdFtcIkhzcF9hbGlnbi1sZW5cIl0pIC0gaHNwT2JqZWN0LkhzcF9nYXBzO1xuXHRcdFx0dmFyIGhpdF9udW0gPSBpdGVyYXRpb25IaXQuSGl0X251bTtcblx0XHRcdHZhciBpZCA9IGl0ZXJhdGlvbkhpdC5IaXRfaWQ7XG5cdFx0XHR2YXIgbnVtYmVyX2FsaWduZWQgPSBwYXJzZUludChoc3BPYmplY3QuSHNwX2lkZW50aXR5KTtcblx0XG5cdFx0XHR2YXIgUElEID0gbnVtYmVyX2FsaWduZWQqMTAwL2xlbmd0aDtcblx0XHRcdHZhciBoc3NwX3Njb3JlID0gMDtcblx0XHRcdGlmKGxlbmd0aCA8PSAxMSl7XG5cdFx0XHRcdGhzc3Bfc2NvcmUgPSBQSUQgLSAxMDA7XG5cdFx0XHR9IGVsc2UgaWYobGVuZ3RoIDw9IDQ1MCl7XG5cdFx0XHRcdGhzc3Bfc2NvcmUgPSBQSUQgLSAoNDgwICogTWF0aC5wb3cobGVuZ3RoLCAtMC4zMiooMSArIE1hdGguZXhwKC1sZW5ndGgvMTAwMCkpKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRoc3NwX3Njb3JlID0gUElEIC0gMTkuNTtcblx0XHRcdH1cdFxuXHRcblx0XHRcdHZhciBwZXJjZW50YWdlID0gbnVtYmVyX2FsaWduZWQvbGVuZ3RoO1xuXG5cdFx0XHR2YXIgcGFpciA9IHt9O1xuXHRcdFx0aWYocGVyY2VudGFnZSA+IDEpe1xuXHRcdFx0XHRyZXR1cm4gcGFpcjtcblx0XHRcdH1cblx0XHRcdGlmKGxlbmd0aCA+IG1heF9zZXF1ZW5jZV9hbGlnbm1lbnRfbGVuZ3RoKXtcblx0XHRcdFx0bWF4X3NlcXVlbmNlX2FsaWdubWVudF9sZW5ndGggPSBsZW5ndGg7XG5cdFx0XHR9XG5cdFxuXHRcdFx0Ly8gV2UgZm9ybSBudW1iZXJfYWxpZ25lZCBpbiB0aGUgeCBheGlzIGFuZCBwZXJjZW50YWdlIGluIHkgYXhpc1xuXHRcdFx0cGFpci54ID0gcGFyc2VJbnQobGVuZ3RoKTtcblx0XHRcdHBhaXIueSA9IHBlcmNlbnRhZ2UqMTAwO1xuXHRcdFx0cGFpci5oc3NwX3Njb3JlID0gaHNzcF9zY29yZTtcblx0XHRcdHBhaXIuaWQgPSBpZDtcblx0XHRcdHJldHVybiBwYWlyO1xuXHRcdH1cblxuXHRcdC8qXG5cdFx0XHRpbnB1dCBwYXJhbXM6XG5cdFx0XHRcdHhtbDogeG1sX2ZpbGVcblx0XHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0VGhpcyBtZXRob2QgaGFuZGVscyB0aGUgb24gcmVjZWl2ZSBkYXRhIGZyb20gdGhlIGFqYXggZnVuY3Rpb24gdGhhdCB3aWxsIGxvYWQgYSBzYW1wbGUgaW5wdXQgb24gZmlyc3QgcnVuIGFuZCB0aGFuIGNhbGwgdGhlIHZpc3VhbGlzYXRpb25cblx0XHQqL1xuXHRcdGZ1bmN0aW9uIG9uRGF0YVJlY2VpdmVkKHhtbCkge1xuXG5cdFx0XHR2YXIgeG1sX3N0cmluZyA9IHhtbFRvU3RyaW5nKHhtbCk7XG5cdFx0XHQkKFwiI3htbEFyZWFcIikudmFsKHhtbF9zdHJpbmcpO1xuXHRcblx0XHRcdGluaXRpYWxpc2UoKTtcblx0XHR9XG5cblx0XHQvLyBDYWxsIGEgc2FtcGxlIGlucHV0IGRhdGEgbG9jYXRlZCB3aXRoaW4gdGhlIHJlcG9zaXRvcnkgb24gZmlyc3QgcnVuXG5cdFx0JC5hamF4KHtcblx0XHRcdHVybDogdGhpcy5kYXRhLFxuXHRcdFx0bWV0aG9kOiAnR0VUJyxcblx0XHRcdGRhdGFUeXBlOiAneG1sJyxcblx0XHRcdHN1Y2Nlc3M6IG9uRGF0YVJlY2VpdmVkXG5cdFx0fSk7XG5cblx0XHR2YXIgeDJqcyA9IG5ldyBYMkpTKCk7XG5cdFx0Lypcblx0XHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0Q2xpY2sgSGFuZGxlciBmb3IgdGhlIEV4dHJhY3QgR3JhcGggYnV0dG9uXG5cdFx0Ki9cblx0XHQkKFwiI3Nob3dfZ3JhcGhcIikuY2xpY2soZnVuY3Rpb24oKXtcblx0XHRcdGluaXRpYWxpc2UoKTtcblx0XHR9KTtcblxuXG5cdFx0Lypcblx0XHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0Q2xpY2sgSGFuZGxlciBmb3IgdGhlIEZpbHRlciBidXR0b24gd2hpY2ggZmlsdGVycyB0aGUgZ3JhcGggYmFzZWQgb24gdGhlIHJhbmdlIG9mIHZhbHVlcyAoZnJvbS10bylcblx0XHQqL1xuXHRcdC8vICQoXCIjZmlsdGVyX2dyYXBoXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdC8vIFx0ZnJvbSA9ICQoXCIjZnJvbVwiKS52YWwoKTtcblx0XHQvLyBcdHRvID0gJChcIiN0b1wiKS52YWwoKTtcblx0XHQvLyBcdHJlbG9hZERhdGEoKTtcblx0XHQvLyB9KTtcblxuXHRcdGZ1bmN0aW9uIGZpbHRlcl9ncmFwaCgpe1xuXHRcdFx0ZnJvbSA9ICQoXCIjZnJvbVwiKS52YWwoKTtcblx0XHRcdHRvID0gJChcIiN0b1wiKS52YWwoKTtcblx0XHRcdHJlbG9hZERhdGEoKTtcblx0XHR9XG5cblx0XHQvKlxuXHRcdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRPbiBtb3VzZSBtb3ZlIGhhbmRsZXMgd2hpY2ggd3JpdGVzIHRoZSB2YWx1ZSBvZiB0aGUgc2xpZGVyIG9uIHRoZSBuZXh0IGh0bWwgZWxlbWVudCAoYSBzcGFuKVxuXHRcdCovXG5cdFx0JCgnI2hzc3BfY3VydmVfZGlzdGFuY2UnKS5tb3VzZW1vdmUoZnVuY3Rpb24oKSB7XG5cdFx0XHQkKFwiI3JhbmdlX3ZhbHVlXCIpLmh0bWwocGFyc2VJbnQoJCh0aGlzKS52YWwoKSkpO1xuXHRcdH0pO1xuXG5cdFx0Lypcblx0XHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0T24gY2hhbmdlIGV2ZW50IGhhbmRsZXIgd2hpY2ggd3JpdGVzIHRoZSB2YWx1ZSBvZiB0aGUgc2xpZGVyIG9uIHRoZSBuZXh0IGh0bWwgZWxlbWVudCAoYSBzcGFuKSxcblx0XHRcdHNhdmUgdGhlIG5ldyB2YWx1ZSBmb3IgdGhlIGhzc3AgY3VydmUgZGlzdGFuY2UgYW5kIHJlZnJlc2hlcyB0aGUgdmlzdWFsaXphdGlvbi5cblx0XHQqL1xuXHRcdCQoJyNoc3NwX2N1cnZlX2Rpc3RhbmNlJykuY2hhbmdlKGZ1bmN0aW9uKCkge1xuXHRcdFx0JCh0aGlzKS5uZXh0KCkuaHRtbChwYXJzZUludCgkKHRoaXMpLnZhbCgpKSk7XG5cdFxuXHRcdFx0aHNzcF9jdXJ2ZV9kaXN0YW5jZSA9ICQodGhpcykudmFsKCkvMTAwO1xuXHRcblx0XHRcdGRhdGEgPSBqUXVlcnkuZXh0ZW5kKHRydWUsIFtdLCBvcmlnaW5hbF9kYXRhKTtcblx0XHRcdHBsb3RIc3NwQ3VydmUodHJ1ZSk7XG5cdFx0XHRyZWZyZXNoRG93bmxvYWRhYmxlQ29udGVudCh0cnVlKTtcblx0XHRcdC8vZm9yKHZhciBpID0wOyBpPCBkYXRhLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0Ly9ncmFwaC5zZXJpZXNbaV0udXBkYXRlKGRhdGFbaV0pO1xuXHRcdFx0Ly99XG5cdFx0fSk7XG5cblx0XHQkKFwiOmZpbGVcIikuZmlsZXN0eWxlKCk7XG5cblx0XHRcdCQoIFwiI3NsaWRlci1yYW5nZVwiICkuc2xpZGVyKHtcblx0XHRcdCAgcmFuZ2U6IHRydWUsXG5cdFx0XHQgIG1pbjogLTkwLFxuXHRcdFx0ICBtYXg6IDgwLjUsXG5cdFx0XHQgIHZhbHVlczogWyAtOTAsIDgwLjUgXSxcblx0XHRcdCAgc2xpZGU6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG5cdFx0XHRcdFx0JChcIiNmcm9tXCIpLnZhbCh1aS52YWx1ZXNbIDAgXSk7XG5cdFx0XHRcdFx0JChcIiN0b1wiKS52YWwodWkudmFsdWVzWyAxIF0pO1x0ICBcdFx0XG5cdFx0XHRcdFx0ZmlsdGVyX2dyYXBoKCk7XG5cdFx0XHQgIH1cblx0XHRcdH0pO1xuXHRcblx0XHQkKCcjdG8nKS5rZXl1cChmdW5jdGlvbiAoKSB7IFxuXG5cdFx0XHR2YXIgdG8gPSAkKFwiI3RvXCIpLnZhbCgpO1xuXHRcdFx0aWYodG8gPiA4MC41KXtcblx0XHRcdFx0JChcIiN0b1wiKS52YWwoODAuNSk7XG5cdFx0XHR9XG5cdFx0XHRmaWx0ZXJfZ3JhcGgoKTsgXG5cdFxuXHRcdH0pO1xuXHRcdCQoJyNmcm9tJykua2V5dXAoZnVuY3Rpb24gKCkgeyBcblxuXHRcdFx0dmFyIGZyb20gPSAkKFwiI2Zyb21cIikudmFsKCk7XG5cdFx0XHRpZihmcm9tIDwgLTkwKXtcblx0XHRcdFx0JChcIiNmcm9tXCIpLnZhbCgtOTApO1xuXHRcdFx0fVxuXHRcdFx0ZmlsdGVyX2dyYXBoKCk7IFxuXHRcdH0pO1x0XG5cblx0ICBcblx0XHRmdW5jdGlvbiBlcmFzZVRleHQoKXtcblx0XHRcdCQoXCIjeG1sQXJlYVwiKS52YWwoXCJcIik7XHRcblx0XHR9XG5cdH07XG5cbn07IC8vIGNsb3NpbmcgdGhlIGNvbnN0cnVjdG9yXG5cbm1vZHVsZS5leHBvcnRzID0gaHNzcGN1cnZlOyAiXX0=
