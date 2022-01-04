const fruits = ["Banana", "Orange", "Apple", "Mango"];

function addFruit(fruit) {
	fruits.push(fruit);
	console.log("Added", fruit, "to the array:", fruits);
}

function popFruit() {
	fruits.pop();
	console.log("Removed added fruit from the array:", fruits);
}

console.log("Original array:", fruits);
addFruit("Kiwi");
popFruit();