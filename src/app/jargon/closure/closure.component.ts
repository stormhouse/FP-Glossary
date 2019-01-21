import { Component } from '@angular/core';

@Component({
  selector: 'app-closure',
  template: `
<h1>Closure</h1>
<p>A closure is a scope which retains variables available to a function when it's created. This is important for partial application to work.</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
<p>We can call addTo with a number and get back a function with a baked-in x.</p>
<pre><code class="language-javascript">{{code_two}}</code></pre>
<p>In this case the x is retained in addToFive's closure with the value 5. We can then call addToFive with the y and get back the desired number.</p>
<pre><code class="language-javascript">{{code_three}}</code></pre>
<p>This works because variables that are in parent scopes are not garbage-collected as long as the function itself is retained.</p>
<p>Closures are commonly used in event handlers so that they still have access to variables defined in their parents when they are eventually called.</p>
`
})
export class ClosureComponent {
  private code_one: string = [
    'const addTo = (x) => {',
    '  return (y) => {',
    '    return x + y',
    '  }',
    '}'].join('\n');

  private code_two: string =
    'var addToFive = addTo(5)';

  private code_three: string =
    'addToFive(3) // => 8';
}
