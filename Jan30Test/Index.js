var input = prompt("Enter the size of fibbobnaci series")
var first = 0;
var second = 1;

console.log(first);
console.log(second);
var third;
for (i = 2; i <= input; i++) {

    third = first + second;

    console.log(third);
    first = second;
    second = third;

}
