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
async function gotHouses() {
    // Refer to the json file
    const data = await fetch("houses.json");
    console.log(data);

    // Get the data from the json file
    const response = await data.json();
    console.log(response);
    console.log(response["House Stark"]["Jon Snow"].title);
    console.log(response["House Targaryen"]["Daenerys Targaryen"].title);
    // Follow the structure of the data, naming each step
    // Like navigating folders
    // Use ".word" to refer to specific keys

    const houseStarkData = response["House Stark"];
    console.log(houseStarkData);
    // Set up variables that refer to specific data as needed

    const jonSnow = houseStarkData["Jon Snow"];
    console.log(jonSnow);

    // Refer to data in other ways, make new arrays with data from json
    const houses = {
        houseStark: response["House Stark"],
        houseTargaryen: response["Targaryen"]
    };
    console.log(houses);
};

gotHouses();