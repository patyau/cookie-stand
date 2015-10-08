function CookieStand(shortName, fullName, minCustHour, maxCustHour, avgCookiesCust, manager) {
	this.shortName = shortName;
	this.fullName = fullName;
	this.minCustHour = minCustHour;
	this.maxCustHour = maxCustHour;
	this.avgCookiesCust = avgCookiesCust;
	this.manager = manager;

	this.hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
	this.totalCookiesHour = [];
	this.totalValue = 0;

	this.randCustHour = function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
	};	

	this.addTotals = function(rowNum) {
		var table = document.getElementById('table');
		var row = document.createElement('tr');
		table.appendChild(row);
		var tdLoc = document.createElement('td');
		tdLoc.textContent = this.fullName;
		row.appendChild(tdLoc);

		for(var i = 0; i < this.hours.length; i++) {
			this.totalCookiesHour[i] = Math.floor(this.randCustHour() * this.avgCookiesCust);
			this.totalValue += this.totalCookiesHour[i];
			console.log(this.fullName + ' ' + this.hours[i] + ': ' + this.totalCookiesHour[i]);
			console.log(this.fullName + ' Running Total: ' + this.totalValue);

			var td2 = document.createElement('td');
			td2.textContent = this.totalCookiesHour[i];
			row.appendChild(td2);
		}
		var total = document.createElement('td');
		var totalSum = total.appendChild(document.createTextNode(this.totalValue));
		row.appendChild(total);
	};
};

var pike = new	CookieStand('pike', 'Pike Place Market', 17, 88, 5.2, 'Pat');
var seaTac = new CookieStand('seatac', 'SeaTac Airport', 6, 44, 1.2, 'Russell');
var southCenter = new CookieStand('southCenter', 'Southcenter Mall', 11, 38, 1.9, 'Henry');
var bellSquare = new CookieStand('bell', 'Bellevue Square', 20, 48, 3.3, 'Daryl');
var alki = new CookieStand('alki', 'Alki', 3, 24, 2.6, 'David');

pike.addTotals(1);
seaTac.addTotals(2);
southCenter.addTotals(3);
bellSquare.addTotals(4);
alki.addTotals(5);
