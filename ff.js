function sendRequests(url, count) {
    for (let i = 0; i < count; i++) {
      fetch(url)
        .then(response => response.text())
        .then(data => console.log(`Response ${i + 1}:`, data))
        .catch(error => console.error(`Error in request ${i + 1}:`, error));
    }
  }
  
  const url = 'https://map-location-example-app-bd2f962ae4ed.herokuapp.com/?ip=105.158.186.21';
  const requestCount = 1000;
  
  sendRequests(url, requestCount);
  