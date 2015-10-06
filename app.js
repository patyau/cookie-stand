// var list1 = document.getElementById('list1');

// function CookieStand(shortName, fullName, minCustHour, maxCustHour, avgCookiesCust, manager) {
// 	this.shortName = shortName;
// 	this.fullName = fullName
// 	this.minCustHour = minCustHour;
// 	this.maxCustHour = maxCustHour;
// 	this.avgCookiesCust = avgCookiesCust;
// 	this.manager = manager;

// 	this.hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
// 	this.totalCookiesHour = [];
// 	this.totalValue = 0;

// 	this.randCustHour = function() {
// 		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
// 	};
	
// 	this.makeUL = function() {
// 		for(var i = 0; i < this.hours.length; i++) {
// 			this.totalCookiesHour[i] = Math.floor(this.randCustHour() * this.avgCookiesCust);
// 			// var pikeList = document.getElementById('list1');
// 			// var item = document.createElement('li');
// 			// item.appendChild(document.createTextNode(this.hours[i] + ': ' + this.totalCookiesHour[i] + ' cookies'));
// 			// pikeList.appendChild(item);
// 			this.totalValue += this.totalCookiesHour[i];
// 			console.log(this.fullName + ' ' + this.hours[i] + ': ' + this.totalCookiesHour[i]);
// 			console.log(this.fullName + ' Running Total: ' + this.totalValue)
// 		};
// 		// var total = document.createElement('li');
// 		// total.appendChild(document.createTextNode('Total: ' + this.totalValue + ' cookies'));
// 		// pikeList.appendChild(total);
// 		// return pikeList;
// 	};

// 	/* Old Pike Place object */
// // var pikePlace = {
// 	// location: 'Pike Place Market',
// 	// minCustHour: 17,
// 	// maxCustHour: 88,
// 	// avgCookiesCust: 5.2, 
// 	// totalCookiesHour: [],
// 	// totalValue: 0,
// 	// hours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
// 	// randCustHour: function() {
// 	// 	return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
// 	// },
// 	// makeUL: function() {
// 	// 	for(var i = 0; i < this.hours.length; i++) {
// 	// 		this.totalCookiesHour[i] = Math.floor(this.randCustHour() * this.avgCookiesCust);
// 	// 		var pikeList = document.getElementById('list1');
// 	// 		var item = document.createElement('li');
// 	// 		item.appendChild(document.createTextNode(this.hours[i] + ': ' + this.totalCookiesHour[i] + ' cookies'));
// 	// 		pikeList.appendChild(item);
// 	// 		this.totalValue += this.totalCookiesHour[i];
// 	// 		// console.log(this.location + ' ' + this.hours[i] + ': ' + this.totalCookiesHour[i]);
// 	// 		// console.log(this.location + ' Running Total: ' + this.totalValue)
// 	// 	};
// 	// 	var total = document.createElement('li');
// 	// 	total.appendChild(document.createTextNode('Total: ' + this.totalValue + ' cookies'));
// 	// 	pikeList.appendChild(total);
// 	// 	return pikeList;
// 	// }

// };

// var pike = new	CookieStand('pike', 'Pike Place Market', 17, 88, 5.2, 'Pat');
// var seaTac = new CookieStand('seatac', 'SeaTac Airport', 6, 44, 1.2, 'Russell');
// var southCenter = new CookieStand('southCenter', 'Southcenter Mall', 11, 38, 1.9, 'Henry');
// var bellSquare = new CookieStand('bell', 'Bellevue Square', 10, 48, 3.3, 'Daryl');
// var alki = new CookieStand('alki', 'Alki', 3, 24, 2.6, 'David');

// pike.makeUL();
// seaTac.makeUL();
// southCenter.makeUL();
// bellSquare.makeUL();
// alki.makeUL();

var list1 = document.getElementById('list1');
var list1 = document.getElementById('list2');
var list1 = document.getElementById('list3');
var list1 = document.getElementById('list4');
var list1 = document.getElementById('list5');

var pikePlace = {
	location: 'Pike Place Market',
	minCustHour: 17,
	maxCustHour: 88,
	avgCookiesCust: 5.2, 
	totalCookiesHour: [],
	totalValue: 0,
	hours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
	randCustHour: function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
	},
	makeUL: function() {
		for(var i = 0; i < this.hours.length; i++) {
			this.totalCookiesHour[i] = Math.floor(this.randCustHour() * this.avgCookiesCust);
			var pikeList = document.getElementById('list1');
			var item = document.createElement('li');
			item.appendChild(document.createTextNode(this.hours[i] + ': ' + this.totalCookiesHour[i] + ' cookies'));
			pikeList.appendChild(item);
			this.totalValue += this.totalCookiesHour[i];
			// console.log(this.location + ' ' + this.hours[i] + ': ' + this.totalCookiesHour[i]);
			// console.log(this.location + ' Running Total: ' + this.totalValue)
		};
		var total = document.createElement('li');
		total.appendChild(document.createTextNode('Total: ' + this.totalValue + ' cookies'));
		pikeList.appendChild(total);
		return pikeList;
	}
};

pikePlace.makeUL();
console.log('Pike Place cookies by hour values: ' + pikePlace.totalCookiesHour);

var seaTac = {
	location: 'SeaTac Airport',
	minCustHour: 6,
	maxCustHour: 44,
	avgCookiesCust: 1.2, 
	totalCookiesHour: [],
	totalValue: 0,
	hours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
	randCustHour: function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
	},
	makeUL: function() {
		for(var i = 0; i < this.hours.length; i++) {
			this.totalCookiesHour[i] = Math.floor(this.randCustHour() * this.avgCookiesCust);
			var seaTacList = document.getElementById('list2');
			var item = document.createElement('li');
			item.appendChild(document.createTextNode(this.hours[i] + ': ' + this.totalCookiesHour[i] + ' cookies'));
			seaTacList.appendChild(item);
			this.totalValue += this.totalCookiesHour[i];
		};
		var total = document.createElement('li');
		total.appendChild(document.createTextNode('Total: ' + this.totalValue + ' cookies'));
		seaTacList.appendChild(total);
		return seaTacList;
	}

};

seaTac.makeUL();
console.log('SeaTac cookies by hour values: ' + seaTac.totalCookiesHour);

var southCenter = {
	location: 'Southcenter Mall',
	minCustHour: 11,
	maxCustHour: 38,
	avgCookiesCust: 1.9, 
	totalCookiesHour: [],
	totalValue: 0,
	hours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
	randCustHour: function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
	},
	makeUL: function() {
		for(var i = 0; i < this.hours.length; i++) {
			this.totalCookiesHour[i] = Math.floor(this.randCustHour() * this.avgCookiesCust);
			var southCenterList = document.getElementById('list3');
			var item = document.createElement('li');
			item.appendChild(document.createTextNode(this.hours[i] + ': ' + this.totalCookiesHour[i] + ' cookies'));
			southCenterList.appendChild(item);
			this.totalValue += this.totalCookiesHour[i];
		};
		var total = document.createElement('li');
		total.appendChild(document.createTextNode('Total: ' + this.totalValue + ' cookies'));
		southCenterList.appendChild(total);
		return southCenterList;
	}

};

southCenter.makeUL();
console.log('Southcenter cookies by hour values: ' + southCenter.totalCookiesHour);

var bellSquare = {
	location: 'Bellevue Square',
	minCustHour: 20,
	maxCustHour: 48,
	avgCookiesCust: 3.3, 
	totalCookiesHour: [],
	totalValue: 0,
	hours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
	randCustHour: function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
	},
	makeUL: function() {
		for(var i = 0; i < this.hours.length; i++) {
			this.totalCookiesHour[i] = Math.floor(this.randCustHour() * this.avgCookiesCust);
			var bellSquareList = document.getElementById('list4');
			var item = document.createElement('li');
			item.appendChild(document.createTextNode(this.hours[i] + ': ' + this.totalCookiesHour[i] + ' cookies'));
			bellSquareList.appendChild(item);
			this.totalValue += this.totalCookiesHour[i];
		};
		var total = document.createElement('li');
		total.appendChild(document.createTextNode('Total: ' + this.totalValue + ' cookies'));
		bellSquareList.appendChild(total);
		return bellSquareList;
	}

};

bellSquare.makeUL();
console.log('Bell Square cookies by hour values: ' + bellSquare.totalCookiesHour);

var alki = {
	location: 'Alki',
	minCustHour: 3,
	maxCustHour: 24,
	avgCookiesCust: 2.6, 
	totalCookiesHour: [],
	totalValue: 0,
	hours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
	randCustHour: function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
	},
	makeUL: function() {
		for(var i = 0; i < this.hours.length; i++) {
			this.totalCookiesHour[i] = Math.floor(this.randCustHour() * this.avgCookiesCust);
			var alkiList = document.getElementById('list5');
			var item = document.createElement('li');
			item.appendChild(document.createTextNode(this.hours[i] + ': ' + this.totalCookiesHour[i] + ' cookies'));
			alkiList.appendChild(item);
			this.totalValue += this.totalCookiesHour[i];
		};
		var total = document.createElement('li');
		total.appendChild(document.createTextNode('Total: ' + this.totalValue + ' cookies'));
		alkiList.appendChild(total);
		return alkiList;
	}

};

alki.makeUL();
console.log('Alki cookies by hour values: ' + alki.totalCookiesHour);


