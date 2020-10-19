// COURSE ASSIGNMENT 

// question 1

var brand = "Gucci";

// question 2

var person = {

    gender: "female",
    age: 37
};

// question 3

var outOfStock = false;

if(outOfStock === true){
    console.log("Out of stock");
}
else{
    console.log("In stock");
}

// question 4 

var numbers = [18, 11, 82, 20, 10];

for(var i=0; i < numbers.length; i++){
    console.log(numbers[i]);
}

// question 5

for(var i=15; i<=25; i++) {
    console.log(i);
}

// question 6

for(var i=20; i<=20; i++) {
    console.log(i);
}

// question 7 

var storeItem = [

    {
        imageUrl: "https://pictures/gucci/blouse",
        favoriteCounts: 234,
        liked: true 

    },

    {
        imageUrl: "https://pictures/gucci/jeans",
        favoriteCounts: 645,
        liked: false 
    
    }
];

for(var i=0; i<storeItem.length; i++) {

    console.log(storeItem[i].favoriteCounts);
}

for(var i=0; i<storeItem.length; i++) {

    console.log(storeItem[i].liked);
}


// question 8 

function whatIDontLike (dislikes) {
    console.log("I don`t like " + dislikes);
}

whatIDontLike("Gothic punk style");


// question 9 

function customer (firstName, lastName) {
    console.log("Happy shopping " + firstName);
}

customer("frøydis", "remme");

// question 10 

var storeLocations = [];

function logToLocator(location) {
    storeLocations.push(location);
}

logToLocator("grunerløkka")

