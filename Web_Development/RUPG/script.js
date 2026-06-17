class Model {
    constructor(){}
    
    async aboutMe(){
        let bakonResponse = await fetch(`https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1`)
        let bakonData     = await bakonResponse.json()
        let aboutMe       = bakonData[0]
    
        return aboutMe
    }

    async PokemonRandom(){
        let randomNumber   = Math.floor(Math.random()*1025)
        let pokemonRespone = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`)
        let pokemonData    = await pokemonRespone.json()
        
        let pokemonName  = pokemonData.name 
        let pokemonImage = pokemonData.sprites.front_default
    
        let pokemon ={
            name : pokemonName,
            image: pokemonImage
        }
    
        return pokemon
    }

    async KanyeQuote(){
        let quoteResponse =  await fetch('https://api.kanye.rest')
        let quoteData     =  await quoteResponse.json()
        let quote         =  quoteData.quote
    
        return quote
    }

    async users(){
        let users = []
        let usersResponse = await fetch('https://randomuser.me/api/?results=7')
        let usersData     = await usersResponse.json()
        let usersArray = usersData.results
    
        let userFirstname = usersArray[0].name.first
        let userLastname = usersArray[0].name.last
        let userImage = usersArray[0].picture.medium
        let userCity  = usersArray[0].location.city
        let userState = usersArray[0].location.state
    
        let user = {
            userFirstname: userFirstname,
            userLastname: userLastname,
            userImage: userImage,
            userCity:  userCity,
            userState: userState
        }
    
        users.push(user)
        
        for(let i=1; i<7; i++){
    
                let userFirstname = usersArray[i].name.first
                let userLastname  = usersArray[i].name.last
    
                let user = {
                    userFirstname: userFirstname,
                    userLastname: userLastname,
                }
                users.push(user)
        }
    
        return users
    }

}


class view {
    constructor(){
        this.model = new Model()
        this.render()
    }

    async render(){
        let generateBtn = document.getElementById('generate-btn')
        let self = this

        generateBtn.onclick = async function(){
            const userData = await self.model.users();
            const quoteData = await self.model.KanyeQuote();
            const pokemonData = await self.model.PokemonRandom();
            const aboutData = await self.model.aboutMe();

            $("#friends-ul").empty();

            $("#user-img").attr("src", userData[0].userImage);
            $("#user-name").text(userData[0].userFirstname + " " + userData[0].userLastname);
            $("#user-location").text(userData[0].userCity + ", " + userData[0].userState);

            $("#quote-text").text(quoteData);
            $("#about-text").text(aboutData);

            $("#pokemon-img").attr("src", pokemonData.image);
            $("#pokemon-name").text(pokemonData.name);

            for (let i = 1; i < userData.length; i++) {
                const friend = userData[i];
                $("#friends-ul").append("<li>" + friend.userFirstname + " " + friend.userLastname + "</li>");
            }
        }
    }
}



let viewInstance = new view()
//