//Die let-Variablen muss man zuerst deklarieren und erst dann benutzen.
//console.log(outerVar);
let outerVar = "outer";

if (true) {
    let blockScope = "BlockScope";
    console.log(blockScope);
}

 console.log(blockScope);
