// // Fizz Buzz

for(let i=1; i<=100;i++){
    if(i%3===0 && i%5===0){
        console.log("Fizz Buzz");
    } else if(i%3===0){
        console.log("Fizz");
    } else if(i%5===0){
        console.log("Buzz");
    } else{
        console.log(i);
    }
}

// Prime numbers

let n = 100;
console.log(`Prime numbers up to ${n}`);

for (let i = 2; i <= n; i++) {
  let isPrime = true; 
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false; 
      break; 
    }
  }

  if (isPrime) {
    console.log(i); 
  }
}

// Feeling loopy

let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let row = csvData.split("\n");
for (let i = 0; i < row.length; i++) {
    let cell = row[i].split(",");
    console.log(cell[0], cell[1], cell[2], cell[3]);
}


let csvData2 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
let rows = csvData2.split("\n");
for (let j = 0; j < rows.length; j++) {
    let cells = rows[j].split(",");
    console.log(cells[0], cells[1], cells[2], cells[3]);
}


