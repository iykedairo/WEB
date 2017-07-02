function reduce(combine, base, array) {
forEach(array, function (element) {
base = combine(base, element);
});
return base;
}

function add(a, b) {
return a + b;
}

function sum(numbers) {
return reduce(add, 0, numbers);
}