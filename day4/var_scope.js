// Eine var Variable kann vor der Dekalartion zugegriffen werden.
console.log(meineVar);
var meineVar = 5;

function testVar() {
    console.log("meineVar: " + meineVar);
    var innerVar ="inner";
    console.log("innerVar: " + innerVar);
}

testVar();
console.log("innerVar Test: " + innerVar);