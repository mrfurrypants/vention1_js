// === JavaScript Made Easy: Classes & Async Programming ===

// PART 1: CLASSES - Think of them like templates for creating objects
// Just like a cookie cutter makes similar cookies, a class makes similar objects!

// Example 1: A Simple Class - Making a Social Media Post
class Post {
    constructor(author, text) {
        this.author = author;
        this.text = text;
        this.likes = 0;  // Starting with 0 likes
    }

    // Methods are just functions that belong to the class
    addLike() {
        this.likes += 1;
        console.log(`Thanks for liking! Total likes: ${this.likes}`);
    }

    showPost() {
        console.log(`
            Author: ${this.author}
            Message: ${this.text}
            Likes: ${this.likes}
        `);
    }
}

// Let's use our Post class!
const myPost = new Post("John", "Hello World!");
myPost.showPost();  // Shows the post
myPost.addLike();   // Adds a like
myPost.addLike();   // Adds another like
myPost.showPost();  // Shows updated post with 2 likes


// Example 2: A Class for a Simple Game Character
class GameCharacter {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.level = 1;ш
    }

    levelUp() {
        this.level += 1;
        console.log(`${this.name} is now level ${this.level}!`);
    }

    takeHit() {
        this.health -= 10;
        console.log(`Ouch! ${this.name}'s health is now ${this.health}`);
    }
}

const player = new GameCharacter("Mario");
player.levelUp();  // Mario is now level 2!
player.takeHit();  // Ouch! Mario's health is now 90




// PART 2: ASYNC PROGRAMMING - Things that take time to complete




console.log("First log");
console.log("Second log");
console.log("Third log");




// Will run first
console.log("First log");

setTimeout(() => {
  // Will run last, after 2000 milliseconds
  console.log("Second log");
}, 2000);

// Will run second
console.log("Third log");




// Example 3: Simple Timer (like a microwave!)
console.log("Starting timer...");
setTimeout(() => {
    console.log("Ding! Timer finished!");
}, 3000);  // Waits 3 seconds
console.log("Timer is running...");



//------------ PROMISES ------------


const promise = new Promise((resolve, reject) => {
    // Asynchronous operation
  });
  


// Change value of isSuccess variable to call resolve or reject
const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});


// Example 4: Promises - Like making a sandwich order
function makeSandwich() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const haveAllIngredients = true;  // Change to false to see error

            if (haveAllIngredients) {
                resolve("🥪 Your sandwich is ready!");
            } else {
                reject("❌ Sorry, we're out of bread!");
            }
        }, 2000);  // Takes 2 seconds to make
    });
}



// Using the Promise with .then()


promise.then(onResolve, onReject)

// In this example, the onResolve callback function will be called after two seconds if the promise is successfully fulfilled, 
// and onReject will be called after two seconds if the promise is rejected with an error.

// Change value of isSuccess variable to call resolve or reject
const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

// Will run first
console.log("Before promise.then()");

// Registering promise callbacks
promise.then(
  // onResolve will run third or not at all
  value => {
    console.log("onResolve call inside promise.then()");
    console.log(value); // "Success! Value passed to resolve function"
  },
  // onReject will run third or not at all
  error => {
    console.log("onReject call inside promise.then()");
    console.log(error); // "Error! Error passed to reject function"
  }
);

// Will run second
console.log("After promise.then()");




makeSandwich()
    .then(sandwich => console.log(sandwich))
    .catch(error => console.log(error));


// -------- Async/Await --------

async function myFunction() {
    return "Hello";
  }

  // is the same as : 

  function myFunction() {
    return Promise.resolve("Hello");
  }

 // Function that makes coffee (returns a Promise)
async function makeCoffee() {
        setTimeout(() => {
         return console.log ("☕ Coffee is ready!");
        }, 2000); // Wait 2 seconds;
}

// Using async/await to "wait" for coffee
async function breakfast() {
    console.log("Starting to make coffee...");
    const coffee = await makeCoffee(); // Wait until coffee is ready
    console.log(coffee);
    console.log("Now we can drink it!");
}

breakfast();
// Will output:
// Starting to make coffee...
// (waiting 2 seconds)
// ☕ Coffee is ready!
// Now we can drink it!



function orderPizza() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("🍕 Pizza has been delivered!");
        }, 3000); // Wait 3 seconds
    });
}

async function deliveryOrder() {
    console.log("Ordering pizza...");
    const pizza = await orderPizza(); // Wait for delivery
    console.log(pizza);
}

deliveryOrder();
// Will output:
// Ordering pizza...
// (waiting 3 seconds)
// 🍕 Pizza has been delivered!





// Example 5: Async/Await - Same thing but easier to read!
async function orderSandwich() {
    try {
        console.log("Ordering sandwich...");
        const result = await makeSandwich();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

orderSandwich();

// PART 3: PRACTICAL EXAMPLE - A Simple Todo List
class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo(task) {
        this.todos.push({ task, completed: false });
        console.log(`Added task: ${task}`);
    }

    async completeTask(taskIndex) {
        // Simulate saving to a database
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        if (this.todos[taskIndex]) {
            this.todos[taskIndex].completed = true;
            console.log(`Completed: ${this.todos[taskIndex].task}`);
        }
    }

    showTodos() {
        console.log("\nTodo List:");
        this.todos.forEach((todo, index) => {
            const status = todo.completed ? "✅" : "⏳";
            console.log(`${index + 1}. ${status} ${todo.task}`);
        });
    }
}

// Let's use our TodoList!
const myTodos = new TodoList();

// Adding some tasks
myTodos.addTodo("Study JavaScript");
myTodos.addTodo("Take a break");
myTodos.showTodos();

// Complete a task
myTodos.completeTask(0).then(() => {
    myTodos.showTodos();
});