import { Component } from '@angular/core';

@Component({
  selector: 'app-foldable',
  template: `
<h1>Foldable</h1>
<p>An object that has a reduce function that can transform that object into some other type.</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
`
})
export class FoldableComponent {
  public code_one: string = [
    'const sum = (list) => list.reduce((acc, val) => acc + val, 0)',
    'sum([1, 2, 3]) // 6'].join('\n');
}
