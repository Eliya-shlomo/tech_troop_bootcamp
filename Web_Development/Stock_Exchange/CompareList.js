class CompareList{

    constructor(element){
        this.element = element
        this.companyList = []
        this.init()
    }

    init(){

        this.element.addEventListener('click', (event) => {
            
            if (event.target.classList.contains('remove-btn')) {

                const symbol = event.target.dataset.symbol

                const companyToRemove = this.companyList.find(company => company.symbol === symbol)
    
                this.removeCompany(companyToRemove)
            }
            else if(event.target.classList.contains('compare-btn')){

                console.log(`comparing ${this.companyList}`)
            }
            else{
                return
            }
        });
    }

    addCompany(companyToAdd){
        this.companyList.push(companyToAdd)
        this.renderCompareList()
    }

    removeCompany(companyToRemove){
        const symbol           = companyToRemove.symbol
        this.companyList = this.companyList.filter(currentCompany => currentCompany.symbol !== symbol)
        this.renderCompareList()
    }

    renderCompareList(){
        
        if (this.companyList.length === 0) {
            $(this.element).html('');
            return;
        }

        const compareListHtml = this.companyList.map(company =>
            `<div class="company-to-compare">
                <span>${company.symbol}</span>
                <button class="remove-btn" data-symbol="${company.symbol}">x</button>
            </div>`
        ).join('');

        $(this.element).html(`
            <div class="compare-bar">
                ${compareListHtml}
                <button class="compare-btn">Compare</button>
            </div>
        `);

    }



}