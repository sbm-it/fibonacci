# fibonacci
Simple app to generate Fibonacci numbers

###Live at

Each of these examples uses the same [fib.js](https://github.com/sbm-it/fibonacci/blob/gh-pages/fib.js) code 

1. Full External - http://sbm-it.github.io/fibonacci

2. Easy External - http://sbm-it.github.io/fibonacci/easy.html

3. Store Embedded - https://sbm-it.github.io/apps/#fibonacci

___
Best start view reviewing 12 min videocast 

[![](http://img.youtube.com/vi/ZQS3nlZMDzw/default.jpg)](http://www.youtube.com/watch?v=ZQS3nlZMDzw&vq=hd720) <— click to view in youtube

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

![](http://sbm-it.github.io/fibonacci/fib.gif =200x)

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

![](http://sbm-it.github.io/fibonacci/snap1.png =200x)


#### 2. Easy External, http://sbm-it.github.io/fibonacci/easy.html

This is the easiest way to create an external App, by having the sbmApps client side object use the information in your app manifest, (sbmManifest.json)[https://github.com/sbm-it/fibonacci/blob/gh-pages/sbmManifest.json] to figure out what needs to be done. This includes loading jQuery and Twitter Bootstrap to handle styling for you and optimize use of device form factor, orientation etc. The manifest needs these 4 pieces of information (you can add more) - name, description, icon and onclick. The last of these is a link to either a js or a html file where your app is coded.

```json
{
    "name":"Fibonacci",
    "description":"generates Fibonacci series",
    "icon":"https://www.mathsisfun.com/numbers/images/fibonacci.jpg",
    "onclick":"https://sbm-it.github.io/fibonacci/fib.js"
}
```


![](http://sbm-it.github.io/fibonacci/snap2.png =200x)

![](http://sbm-it.github.io/fibonacci/snap3.png =200x)

