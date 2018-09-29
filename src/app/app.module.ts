import {BrowserModule}           from '@angular/platform-browser'
import {NgModule}                from '@angular/core'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {MatButtonModule} from '@angular/material'

import {RoutingModule} from './routing.module'

import {AppComponent}             from './app.component'
import {HeaderComponent}          from './header/header.component'
import {FooterComponent}          from './footer/footer.component'
import {SidebarComponent}         from './sidebar/sidebar.component'
import {LibraryComponent}         from './library/library.component'
import {OcrComponent}             from './ocr/ocr.component'
import {GrammarComponent}         from './grammar/grammar.component'
import {ConfusionMatrixComponent} from './confusion-matrix/confusion-matrix.component'
import {ComparisonComponent}      from './comparison/comparison.component'
import {PreferencesComponent}     from './preferences/preferences.component'
import {ProfileComponent}         from './profile/profile.component'
import {SignInComponent}          from './sign-in/sign-in.component'
import {SignUpComponent}          from './sign-up/sign-up.component'
import {DashboardComponent}       from './dashboard/dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LibraryComponent,
    OcrComponent,
    GrammarComponent,
    ConfusionMatrixComponent,
    ComparisonComponent,
    PreferencesComponent,
    ProfileComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent
  ],
  imports     : [
    BrowserModule,
    RoutingModule,

    BrowserAnimationsModule,

    MatButtonModule
  ],
  providers   : [],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
