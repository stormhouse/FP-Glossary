import { Component } from '@angular/core';

@Component({
  selector: 'app-contracts',
  template: `
<h1>Contracts</h1>
<p>A contract specifies the obligations and guarantees of the behavior from a function or expression at runtime. This acts as a set of rules that are expected from the input and output of a function or expression, and errors are generally reported whenever a contract is violated.</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
`
})
export class ContractsComponent {
  private code_one: string = [
    "// Define our contract : int -> in'",
    'const contract = (input) => {',
    "  if (typeof input === 'number') return true",
    "    throw new Error('Contract violated: expected int -> int')",
    '  }',
    '}',
    '',
    'const addOne = (num) => contract(num) && num + 1',
    '',
    'addOne(2) // 3',
    "addOne('some string') // Contract violated: expected int -> int"].join('\n');
}
