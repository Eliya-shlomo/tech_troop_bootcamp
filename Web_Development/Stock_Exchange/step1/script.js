

class Model{

    constructor(){}
    async getData(value){
        const searchResponse = await fetch(`https://financialmodelingprep.com/stable/search-symbol?query=${value}&limit=10&apikey=WtKB5TSUJbVGntrakVVCNPSX5qIqGNji`)
        const Data           = await searchResponse.json()
        let nasdaqCompanies = []

        for(let i=0; i<Data.length;i++){
            if(nasdaqCompanies.length === 10){
                break
            }
            if(Data[i].exchange === "NASDAQ"){
                nasdaqCompanies.push(Data[i])
            }
        }
        return nasdaqCompanies
    }
}


class View{
    constructor(){
        this.model = new Model()
        this.init()
    }
    init(){

        let self = this
        const btnSearch = document.getElementById("search-button")

        btnSearch.onclick = async function(){
            const query = $("#search-input").val().trim();
            if(query === ""){return}

            $("#results-list").empty();
            $("#loading").removeClass("hidden");
            
            const results = await self.model.getData(query)

            $("#loading").addClass("hidden");

            for (let i = 0; i < results.length; i++) {
                const company = results[i];
                $("#results-list").append(`
                    <li class="result-item">
                        <a href="company.html?symbol=${company.symbol}" class="result-link">
                            <span class="company-name">${company.name}</span>
                            <span class="company-symbol">${company.symbol}</span>
                        </a>
                    </li>
                `);
            }

        }
    }
}

const app = new View();