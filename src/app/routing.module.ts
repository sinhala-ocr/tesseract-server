import {NgModule}                 from '@angular/core'
import {RouterModule, Routes}     from '@angular/router'
import {SignInComponent}          from './sign-in/sign-in.component'
import {SignUpComponent}          from './sign-up/sign-up.component'
import {ProfileComponent}         from './profile/profile.component'
import {PreferencesComponent}     from './preferences/preferences.component'
import {DashboardComponent}       from './dashboard/dashboard.component'
import {LibraryComponent}         from './library/library.component'
import {OcrComponent}             from './ocr/ocr.component'
import {ConfusionMatrixComponent} from './confusion-matrix/confusion-matrix.component'
import {ComparisonComponent}      from './comparison/comparison.component'
import {GrammarComponent}         from './grammar/grammar.component'


const routes: Routes = [
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignUpComponent},

  {path: 'profile', component: ProfileComponent},
  {path: 'preferences', component: PreferencesComponent},

  {path: 'dashboard', component: DashboardComponent},
  {path: '', component: DashboardComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'ocr', component: OcrComponent},
  {path: 'cmatrix', component: ConfusionMatrixComponent},
  {path: 'comparison', component: ComparisonComponent},
  {path: 'grammar', component: GrammarComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {
}
