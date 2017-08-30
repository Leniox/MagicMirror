/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "imperial",

	modules: [
		// {
		// 	module: 'MMM-GoogleMapsTraffic',
		// 	position: 'middle_center',
		// 	config: {
		// 		key: 'AIzaSyA_OHG3nzTjRN3W0C129yUQUJRiUD7o7x8',
		// 		lat: 36.819038,
        //         lng: -76.274940,
		// 		height: '800px',
		// 		width: '800px'
		// 	}
		// },
	
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_right"
		},
		{
			module: "calendar",
			header: "Your Calendar",
			position: "top_left",
			config: {
				calendars: [
					{
						//preforming
						symbol: "calendar-check-o",
						url: "webcal://p04-calendarws.icloud.com/ca/subscribe/1/uw1hB_a6JL-MdiIgOYbhBzQs0osBhbTDSu96BtU723ZvQODTdM5XBNuF-o7iiEKawUiyS1Qr0REz18olL-r9iNtnMy_3X_MkSE1goNq12Bg"
					},
					{
						//other
						symbol: "calendar-check-o ",
						url: "webcal://p04-calendars.icloud.com/published/2/cGKwWQt6zAbHZi0kTy-GSxrjwMDQ6cp9HQTXDXt6L6nISWV1iZCIycJb3IaBoq0FGfVIcjyJBBqppxdTLGdrVUl3MVCTDRSbpVPBZ_xTtMI"
					},
					{
						//TOI
						symbol: "calendar-check-o ",
						url: "webcal://p04-calendarws.icloud.com/ca/subscribe/1/thMGnuapDBb81SltZayVvnS-rrgptEgXHMoboZQQkB6S7qk2-WkBhJe5R5iQCtWlTpEuSogdvi41NLHk_1LrPMQG8i8EfUCtJUxJB5q7uM4"
					},
					{
						//Lessons
						symbol: "calendar-check-o ",
						url: "webcal://p04-calendarws.icloud.com/ca/subscribe/1/0OpQE0FRX6QC5TcV2aZo3v4OYeKjVFAgZhzgno9OvR-dnu9666eEuPKs3EfiXx3WdsYQOibfQpEub5hrKjKgQyiwYIs2V1ogxzRtYcYvT0Y"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "after_third"
		},
		{
			module: "currentweather",
			position: "bottom_right",
			config: {
				location: "Chesapeake",
				locationID: "4752186",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "6494c1dc3684fe4df24e40c78ba0dfdd"
			}
		},
		{
			module: "weatherforecast",
			position: "bottom_left",
			header: "Weather Forecast",
			config: {
				location: "Chesapeake",
				locationID: "4752186",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "6494c1dc3684fe4df24e40c78ba0dfdd"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					},
					{
						title: "BBC Top Stories",
						url: "http://feeds.bbci.co.uk/news/rss.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
