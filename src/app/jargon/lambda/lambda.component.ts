import { Component } from '@angular/core';

@Component({
  selector: 'app-lambda',
  template: `
<h1>Lambda</h1>
<p>An anonymous function that can be treated like a value.</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
<p>Lambdas are often passed as arguments to Higher-Order functions.</p>
<pre><code class="language-javascript">{{code_two}}</code></pre>
<p>You can assign a lambda to a variable.</p>
<pre><code class="language-javascript">{{code_three}}</code></pre>
`
})
export class LambdaComponent {
  public code_one: string = [
    ';(function (a) {',
    '  return a + 1',
    '})',
    '',
    ';(a) => a + 1'].join('\n');

  public code_two: string =
    ';[1, 2].map((a) => a + 1) // [2, 3]';

  public code_three: string =
    'const add1 = (a) => a + 1';
}
