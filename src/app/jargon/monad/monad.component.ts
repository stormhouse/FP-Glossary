import { Component } from '@angular/core';

@Component({
  selector: 'app-monad',
  template: `
<h1>Monad</h1>
<p>A monad is an object with of and chain functions. chain is like map except it un-nests the resulting nested object.</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
<p>of is also known as return in other functional languages. chain is also known as flatmap and bind in other languages.</p>
`
})
export class MonadComponent {
  private code_one: string = [
    "// Implementation",
    "Array.prototype.chain = function (f) {",
    "  return this.reduce((acc, it) => acc.concat(f(it)), [])",
    "}",
    "",
    "// Usage",
    "Array.of('cat,dog', 'fish,bird').chain((a) => a.split(',')) // ['cat', 'dog', 'fish', 'bird']",
    "",
    "// Contrast to map",
    "Array.of('cat,dog', 'fish,bird').map((a) => a.split(',')) // [['cat', 'dog'], ['fish', 'bird']]"].join('\n');
}
