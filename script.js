/*const data = {
    houseStark: {
        Eddard: {
            nickname: "Ned",
            title: "Hand of the King",
        },

        Caitlyn: {
            nickname: "Cat",
            nickname: "",
        },

    }

    houseLannister {
        Tywin: {
            nickname: null,
        },
    }
};*/




// Async functions
// async function gotHouses() {
//     // Refer to the json file
//     const data = await fetch("houses.json");
//     console.log(data);

//     // Get the data from the json file
//     const response = await data.json();
//     console.log(response);
//     console.log(response["House Stark"]["Jon Snow"].title);
//     console.log(response["House Targaryen"]["Daenerys Targaryen"].title);
//     // Follow the structure of the data, naming each step
//     // Like navigating folders
//     // Use ".word" to refer to specific keys

//     const gotCharacters = document.querySelector("#gotCharacters");
//     gotCharacters.innerHTML = `
//     <h1>${response["House Stark"]["Jon Snow"].nickname}</h1>
//     <h3>${response["House Stark"]["Jon Snow"].alias}</h3>
//     <p>${response["House Stark"]["Jon Snow"].title}</p>
//     `;

// };

// gotHouses();

// SEE UPDATED CODE IN LESSON UPLOAD



//
//
//

async function catFacts() {
    const data = await fetch("https://catfact.ninja/facts");
    console.log(data);

    const response = await data.json();
    console.log(response);
    console.log(response.data);
    console.log(response.data[0]);
    console.log(response.data[0].fact);

    console.log("---------------For Loop Setup---------------");
    for( let index = 0; index < response.data.length; index++ ){
        console.log(response.data[index]);
    };

};

catFacts();