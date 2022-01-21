import { val } from './tsapp'
export default function t2() {
  console.log(val);
  (document.querySelector('.child1') as HTMLDivElement).textContent = "child1"
}