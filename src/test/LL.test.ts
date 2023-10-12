import { describe, test, expect } from '@jest/globals';
import LinkedList from '../LL';
import Node from '../LL/Node';

const firstNode = new Node('First Node');
const secondNode = new Node('Second Node');
const thirdNode = new Node('Thrid Node');
const fourthNode = new Node('Fourth Node');

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

        console.log(ll.toString());

        expect(ll.tail?.next).toEqual(null);
        expect(ll.tail?.value).toEqual(thirdNode.value);
        expect(ll.length).toBe(3);
    });

    test('Testing shift operation', () => {
        const ll = new LinkedList(firstNode);
        ll.push(secondNode).shift(fourthNode).push(thirdNode);

        console.log(ll.toString());

        expect(ll.head?.value).toEqual(fourthNode.value);
        expect(ll.tail).toBe(thirdNode);
        expect(ll.length).toBe(4);
        expect(ll.head?.next).toBe(firstNode);
    })
});
