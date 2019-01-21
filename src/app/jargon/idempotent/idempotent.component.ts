import { Component } from '@angular/core';

@Component({
  selector: 'app-idempotent',
  template: `
<h1>Idempotent</h1>
<p>A function is idempotent if reapplying it to its result does not produce a different result.</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
<pre><code class="language-javascript">{{code_two}}</code></pre>
<pre><code class="language-javascript">{{code_three}}</code></pre>
`
})
export class IdempotentComponent {
  public code_one: string =
    'f(f(x)) ≍ f(x)';

  public code_two: string =
    'Math.abs(Math.abs(10))';

  public code_three: string =
    'sort(sort(sort([2, 1])))';
}
