import { Component } from '@angular/core';

@Component({
  selector: 'app-lift',
  template: `
<h1>Lift</h1>
<p>Lifting is when you take a value and put it into an object like a functor. If you lift a function into an Applicative Functor then you can make it work on values that are also in that functor.</p>
<p>Some implementations have a function called lift, or liftA2 to make it easier to run functions on functors.</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
<p>Lifting a one-argument function and applying it does the same thing as map.</p>
<pre><code class="language-javascript">{{code_two}}</code></pre>
`
})
export class LiftComponent {
  public code_one: string = [
    "const liftA2 = (f) => (a, b) => a.map(f).ap(b) // note it's `ap` and not `map`.",
    "",
    "const mult = a => b => a * b",
    "",
    "const liftedMult = liftA2(mult) // this function now works on functors like array",
    "",
    "liftedMult([1, 2], [3]) // [3, 6]",
    "liftA2(a => b => a + b)([1, 2], [3, 4]) // [4, 5, 5, 6]"].join('\n');

  public code_two: string = [
    "const increment = (x) => x + 1",
    "",
    "lift(increment)([2]) // [3]",
    ";[2].map(increment) // [3]"].join('\n');
}
