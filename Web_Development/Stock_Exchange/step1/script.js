

class Model{

    constructor(){}
    async getData(value){
        const searchResponse = await fetch(`https://financialmodelingprep.com/stable/search-symbol?query=${value}&apikey=WtKB5TSUJbVGntrakVVCNPSX5qIqGNji`)
        const Data           = await searchResponse.json()
        let nasdaqCompanies  = []

        for(let i=0; i<Data.length;i++){
            if(nasdaqCompanies.length === 10){
                break
            }
            if(Data[i].exchange === "NASDAQ"){
                nasdaqCompanies.push(Data[i])
            }
        }

        const symbolsArray  = nasdaqCompanies.map(company => company.symbol);
        const symbolsString = symbolsArray.join(',');
        const response      = await fetch(`https://financialmodelingprep.com/stable/company-profile?symbol=${symbolsString}&apikey=WtKB5TSUJbVGntrakVVCNPSX5qIqGNji`);
        const dataProfiles  = await response.json()

        const profiles      = dataProfiles.companyProfile || []

        const finalResults  = nasdaqCompanies.map(company => {
            const profile = profiles.find(p => p.symbol === company.symbol)
            
            return {
                name: company.name,
                symbol: company.symbol,
                image: profile ? profile.image : '', 
                changesPercentage: profile ? profile.changesPercentage : '0'
            }
        })

        return finalResults
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

                const change = parseFloat(company.changesPercentage);
                let color = "";
                let sign = "";
                
                if (change >= 0) {
                    color = "#22c55e"; 
                    sign = "+";
                } else {
                    color = "#ef4444"; 
                    sign = ""; 
                }
                $("#results-list").append(`
                    <li class="result-item">
                        <img class="company-image" src="${company.image}" alt="logo">
                        <a href="company.html?symbol=${company.symbol}" class="result-link">
                        <span class="company-name">${company.name}</span>
                        <span class="company-symbol">${company.symbol}</span>
                        <span class="company-change" style="color: ${color}">${sign}${change}%</span>
                    </li>
                `);
            }

        }
    }


}

const app = new View();