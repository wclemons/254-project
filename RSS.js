$(document).ready(function() {
	//feed to parse
	var feed = "http://news.google.com";
	
	$.ajax(feed, {
		accepts:{
			xml:"application/rss+xml"
		},
		dataType:"xml",
		success:function(data) {
	// write each article info into console, and feed this info into other script
			$(data).find("item").each(function () { // or "item" or whatever suits your feed
				var el = $(this);
				console.log("------------------------");
				console.log("title      : " + el.find("title").text());
				console.log("link       : " + el.find("link").text());
				console.log("description: " + el.find("description").text());
			});
	

		}	
	});
	
});