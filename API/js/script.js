import { User } from "../modules/User.js";


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
      
      
      let imageUrl = ['./img/TheMandalorian-Logo.jpg', './img/stars-bcg.jpg', './img/masked-soldiers.jpg']

      // let imageUrl = `https://picsum.photos/200?=${index}`; //Get random images for each actor's data
      let image = createActors("img");
      let person = createActors("div");
      person.classList.add('actor-detail')
      // person.id = `${index + 1}`; //Give each person a unique id
      let name = createActors("p");
      name.classList.add('actor-name');
      // name.style.cursor = 'pointer'
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
          <img src='${imageUrl}'></img>
        </div>
        <div class="actor-info">
          <p>Name: ${actorInfo.name}</p>
          <p>Gender: ${actorInfo.gender}</p>
          <p>Height: ${actorInfo.height}</p>
        </div>
          <button class="close">&times;</button>
        `  
        let closeBtn = document.querySelector('.close')
        closeBtn.onclick = (e) => {
          actor_content.style.display = 'none'
        } 
      }
    });
  });
