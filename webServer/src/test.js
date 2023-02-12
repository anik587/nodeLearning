var Q = require('q');

function add(callback){

    return new Promise(function ( resolve, reject) {
        setTimeout(function(){
            var a, b, c;
            b = 3;
            a = 4;
            c = a + b;
            console.log("inside "+c);
            callback(c);
            if(c){
                resolve(c);
            }else{
                reject();
            }
        }, 2000);

    });
}

//var promise = Q.nbind(add);

function callback(x){
    console.log(x);
}

add(callback).then(function(){
    console.log('addition completed');
}).catch(function (E) {
    console.log(E);
});