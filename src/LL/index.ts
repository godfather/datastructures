import Node from "./Node";

class LinkedList {
    private _head: Node|null;
    private _tail: Node|null;
    private _length: number;

    constructor(node:Node|undefined) {
        this._head = null;
        this._tail = null;
        this._length = 0;

        if(node) this._initialize(node);
    }

    private _initialize(node: Node) {
        this._head = node;
        this._tail = node;
        this._length++;
    }

    public get head(): Node|null {
        return this._head;
    }

    public get tail(): Node|null {
        return this._tail;
    }

    public get length():number {
        return this._length;
    }

    //Big O Type: O(1);
    public push(node: Node):LinkedList {
        if(!this._head) {
            this._head = node;
            this._tail = node;
            this._length++;
            return this;
        } 

        this._tail!.next = node;
        this._tail = node;
        this._length++;

        return this;
    }

    // Big O Type: O(n)
    public pop(): LinkedList {
        if(!this._head) return this;

        let current = this._head;

        while(current.next) {
            this._tail = current;
            current = current.next;
        }
        
        this._tail!.next = null;
        this._length--;

        return this;
    }

    //Big O Type: O(1)
    public shift(node: Node): LinkedList {
        if(!this._head) {
            this._initialize(node);
            return this;
        }

        node.next = this._head;
        this._head = node;
        this._length++;

        return this;
    }

    //Big O Type: O(1);
    public unshift(): LinkedList {
        if(!this._head) return this;

        const node = this._head;
        this._head = this._head.next;
        node.next = null;
        this._length--;

        return this;
    }

    // Big O Type: O(n)
    public toString(): string {
        const output:string[] = [];
        let current = this._head;
        while(current) {
            output.push(current.value);
            current = current.next;
        }

        return output.join(', ');
    }

    //Big O Type: O(n);
    public get(index:number): Node | null {
        if(!this._head || index > this.length || index < 0) return null;

        let current = this.head;
        let node: Node | null = null;
        
        for(let i = 0; i <= index; i++) {
            if(i === index) node = current;
            else current = current?.next!;
        }
        
        return node;
    }

    //Big O Type: O(n)
    // this is an O(n) operation because the get has a loop 
    public set(index:number, value:any): boolean {
        const node = this.get(index);
        if(null) return false;

        node!.value = value;
        
        return true;
    }

    //Big O Type: O(n);
    //shift O(1); push O(1); get O(n) so the worst case is O(n);
    public insert(index: number, newNode: Node): LinkedList | boolean {
        if(index < 0 || index > this.length) return false;
        if(index === 0) return this.shift(newNode);
        if(index === this.length) return this.push(newNode);

        const previousNode = this.get(index - 1)!;
        newNode.next = previousNode?.next;
        previousNode.next = newNode;
        this._length++;

        return this;
    }

    //Big O Type: O(n);
    //shift O(1); push O(1); get O(n) so the worst case is O(n);
    public remove(index: number): LinkedList | boolean {
        if(index < 0 || index === this.length) return false;
        if(index === 0) return this.unshift();
        if(index === (this.length - 1)) return this.pop();
        
        const previousNode = this.get(index - 1)!;
        const currentNode = previousNode?.next!;
        
        previousNode.next = currentNode.next;
        currentNode.next = null;
        this._length--;

        return this;
    }

    public reverse(): LinkedList {
        let current = this._head;
        let walker = current!.next;
        let previous = null;

        this._head = this._tail;
        this._tail = current;        


        while(walker) {
            current!.next = previous;
            previous = current;
            current = walker;             
            walker = walker?.next;

        }

        this._head!.next = previous;
        return this;
    }
}

export default LinkedList;