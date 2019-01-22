import { Component } from '@angular/core';

@Component({
  selector: 'app-semigroup',
  template: `
<h1>Semigroup</h1>
<p>An object that has a concat function that combines it with another object of the same type.</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
`
})
export class SemigroupComponent {
  public code_one: string =
    ';[1].concat([2]) // [1, 2]';
}
