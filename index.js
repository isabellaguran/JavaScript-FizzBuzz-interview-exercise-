//Create a function that takes in a number.Console log all values from 1 to that number,but if the number is divisible by 3,log 'Fizz' instead of that number,if the number is divisible by 5,log 'Buzz' instead of the number,and if the number is divisible by 3 and 5,log 'fizzbuzz' instead of that number.

function fizzBuzz(num){
  for(let i=1; i<=num; i++;){
    if (i % 3 === 0 && i % 5 === 0){ //always do this statement first
      console.log('FizzBuzz')
    }else if (i % 3 === 0){
        console.log('Fizz')
      } else if (i % 5 ===0){
        console.log('Buzz')
      }else{
        console.log(i)
      }
    }
}
fizzBuzz(10)
