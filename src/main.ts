import './style.css'

import "./topics/07-import-export.ts";

import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  Hola Mundo
`
console.log('Hola Mundo');

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
