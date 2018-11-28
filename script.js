$(document).ready(function() {
	//feed to parse
	var feed = "https://www.theverge.com/rss/frontpage";
	
	$.ajax(feed, {
		accepts:{
			xml:"application/rss+xml"
		},
		dataType:"xml",
		success:function(data) {

			$(data).find("item").each(function () { 
				var el = $(this);
				console.log("------------------------");
				console.log("title      : " + el.find("title").text());
				console.log("link       : " + el.find("link").text());
				console.log("description: " + el.find("description").text());
        console.log("image      : " + el.find("content").text());
			});
	

		}	
	});
	
});
