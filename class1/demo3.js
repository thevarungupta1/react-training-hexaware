// not using default parameters
function say(message){
    // message = typeof message !== 'undefined' ? message : 'Hi';
    if(typeof message == 'undefined'){
        message = 'Hi';
    }
    console.log(message);
}

//say('hello');
say();


// using default parameters
// function say2(message = 'Hi'){
//     console.log(message);
// }

// say2();  // Hi
// say2('Hello') // Hello