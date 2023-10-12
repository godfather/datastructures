import Node from "./Node";

class LinkedList {
    private _head: Node|null;
    private _tail: Node|null;
    private _length: number;

    constructor(node:Node|undefined) {
        this._head = null;
        this._tail = null;
        this._length = 0;

        if(node) {
            this._head = node;
            this._tail = node;
            this._length++;
        }
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
            return this;
        } 

        this._tail!.next = node;
        this._tail = node;

        return this;
    }

    public pop(): LinkedList {
        if(!this._head) return this;

        let current = this._head;

        while(current.next) {
            this._tail = current;
            current = current.next;
        }
        
        this._tail!.next = null;

        return this;
    }
}

export default LinkedList;