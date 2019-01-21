import { Component } from '@angular/core';

@Component({
  selector: 'app-lens',
  template: `
<h1>Lens</h1>
<p>A lens is a structure (often an object or function) that pairs a getter and a non-mutating setter for some other data structure.</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
<p>Having the pair of get and set for a given data structure enables a few key features.</p>
<pre><code class="language-javascript">{{code_two}}</code></pre>
<p>Lenses are also composable. This allows easy immutable updates to deeply nested data.</p>
<pre><code class="language-javascript">{{code_three}}</code></pre>
`
})
export class LensComponent {
  public code_one: string = [
    "// Using [Ramda's lens](http://ramdajs.com/docs/#lens)",
    "const nameLens = R.lens(",
    "  // getter for name property on an object",
    "  (obj) => obj.name,",
    "  // setter for name property",
    "  (val, obj) => Object.assign({}, obj, {name: val})",
    ")"].join('\n');

  public code_two: string = [
    "const person = {name: 'Gertrude Blanch'}",
    "",
    "// invoke the getter",
    "R.view(nameLens, person) // 'Gertrude Blanch'",
    "",
    "// invoke the setter",
    "R.set(nameLens, 'Shafi Goldwasser', person) // {name: 'Shafi Goldwasser'}",
    "",
    "// run a function on the value in the structure",
    "R.over(nameLens, uppercase, person) // {name: 'GERTRUDE BLANCH'}"].join('\n');

  public code_three: string = [
    "// This lens focuses on the first item in a non-empty array",
    "const firstLens = R.lens(",
    "  // get first item in array",
    "  xs => xs[0],",
    "  // non-mutating setter for first item in array",
    "  (val, [__, ...xs]) => [val, ...xs]",
    ")",
    "",
    "const people = [{name: 'Gertrude Blanch'}, {name: 'Shafi Goldwasser'}]",
    "",
    "// Despite what you may assume, lenses compose left-to-right.",
    "R.over(compose(firstLens, nameLens), uppercase, people) // [{'name': 'GERTRUDE BLANCH'}, {'name': 'Shafi Goldwasser'}]"].join('\n');
}
