import { Component } from '@angular/core';

@Component({
  selector: 'app-type-signatures',
  template: `
<h1>Type Signatures</h1>
<p>Often functions in JavaScript will include comments that indicate the types of their arguments and return values.</p>
<p>There's quite a bit of variance across the community but they often follow the following patterns:</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
<p>If a function accepts another function as an argument it is wrapped in parentheses.</p>
<pre><code class="language-javascript">{{code_two}}</code></pre>
<p>The letters a, b, c, d are used to signify that the argument can be of any type. The following version of map takes a function that transforms a value of some type a into another type b, an array of values of type a, and returns an array of values of type b.</p>
<pre><code class="language-javascript">{{code_three}}</code></pre>
`
})
export class TypeSignaturesComponent {
  public code_one: string = [
    "// functionName :: firstArgType -> secondArgType -> returnType",
    "",
    "// add :: Number -> Number -> Number",
    "const add = (x) => (y) => x + y",
    "",
    "// increment :: Number -> Number",
    "const increment = (x) => x + 1"].join('\n');

  public code_two: string = [
    '// call :: (a -> b) -> a -> b',
    'const call = (f) => (x) => f(x)'].join('\n');

  public code_three: string = [
    '// map :: (a -> b) -> [a] -> [b]',
    'const map = (f) => (list) => list.map(f)'].join('\n');
}
