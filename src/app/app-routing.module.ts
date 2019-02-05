import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClocksAndFeedsComponent } from './clocks-and-feeds/clocks-and-feeds.component';
import { InputFormsComponent } from './input-forms/input-forms.component';

const routes: Routes = [
  { path: 'Timing', component: ClocksAndFeedsComponent },
  { path: 'AddTimings', component: InputFormsComponent },
  { path: '**', redirectTo: 'Timing' },   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
