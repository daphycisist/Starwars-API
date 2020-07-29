//import User class 
import { User } from "../modules/User.js";

//Static image paths to populate actor details 
const imageUrl = [
  './img/Luke-Skywalker.jpg',
  './img/C-3PO.jpg', 
  './img/R2-D2.jpg', 
  './img/Darth-Vader.jpg', 
  './img/Leia-Organa.png', 
  './img/Owen-Lars.jpeg', 
  './img/Beru-Lars.jpeg', 
  './img/R5-D4.jpeg', 
  './img/Biggs-Darklighter.jpeg', 
  './img/Obi-Wan-Kenobi.jpeg',
];

// API to fetch data from
const url = "https://swapi.dev/api/people/"; 

// Functions to create actor models 
const createActors = (actor) => document.createElement(actor);
const appendActor = (parent, el) => parent.appendChild(el);

//Fetch Function
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    
    //Get all actors data
    const actors = data.results; 
    
    // Loop through the API and append data to index page
    return actors.map((actor, index) => {
      const div = document.getElementById("actors"); 
      const actorsInfos = new User(actor);
      const actorInfo = actorsInfos.actorDetails;
      const image = createActors("img");
      const person = createActors("div");
      const name = createActors("p");

      person.classList.add('actor-detail');
      name.classList.add('actor-name');
      image.src = imageUrl[index];

      //Populate our HTML with each person's name
      name.innerHTML = `${actor.name}`; 

      
      appendActor(div, person);
      appendActor(person, image);
      appendActor(person, name);
      
      // Click function which populates the selected data into the modal
      person.onclick = () => {
        const actor_content = document.querySelector('.actor-content');
        const article = document.querySelector('.display-actor-info');
        actor_content.style.display = 'block';
        article.innerHTML = `
        <div class="actor-img">
          <img src='${image.src}'></img>
        </div>
        <div class="actor-info">
          <p>Name: ${actorInfo.name}</p>
          <p>Gender: ${actorInfo.gender}</p>
          <p>Height: ${actorInfo.height}</p>
        </div>
          <button class="close">&times;</button>
        `  
        // Add close button for modal display
        const closeBtn = document.querySelector('.close');
        closeBtn.onclick = () => {
          actor_content.style.display = 'none'
        } 
      }
    });
  })
  .catch(error => {
    console.log(error);
  });
