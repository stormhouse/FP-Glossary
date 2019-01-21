import { Component } from '@angular/core';

@Component({
  selector: 'app-side-effects',
  template: `
<h1>Side effects</h1>
<p>A function or expression is said to have a side effect if apart from returning a value, it interacts with (reads from or writes to) external mutable state.</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
<pre><code class="language-javascript">{{code_two}}</code></pre>
`
})
export class SideEffectsComponent {
  public code_one: string =
    'const differentEveryTime = new Date()';

  public code_two: string =
    "console.log('IO is a side effect!')";
}
