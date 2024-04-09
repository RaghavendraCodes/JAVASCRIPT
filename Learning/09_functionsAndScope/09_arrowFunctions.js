const user = {
    username: "raghavendra", 
    price: 999, 

    welcomeMessage: function() {
        console.log(`welcome back ${this.username}`); // this - references current context. 
        console.log(this);
    }
}

console.log(user.welcomeMessage());

user.username = "venkatesh iyer"

console.log(user.welcomeMessage());

console.log(this);

function chai() {
    let username = "raghavendra" // this works only in objects. 
    console.log(this.username);
}

chai()

const newChai = () => {
    let username = "raghavendra"
    console.log(this);
}