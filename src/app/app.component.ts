import { Component, AfterViewChecked, OnInit } from '@angular/core';
import { HighlightService } from './highlight.service';

@Component({
  selector: 'app-root',
  template: `<main>

    <app-arity *ngIf="this.current === 0"></app-arity>
    <app-hof *ngIf="this.current === 1"></app-hof>
    <app-currying *ngIf="this.current === 2"></app-currying>
    <app-closure *ngIf="this.current === 3"></app-closure>
    <app-auto-currying *ngIf="this.current === 4"></app-auto-currying>
    <app-function-composition *ngIf="this.current === 5"></app-function-composition>
    <app-continuation *ngIf="this.current === 6"></app-continuation>
    <app-purity *ngIf="this.current === 7"></app-purity>
    <app-side-effects *ngIf="this.current === 8"></app-side-effects>
    <app-idempotent *ngIf="this.current === 9"></app-idempotent>
    <app-point-free-style *ngIf="this.current === 10"></app-point-free-style>
    <app-predicate *ngIf="this.current === 11"></app-predicate>
    <app-contracts *ngIf="this.current === 12"></app-contracts>
    <app-category *ngIf="this.current === 13"></app-category>
    <app-value *ngIf="this.current === 14"></app-value>
    <app-constant *ngIf="this.current === 15"></app-constant>
    <app-functor *ngIf="this.current === 16"></app-functor>
    <app-pointed-functor *ngIf="this.current === 17"></app-pointed-functor>
    <app-lift *ngIf="this.current === 18"></app-lift>
    <app-referential-transparency *ngIf="this.current === 19"></app-referential-transparency>
    <app-lambda *ngIf="this.current === 20"></app-lambda>
    <app-lambda-calculus *ngIf="this.current === 21"></app-lambda-calculus>
    <app-lazy-evaluation *ngIf="this.current === 22"></app-lazy-evaluation>
    <app-monoid *ngIf="this.current === 23"></app-monoid>
    <app-monad *ngIf="this.current === 24"></app-monad>
    <app-comonad *ngIf="this.current === 25"></app-comonad>
    <app-applicative-functor *ngIf="this.current === 26"></app-applicative-functor>
    <app-morphism *ngIf="this.current === 27"></app-morphism>
    <app-setoid *ngIf="this.current === 28"></app-setoid>
    <app-semigroup *ngIf="this.current === 29"></app-semigroup>
    <app-foldable *ngIf="this.current === 30"></app-foldable>
    <app-lens *ngIf="this.current === 31"></app-lens>
    <app-type-signatures *ngIf="this.current === 32"></app-type-signatures>
    <app-algebraic-data-type *ngIf="this.current === 33"></app-algebraic-data-type>
    <app-option *ngIf="this.current === 34"></app-option>
    <app-function *ngIf="this.current === 35"></app-function>
    <app-partial-function *ngIf="this.current === 36"></app-partial-function>
    <app-partial-application *ngIf="this.current === 37"></app-partial-application>

</main>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  private hightlighted: boolean = false;
  private current: number = Math.floor(Math.random() * 38);

  constructor(private highlightService: HighlightService) { }

  ngAfterViewChecked() {
    if (!this.hightlighted) {
      this.highlightService.hightlight();
      this.hightlighted = true;
    }
  }
}
