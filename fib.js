console.log('fib.js loaded')

false||(function(){ // wrapping everything within an annonymous function
    var h = '<h3 style="color:navy">Fibonacci generator</h3>'
    h +='<button id="fibButton" type="button" class="btn btn-primary">Generate</button> '
    h +='Lenght: <input id="fibLength" size=4 value="20"> '
    h +='Seed: <input id="fibSeed" size=5 value="0,1"> '
    h +='<p id="fibArray" style="color:navy"></p>'
    sbmApps.render(h)
    // style
    fibSeed.style.color="blue"
    fibSeed.style.border=0
    fibLength.style.color="blue"
    fibLength.style.border=0
    // fib generator
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
    // generate
    fibButton.onclick=function(){
        var x = fib(parseInt(fibLength.value),JSON.parse('['+fibSeed.value+']'))
        fibArray.textContent=x.join(', ')
        fibSeed.value=x.slice(-2) // reseed
        if(x.slice(-1)[0]>100000000000000000000){
            fibSeed.value='0,1' // if numbers are too big then reset seed
        }
        fibSeed.size=fibSeed.value.length+5 // adjust size of seed input element
    }
    fibSeed.onkeyup=fibLength.onkeyup=function(evt){
        if(evt.keyCode==13){
            fibButton.click()
        }
    }
    //fibSeed.onblur=fibLength.onblur=function(){fibButton.click()}
})()

