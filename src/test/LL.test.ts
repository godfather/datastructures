import { describe, test, expect, beforeEach } from '@jest/globals';
import LinkedList from '../LL';
import Node from '../LL/Node';

let firstNode: Node;
let secondNode: Node;
let thirdNode: Node;
let fourthNode: Node;


beforeEach(() => {
    firstNode = new Node('First Node');
    secondNode = new Node('Second Node');
    thirdNode = new Node('Thrid Node');
    fourthNode = new Node('Fourth Node');    
});

describe('Testing Linked List operations', () => {
    test('Testing LL initialization', () => {
        const ll = new LinkedList(firstNode);
        expect(ll.head?.value).toEqual(firstNode.value);
        expect(ll.tail?.value).toEqual(firstNode.value);
        expect(ll.length).toBe(1);
    });

    test('Testing push operation', () => {
        const ll = new LinkedList(firstNode);
        ll.push(secondNode).push(thirdNode);

        expect(ll.head?.value).toEqual(firstNode.value);
        expect(ll.tail?.value).toEqual(thirdNode.value);
        expect(ll.head?.next).toBe(secondNode);
        expect(ll.length).toBe(3);
    });

    test('Testing push operations', () => {
        const ll = new LinkedList(firstNode);
        ll.push(secondNode).push(thirdNode).push(fourthNode);
        ll.pop();

        // console.log(ll.toString());

        expect(ll.tail?.next).toEqual(null);
        expect(ll.tail?.value).toEqual(thirdNode.value);
        expect(ll.length).toBe(3);
    });

    test('Testing shift operation', () => {
        const ll = new LinkedList(firstNode);
        ll.push(secondNode).shift(fourthNode).push(thirdNode);

        // console.log(ll.toString());

        expect(ll.head?.value).toEqual(fourthNode.value);
        expect(ll.tail).toBe(thirdNode);
        expect(ll.length).toBe(4);
        expect(ll.head?.next).toBe(firstNode);
    });

    test('Testing unshift operation', () => {
        const ll = new LinkedList(firstNode);
        ll.push(secondNode).shift(fourthNode).push(thirdNode).unshift();

        // console.log(ll.toString());

        expect(ll.head?.value).toEqual(firstNode.value);
        expect(ll.length).toBe(3);
        expect(ll.head?.next).toBe(secondNode);
    });

    test('Testing get operation', () => {
        const ll = new LinkedList(firstNode);
        ll.push(secondNode).push(thirdNode).push(fourthNode);

        const node = ll.get(3);
        const nullNode = ll.get(-7);

        expect(node).toBe(fourthNode);
        expect(node?.value).toBe(fourthNode.value);
        expect(nullNode).toBe(null);
    });

    test('Testing set operation', () => {
        const ll = new LinkedList(firstNode);
        ll.push(secondNode).push(thirdNode).push(fourthNode);

        const newValue = 'Parangaricutirimirruaro';
        ll.set(2, newValue);

        // console.log(ll.toString());

        const node = ll.get(2);
        expect(node?.value).toEqual(newValue);
        expect(node?.next).toBe(fourthNode);
    });

    test('Testing insert operation', () => {
        const ll = new LinkedList(firstNode);
        ll.push(secondNode).push(thirdNode).push(fourthNode);

        const newNode = new Node('Fifth Node');

        ll.insert(1, newNode);

        // console.log(ll.toString());
        
        const node = ll.get(2);
        expect(node).toBe(secondNode);
        expect(ll.get(1)?.value).toEqual(newNode.value);
        expect(ll.length).toBe(5);
    });

    test('Testing insert operation in position 0', () => {
        const ll = new LinkedList(firstNode);
        ll.push(secondNode).push(thirdNode).push(fourthNode);

        const newNode = new Node('Fifth Node');

        ll.insert(0, newNode);

        // console.log(ll.toString());
        
        const node = ll.get(2);
        expect(node).toBe(secondNode);
        expect(ll.head?.value).toEqual(newNode.value);
        expect(ll.length).toBe(5);
    });

    test('Testing insert operation in last position', () => {
        const ll = new LinkedList(firstNode);
        ll.push(secondNode).push(thirdNode).push(fourthNode);

        const newNode = new Node('Fifth Node');

        ll.insert(4, newNode);

        // console.log(ll.toString());
        
        const node = ll.get(3);
        expect(node).toBe(fourthNode);
        expect(ll.tail?.value).toEqual(newNode.value);
        expect(ll.length).toBe(5);
    });

    test('Testing remove operation', () => {
        const ll = new LinkedList(firstNode);
        ll.push(secondNode).push(thirdNode).push(fourthNode);

        ll.remove(1);

        // console.log(ll.toString());

        expect(ll.length).toEqual(3);
        expect(ll.head?.next).toBe(thirdNode);
    });

    test('Testing remove first node', () => {
        const ll = new LinkedList(firstNode);
        ll.push(secondNode).push(thirdNode).push(fourthNode);

        ll.remove(0);

        // console.log(ll.toString());

        expect(ll.length).toEqual(3);
        expect(ll.head).toBe(secondNode);
        expect(ll.head?.next).toBe(thirdNode);
    });

    test('Testing remove last node', () => {
        const ll = new LinkedList(firstNode);
        ll.push(secondNode).push(thirdNode).push(fourthNode);

        ll.remove(3);

        // console.log(ll.toString());

        expect(ll.length).toEqual(3);
        expect(ll.tail).toBe(thirdNode);
        expect(ll.tail?.next).toBe(null);
    });

    test("Testing reverse operation", () => {
        const ll = new LinkedList(firstNode);
        ll.push(secondNode).push(thirdNode).push(fourthNode);

        ll.reverse();

        console.log(JSON.stringify(ll, null, 2));
        console.log(ll.toString());
    })
});
