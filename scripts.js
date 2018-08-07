//
console.log('Object Literals')
let person1={
    name:'Colin',
    sayhello: function () {
        console.log(`Hello! My name is ${this.name}`)
    }
}
let person2={
    name:'James',
    sayhello: function () {
        console.log(`Hello! My name is ${this.name}`)
    }
}
let person3={
    name:'Peyton',
    sayhello: function () {
        console.log(`Hello! My name is ${this.name}`)
    }
}
let person4={
    name:'Lisa',
    sayhello: function () {
        console.log(`Hello! My name is ${this.name}`)
    }
}
let person5={
    name:'Noah',
    sayhello: function () {
        console.log(`Hello! My name is ${this.name}`)
    }
}
person1.sayhello()
person2.sayhello()
person3.sayhello()
person4.sayhello()
person5.sayhello()
console.log('Psudeo Classes')
function Person(name,city,age) {
    this.name=name
    this.city=city
    this.age=age
}
Person.prototype.sayhello2=function () {
    console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}.`)
}
let p1=new Person('Colin','Birmingham','29')
let p2=new Person('James','Irondale','19')
let p3=new Person('Peyton','Mountain Brook','19')
let p4=new Person('Lisa','Birmingham','26')
let p5=new Person('Noah','Birmingham','19')
p1.sayhello2()
p2.sayhello2()
p3.sayhello2()
p4.sayhello2()
p5.sayhello2()
console.log('Es6 Class')
class Person2 {
    constructor(name,city,age){
        this.name=name;
        this.city=city;
        this.age=age;
    }
    sayhello3(){
        console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}.`)
    }
}
let pa1=new Person2('Colin','Birmingham','29')
let pa2=new Person2('James','Irondale','19')
let pa3=new Person2('Peyton','Mountain Brook','19')
let pa4=new Person2('Lisa','Birmingham','26')
let pa5=new Person2('Noah','Birmingham','19')
pa1.sayhello3()
pa2.sayhello3()
pa3.sayhello3()
pa4.sayhello3()
pa5.sayhello3()
console.log('Inheritance')
class Vehicle {
    constructor(type,manufacturer,numwheels){
        this.type=type
        this.manufacturer=manufacturer;
        this.numwheels=numwheels;
    }
    aboutVehicle(){
        console.log(`This ${this.type} was made by ${this.manufacturer} and has ${this.numwheels} number of wheels.`)
    }
}
class Trucks extends Vehicle{
    constructor(type,manufacturer,numwheels,numdoors,truckbed){
        super(type,manufacturer,numwheels)
        this.numdoors=numdoors
        this.truckbed='has'
    }
    aboutVehicle(){
        console.log(`This ${this.type} was made by ${this.manufacturer} and has ${this.numwheels} number of wheels, it has ${this.numdoors} number of doors and ${this.truckbed} has a truckbed.`)
    }
}
class Sedans extends Vehicle{
    constructor(type,manufacturer,numwheels,size,mpg){
        super(type,manufacturer,numwheels)
        this.size=size
        this.mpg=mpg
    }
    aboutVehicle(){
        console.log(`This ${this.type} is a ${this.size} sedan and was made by ${this.manufacturer} and has ${this.numwheels} number of wheels, and get ${this.mpg} miles per gallon.`)
    }
}
class Motorcycles extends Vehicle{
    constructor(type,manufacturer,manufacturer,handles,doors){
        super(type,manufacturer,numwheels)
        this.handles="handles"
        this.doors='no'
    }
    aboutVehicle(){
        console.log(`This ${this.type} was made by ${this.manufacturer} and has ${this.numwheels} number of wheels, has ${this.handles}, and has ${this.doors} doors.`)
    }
}