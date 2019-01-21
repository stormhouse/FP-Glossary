import { Component } from '@angular/core';

@Component({
  selector: 'app-applicative-functor',
  template: `
<h1>Applicative Functor</h1>
<p>An applicative functor is an object with an ap function. ap applies a function in the object to a value in another object of the same type.</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
<p>This is useful if you have two objects and you want to apply a binary function to their contents.</p>
<pre><code class="language-javascript">{{code_two}}</code></pre>
<p>This gives you an array of functions that you can call ap on to get the result:</p>
<pre><code class="language-javascript">{{code_three}}</code></pre>
`
})
export class ApplicativeFunctorComponent {
  private code_one: string = [
    '// Implementation',
    'Array.prototype.ap = function (xs) {',
    '  return this.reduce((acc, f) => acc.concat(xs.map(f)), [])',
    '}',
    '',
    '// Example usage',
    ';[(a) => a + 1].ap([1]) // [2]'].join('\n');
  private code_two: string = [
    '// Arrays that you want to combine',
    'const arg1 = [1, 3]',
    'const arg2 = [4, 5]',
    '',
    '// combining function - must be curried for this to work',
    'const add = (x) => (y) => x + y',
    '',
    'const partiallyAppliedAdds = [add].ap(arg1) // [(y) => 1 + y, (y) => 3 + y]',].join('\n');
  private code_three: string =
    'partiallyAppliedAdds.ap(arg2) // [5, 6, 7, 8]'
}


