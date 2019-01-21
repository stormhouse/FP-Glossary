import { Component } from '@angular/core';

@Component({
  selector: 'app-point-free-style',
  template: `
<h1>Point-Free Style</h1>
<p>Writing functions where the definition does not explicitly identify the arguments used. This style usually requires currying or other Higher-Order functions. A.K.A Tacit programming.</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
<p>incrementAll identifies and uses the parameter numbers, so it is not points-free. incrementAll2 is written just by combining functions and values, making no mention of its arguments. It is points-free.</p>
<p>Points-free function definitions look just like normal assignments without function or =>.</p>
`
})
export class PointFreeStyleComponent {
  private code_one: string = [
    "// Given",
    "const map = (fn) => (list) => list.map(fn)",
    "const add = (a) => (b) => a + b",
    "",
    "// Then",
    "",
    "// Not points-free - `numbers` is an explicit argument",
    "const incrementAll = (numbers) => map(add(1))(numbers)",
    "",
    "// Points-free - The list is an implicit argument",
    "const incrementAll2 = map(add(1))"].join('\n');
}
