import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArityComponent } from './jargon/arity/arity.component';
import { HOFComponent } from './hof/hof.component';
import { ClosureComponent } from './closure/closure.component';
import { HofComponent } from './jargon/hof/hof.component';
import { PartialComponent } from './jargon/partial/partial.component';
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
import { JargoequationalReasoningComponent } from './jargoequational-reasoning/jargoequational-reasoning.component';
import { EquationalReasoningComponent } from './jarn/equational-reasoning/equational-reasoning.component';
import { LambdaComponent } from './jargon/lambda/lambda.component';
import { LambdaCalculusComponent } from './jargon/lambda-calculus/lambda-calculus.component';
import { LazyEvaluationComponent } from './jargon/lazy-evaluation/lazy-evaluation.component';

@NgModule({
  declarations: [
    AppComponent,
    ArityComponent,
    HOFComponent,
    ClosureComponent,
    HofComponent,
    PartialComponent,
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
    JargoequationalReasoningComponent,
    EquationalReasoningComponent,
    LambdaComponent,
    LambdaCalculusComponent,
    LazyEvaluationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
