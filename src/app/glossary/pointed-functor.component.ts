import { Component } from '@angular/core';

@Component({
  selector: 'app-pointed-functor',
  template: `
<h1>Pointed functor</h1>
<p>An object with an of function that puts any single value into it.</p>
<p>ES2015 adds Array.of making arrays a pointed functor.</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
`
})
export class PointedFunctorComponent {
  public code_one: string =
    'Array.of(1) // [1]';
}
