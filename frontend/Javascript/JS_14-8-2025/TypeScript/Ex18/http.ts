enum HttpSatusCode {
    OK=200,
    NOTFOUND=404,
    ACCESSDENIED=403,
    INTERNALERRO=500
}

let statusCode: HttpSatusCode = HttpSatusCode.OK;
console.log("OK",statusCode);
let statusCode1: HttpSatusCode = HttpSatusCode.NOTFOUND;
console.log("NOTFOUND",statusCode1);
let statusCode2: HttpSatusCode = HttpSatusCode.ACCESSDENIED;
console.log("ACCESSDENIED",statusCode2);
let statusCode3: HttpSatusCode = HttpSatusCode.INTERNALERRO;
console.log("INTERNALERRO",statusCode3);
