import { Component } from '@angular/core';

@Component({
  selector: 'app-referential-transparency',
  template: `
<h1>Referential Transparency</h1>
<p>An expression that can be replaced with its value without changing the behavior of the program is said to be referentially transparent.</p>
<p>Say we have function greet:</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
<p>Any invocation of greet() can be replaced with Hello World! hence greet is referentially transparent.</p>
`
})
export class ReferentialTransparencyComponent {
  public code_one: string =
    "const greet = () => 'Hello World!'";
}
