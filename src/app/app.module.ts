import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArityComponent } from './jargon/arity/arity.component';
import { HofComponent } from './jargon/hof/hof.component';
import { CurryingComponent } from './jargon/currying/currying.component';
import { AutoCurryingComponent } from './jargon/auto-currying/auto-currying.component';
import { FunctionCompositionComponent } from './jargon/function-composition/function-composition.component';
import { ContinuationComponent } from './jargon/continuation/continuation.component';
import { PurityComponent } from './jargon/purity/purity.component';
import { SideEffectsComponent } from './jargon/side-effects/side-effects.component';
import { IdempotentComponent } from './jargon/idempotent/idempotent.component';
import { PointFreeStyleComponent } from './jargon/point-free-style/point-free-style.component';
import { PredicateComponent } from './jargon/predicate/predicate.component';
import { ContractsComponent } from './jargon/contracts/contracts.component';
import { CategoryComponent } from './jargon/category/category.component';
import { ValueComponent } from './jargon/value/value.component';
import { ConstantComponent } from './jargon/constant/constant.component';
import { FunctorComponent } from './jargon/functor/functor.component';
import { PointedFunctorComponent } from './jargon/pointed-functor/pointed-functor.component';
import { LiftComponent } from './jargon/lift/lift.component';
import { ReferentialTransparencyComponent } from './jargon/referential-transparency/referential-transparency.component';
import { LambdaComponent } from './jargon/lambda/lambda.component';
import { LambdaCalculusComponent } from './jargon/lambda-calculus/lambda-calculus.component';
import { LazyEvaluationComponent } from './jargon/lazy-evaluation/lazy-evaluation.component';
import { MonoidComponent } from './jargon/monoid/monoid.component';
import { MonadComponent } from './jargon/monad/monad.component';
import { ComonadComponent } from './jargon/comonad/comonad.component';
import { ApplicativeFunctorComponent } from './jargon/applicative-functor/applicative-functor.component';
import { MorphismComponent } from './jargon/morphism/morphism.component';
import { SetoidComponent } from './jargon/setoid/setoid.component';
import { SemigroupComponent } from './jargon/semigroup/semigroup.component';
import { FoldableComponent } from './jargon/foldable/foldable.component';
import { LensComponent } from './jargon/lens/lens.component';
import { TypeSignaturesComponent } from './jargon/type-signatures/type-signatures.component';
import { AlgebraicDataTypeComponent } from './jargon/algebraic-data-type/algebraic-data-type.component';
import { OptionComponent } from './jargon/option/option.component';
import { FunctionComponent } from './jargon/function/function.component';
import { PartialFunctionComponent } from './jargon/partial-function/partial-function.component';
import { PartialApplicationComponent } from './jargon/partial-application/partial-application.component';

@NgModule({
  declarations: [
    AppComponent,
    ArityComponent,
    HofComponent,
    CurryingComponent,
    AutoCurryingComponent,
    FunctionCompositionComponent,
    ContinuationComponent,
    PurityComponent,
    SideEffectsComponent,
    IdempotentComponent,
    PointFreeStyleComponent,
    PredicateComponent,
    ContractsComponent,
    CategoryComponent,
    ValueComponent,
    ConstantComponent,
    FunctorComponent,
    PointedFunctorComponent,
    LiftComponent,
    ReferentialTransparencyComponent,
    LambdaComponent,
    LambdaCalculusComponent,
    LazyEvaluationComponent,
    MonoidComponent,
    MonadComponent,
    ComonadComponent,
    ApplicativeFunctorComponent,
    MorphismComponent,
    SetoidComponent,
    SemigroupComponent,
    FoldableComponent,
    LensComponent,
    TypeSignaturesComponent,
    AlgebraicDataTypeComponent,
    OptionComponent,
    FunctionComponent,
    PartialFunctionComponent,
    PartialApplicationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
