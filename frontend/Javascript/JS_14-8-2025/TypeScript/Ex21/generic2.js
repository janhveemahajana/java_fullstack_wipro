var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    return Box;
}());
var demoNumber1 = new Box(42);
console.log(demoNumber1.getValue());
var demoString1 = new Box("Hello, World!");
console.log(demoString1.getValue());
