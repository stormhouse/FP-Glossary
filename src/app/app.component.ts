import { Component, AfterViewChecked, OnInit } from '@angular/core';
import { HighlightService } from './highlight.service';

@Component({
  selector: 'app-root',
  template: `<main>
    <app-arity *ngIf="isCurrent(0)"></app-arity>
    <app-hof *ngIf="isCurrent(1)"></app-hof>
    <app-currying *ngIf="isCurrent(2)"></app-currying>
    <app-closure *ngIf="isCurrent(3)"></app-closure>
    <app-auto-currying *ngIf="isCurrent(4)"></app-auto-currying>
    <app-function-composition *ngIf="isCurrent(5)"></app-function-composition>
    <app-continuation *ngIf="isCurrent(6)"></app-continuation>
    <app-purity *ngIf="isCurrent(7)"></app-purity>
    <app-side-effects *ngIf="isCurrent(8)"></app-side-effects>
    <app-idempotent *ngIf="isCurrent(9)"></app-idempotent>
    <app-point-free-style *ngIf="isCurrent(10)"></app-point-free-style>
    <app-predicate *ngIf="isCurrent(11)"></app-predicate>
    <app-contracts *ngIf="isCurrent(12)"></app-contracts>
    <app-category *ngIf="isCurrent(13)"></app-category>
    <app-value *ngIf="isCurrent(14)"></app-value>
    <app-constant *ngIf="isCurrent(15)"></app-constant>
    <app-functor *ngIf="isCurrent(16)"></app-functor>
    <app-pointed-functor *ngIf="isCurrent(17)"></app-pointed-functor>
    <app-lift *ngIf="isCurrent(18)"></app-lift>
    <app-referential-transparency *ngIf="isCurrent(19)"></app-referential-transparency>
    <app-lambda *ngIf="isCurrent(20)"></app-lambda>
    <app-lambda-calculus *ngIf="isCurrent(21)"></app-lambda-calculus>
    <app-lazy-evaluation *ngIf="isCurrent(22)"></app-lazy-evaluation>
    <app-monoid *ngIf="isCurrent(23)"></app-monoid>
    <app-monad *ngIf="isCurrent(24)"></app-monad>
    <app-comonad *ngIf="isCurrent(25)"></app-comonad>
    <app-applicative-functor *ngIf="isCurrent(26)"></app-applicative-functor>
    <app-morphism *ngIf="isCurrent(27)"></app-morphism>
    <app-setoid *ngIf="isCurrent(28)"></app-setoid>
    <app-semigroup *ngIf="isCurrent(29)"></app-semigroup>
    <app-foldable *ngIf="isCurrent(30)"></app-foldable>
    <app-lens *ngIf="isCurrent(31)"></app-lens>
    <app-type-signatures *ngIf="isCurrent(32)"></app-type-signatures>
    <app-algebraic-data-type *ngIf="isCurrent(33)"></app-algebraic-data-type>
    <app-option *ngIf="isCurrent(34)"></app-option>
    <app-function *ngIf="isCurrent(35)"></app-function>
    <app-partial-function *ngIf="isCurrent(36)"></app-partial-function>
    <app-partial-application *ngIf="isCurrent(37)"></app-partial-application>
</main>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  private hightlighted: boolean = false;
  private current: number = Math.floor(Math.random() * 38);

  private isCurrent(i): boolean {
    if (this.current === i) return true;
  }

  constructor(private highlightService: HighlightService) { }

  ngAfterViewChecked() {
    if (!this.hightlighted) {
      this.highlightService.hightlight();
      this.hightlighted = true;
    }
  }
}
