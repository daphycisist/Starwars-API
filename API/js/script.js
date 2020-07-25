const div = document.getElementById('actors'); // Get the list where we will place our authors
const url = 'https://swapi.dev/api/people/?results'; // Get 10 random users

const createActors = actor => document.createElement(actor); // Create the type of element you pass in the parameters

const appendActor = (parent, el) => parent.appendChild(el); // Append the second parameter(element) to the first one

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        let actors = data.results;
        return actors.map((actor, index) => {
            let imageUrl = `https://picsum.photos/200?=${index}`;

            let image = createActors('img');
            let user = createActors('div');
            user.id = `${index + 1}`
            let name = createActors('p');
            image.src = imageUrl;
            name.innerHTML = `${actor.name}`;

            appendActor(div, user);
            appendActor(user, image);
            appendActor(user, name);
        })
    })





    