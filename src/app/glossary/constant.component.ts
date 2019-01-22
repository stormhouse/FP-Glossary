import { Component } from '@angular/core';

@Component({
  selector: 'app-constant',
  template: `
<h1>Constant</h1>
<p>A variable that cannot be reassigned once defined.</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
<p>Constants are referentially transparent. That is, they can be replaced with the values that they represent without affecting the result.</p>
<p>With the above two constants the following expression will always return true.</p>
<pre><code class="language-javascript">{{code_two}}</code></pre>
`
})
export class ConstantComponent {
  public code_one: string = [
    'const five = 5',
    "const john = Object.freeze({name: 'John', age: 30})"].join('\n');

  public code_two: string =
    "john.age + five === ({name: 'John', age: 30}).age + (5)";
}
