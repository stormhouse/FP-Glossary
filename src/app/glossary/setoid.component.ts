import { Component } from '@angular/core';

@Component({
  selector: 'app-setoid',
  template: `
<h1>Setoid</h1>
<p>An object that has an equals function which can be used to compare other objects of the same type.</p>
<p>Make array a setoid:</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
`
})
export class SetoidComponent {
  public code_one: string = [
    "Array.prototype.equals = function (arr) {",
    "  const len = this.length",
    "  if (len !== arr.length) {",
    "    return false",
    "  }",
    "  for (let i = 0; i < len; i++) {",
    "    if (this[i] !== arr[i]) {",
    "      return false",
    "    }",
    "  }",
    "  return true",
    "}",
    "",
    ";[1, 2].equals([1, 2]) // true",
    ";[1, 2].equals([0]) // false"].join('\n');
}
