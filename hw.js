/* task 1 */
function convert(USD) {

    const hryvnia = USD * 8;

    return hryvnia;
}
convert(20);

/* task 2 */
function reverse(str) {
    return str.split("").reverse().join("");
}
reverse('abc');

/* task 3 */
function printStairs(n) {
    for (var i = 0; i < n; i++) {
        console.log("#".repeat(i + 1));
    }
}
printStairs(3);

/* task 4 */
function sumRange(start, end) {
    var sum = 0;
    for (var i = start; i <= end; i++) {
        sum += i;
    }
    console.log(sum);
}
sumRange(2, 4);

/* task 5 */
function min(a, b, c) {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < c) {
        console.log(b);
    } else {
        console.log(c);
    }
}
min(10, 5, 11);

/* task 6 */
function printPyramid(n) {
    for (var i = 0; i < n; i++) {
        var a = "#".repeat(i * 2 + 1);
        var b = " ".repeat(n - (i + 1));
        console.log(b + a);
    }
}
printPyramid(4);

/* task 7 */
function firstAndLastToUpper(str) {
	return str.charAt(0).toUpperCase() + str.substr(1, str.length - 2) + str.slice(-1).toUpperCase();
	
}
firstAndLastToUpper('abc');
