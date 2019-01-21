import { Component } from '@angular/core';

@Component({
  selector: 'app-continuation',
  template: `
<h1>Continuation</h1>
<p>At any given point in a program, the part of the code that's yet to be executed is known as a continuation.</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
<p>Continuations are often seen in asynchronous programming when the program needs to wait to receive data before it can continue. The response is often passed off to the rest of the program, which is the continuation, once it's been received.</p>
<pre><code class="language-javascript">{{code_two}}</code></pre>
`
})
export class ContinuationComponent {
  public code_one: string = [
    'const printAsString = (num) => console.log(`Given ${num}`)',
    '',
    'const addOneAndContinue = (num, cc) => {',
    '  const result = num + 1',
    '  cc(result)',
    '}',
    '',
    "addOneAndContinue(2, printAsString) // 'Given 3'"].join('\n');

  public code_two: string = [
    'const continueProgramWith = (data) => {',
    '  // Continues program with data',
    '}',
    '',
    "readFileAsync('path / to / file', (err, response) => {",
    '  if (err) {',
    '    // handle error',
    '    return',
    '  }',
    '  continueProgramWith(response)',
    '})'].join('\n');
}
