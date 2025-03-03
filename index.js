// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    console.log("Before: " + cats);
    cats.push(name); 
    console.log("After: " + cats);
}

function destructivelyPrependCat(name) {
    console.log("Before: " + cats);
    cats.unshift(name);
    console.log("After: " + cats);
}

function destructivelyRemoveLastCat() {
    console.log("Before: " + cats);
    cats.pop(); 
    console.log("After: " + cats);
}

function destructivelyRemoveFirstCat() {
    console.log("Before: " + cats);
    cats.shift(); 
    console.log("After: " + cats);
}

function appendCat(name) {
    return [...cats, name]; 
}

function prependCat(name) {
    return [name, ...cats]; 
}

function removeLastCat() {
    return cats.slice(0, -1); 
}
function removeFirstCat() {
    return cats.slice(1); 
}

