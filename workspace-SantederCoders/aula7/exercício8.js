console.log('------- vetor 1 -------');
let v = [10, 20, 30, 40, 50, 60, 70, 80, 90];
for (let i = 0; i<v.length; i++){
  console.log(v[i]);
}

console.log('------- vetor 2 -------');
let v2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
for (let número of v2) {
  console.log(número);
}

console.log('------- vetor 3 -------');
let v3 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
for (let índice in v3) {
  console.log(v3[índice]);
}

console.log('------- Matriz -------');
const matriz = [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]
         ];
for (let linha of matriz) {
  for (let elemento of linha)
       console.log(elemento);
}
