// Complete the js code
// Car Constructor Function
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Adding method to Car prototype
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

// SportsCar Constructor Function (Inheriting from Car)
function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model); // Call Car constructor with this context
    this.topSpeed = topSpeed;
}

// Inherit prototype from Car
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Adding method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};
