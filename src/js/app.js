import 'ko_css/style.scss'
import child1 from './dom-loader';

child1.textContent = "hello";
console.log('this is app1');

/**
 * 헬로를 출력하는 함수
 * @summary print Hello is.
 * @throws dont do that
 */
export function printHello() {
  console.log('hello app1');
}

// console.log($("#id").text());

document.getElementById('root').onclick = printHello