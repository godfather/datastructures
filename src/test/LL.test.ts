import { describe, test, expect } from '@jest/globals';
import LinkedList from '../LL';
import Node from '../LL/Node';

const firstNode = new Node('First Value');
const secondNode = new Node('Second Node');
const thirdNode = new Node('Thrid Node');

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
    });

    test('Testing push operations', () => {
        const ll = new LinkedList(firstNode);
        ll.push(secondNode).push(thirdNode).push(new Node('Fourth Value'));
        ll.pop();

        expect(ll.tail?.next).toEqual(null);
        expect(ll.tail?.value).toEqual(thirdNode.value);
    });
});
