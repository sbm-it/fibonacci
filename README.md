# fibonacci
Simple app to generate Fibonacci numbers

###Live at

Each of these examples uses the same [fib.js](https://github.com/sbm-it/fibonacci/blob/gh-pages/fib.js) code 

1. Full External - http://sbm-it.github.io/fibonacci

2. Easy External - http://sbm-it.github.io/fibonacci/easy.html

3. Store Embedded - https://sbm-it.github.io/apps/#fibonacci

___
Best start view reviewing 12 min videocast 

[![](http://img.youtube.com/vi/ZQS3nlZMDzw/default.jpg)](http://www.youtube.com/watch?v=ZQS3nlZMDzw) <— click to view

#### 0. the code

The code for this app was written only once, in https://github.com/sbm-it/fibonacci/blob/gh-pages/fib.js, and all three examples of development relief on it. At the core of that small script you can find a recursive implementation of a Fibonacci number generator:

```javascript
	var fib = function(n,x){
        if(!n){n=10}
        if(!x){x= [0,1]}
        x.push(parseInt(x.slice(-1))+parseInt(x.slice(-2,-1)))
        if(x.length>n){
            return x
        }else{
            return fib(n,x)
        }
    }
```

Handling the variety of contexts where this code is being called is handled by these 7 lines:

```javascript
	if(typeof(sbmApps)=='function'){ // if sbmApps library is available to help
        sbmApps.render(h) // the render method will help
    }else{ // else fib.js is being called without any help
        var dv = document.createElement('div') // create a div element with the native method
        dv.innerHTML = h  // h is the string with the app html
        document.body.appendChild(dv)  // append the new div onto the body
    }
```

#### 1. Full external

The first example makes no use of external code or even external frameworks. The integration with the 




