
const input_text = document.getElementById("input")
const addBtn        = document.getElementById("addBtn")
const clearBtn        = document.getElementById("clearBtn")
const text_below = document.getElementById("text_below")
let wisdom = []

addBtn.onclick = function(){

    str = input_text.value 

    let addWisdom = {id:wisdom.length,text: str}

    wisdom.push(addWisdom)

    if(wisdom.length % 2 === 0){
        localStorage.setItem("wisdom",JSON.stringify(wisdom))
    }

    let liTextBelow = document.createElement('li')
    liTextBelow.innerHTML = str
    let btnLi = document.createElement('button')
    btnLi.innerHTML = "x"
    liTextBelow.appendChild(btnLi)
    liTextBelow.dataset.id = addWisdom.id
    text_below.appendChild(liTextBelow)

    btnLi.onclick = function(){
        let parent = btnLi.parentElement
        wisdom = wisdom.filter(item => item.id !== addWisdom.id)
        
        localStorage.setItem("wisdom", JSON.stringify(wisdom))
        
        parent.remove()
    }

}

clearBtn.onclick = function(){

    localStorage.removeItem('wisdom')
    text_below.innerHTML = ""

}

window.onload = function() {
    if(!localStorage.getItem('wisdom')){
        return
    }
    let rawWisom = localStorage.getItem('wisdom')
    let wisdom_array = JSON.parse(rawWisom)



    for(let i=0; i<wisdom_array.length; i++){
        let liTextBelow = document.createElement('li')
        liTextBelow.innerHTML = wisdom_array[i].text
        text_below.appendChild(liTextBelow)
    }


}