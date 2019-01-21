import { Component } from '@angular/core';

@Component({
  selector: 'app-purity',
  template: `
<h1>Purity</h1>
<p>A function is pure if the return value is only determined by its input values, and does not produce side effects.</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
<p>As opposed to each of the following:</p>
<pre><code class="language-javascript">{{code_two}}</code></pre>
<p>The above example's output is based on data stored outside of the function...</p>
<pre><code class="language-javascript">{{code_three}}</code></pre>
<p>... and this one modifies state outside of the function.</p>
`
})
export class PurityComponent {
  private code_one: string = [
    "const greet = (name) => `Hi, ${name}`",
    "",
    "greet('Brianne') // 'Hi, Brianne'"].join('\n');

  private code_two: string = [
    "window.name = 'Brianne'",
    "",
    "const greet = () => `Hi, ${window.name}`",
    "",
    "greet() // 'Hi, Brianne'"].join('\n');

  private code_three: string = [
    "let greeting",
    "",
    "const greet = (name) => {",
    "  greeting = `Hi, ${name}`",
    "}",
    "",
    "greet('Brianne')",
    "greeting // 'Hi, Brianne'"].join('\n');
}
