// donate button directs to petfinder
function gotop() {
    window.open("https://petfinder.com");
}
//uses form info to get json data 
function getAnimals(animal, age, gender) {
    console.log(token);
    fetch(`https://api.petfinder.com/v2/animals?type=${animal}&age=${age}&location=12345&gender=${gender}&status=adoptable&distance=25`, {
      headers: {
        Authorization: `Bearer ${token.access_token}`
      }
    })
      .then(response => response.json())
      .then(responseJson => displayPets(responseJson))
      .catch(error => document.getElementById("results").innerHTML = error.message);
  }
  
  //JSON data retrieved from the API is rendered into  HTML//
    function displayPets(responseJson) {
    console.log(responseJson);
//   <div class = "row">
//             <div class = "column">
  //displays pet pics + their info in HTML//
  
    $('#results .row').html('');
    for(let i=0; i<responseJson.animals.length; i++) {
      for(let p=0; p<responseJson.animals[i].photos.length; p++) {
            $('#results .row').append(`
             <div class = "column unit">
            <h3>${responseJson.animals[i].name} </h3>
            <img src="${responseJson.animals[i].photos[p].small}" alt="pets" class="petImags">
            <p> ${responseJson.animals[i].size}-sized ${responseJson.animals[i].breeds.primary}</p>
            <a href="${responseJson.animals[i].url}" class="animalLink" target="_blank">Click to Learn More!</a> 
            </div>
            `);
   }
  }  
  }
  
  //on submit takes in values of pet vars
  function formStuff() {
    $('form').submit(event => {
      event.preventDefault();
      const animal = $('#petType').val();
      const age = $('#age').val();
      const gender = $('#gender').val();
      getAnimals(animal, age, gender);
    });
  }
  
  $(function () {
    formStuff();
  })

