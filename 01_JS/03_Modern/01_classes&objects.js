// Prototypes in JS: 
    // A js object is an entity having state and behavior (properties and method)
    // JS objects have a special property called prototype.
    // We can set prototype using __proto__
    // Prototypes are added by default in an object which has properties and methods
// Object in JS:
    {
        // Part 1:
        {
            const student = {
                fullName: 'Mujahid Mahi',
                marsk: 98,
                printMarks: () => {
                    console.log("marks = ", this.marks); // it's a method
                    // We have to take properties in a method through 'this' keyword(this.marks = student.marks)
                }
                };
            console.log(student);
            student.printMarks;
        }
        // Part 2:
        {
            const employee = {
                calctax1() {
                    console.log("Tax rate is 10%");
                },
                calctax2: function() {
                    console.log("Tax rate is 15%")
                },
                calctax3: ()=> {
                    console.log("Tax rate is 20%")
                }
                // Three rules are correct
            };
            const karanArjun1 = {
                salary: 50000
            };
            const karanArjun2 = {
                salary: 50000,
                calctax2(){
                    console.log("Tax rate is 30%");
                }
            };
            const karanArjun3 = {
                salary: 50000
            };
            karanArjun1.__proto__ = employee; // prototype is a reference to an object
            karanArjun2.__proto__ = employee;
            karanArjun3.__proto__ = employee;
            karanArjun1.calctax1();
            karanArjun2.calctax2(); // own property would be finalised not prototype
            karanArjun3.calctax3();
        }
    }
// Classes in JS:
    {
       // Part 1: 
       {
            // Class is a program-code template for creating objects.
            // Those objects will have some state(variable) & some behavior (functions) inside it. 
            // It's a blueprint of an object 
       } 
       // Part 2: 
       {
            class ToyotaCar {
                start() {
                    console.log("start");
                };
                // Doesn't need comma to separate
                stop() {
                    console.log("stop");
                }
                setBrand(brand) {
                    this.brandName = brand; // brandName is a property of this object
                }
            }
            console.log(ToyotaCar);
            let fortuner = new ToyotaCar();
            fortuner.start();
            fortuner.stop();
            fortuner.setBrand("Fortuner");
            console.log(fortuner); // It's an object
            let lexus = new ToyotaCar;
            lexus.start();
            lexus.stop();
            lexus.setBrand("Lexus");
            console.log(lexus);
       }
       // Part 3:
       {
            // Constructor() method is:
                // 1. automatically invoked by new
                // 2. initializes object
            class Panel {
                constructor() {
                    console.log("creating new object");
                };
            };
            class Brand {
                constructor(brand, price) {
                    this.brandName = brand;
                    this.price = price;
                };
            };
            let student = new Panel();
            let mobile =  new Brand("Redmi note 14", 21000);
            console.log(typeof student);
            console.log(mobile);
        }
       // Part 4:
       {
            // Inheritance in JS:
                // Inheritance is passing down properties & methods from parent class to child class.
                // To pass out we use 'entends' keywords
            class Parent {
                hello() {
                    console.log("hello World");
                };
            };
            class Child extends Parent {}
            let obj = new Child();
            console.log(obj);
            obj.hello();
            class Person {
                constructor() {
                    this.species = "Homo Sapiens";
                };
                eat() {
                    console.log("Burger");
                };
                sleep() {
                    console.log("Bed");
                };
                work() {
                    console.log("Do nothing");
                };
            };
            class Engineer extends Person{
                work() {
                    console.log("solve problems, build something");
                }
            }; // Every engineer is a person. so we need to inherit the persons property to the engineer obj through inheritance
            let mahi = new Engineer();
            console.log(mahi);
            mahi.eat();
            mahi.sleep();
            mahi.work(); // child's method would be invoked[method overriding]
            console.log(mahi); // species would be inherited
       }
       // Part 4:
            {
                // Supar keyword
                    // The super keyword is used to call the instructor of its parent class to access the parent's properties and methods
                class Model {
                    constructor(gender) {
                        console.log("Enter parent constructor");
                        this.gender = gender;
                    };
                    height() {
                        console.log("5 feet 5 inches");
                    };
                };
                class LeadRole extends Model {
                    constructor(name, gender) {
                        console.log("enter child constructor");
                        super(gender); // to invoke parent class constructor
                        this.name = name;
                        console.log("exit child constructor");
                    };
                    characterictis() {
                        super.height();
                    }
                };
                let hero = new LeadRole("Tom Hiddlestone", "Male");
                console.log(hero);
                hero.characterictis();
            }
    }
// Practice Questions:
    {
        // QS01: You are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewData() that allows user to view website data.
            class User {
                constructor(name, email) {
                    this.name = name;
                    this.email = email;
                };
                viewData() {
                    console.log("Viewing Data.......");
                };
            };
            let student =  new User('Mujahid Mahi', 'mujahidmahi26@gmail.com');
            console.log(student);
            console.log(student.name);
            student.viewData();
        // QS02: Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.
            class Admin extends User {
                constructor(name, email){
                    super(name, email);
                };
                editData(){
                    console.log("Editing Data");
                };
            };
            let authority =  new Admin("Qureshi", "qureshi@gmail.com");
            console.log(authority);
            console.log(authority.name);
            authority.editData();
    }

// Error Handling (Extra Topic):
    {
        let a = 5;
        let b = 10;
        console.log("a = ", a);
        console.log("b = ", b);
        //console.log("a + b = ", a + c); // error so the next code won't be executed
        try {
            console.log("a + b = ", a + c);
        } catch(err) {
            console.log(err); // error would be printed
        }
        console.log("a - b = ", a - b); // code would be executed
    }

// This chapter has finished here. Good bye. Thank you. Coded by Mujahid Al Mahi