import { User } from "../modules/User.js";


const div = document.getElementById("actors"); // Get the div where we will place our authors
const url = "https://swapi.dev/api/people/"; // API to fetch data from

const createActors = (actor) => document.createElement(actor);
const appendActor = (parent, el) => parent.appendChild(el);

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let actors = data.results; //Get all actors data
    
   
    // console.log(user);
    return actors.map((actor, index) => {
      let actorsInfos = new User(actor)
      // console.log(actorsInfos);
      let actorInfo = actorsInfos.actorDetails
      console.log(actorInfo);
      
      
      let imageUrl = `https://picsum.photos/200?=${index}`; //Get random images for each actor's data
      let image = createActors("img");
      let person = createActors("div");
      person.id = `${index + 1}`; //Give each person a unique id
      let name = createActors("p");
      image.src = imageUrl;
      name.innerHTML = `${actor.name}`; //Populate our HTML with each person's name

      appendActor(div, person);
      appendActor(person, image);
      appendActor(person, name);

      name.onclick = () => {
        let actor_content = document.querySelector('.actor-content')
        actor_content.style.display = 'block';


        let article = document.querySelector('.display-actor-info')
        article.innerHTML = `
          <p>${actorInfo.name}</p>
          <p>${actorInfo.gender}</p>
          <p>${actorInfo.height}</p>
          <img src='${imageUrl}'></img>
          <button class="close">&times;</button>
        `  
        // let actor_content = document.querySelector('.actor_content')
        // actor_content.style.display = 'block';
        let closeBtn = document.querySelector('.close')
        closeBtn.onclick = (e) => {
          actor_content.style.display = 'none'
        } 
      }
    });
  });
