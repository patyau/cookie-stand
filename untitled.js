var CookieStand = function(standLoc, minCust, maxCust, avgCookiePerCust) {
  this.standLoc = standLoc;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerCust = avgCookiePerCust;
  this.hour = [];
  this.cookieTotal = 0;

  this.randCustPerHour = function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  };
  this.totalCookiePerHour = function(){
    var total = 0;
    total = Math.floor (this.randCustPerHour() * this.avgCookiePerCust);
    this.hour.push(total);
    return total;
  };
  this.totalCookiePerDay = function() {
    var dailyCookies = 0;
    for (var i = 0; i < 8; i++) {
      dailyCookies += this.totalCookiePerHour();
      // console.log('Cookie count ' + dailyCookies);
    };
    // Store cookieTotal to be passed to html table
    this.cookieTotal = dailyCookies;
    return dailyCookies;
  };
  //called here so it adds values to the hour array and saves the total when an intance of the object is created
  this.totalCookiePerDay();

  function makeTable(loc, array, total) {
    //Make new table row with the name of the store
    var place = document.getElementById('sales');
    var row = document.createElement('tr');
    row.appendChild(document.createTextNode(loc));
    place.appendChild(row);

    //add random hourly numbers to table
    for(var i = 0; i < array.length; i++) {
        var hour = row;
        var data = document.createElement('td');
        data.appendChild(document.createTextNode(array[i]));
        hour.appendChild(data);
      };
    // Add total cookies to table
    var totalData = document.createElement('td');
    totalData.appendChild(document.createTextNode(total));
    hour.appendChild(totalData);
  }
  //call makeTable here to pass values to the html table when an instance of the object is created
  makeTable(this.standLoc, this.hour, this.cookieTotal);

  //even rows gets shaded
  var table = document.getElementById("sales");
  var rows = table.getElementsByTagName("tr");
  for(i = 0; i < rows.length; i++){
      if(i % 2 == 0){
          rows[i].className = "even";
      }
  };
}
//hard wired stores
var pikePlace = new CookieStand('Pike Place Markert', 17, 88, 5.2 );
var seaTac = new CookieStand('SeaTac Airport', 6, 44, 1.2 );
var southcenter = new CookieStand('Southcenter Mall', 11, 38, 1.9);
var bellSq = new CookieStand('Bellevue Square', 20, 48, 3.3);
var alki = new CookieStand('Alki Beach', 3, 24, 2.6);

// Start form/button area
var storeSubmit = function(e) {
  e.preventDefault();
  var storeLoc = document.getElementById('storeLoc');
  var minCust = document.getElementById('minCust');
  var maxCust = document.getElementById('maxCust');
  var avgCookies = document.getElementById('avgCookies');
  // check to see if all inputs have data
  if (!storeLoc.value || !minCust.value || !maxCust.value || !avgCookies.value ) {
      return alert('Please enter a value in each box');
  }
  //check that all inputs that should be numbers are really numbers
  else if (isNaN(minCust.value) || isNaN(maxCust.value) || isNaN(avgCookies.value)) {
      return alert('Please enter numbers in the boxes for Min/Max Customers and Average cookie per Customer');
  }
  //check the make sure min is smaller than max
  else if(minCust.value > maxCust.value){
    return alert('Please make sure the Minimum Customers is a smaller number than Maximum Customers');
  }
  else
  //here for debuging
  console.log('new store location = ' + storeLoc.value);
  console.log('min customers for ' + storeLoc.value +' = ' + minCust.value);
  console.log('max customers for ' + storeLoc.value +' = ' +maxCust.value);
  console.log('avg cookie per customer for ' + storeLoc.value +' = ' +avgCookies.value);
  //end debug
  var newstore = new CookieStand(storeLoc.value, minCust.value, maxCust.value, avgCookies.value);

  //clear all input boxes here to prevent duplicate stores on table
  storeLoc.value = null;
  minCust.value = null;
  maxCust.value = null;
  avgCookies.value = null;

};
var addButton = document.getElementById("addButton");
addButton.addEventListener('click', storeSubmit);
//end form/button area