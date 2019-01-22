import { Component } from '@angular/core';

@Component({
  selector: 'app-value',
  template: `
<h1>Value</h1>
<p>Anything that can be assigned to a variable.</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
`
})
export class ValueComponent {
  public code_one: string = [
    "5",
    "Object.freeze({name: 'John', age: 30}) // The `freeze` function enforces immutability.",
    ";(a) => a",
    ";[1]",
    "undefined"].join('\n');
}
