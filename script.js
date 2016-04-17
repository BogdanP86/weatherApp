$(document).ready(function() {

	$('#name').bind('keypress', function(e){
			if (e.keyCode == 13){
				var city = $('#name').val();
				var xmlhttp = new XMLHttpRequest();
			    var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=0852f3cb86e27442c9b4b6d311f67f52";
			     	
			     
			    xmlhttp.onreadystatechange = function() {
			         	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			     	        myData = JSON.parse(xmlhttp.responseText);
			     	        init(myData);
			        		}
			    };
			    xmlhttp.open("GET", url, true);
			    xmlhttp.send();
			}
	});

	$('#btn').click(function() {
		var city = $('#name').val();
		var xmlhttp = new XMLHttpRequest();
	    var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=0852f3cb86e27442c9b4b6d311f67f52";
	     	
	     
	    xmlhttp.onreadystatechange = function() {
	         	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	     	        myData = JSON.parse(xmlhttp.responseText);
	     	        init(myData);
	        		}
	    };
	    xmlhttp.open("GET", url, true);
	    xmlhttp.send();

	});

	function addIcon(){
		var weatherId;

		$('#weather-icon').html('');

		if((myData.weather[0].id >= 200) && (myData.weather[0].id <300)){
			weatherId = "<img src='http://openweathermap.org/img/w/11d.png'>";
			$('#weather-icon').append(weatherId);
		}else if((myData.weather[0].id >= 300) && (myData.weather[0].id <500)){
					weatherId = "<img src='http://openweathermap.org/img/w/09d.png'>";
					$('#weather-icon').append(weatherId);

				}else if((myData.weather[0].id >= 500) && (myData.weather[0].id <600)){
							weatherId = "<img src='http://openweathermap.org/img/w/10d.png'>";
							$('#weather-icon').append(weatherId);
						}else if (myData.weather[0].id == 800){
							weatherId = "<img src='http://openweathermap.org/img/w/01d.png'>";
							$('#weather-icon').append(weatherId);
						}else if (myData.weather[0].id == 801){
							weatherId = "<img src='http://openweathermap.org/img/w/02d.png'>";
							$('#weather-icon').append(weatherId);
						}else if ((myData.weather[0].id == 802) || (myData.weather[0].id == 803)){
							weatherId = "<img src='http://openweathermap.org/img/w/03d.png'>";
							$('#weather-icon').append(weatherId);
						}else if (myData.weather[0].id == 804){
							weatherId = "<img src='http://openweathermap.org/img/w/04d.png'>";
							$('#weather-icon').append(weatherId);
						}
		}
     
	function init (){
		/* show div */

		$('#weather-div').css("display","block");
		/* sky state */ 

		var cloudiness = myData.clouds.all;
		var state = myData.weather[0].description;
		$('#sky-state').html(state);
		

		/* Temperature */

		/*var maxtemp = (myData.main.temp_max-273.5).toFixed(1);
		var mintemp = (myData.main.temp_min-273.5).toFixed(1);*/
		var curr_temp = (myData.main.temp-273.15).toFixed(1);
		$('#temp').html(curr_temp+"&deg C");
		$('#temp').css("font-size","2em");
		/*$('#max-temp').html("Max Temp: "+maxtemp+"&deg C");
		$('#min-temp').html("Min Temp: "+mintemp+"&deg C");*/

		/* Weather Data */

		var humidity = myData.main.humidity; 
		var wind = myData.wind.speed;
		var pressure = myData.main.pressure;

		$('#humidity').html("Humidity: "+humidity+"%");
		$('#wind').html("Wind Speed: "+wind+" m/s");
		$('#pressure').html("Pressure "+pressure+" hPa");

		addIcon();
	}	


});