
fetch('https://swapi.dev/api/')
  .then(function (response) {
    // The API call was successful!
    console.log(response);
    return response.json()
  }).then(data =>{
    console.log(data);
  })
  .catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });
 // console.log(x);
