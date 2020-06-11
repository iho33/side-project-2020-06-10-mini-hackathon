// Img

const getImg = () => {

    axios.get('http://shibe.online/api/shibes?count=100&urls=true&httpsUrls=true')
    .then(response => {
        console.log(response);

        postImg(response)
    });
    
}

getImg();

postImg = (response) => {
    let ranNum = Math.floor (Math.random() * 100)

    let img = document.querySelector("img");
    img.setAttribute("src", response.data[ranNum])
}

// clear old joke

const clearOldJoke = () => {
    let setup = document.querySelector(".joke__setup");
    setup.innerText = "";

    let punchline = document.querySelector(".joke__punchline");
    punchline.innerText = "";

}

clearOldJoke();

// Programming Joke

const getJoke = () => {
    axios.get("https://official-joke-api.appspot.com/jokes/programming/random")
    .then(res => {
        console.log(res);

        console.log(res.data[0].setup);

        postSetup(res);
        // postPunchline(res);

        setTimeout(postPunchline, 5000, res);

    })
} 

postSetup = (res) => {
    let setup = document.querySelector(".joke__setup");
    setup.innerHTML = res.data[0].setup;
}

postPunchline = (res) => {
    let punchline = document.querySelector(".joke__punchline");
    punchline.innerHTML = res.data[0].punchline;
}


// General Joke

const getGenJoke = () => {
    axios.get("https://official-joke-api.appspot.com/jokes/random")
    .then(res => {
        // console.log(res);

        // console.log(res.data.setup);

        postGenSetup(res);
        // postPunchline(res);

        setTimeout(postGenPunchline, 5000, res);

    })
} 

postGenSetup = (res) => {
    let setup = document.querySelector(".joke__setup");
    setup.innerHTML = res.data.setup;
}

postGenPunchline = (res) => {
    let punchline = document.querySelector(".joke__punchline");
    punchline.innerHTML = res.data.punchline;
}

let select = document.querySelector(".form__select");

select.addEventListener('change', (event) => {
    
    clearOldJoke();

    getImg();

    if (event.target.value === "Programming") {
        return getJoke();

    } else if (event.target.value === "General") {
        return getGenJoke();
    }
    
    console.log(event.target.value)
})
