export default class User {
    constructor(name){
        this.name = name;
    }

    getName() {
        return `My name is ${this.name}`;
    }
}