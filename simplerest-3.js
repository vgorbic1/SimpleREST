/**
 * SimpleREST Library
 * Library for making HTTP requests
 * Using the Fetch API and async functions (ES7)
 **/

class SimpleREST {

  /**************
  * GET request *
  **************/
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }


  /***************
  * POST request *
  ***************/
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;  
  }


  /**************
  * PUT request *
  **************/
   async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });   
    const resData = await response.json();
    return resData;
  }


  /*****************
  * DELETE request *
  *****************/
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE'
    });
    const resData = await 'Resource Successfully Deleted...';
    return resData;
  }

 }
