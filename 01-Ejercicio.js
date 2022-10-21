//Complete the method/function so that it converts dash/underscore delimited words into camel casing.
//The first word within the output should be capitalized only if the original word was capitalized
//(known as Upper Camel Case, also often referred to as Pascal case).

function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase())
}

console.log(toCamelCase("A-B-C"));
function boolToWord( bool ){
    //...
    return bool? "Yes" : "No"
  }
  console.log(boolToWord(false))

  
  function makeNegative(num) {
    // Code?
    return num > 0 ? num * -1 : num
  }
  console.log(makeNegative(-5))