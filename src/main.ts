import './style.css'

import "./topics/11-optional-chaining.ts";

import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  Hola Mundo
`
console.log('Hola Mundo');

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
