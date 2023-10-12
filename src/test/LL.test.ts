import { describe, test, expect } from '@jest/globals';
import LinkedList from '../LL';
import Node from '../LL/Node';


describe('Testing Linked List operations', () => {
    test('Testing LL initialization', () => {
        const node = new Node('first value');
        const ll = new LinkedList(node);
        expect(ll.head?.value).toEqual(node.value);
        expect(ll.tail?.value).toEqual(node.value);
        expect(ll.length).toBe(1);
    });
});
