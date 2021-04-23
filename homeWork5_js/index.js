//1
function order_of_number () {
  let arr = [];
  for (let i = 1; i <= 1000 ; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(order_of_number());

let arr = order_of_number ();

//2.1
function multiples_of_10(numbers, number, number2) { 
  let arr10 = []; 
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % number === 0 && numbers[i] % number2 === 0) { 
      arr10.push(numbers[i]); 
    }
  }
  return arr10;
}

let arry10 = multiples_of_10(arr, 10, 2);

console.log(arry10); 



function multiples_of_10_filter (arr) {

  let filtered = arr.filter ((element) => {
    return element % 10 === 0 && element % 2 === 0; 
  });
  return filtered;
}

console.log('filtred', multiples_of_10_filter(arr));

//2.2

function multiples_of_3_5(){
  let tempArr = arr;
  let abc = multiples_of_10(tempArr, 3, 5);
  abc.sort((a, b) => b - a);
  return abc;

}
let sortedArray = multiples_of_3_5();
console.log(sortedArray);

function multiples_of_3_5_filter (arr) {
  arr.sort((a, b) => b - a);
  let filtered = arr.filter ((element) => {
    return element % 5 === 0 && element % 3 === 0;  
  });
  return filtered;
}

console.log('filtred', multiples_of_3_5_filter(arr));





//3
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

function comparsison (student1, student2) {
  
  let cache = [];
  for (var i = 0; i < student1.length; i++) {
    let levelet1 = student1[i];
    for (var j = 0; j < student2.length; j++){
      if (levelet1 === student2[j]) {
        cache.push(levelet1)
        break; 
      }
    }
  }
  return cache;
}
let result_comparsison = comparsison (student1Courses, student2Courses);
console.log(result_comparsison)

function comparsison_filter (student1, student2) {
  let levelet1 = student1.filter((element) => {
		let levelet2 = student2.includes(element);
		return levelet2;
  });

	return levelet1;
}

let result_comparsison_filter = comparsison_filter(student1Courses, student2Courses);

console.log('filtred', result_comparsison_filter);

