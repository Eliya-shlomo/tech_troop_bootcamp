/*EX1__________________________________________________________*/


function safeJsonParse(str){
    try{
        return JSON.parse(str)
    }
    catch(e){
        return "Invalid JSON format";
    }
}


console.log(safeJsonParse('{"name": "John"}'));    
console.log(safeJsonParse('invalid json'));          
console.log(safeJsonParse('[1, 2, 3]'));             
console.log(safeJsonParse('{name: "John"}'));  






/*EX2__________________________________________________________*/


const fs = require('fs');

function readFileWithErrorHandling(path, callback) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      switch (err.code) {
        case 'ENOENT':
          callback(`File not found: ${path}`);
          break;
        case 'EISDIR':
          callback(`Path is a directory, not a file: ${path}`);
          break;
        case 'EACCES':
          callback(`Permission denied: ${path}`);
          break;
        default:
          callback(`Unexpected error: ${err.message}`);
      }
      return;
    }

    callback(`File read successfully. Size: ${data.length} bytes`);
  });
}

readFileWithErrorHandling('existing.txt', console.log);
readFileWithErrorHandling('nonexistent.txt', console.log);
readFileWithErrorHandling('/tmp', console.log);
readFileWithErrorHandling('/etc/shadow', console.log);