//odd numbers as anonymous function 

let arr = [1,2,3,4,5,6,7]

const oddNum = function (){
for(i=0;i<arr.length;i++){
  if(arr[i]%2!=0){
    console.log(arr[i])
  }
}
}

//odd numbers as IIFE function
(function (){
    for(i=0;i<arr.length;i++){
      if(arr[i]%2!=0){
        console.log(arr[i])
      }
    }
    })
    ();


//odd numbers as arrow function
let arrowArr = [1, 2, 3, 4, 5, 6, 7];

const arrowOddNum = () => {
  let oddNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddNumbers.push(arr[i]);
    }
  }
  return oddNumbers;
}

console.log(oddNum());


///Title caps for an array


///sum of all numbers - anonymous function
let sumArr = [1, 2, 3, 4, 5];

const sum = function (){
  
  let totalSum = 0;

for(i=0;i<sumArr.length;i++){
  
  totalSum += sumArr[i]
  
}
return totalSum
}

console.log(sum())


///sum of all numbers - IIFE function
let iSumArr = [1, 2, 3, 4, 5];

(function (){
  
  let totalSum = 0;

for(i=0;i<iSumArr.length;i++){
  
  totalSum += sumArr[i]
  
}
console.log(totalSum)
})();


///sum of all numbers - arrow function

let arrowSumArr = [1, 2, 3, 4, 5];

const arrowFunc = () => {
  let totalSum = 0;

  for (let i = 0; i < arrowSumArr.length; i++) {
    totalSum += sumArr[i];
  }

  return totalSum;
}

console.log(arrowFunc());

////return all prime numbers in an array - anonymous function
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let findPrimes = function(arr) {
  return arr.filter(function(num) {
    if (num <= 1) {
      return false; // 0 and 1 are not prime numbers
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false; // If it's divisible, it's not prime
      }
    }

    return true; // If it's not divisible by any number in the above loop, it's prime
  });
};

let primeNumbers = findPrimes(arr);

console.log("Prime numbers in the array:", primeNumbers);


////return all prime numbers ina an array - IIFE
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let primeNumbers = (function(arr) {
  return arr.filter(function(num) {
    if (num <= 1) {
      return false; // 0 and 1 are not prime numbers
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false; // If it's divisible, it's not prime
      }
    }

    return true; // If it's not divisible by any number in the above loop, it's prime
  });
})(arr);

console.log("Prime numbers in the array:", primeNumbers);

////return all prime numbers ina an array - arrow function
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const findPrimes = (arr) => {
  return arr.filter((num) => {
    if (num <= 1) {
      return false; // 0 and 1 are not prime numbers
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false; // If it's divisible, it's not prime
      }
    }

    return true; // If it's not divisible by any number in the above loop, it's prime
  });
};

let primeNumbers = findPrimes(arr);

console.log("Prime numbers in the array:", primeNumbers);


/////return all palindromes in an array - anonymous function
const arr = ["racecar", "mam", "mom"];

const palindromes = function() {
  let palindromes = [];

  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    const reversedStr = str.split('').reverse().join('');

    if (str === reversedStr) {
      palindromes.push(str);
    }
  }

  return palindromes;
};

console.log(`Palindromes - ${palindromes()}`);


/////return all palindromes in an array - IIFE
const arr = ["racecar","mam","mom"];
const palindromes = (() => {
  
  let palindromes = [];

  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    const reversedStr = str.split('').reverse().join('');

    if (str === reversedStr) {
      palindromes.push(str);
    }
  }

  console.log(`Palindromes - ${palindromes}`)
})();

/////return all palindromes in an array - arrow
const arr = ["racecar", "mam", "mom"];

const findPalindromes = () => {
  let palindromes = [];

  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    const reversedStr = str.split('').reverse().join('');

    if (str === reversedStr) {
      palindromes.push(str);
    }
  }

  return palindromes;
};

const palindromesFound = findPalindromes();

console.log(`Palindromes - ${palindromesFound}`);

//////median of two sorted arrays - anonymous function
const nums1 = [1, 3];
const nums2 = [2];

const findMedian = function(nums1, nums2) {
  const merged = nums1.concat(nums2).sort(function(a, b) {
    return a - b;
  });
  const mid = Math.floor(merged.length / 2);

  if (merged.length % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    return merged[mid];
  }
};

const median = findMedian(nums1, nums2);

console.log("Median:", median);


//////median of two sorted arrays - IIFE
const nums1 = [1, 3];
const nums2 = [2];

const median = (function() {
  const merged = nums1.concat(nums2).sort(function(a, b) {
    return a - b;
  });
  const mid = Math.floor(merged.length / 2);

  if (merged.length % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    return merged[mid];
  }
})();

console.log("Median:", median);

///////remove duplicates from an array - anonymous function
const bikes = ['honda', 'ducati', 'yamaha','yamaha'];

const uniqueBikes = (function(arr) {
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueArr.length; j++) {
      if (arr[i] === uniqueArr[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
})(bikes);

console.log("Unique Bikes:", uniqueBikes);


///////remove duplicates from an array - IIFE
const bikes = ['honda', 'ducati','ducati', 'yamaha'];

const uniqueBikes = (function(arr) {
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueArr.length; j++) {
      if (arr[i] === uniqueArr[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
})(bikes);

console.log("Unique Bikes:", uniqueBikes);

////////rotate an array by K times - anonymous 
const colorArr = ['red', 'blue', 'green'];
const k = 2; // The number of times to rotate

const rotatedArray = (function(arr, k) {
  const len = arr.length;
  k = k % len; // Ensure k is within the length of the array

  for (let i = 0; i < k; i++) {
    const temp = arr.shift(); // Remove the first element and store it in temp
    arr.push(temp); // Add the removed element to the end
  }

  return arr;
})([...colorArr], k);

console.log("Rotated Array:", rotatedArray);

////////rotate an array by K times - IIFE
const colorArr = ['red', 'blue', 'green'];
const k = 2; // The number of times to rotate

(function() {
  const rotatedArray = (function(arr, k) {
    const len = arr.length;
    k = k % len; // Ensure k is within the length of the array

    for (let i = 0; i < k; i++) {
      const temp = arr.shift(); // Remove the first element and store it in temp
      arr.push(temp); // Add the removed element to the end
    }

    return arr;
  })([...colorArr], k);

  console.log("Rotated Array:", rotatedArray);
})();

