import { Component } from '@angular/core';

@Component({
  selector: 'app-predicate',
  template: `
<h1>Predicate</h1>
<p>A predicate is a function that returns true or false for a given value. A common use of a predicate is as the callback for array filter.</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
`
})
export class PredicateComponent {
  public code_one: string = [
    "const predicate = (a) => a > 2",
    "",
    ";[1, 2, 3, 4].filter(predicate) // [3, 4]"].join('\n');
}
