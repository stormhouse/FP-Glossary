import { Component } from '@angular/core';

@Component({
  selector: 'app-currying',
  template: `
<h1>Currying</h1>
<p>The process of converting a function that takes multiple arguments into a function that takes them one at a time.</p>
<p>Each time the function is called it only accepts one argument and returns a function that takes one argument until all arguments are passed.</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
`
})
export class CurryingComponent {
  public code_one: string = [
    'const sum = (a, b) => a + b',
    '',
    'const curriedSum = (a) => (b) => a + b',
    '',
    'curriedSum(40)(2) // 42.',
    '',
    'const add2 = curriedSum(2) // (b) => 2 + b',
    '',
    'add2(10) // 12'].join('\n');
}
