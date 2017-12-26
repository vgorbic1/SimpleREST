/**
 * SimpleREST Library
 * Library for making HTTP requests
 * Using AJAX and callbacks
 **/

function simpleREST() {
  this.http = new XMLHttpRequest();
}

/***************
 * GET request *
 **************/
simpleREST.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function() {
    // since we don't use the arrow (=>) here, we need 
    // to provide the correct scope for 'this'. It is
    // better to make an extra variable and assign 'this'
    // to that variable. In this case 'self' variable is used.
    if (self.http.status === 200)
      // below, error is the first argument and the response is the second:
      callback(null, console.log(self.http.responseText));
    else
      callback('Error: ' + self.http.status);
  }

  this.http.send();
}


/****************
 * POST request *
 ***************/
simpleREST.prototype.post = function(url, payload, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(payload))
}


/***************
 * PUT request *
 **************/
simpleREST.prototype.put = function(url, payload, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(payload))
}


/******************
 * DELETE request *
 *****************/
simpleREST.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200)
      callback(null, 'Post Successfully Deleted');
    else
      callback('Error: ' + self.http.status);
  }

  this.http.send();
}