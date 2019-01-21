import { Component } from '@angular/core';

@Component({
  selector: 'app-morphism',
  template: `
<h1>Morphism</h1>
<p>A transformation function.</p>
<b>Endomorphism</b>
<p>A function where the input type is the same as the output.</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
<b>Isomorphism</b>
<p>A pair of transformations between 2 types of objects that is structural in nature and no data is lost.</p>
<p>For example, 2D coordinates could be stored as an array [2,3] or object {{code_two}}.</p>
<pre><code class="language-javascript">{{code_three}}</code></pre>
`
})
export class MorphismComponent {
  public code_one: string = [
    '// uppercase :: String -> String',
    'const uppercase = (str) => str.toUpperCase()',
    '',
    '// decrement :: Number -> Number',
    'const decrement = (x) => x - 1'].join('\n');

  public code_two: string =
    '{x: 2, y: 3}';

  public code_three: string = [
    '// Providing functions to convert in both directions makes them isomorphic.',
    'const pairToCoords = (pair) => ({x: pair[0], y: pair[1]})',
    '',
    'const coordsToPair = (coords) => [coords.x, coords.y]',
    '',
    'coordsToPair(pairToCoords([1, 2])) // [1, 2]',
    '',
    'pairToCoords(coordsToPair({x: 1, y: 2})) // {x: 1, y: 2}'].join('\n');
}
