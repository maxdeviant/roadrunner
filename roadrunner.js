$(document).ready(function() {
	var snippet = '';
	
	var users, headers;
	
	$.ajax({
		url: 'data/users.json',
		dataType: 'json',
		async: false,
		success: function(data) {
			users = data;
		}
	});
	
	$.ajax({
		url: 'data/status.json',
		dataType: 'json',
		async: false,
		success: function(data) {
			headers = data;
		}
	});
	
	for (var i = 0; i < users.length; i++) {
		snippet += '<tr><td>' + (i + 1) + '</td><td><a href="' + users[i].url + '">' + users[i].user + '</a></td><td class="status">' + headers[i].status + '</td></tr>';
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

/*function loadData() {
	$.ajax({
		url: 'data/users.json',
		dataType: 'json',
		async: false,
		success: function(data) {
			users = data;
		}
	});
	
	$.ajax({
		url: 'data/status.json',
		dataType: 'json',
		async: false,
		success: function(data) {
			headers = data;
		}
	});
};*/

/*function getUrls(users) {
	var data = [];
	
	for (var i = 0; i < users.length; i++) {
		data.push( {
			user: users[i],
			url: "http://roadrunner.cs.wcupa.edu/~" + users[i]
		});
	}
	
	return data;
};*/