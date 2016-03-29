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
	var fib = function(n,x){	// if length and seed are not provided
        if(!n){n=10}			// default number of elements
        if(!x){x= [0,1]}		// default seed
        x.push(parseInt(x.slice(-1))+parseInt(x.slice(-2,-1))) // insert new element as the sum of the last two
        if(x.length>n){			// if reached the desired length
            return x			// return result
        }else{
            return fib(n,x) 	// else keep going with recursive addition
        }
    }
```

Handling the variety of contexts where this code is being called is handled by these 7 lines:

```javascript
	if(typeof(sbmApps)=='function'){ 	// if sbmApps library is available to help
        sbmApps.render(h) 				// the render method will help
    }else{ 								// else fib.js is being called without any help
        var dv = document.createElement('div') // create a div element with the native method
        dv.innerHTML = h  				// h is the string with the app html
        document.body.appendChild(dv)  // append the new div onto the body
    }
```

#### 1. Full external, http://sbm-it.github.io/fibonacci.

The first example, in [index.html](https://github.com/sbm-it/fibonacci/blob/gh-pages/index.html), makes no use of external code or even external frameworks. The integration with the app store is a link to it from the app icon image:

```html
<html>
<body>
  <a href="https://sbm-it.github.io/apps/#fibonacci">
    <img id="fibImg" width=100 src="https://www.mathsisfun.com/numbers/images/fibonacci.jpg">
  </a>
  <script src="fib.js"></script>
</body>
</html>
```

fib.js will not find an sbmApps object in its scope and will therefore assemble a division to host the interactive application.

#### 2. 



