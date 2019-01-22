import { Component } from '@angular/core';

@Component({
  selector: 'app-option',
  template: `
<h1>Option</h1>
<p>Option is a sum type with two cases often called Some and None.</p>
<p>Option is useful for composing functions that might not return a value.</p>
<pre><code class="language-javascript">{{code_one}}</code></pre>
<p>Use chain to sequence functions that return Options</p>
<pre><code class="language-javascript">{{code_two}}</code></pre>
<p>Option is also known as Maybe. Some is sometimes called Just. None is sometimes called Nothing.</p>
`
})
export class OptionComponent {
  public code_one: string = [
    "// Naive definition",
    "",
    "const Some = (v) => ({",
    "  val: v,",
    "  map (f) {",
    "    return Some(f(this.val))",
    "  },",
    "  chain (f) {",
    "    return f(this.val)",
    "  }",
    "})",
    "",
    "const None = () => ({",
    "  map (f) {",
    "    return this",
    "  },",
    "  chain (f) {",
    "    return this",
    "  }",
    "})",
    "",
    "// maybeProp :: (String, {a}) -> Option a",
    "const maybeProp = (key, obj) => typeof obj[key] === 'undefined' ? None() : Some(obj[key])"].join('\n');

  public code_two: string = [
    "// getItem :: Cart -> Option CartItem",
    "const getItem = (cart) => maybeProp('item', cart)",
    "",
    "// getPrice :: Item -> Option Number",
    "const getPrice = (item) => maybeProp('price', item)",
    "",
    "// getNestedPrice :: cart -> Option a",
    "const getNestedPrice = (cart) => getItem(cart).chain(getPrice)",
    "",
    "getNestedPrice({}) // None()",
    "getNestedPrice({item: {foo: 1}}) // None()",
    "getNestedPrice({item: {price: 9.99}}) // Some(9.99)"].join('\n');
}
