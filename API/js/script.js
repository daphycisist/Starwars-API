const ul = document.getElementById('actors'); // Get the list where we will place our authors
const url = 'https://swapi.dev/api/people/'; // Get 10 random users

const createActors = actor => document.createElement(actor); // Create the type of element you pass in the parameters

const appendActor = (parent, el) => parent.appendChild(el); // Append the second parameter(element) to the first one



fetch(url) // Transform the data into json
    .then((resp) => resp.json())
    .then(data => {
        let actors = data.results; // Get the results
        return actors.map(function (actor) { // Map through the results and for each run the code below
            let li = createActors('li'), //  Create the elements we need
                // img = createActors('img'),
                span = createActors('span');
            // img.src = author.picture.medium;  // Add the source of the image to be the src of the img element
            span.innerHTML = `${actor.name}`; // Make the HTML of our span to be the first and last name of our author
            // append(li, img); // Append all our elements
            appendActor(li, span);
            appendActor(ul, li);
        })
    })



    