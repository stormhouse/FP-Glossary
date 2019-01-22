import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArityComponent } from './glossary/arity.component';
import { HofComponent } from './glossary/hof.component';
import { CurryingComponent } from './glossary/currying.component';
import { AutoCurryingComponent } from './glossary/auto-currying.component';
import { FunctionCompositionComponent } from './glossary/function-composition.component';
import { ContinuationComponent } from './glossary/continuation.component';
import { PurityComponent } from './glossary/purity.component';
import { SideEffectsComponent } from './glossary/side-effects.component';
import { IdempotentComponent } from './glossary/idempotent.component';
import { PointFreeStyleComponent } from './glossary/point-free-style.component';
import { PredicateComponent } from './glossary/predicate.component';
import { ContractsComponent } from './glossary/contracts.component';
import { CategoryComponent } from './glossary/category.component';
import { ValueComponent } from './glossary/value.component';
import { ConstantComponent } from './glossary/constant.component';
import { FunctorComponent } from './glossary/functor.component';
import { PointedFunctorComponent } from './glossary/pointed-functor.component';
import { LiftComponent } from './glossary/lift.component';
import { ReferentialTransparencyComponent } from './glossary/referential-transparency.component';
import { LambdaComponent } from './glossary/lambda.component';
import { LambdaCalculusComponent } from './glossary/lambda-calculus.component';
import { LazyEvaluationComponent } from './glossary/lazy-evaluation.component';
import { MonoidComponent } from './glossary/monoid.component';
import { MonadComponent } from './glossary/monad.component';
import { ComonadComponent } from './glossary/comonad.component';
import { ApplicativeFunctorComponent } from './glossary/applicative-functor.component';
import { MorphismComponent } from './glossary/morphism.component';
import { SetoidComponent } from './glossary/setoid.component';
import { SemigroupComponent } from './glossary/semigroup.component';
import { FoldableComponent } from './glossary/foldable.component';
import { LensComponent } from './glossary/lens.component';
import { TypeSignaturesComponent } from './glossary/type-signatures.component';
import { AlgebraicDataTypeComponent } from './glossary/algebraic-data-type.component';
import { OptionComponent } from './glossary/option.component';
import { FunctionComponent } from './glossary/function.component';
import { PartialFunctionComponent } from './glossary/partial-function.component';
import { PartialApplicationComponent } from './glossary/partial-application.component';
import { ClosureComponent } from './glossary/closure.component';
import { EquationalReasoningComponent } from './glossary/equational-reasoning.component';

@NgModule({
  declarations: [
    AppComponent,
    ArityComponent,
    HofComponent,
    CurryingComponent,
    ClosureComponent,
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
    EquationalReasoningComponent,
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
