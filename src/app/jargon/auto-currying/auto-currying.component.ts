import { Component } from '@angular/core';

@Component({
  selector: 'app-auto-currying',
  template: `
<h1>Auto currying</h1>
<p>Transforming a function that takes multiple arguments into one that if given less than its correct number of arguments returns a function that takes the rest. When the function gets the correct number of arguments it is then evaluated.</p>
<p>lodash & Ramda have a curry function that works this way.</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
`
})
export class AutoCurryingComponent {
  private code_one: string = [
    'const add = (x, y) => x + y',
    '',
    'const curriedAdd = _.curry(add)',
    'curriedAdd(1, 2) // 3',
    'curriedAdd(1) // (y) => 1 + y',
    'curriedAdd(1)(2) // 3'].join('\n');
}
