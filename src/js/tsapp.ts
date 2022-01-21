import 'ko_css/style.scss'
// import child1 from '@/dom-loader.js'

export var val = "value!!"
import t2 from './tsapp2'
t2()

// child1.textContent = "hello"
console.log('this is app1');

/**
 * hello typescript
 * @param {number} hello world
 */
export function yes() {
  console.log('hello app1');
}
/**
 * hello typescript
 * @param {number} hello world
 */
export function printHello() {
  console.log('hello app1');
}

(document.getElementById('root') as HTMLDivElement).onclick = printHello


console.log('type');

const arr = [1,2,3,4,5, 6, 7]
for (let i of arr) {
  console.log(i)
}

export { t2 }