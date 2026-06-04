class UniqueArray {
    constructor() {
      this.items = []
      this.lookup = {}
    }
  
    toKey(item) {
      return JSON.stringify(item)
    }
  
    add(item) {
      if (this.exists(item)) return
      this.items.push(item)
      this.lookup[this.toKey(item)] = true 
    } 
  
    showAll() {
      console.log(this.items)
    }
  
    exists(item) {
      return this.lookup[this.toKey(item)] === true  
    }
  
    get(index) {
      return this.items[index] ?? -1
    }
  }
  
  const uniqueStuff = new UniqueArray()
  uniqueStuff.add("toy")
  uniqueStuff.showAll()           // ["toy"]
  uniqueStuff.add("toy")
  uniqueStuff.showAll()           // ["toy"]
  uniqueStuff.exists("toy")       // true
  uniqueStuff.add("poster")
  uniqueStuff.add("hydrogen")
  console.log(uniqueStuff.get(2)) // "hydrogen"



uniqueStuff.add({ x: 3 })
uniqueStuff.add({ x: 3 })   
uniqueStuff.showAll()       

console.log(uniqueStuff.exists({ x: 3 }) )
console.log(uniqueStuff.exists({ x: 4 }) )

uniqueStuff.add([1, 2, 3])
uniqueStuff.add([1, 2, 3])  
uniqueStuff.showAll()       