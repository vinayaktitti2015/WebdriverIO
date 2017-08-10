
// Object creation methods
//mtd -1
var newobject = {};

//mtd- 2
var newObject = Object.create(Object.proptotype);

//mtd - 3
var newObject = new Object();

// keys & values assigned to an Object methods

//mtd - 1 Dot syntax

// set properties
newObject.somekey = "key";

//get properties
var value = newObject.somekey;

//mtd - 2 Square bracket syntax

// set properties
newObject["somekey"] = "key";

//get properties
var value = newObject["somekey"];


//mtd- 3: Object defineProperty
//set properties
Object.defineProperty(newObject, "somekey", {
   value: "some value",
   wreitable: true,
   enumerable: true,
   configurable: true

});


// if the ablove syntax looks diff refer below one
var defineProp = function( obj, key, value){
    var config = {
      value: value,
      writable: true,
      enumerable: true,
      configurable: true
    };

    Object.defineProperty( obj, key, config);
};

// ti use, we then create a new empty "person " Object
var person = Object.create(Object.proptotype);

// Populate the object with properties
defineProp(person, "car", "Toyota");
console.log(person);
