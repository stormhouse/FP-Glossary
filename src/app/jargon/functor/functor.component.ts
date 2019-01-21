import { Component } from '@angular/core';

@Component({
  selector: 'app-functor',
  template: `
<h1>Functor</h1>
<p>An object that implements a map function which, while running over each value in the object to produce a new object, adheres to two rules:</p>
<b>Preserves identity</b>
<pre><code class="language-javascript">{{code_one}}</code></pre>
<b>Composable</b>
<pre><code class="language-javascript">{{code_two}}</code></pre>
<p>(f, g are arbitrary functions)</p>
<p>A common functor in JavaScript is Array since it abides to the two functor rules:</p>
<pre><code class="language-javascript">{{code_three}}</code></pre>
<p>and</p>
<pre><code class="language-javascript">{{code_four}}</code></pre>
`
})
export class FunctorComponent {
  public code_one: string =
    'object.map(x => x) ≍ object';

  public code_two: string =
    'object.map(compose(f, g)) ≍ object.map(g).map(f)';

  public code_three: string =
    ';[1, 2, 3].map(x => x) // = [1, 2, 3]';

  public code_four: string = [
    'const f = x => x + 1',
    'const g = x => x * 2',
    '',
    ';[1, 2, 3].map(x => f(g(x))) // = [3, 5, 7]',
    ';[1, 2, 3].map(g).map(f)     // = [3, 5, 7]'].join('\n');
}
