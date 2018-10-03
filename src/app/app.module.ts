import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material';

import {AppRouting} from './app.routing';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {LibraryComponent} from './components/library/library.component';
import {OcrComponent} from './components/ocr/ocr.component';
import {GrammarComponent} from './components/grammar/grammar.component';
import {ConfusionMatrixComponent} from './components/confusion-matrix/confusion-matrix.component';
import {ComparisonComponent} from './components/comparison/comparison.component';
import {PreferencesComponent} from './components/preferences/preferences.component';
import {ProfileComponent} from './components/profile/profile.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {OcrTaskListComponent} from './components/ocr-task-list/ocr-task-list.component';
import {OcrTaskListItemComponent} from './components/ocr-task-list-item/ocr-task-list-item.component';

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
    DashboardComponent,
    OcrTaskListComponent,
    OcrTaskListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,

    BrowserAnimationsModule,

    MatButtonModule,

    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
