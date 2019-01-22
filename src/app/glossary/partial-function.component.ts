import { Component } from '@angular/core';

@Component({
  selector: 'app-partial-function',
  template: `
<h1>Partial function</h1>
<p>A partial function is a function which is not defined for all arguments - it might return an unexpected result or may never terminate. Partial functions add cognitive overhead, they are harder to reason about and can lead to runtime errors. Some examples:</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
<h2>Dealing with partial functions</h2>
<p>Partial functions are dangerous as they need to be treated with great caution. You might get an unexpected (wrong) result or run into runtime errors. Sometimes a partial function might not return at all. Being aware of and treating all these edge cases accordingly can become very tedious. Fortunately a partial function can be converted to a regular (or total) one. We can provide default values or use guards to deal with inputs for which the (previously) partial function is undefined. Utilizing the Option type, we can yield either Some(value) or None where we would otherwise have behaved unexpectedly:</p>
<pre><code class="language-javascript">{{code_two}}</code></pre>
<p>Making your partial functions total ones, these kinds of runtime errors can be prevented. Always returning a value will also make for code that is both easier to maintain as well as to reason about.</p>
`
})
export class PartialFunctionComponent {
  public code_one: string = [
    "// example 1: sum of the list",
    "// sum :: [Number] -> Number",
    "const sum = arr => arr.reduce((a, b) => a + b)",
    "sum([1, 2, 3]) // 6",
    "sum([]) // TypeError: Reduce of empty array with no initial value",
    "",
    "// example 2: get the first item in list",
    "// first :: [A] -> A",
    "const first = a => a[0]",
    "first([42]) // 42",
    "first([]) // undefined",
    "//or even worse:",
    "first([[42]])[0] // 42",
    "first([])[0] // Uncaught TypeError: Cannot read property '0' of undefined",
    "",
    "// example 3: repeat function N times",
    "// times :: Number -> (Number -> Number) -> Number",
    "const times = n => fn => n && (fn(n), times(n - 1)(fn))",
    "times(3)(console.log)",
    "// 3",
    "// 2",
    "// 1",
    "times(-1)(console.log)",
    "// RangeError: Maximum call stack size exceeded"].join('\n');

  public code_two: string = [
    "// example 1: sum of the list",
    "// we can provide default value so it will always return result",
    "// sum :: [Number] -> Number",
    "const sum = arr => arr.reduce((a, b) => a + b, 0)",
    "sum([1, 2, 3]) // 6",
    "sum([]) // 0",
    "",
    "// example 2: get the first item in list",
    "// change result to Option",
    "// first :: [A] -> Option A",
    "const first = a => a.length ? Some(a[0]) : None()",
    "first([42]).map(a => console.log(a)) // 42",
    "first([]).map(a => console.log(a)) // console.log won't execute at all",
    "//our previous worst case",
    "first([[42]]).map(a => console.log(a[0])) // 42",
    "first([]).map(a => console.log(a[0])) // won't execte, so we won't have error here",
    "// more of that, you will know by function return type (Option)",
    "// that you should use `.map` method to access the data and you will never forget",
    "// to check your input because such check become built-in into the function",
    "",
    "// example 3: repeat function N times",
    "// we should make function always terminate by changing conditions:",
    "// times :: Number -> (Number -> Number) -> Number",
    "const times = n => fn => n > 0 && (fn(n), times(n - 1)(fn))",
    "times(3)(console.log)",
    "// 3",
    "// 2",
    "// 1",
    "times(-1)(console.log)",
    "// won't execute anything"].join('\n');
}
