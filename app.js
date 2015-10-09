function CookieStand(standLoc, minCustHour, maxCustHour, avgCookiesCust) {
	this.standLoc = standLoc;
	this.minCustHour = minCustHour;
	this.maxCustHour = maxCustHour;
	this.avgCookiesCust = avgCookiesCust;
	this.cookiesPerhour = [];
	this.cookiesPerDay = 0;

	this.randCustHour = function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
	};	
	
	this.findCookiesPerHour = function() {
		var hourly = 0;
		hourly = Math.floor(this.randCustHour() * this.avgCookiesCust);
		this.cookiesPerhour.push(hourly);
		return hourly;
	};

	this.findCookiesPerDay = function() {
		var dailyCookies = 0;
		for(var i = 0; i < 8; i++) {
		dailyCookies += this.findCookiesPerHour();
		}	
	this.cookiesPerDay = dailyCookies;
	return dailyCookies;
	};

	this.findCookiesPerDay();

	function makeTable(standLoc, cookiesPerhour, cookiesPerDay) {
		var table = document.getElementById('table');
		var row = document.createElement('tr');
		table.appendChild(row);
		var tdLoc = document.createElement('td');
		tdLoc.textContent = standLoc;
		row.appendChild(tdLoc);

		for(var i = 0; i < cookiesPerhour.length; i++) {
			var tdData = document.createElement('td');
			tdData.textContent = cookiesPerhour[i];
			row.appendChild(tdData);
		}
		var tdTotal = document.createElement('td');
		tdTotal.textContent = cookiesPerDay;
		row.appendChild(tdTotal);
	};
	makeTable(this.standLoc, this.cookiesPerhour, this.cookiesPerDay);
};

var pike = new	CookieStand('Pike Place Market', 17, 88, 5.2);
var seaTac = new CookieStand('SeaTac Airport', 6, 44, 1.2);
var southCenter = new CookieStand('Southcenter Mall', 11, 38, 1.9);
var bellSquare = new CookieStand('Bellevue Square', 20, 48, 3.3);
var alki = new CookieStand('Alki', 3, 24, 2.6);

var storeSubmit = function(e) {
	e.preventDefault();
	var loc = document.getElementById('loc');
	var minCust = document.getElementById('minCust');
	var maxCust = document.getElementById('maxCust');
	var avgCookies = document.getElementById('avgCookies');

	if (!loc.value || !minCust.value || !maxCust.value || !avgCookies.value) {
		alert('Please enter a value for all fields.');
	} else if (isNaN(minCust.value) || isNaN(maxCust.value) || isNaN(avgCookies.value)) {
		alert('Please enter number values for min/max cust and avg cookies fields.');
	} else if (minCust.value > maxCust.value) {
		alert('Please make sure the min cust field is a smaller number than the max cust field.')
	} else {
		var newStand = new CookieStand(loc.value, minCust.value, maxCust.value, avgCookies.value);

		console.log(loc.value);
		console.log(minCust.value);
		console.log(maxCust.value);
		console.log(avgCookies.value);

		loc.value = '';
		minCust.value = '';
		maxCust.value = '';
		avgCookies.value = '';
	}
};

var addStore = document.getElementById('addStore');
addStore.addEventListener('click', storeSubmit);
