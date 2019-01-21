import { Component } from '@angular/core';

@Component({
  selector: 'app-lazy-evaluation',
  template: `
<h1>Lazy evaluation</h1>
<p>Lazy evaluation is a call-by-need evaluation mechanism that delays the evaluation of an expression until its value is needed. In functional languages, this allows for structures like infinite lists, which would not normally be available in an imperative language where the sequencing of commands is significant.</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
<pre><code class="language-javascript">{{code_two}}</code></pre>
`
})
export class LazyEvaluationComponent {
  public code_one: string = [
    'const rand = function*() {',
    '  while (1 < 2) {',
    '    yield Math.random()',
    '  }',
    '}'].join('\n');

  public code_two: string = [
    'const randIter = rand()',
    'randIter.next() // Each execution gives a random value, expression is evaluated on need.'].join('\n');
}
