// function to reverse given sentence
function reverseString(s) {
  // converting string to array
  let arr = s.split(" ");
  for (let i in arr) {
    // reversing each word stored in array
    arr[i] = arr[i].split("").reverse().join("");
  }

  // finally join all reversed words with space seperated
  return arr.join(" ");
}

let str = "This is a sunny day";

console.log(reverseString(str));
