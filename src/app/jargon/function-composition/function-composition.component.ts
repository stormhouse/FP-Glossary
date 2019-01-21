import { Component } from '@angular/core';

@Component({
  selector: 'app-function-composition',
  template: `
<h1>Function Composition</h1>
<p>The act of putting two functions together to form a third function where the output of one function is the input of the other.</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
`
})
export class FunctionCompositionComponent {
  public code_one: string = [
    "const compose = (f, g) => (a) => f(g(a)) // Definition",
    "const floorAndToString = compose((val) => val.toString(), Math.floor) // Usage",
    "floorAndToString(121.212121) // '121'"].join('\n');
}
