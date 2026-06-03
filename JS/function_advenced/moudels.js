/*EX1__________________________________________________________*/

const StringFormatter = function() {

    const capitalizeFirst = function(str) {
        return str[0].toUpperCase() + str.slice(1)
    }

    const toSkewerCase = function(str) {
        return str.split(' ').join('-')
    }

    return {
        capitalizeFirst: capitalizeFirst,
        toSkewerCase: toSkewerCase
    }
}

const formatter = StringFormatter()
formatter.capitalizeFirst("dorothy") //should return Dorothy
formatter.toSkewerCase("blue box") //should return blue-box





/*EX1__________________________________________________________*/

const Bank = function (){

    let counter = 500;

    const deposit = function(money) {
        counter += money
    }
    const showBalance = function() {
        return console.log(counter)
    }

    return {
        deposit: deposit,
        showBalance: showBalance
    }
}



const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950



/*EX3__________________________________________________________*/


const SongsManager = function() {

    const _songs = {}

    const addSong = function(name, url) {
        _songs[name] = url.split("v=")[1]
    }

    const getSong = function(name) {
        return "https://www.youtube.com/watch?v=" + _songs[name]
    }

    return {
        addSong: addSong,
        getSong: getSong
    }
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.getSong("sax")  // https://www.youtube.com/watch?v=3JZ4pnNtyxQ