class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }
}

let numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack);

console.log(numberStack.pop());  
console.log(numberStack);
numberStack.push(3);
console.log(numberStack);
console.log(numberStack.peek()); 
console.log(numberStack);