async function getDadJoke() {
    const response = await fetch("https://icanhazdadjoke.com/", { headers : {
        Accept: "application/json" 
    }})
    const data = await response.json();
    console.log(data.joke);
}

getDadJoke();

// I used icanhazdadjoke api which sends you a Random Dad Joke : https://icanhazdadjoke.com/api
