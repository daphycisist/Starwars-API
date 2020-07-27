import { User } from "../modules/User.js";

let imageUrl = ['./img/Luke-Skywalker.jpg', './img/C-3PO.jpg', './img/R2-D2.jpg', './img/Darth-Vader.jpg', './img/Leia-Organa.jpg', './img/Owen-Lars.jpeg', './img/Beru-Lars.jpeg', './img/R5-D4.jpeg', './img/Biggs-Darklighter.jpeg', './img/Obi-Wan-Kenobi.jpeg'];

const div = document.getElementById("actors"); // Get the div where we will place our authors
const url = "https://swapi.dev/api/people/"; // API to fetch data from

const createActors = (actor) => document.createElement(actor);
const appendActor = (parent, el) => parent.appendChild(el);

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let actors = data.results; //Get all actors data
    
   
    return actors.map((actor, index) => {
      let actorsInfos = new User(actor)
      let actorInfo = actorsInfos.actorDetails
      console.log(actorInfo);
      let image = createActors("img");
      let person = createActors("div");
      person.classList.add('actor-detail')
      let name = createActors("p");
      name.classList.add('actor-name');
      image.src = imageUrl[index];
      name.innerHTML = `${actor.name}`; //Populate our HTML with each person's name

      appendActor(div, person);
      appendActor(person, image);
      appendActor(person, name);

      name.onclick = () => {
        let actor_content = document.querySelector('.actor-content')
        let article = document.querySelector('.display-actor-info')
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
        let closeBtn = document.querySelector('.close')
        closeBtn.onclick = () => {
          actor_content.style.display = 'none'
        } 
      }
    });
  });
