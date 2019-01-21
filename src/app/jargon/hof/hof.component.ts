import { Component } from '@angular/core';

@Component({
  selector: 'app-hof',
  template: `
<h1>Higher-Order Functions (HOF)</h1>
<p>A function which takes a function as an argument and/or returns a function.</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
<pre><code class="language-javascript">{{code_two}}</code></pre>
<pre><code class="language-javascript">{{code_three}}</code></pre>
`
})
export class HofComponent {
  private code_one: string =
    'const filter = (predicate, xs) => xs.filter(predicate)';

  private code_two: string =
    'const is = (type) => (x) => Object(x) instanceof type';

  private code_three: string =
    "filter(is(Number), [0, '1', 2, null]) // [0, 2]";
}
