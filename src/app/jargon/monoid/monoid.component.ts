import { Component } from '@angular/core';

@Component({
  selector: 'app-monoid',
  template: `
<h1>Monoid</h1>
<p>An object with a function that "combines" that object with another of the same type.</p>
<p>One simple monoid is the addition of numbers:</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
<p>In this case number is the object and + is the function.</p>
<p>An "identity" value must also exist that when combined with a value doesn't change it.</p>
<p>The identity value for addition is 0.</p>
<pre><code class="language-javascript">{{code_two}}</code></pre>
<p>It's also required that the grouping of operations will not affect the result (associativity):</p>
<pre><code class="language-javascript">{{code_three}}</code></pre>
<p>Array concatenation also forms a monoid:</p>
<pre><code class="language-javascript">{{code_four}}</code></pre>
<p>The identity value is empty array []</p>
<pre><code class="language-javascript">{{code_five}}</code></pre>
<p>If identity and compose functions are provided, functions themselves form a monoid:</p>
<pre><code class="language-javascript">{{code_six}}</code></pre>
<p>foo is any function that takes one argument.</p>
<pre><code class="language-javascript">{{code_seven}}</code></pre>
`
})
export class MonoidComponent {
  private code_one: string =
    '1 + 1 // 2';

  private code_two: string =
    '1 + 0 // 1';

  private code_three: string =
    '1 + (2 + 3) === (1 + 2) + 3 // true';

  private code_four: string =
    ';[1, 2].concat([3, 4]) // [1, 2, 3, 4]';

  private code_five: string =
    ';[1, 2].concat([]) // [1, 2]';

  private code_six: string = [
    'const identity = (a) => a',
    'const compose = (f, g) => (x) => f(g(x))'].join('\n');

  private code_seven: string =
    'compose(foo, identity) ≍ compose(identity, foo) ≍ foo';
}
