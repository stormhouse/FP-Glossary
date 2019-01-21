import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  template: `
<h1>Category</h1>
<p>A category in category theory is a collection of objects and morphisms between them. In programming, typically types act as the objects and functions as morphisms.</p>
<p>To be a valid category 3 rules must be met:</p>
<ol>
<li>There must be an identity morphism that maps an object to itself. Where a is an object in some category, there must be a function from a -> a.</li>
<li>Morphisms must compose. Where a, b, and c are objects in some category, and f is a morphism from a -> b, and g is a morphism from b -> c; g(f(x)) must be equivalent to (g • f)(x).</li>
<li>Composition must be associative f • (g • h) is the same as (f • g) • h</li>
<p>Since these rules govern composition at very abstract level, category theory is great at uncovering new ways of composing things.</p>
</ol>`
})
export class CategoryComponent { }
