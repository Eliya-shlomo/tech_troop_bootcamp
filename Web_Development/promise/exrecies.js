/*EX1__________________________________________________________*/

function checkLuckyNumber(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(num<=0){
                reject(new Error("Invalid number"));
            }
            else if(num % 7 === 0){
                resolve("Lucky!");
            }
            else{
                resolve("Not Lucky!");
            }
        },800)
    });
  }
  
  
  checkLuckyNumber(14)
  .then(result => console.log(result))   
  .catch(err => console.log(err.message));

checkLuckyNumber(5)
  .then(result => console.log(result))   
  .catch(err => console.log(err.message));

checkLuckyNumber(-3)
  .then(result => console.log(result))
  .catch(err => console.log(err.message)); 


  /*EX2__________________________________________________________*/

  function processFile(filename, processingTime) {
    return new Promise((resolve, reject) => {
      console.log(`Starting to process ${filename}...`);
      
      setTimeout(() => {
        if (Math.random() < 0.15) {
          reject(new Error(`Failed to process ${filename}`));
        } else {
          const result = {
            filename: filename,
            size: Math.floor(Math.random() * 1000) + 100,
            processedAt: new Date().toLocaleTimeString()
          };
          console.log(`✓ Completed ${filename}`);
          resolve(result);
        }
      }, processingTime);
    });
  }
  
  const files = [
    { name: "document1.pdf", time: 2000 },
    { name: "image1.jpg", time: 1500 },
    { name: "data.csv", time: 3000 },
    { name: "report.docx", time: 1000 }
  ];
  
  const startTime = Date.now();
  
  const filePromises = files.map(file => processFile(file.name, file.time));
  
  Promise.all(filePromises)
    .then(results => {
      const totalTime = ((Date.now() - startTime) / 1000).toFixed(2);
      console.log(`\n✅ all files processed in ${totalTime} seconds`);
      console.log("Results:", results);
    })
    .catch(error => {
      console.log("❌ Processing failed:", error.message);
    });
  

/*EX3_____________________________________________________*/

const inventory = {
    'laptop': { price: 999, stock: 5 },
    'mouse': { price: 25, stock: 10 },
    'keyboard': { price: 75, stock: 0 },
    'monitor': { price: 299, stock: 3 }
  };
  
  function checkInventory(items) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const outOfStock = items.find(item => inventory[item].stock === 0);
        if (outOfStock) {
          reject(new Error(`${outOfStock} is out of stock`));
        } else {
          resolve(items);
        }
      }, 500);
    });
  }
  
  function calculateTotal(items) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const subtotal = items.reduce((sum, item) => sum + inventory[item].price, 0);
        const tax = subtotal * 0.08;
        const total = subtotal + tax;
        resolve({ subtotal, tax, total });
      }, 200);
    });
  }
  
  function processPayment(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.9) {
          resolve({
            transactionId: Math.random().toString(36).substr(2, 9),
            amount,
            status: 'success'
          });
        } else {
          reject(new Error('Payment failed'));
        }
      }, 1500);
    });
  }
  
  function updateInventory(items) {
    return new Promise((resolve) => {
      setTimeout(() => {
        items.forEach(item => inventory[item].stock--);
        resolve(inventory);
      }, 300);
    });
  }
  
  function checkout(itemNames) {
    return checkInventory(itemNames)
      .then(items => calculateTotal(items))
      .then(totals => processPayment(totals.total).then(payment => ({ totals, payment })))
      .then(({ totals, payment }) => updateInventory(itemNames).then(updatedInventory => ({
        totals,
        payment,
        updatedInventory
      })));
  }
  
  checkout(['laptop', 'mouse'])
    .then(result => console.log('Order success:', result))
    .catch(error => console.log('Order failed:', error.message));
  
  checkout(['laptop', 'keyboard'])
    .then(result => console.log('Order success:', result))
    .catch(error => console.log('Order failed:', error.message));
  
  checkout(['monitor', 'mouse', 'laptop'])
    .then(result => console.log('Order success:', result))
    .catch(error => console.log('Order failed:', error.message));