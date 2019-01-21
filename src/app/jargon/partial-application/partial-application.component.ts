import { Component } from '@angular/core';

@Component({
  selector: 'app-partial-application',
  template: `
<h1>Partial Application</h1>
<p>Partially applying a function means creating a new function by pre-filling some of the arguments to the original function.</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
<p>You can also use Function.prototype.bind to partially apply a function in JS:</p>
<pre><code class="language-javascript">{{code_two}}</code></pre>
<p>Partial application helps create simpler functions from more complex ones by baking in data when you have it. Curried functions are automatically partially applied.</p>
`
})
export class PartialApplicationComponent {
  private code_one: string = [
    "// Helper to create partially applied functions",
    "// Takes a function and some arguments",
    "const partial = (f, ...args) =>",
    "  // returns a function that takes the rest of the arguments",
    "  (...moreArgs) =>",
    "    // and calls the original function with all of them",
    "    f(...args, ...moreArgs)",
    "",
    "// Something to apply",
    "const add3 = (a, b, c) => a + b + c",
    "",
    "// Partially applying `2` and `3` to `add3` gives you a one-argument function",
    "const fivePlus = partial(add3, 2, 3) // (c) => 2 + 3 + c",
    "",
    "fivePlus(4) // 9"].join('\n');

  private code_two: string =
    'const add1More = add3.bind(null, 2, 3) // (c) => 2 + 3 + c';
}
