var HttpSatusCode;
(function (HttpSatusCode) {
    HttpSatusCode[HttpSatusCode["OK"] = 200] = "OK";
    HttpSatusCode[HttpSatusCode["NOTFOUND"] = 404] = "NOTFOUND";
    HttpSatusCode[HttpSatusCode["ACCESSDENIED"] = 403] = "ACCESSDENIED";
    HttpSatusCode[HttpSatusCode["INTERNALERRO"] = 500] = "INTERNALERRO";
})(HttpSatusCode || (HttpSatusCode = {}));
var statusCode = HttpSatusCode.OK;
console.log("OK", statusCode);
var statusCode1 = HttpSatusCode.NOTFOUND;
console.log("NOTFOUND", statusCode1);
var statusCode2 = HttpSatusCode.ACCESSDENIED;
console.log("ACCESSDENIED", statusCode2);
var statusCode3 = HttpSatusCode.INTERNALERRO;
console.log("INTERNALERRO", statusCode3);
