import '../css/style.css'
import child1 from './dom-loader.js'

child1.textContent = "hello"

/**
 * 네 멋대로 해라
 * @param {string} e 
 * @returns number
 */
function printYello(e) {
  return null
}
export function printHello(e) {
  console.log('hello');
  return e
}

printHello()
console.log('hello world');

export const world = 100;