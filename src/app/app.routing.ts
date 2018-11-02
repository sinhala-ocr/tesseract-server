import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SignInComponent} from './components/sign-in/sign-in.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {ProfileComponent} from './components/profile/profile.component';
import {PreferencesComponent} from './components/preferences/preferences.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LibraryComponent} from './components/library/library.component';
import {OcrComponent} from './components/ocr/ocr.component';
import {ConfusionMatrixComponent} from './components/confusion-matrix/confusion-matrix.component';
import {ComparisonComponent} from './components/comparison/comparison.component';
import {GrammarComponent} from './components/grammar/grammar.component';
import {TessconfigComponent} from './components/tessconfig/tessconfig.component';


const routes: Routes = [
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignUpComponent},

  {path: 'tessconfig', component: TessconfigComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'preferences', component: PreferencesComponent},

  {path: '', component: OcrComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'ocr', component: OcrComponent},
  {path: 'cmatrix', component: ConfusionMatrixComponent},
  {path: 'comparison', component: ComparisonComponent},
  {path: 'grammar', component: GrammarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRouting {
}
