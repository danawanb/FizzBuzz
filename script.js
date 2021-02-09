// tenary
for (var i = 1; i <= 100; i++) {
  var f = i % 3 == 0, b = i % 5 == 0;
  console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
}

for (let i = 1; i <=100; i++) {
   var x = i % 3 == 0, y = i % 5 == 0;
   console.log(x ? y ? "FizzBuzz" : "Fizz" : y ? "Buzz" : i);
}

// tanpa tenary ditambahi setiap 15
for (let i=1; i<=100; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz);
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}
