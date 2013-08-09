$(document).ready(function() {
	var snippet = '';
	
	getStatus(getUrls(users));
	//console.log(status);
	
	var headers;
	/*$.getJSON('data/status.json', function(result) {
		storeResponse(result);
	});*/
	
	loadData();
	
	for (var i = 0; i < users.length; i++) {
		snippet += '<tr><td>' + (i + 1) + '</td><td><a href="http://roadrunner.cs.wcupa.edu/~' + users[i] + '">' + users[i] + '</a></td><td class="status">' + headers[i].status + '</td></tr>';
	}
	
	$('#list').html(snippet);
	
	$('.status').each(function() {
		if ($(this).text() == 404) {
			$(this).parent().addClass('danger');
		} else if ($(this).text() == 200) {
			$(this).parent().addClass('success');
		}
	});
});

function saveData(data) {
	$.post('raw-save.php', {
		json: data,
	});
};

function loadData() {
	$.ajax({
		url: 'data/status.json',
		dataType: 'json',
		async: false,
		success: function(data) {
			headers = data;
		}
	});
};

function storeResponse(data) {
	status = data;
};

function getStatus(data) {
	$.post('status.php', {
		json: data,
	});
	
	/*$.ajax({
		async: false,
		url: 'status.php',
		data: {
			json: data
		},
		dataType: 'json'
	}).success(function(response) {
		return response;
	});*/
};

function getUrls(users) {
	var data = [];
	
	for (var i = 0; i < users.length; i++) {
		data.push( {
			user: users[i],
			url: "http://roadrunner.cs.wcupa.edu/~" + users[i]
		});
	}
	
	return data;
};

var users = [
	"NA817436", "OB779656", "WB794096", "AB808543", "DB807469", "NB741263", "JB758177", "JB817566", "JB754434", "MB783250", "BB813475", "JB746863", "JB747892", "MC792332", 			"CC795639", "TC787102", "KC806279", "JC793582", "MC718631", "JC784826", "CC782472", "TC807496", "CC800727", "JC739614", "CC769377", "EC789115",	"MC669756", "JC781291", 			"HD802925", "JD673791", "MD759021", "QD771737", "SD771118", "AD764300", "WD806316", "RD758882", "DD786278", "GD813109", "SE809333",	"NE743565", "DE778686", "TE738211", 			"EE760971", "JE779186", "NF059051", "DF786500", "DF807214", "ZF785263", "TF776899", "RF738835", "BG777440", "LG388954", "JG760827", "RG774284", "DG660178", "NG766393", 			"JG817532", "CG681003", "DG663999", "RG730128", "TG787744", "CH777928", "AH799592", "RH777983", "HH742896", "RH765766", "SH736349", "DH785892", "BH802338", "EH727104", 			"TH781110", "EH811985", "GH783347", "EH085160", "MH791763", "HH789717", "TH587660", "NH810826", "BH799257", "GI806858", "DK807913", "EI760839", "DJ756791", "KJ718031", 			"RJ795082", "JK687643", "MK815781", "JK632086", "SK796602", "AK687197", "SK792672", "KK800862", "RK798598", "BL817539", "FL681479", "JL736404", "ML657354", "PL815882", 			"DL817917", "CL766815", "MM739262", "JM746767", "WM818908", "GM678560", "CM807666", "MM759079", "MM799824", "JM816000", "JM813749", "RM769298", "RM780385", "RN778937", 			"JN805394", "AN754323", "JN788626", "MN777517", "CO793818",	"AO808779", "SO818465", "JO772381", "MO781246", "WO809896", "AP719516", "SP795723", "AP760000", "DP798424", 			"MP737418", "DP762562", "DP755341", "JP677654", "NP595992", "AP811368", "AP766187", "AR748055", "JR758322", "ER760480", "BR807112", "BR661281", "DR790353", "JR808134", 			"JR815647", "PS772461", "SS796353",	"CS798394", "DS783826", "CS742740", "MS760890", "CS801936", "KS809442", "ZS787370", "AS793452", "KS787376", "PS722793", "SS793890", 			"GS777361", "PS778606",	"AS665167", "RS804109", "LS794458", "GS784628", "JS816486", "RS768132", "MS771002", "JT799262", "PT809950", "MT337898", "AT813813", "BT747231", 			"JT751802", "PU763835", "PV751740", "AV798902", "MW772798", "JW786019", "JW811919", "MZ803562"
];