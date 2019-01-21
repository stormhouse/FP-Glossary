import { Component } from '@angular/core';

@Component({
  selector: 'app-algebraic-data-type',
  template: `
<h1>Algebraic data type</h1>
<p>A composite type made from putting other types together. Two common classes of algebraic types are sum and product.</p>
<h2>Sum type</h2>
<p>A Sum type is the combination of two types together into another one. It is called sum because the number of possible values in the result type is the sum of the input types.</p>
<p>JavaScript doesn't have types like this but we can use Sets to pretend:</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
<p>Sum types are sometimes called union types, discriminated unions, or tagged unions.</p>
<p>Flow includes union types and TypeScript has Enums to serve the same role.</p>
<h2>Product type</h2>
<p>A product type combines types together in a way you're probably more familiar with:</p>
<pre><code class="language-javascript">{{code_two}}</code></pre>
<p>It's called a product because the total possible values of the data structure is the product of the different values. Many languages have a tuple type which is the simplest formulation of a product type.</p>
<p>See also <a href="https://en.wikipedia.org/wiki/Set_theory" target="_blank">Set theory</a>.</p>
`
})
export class AlgebraicDataTypeComponent {
  private code_one: string = [
    '// imagine that rather than sets here we have types that can only have these values',
    'const bools = new Set([true, false])',
    "const halfTrue = new Set(['half - true'])",
    '',
    '// The weakLogic type contains the sum of the values from bools and halfTrue',
    'const weakLogicValues = new Set([...bools, ...halfTrue])'].join('\n');
  private code_two: string = [
    '// point :: (Number, Number) -> {x: Number, y: Number}',
    'const point = (x, y) => ({ x, y })'].join('\n');
}

