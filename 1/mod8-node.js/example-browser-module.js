import SomeComponent from './example-browser-module2.js'

export const AUTHOR = 'John';

export default function fn1() {
    let o1 = new SomeComponent;
    return o1.render()
};

export function fn2() {
    return 'fn2'
}