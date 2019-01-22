import { Component } from '@angular/core';

@Component({
  selector: 'app-comonad',
  template: `
<h1>Comonad</h1>
<p>An object that has extract and extend functions.</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
<p>Extract takes a value out of a functor.</p>
<pre><code class="language-javascript">{{code_two}}</code></pre>
<p>Extend runs a function on the comonad. The function should return the same type as the comonad.</p>
<pre><code class="language-javascript">{{code_three}}</code></pre>
`
})
export class ComonadComponent {
  public code_one: string = [
    'const CoIdentity = (v) => ({',
    '  val: v,',
    '  extract () {',
    '    return this.val',
    '  },',
    '  extend (f) {',
    '    return CoIdentity(f(this))',
    '  }',
    '})'].join('\n');

  public code_two: string =
    'CoIdentity(1).extract() // 1';

  public code_three: string =
    'CoIdentity(1).extend((co) => co.extract() + 1) // CoIdentity(2)';
}
