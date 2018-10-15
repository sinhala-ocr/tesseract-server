import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';

import {AppRouting} from './app.routing';

import {OcrService} from './services/ocr.service';
import {DiffService} from './services/diff.service';
import {ImageService} from './services/image.service';
import {ConfusionMatrixService} from './services/confusion-matrix.service';
import {GrammarService} from './services/grammar.service';
import {DocService} from './services/doc.service';

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
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    HttpClientModule,

    BrowserAnimationsModule,

    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatCheckboxModule,
    MatIconModule,
    MatProgressBarModule,
    MatDialogModule,
    MatListModule,

    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [
    OcrService,
    DiffService,
    ImageService,
    ConfusionMatrixService,
    GrammarService,
    DocService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
