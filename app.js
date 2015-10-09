function CookieStand(shortName, fullName, minCustHour, maxCustHour, avgCookiesCust, manager) {
	this.shortName = shortName;
	this.fullName = fullName;
	this.minCustHour = minCustHour;
	this.maxCustHour = maxCustHour;
	this.avgCookiesCust = avgCookiesCust;
	this.manager = manager;

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

	function makeTable(fullName, cookiesPerhour, cookiesPerDay) {
		var table = document.getElementById('table');
		var row = document.createElement('tr');
		table.appendChild(row);
		var tdLoc = document.createElement('td');
		tdLoc.textContent = fullName;
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
	makeTable(this.fullName, this.cookiesPerhour, this.cookiesPerDay);
};

var pike = new	CookieStand('pike', 'Pike Place Market', 17, 88, 5.2, 'Pat');
var seaTac = new CookieStand('seatac', 'SeaTac Airport', 6, 44, 1.2, 'Russell');
var southCenter = new CookieStand('southCenter', 'Southcenter Mall', 11, 38, 1.9, 'Henry');
var bellSquare = new CookieStand('bell', 'Bellevue Square', 20, 48, 3.3, 'Daryl');
var alki = new CookieStand('alki', 'Alki', 3, 24, 2.6, 'David');















