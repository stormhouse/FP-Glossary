import { Component } from '@angular/core';

@Component({
  selector: 'app-arity',
  template: `
<h1>Arity</h1>
<p>The number of arguments a function takes. From words like unary, binary, ternary, etc. This word has the distinction of being composed of two suffixes, "-ary" and "-ity." Addition, for example, takes two arguments, and so it is defined as a binary function or a function with an arity of two. Such a function may sometimes be called "dyadic" by people who prefer Greek roots to Latin. Likewise, a function that takes a variable number of arguments is called "variadic," whereas a binary function must be given two and only two arguments, currying and partial application notwithstanding (see below).</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
`
})
export class ArityComponent {
  public code_one: string = [
    'const sum = (a, b) => a + b ',
    '',
    'const arity = sum.length',
    'console.log(arity) // 2',
    '',
    '// The arity of sum is 2'].join('\n');
}
