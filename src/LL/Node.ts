class Node {
    public next: Node|null;
    constructor(public value:string) {
        this.next = null;
    };
}

export default Node;
