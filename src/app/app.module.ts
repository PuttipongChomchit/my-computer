import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//database
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

//router
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//Component
import { SceduleComponent } from './scedule/scedule.component';
import { DataGenshinComponent } from './data-genshin/data-genshin.component';
import { DataBaseElementalComponent } from './data-base-elemental/data-base-elemental.component';
import { BarMenuComponent } from './bar-menu/bar-menu.component';
import { DataSceduleComponent } from './data-scedule/data-scedule.component';
import { TestNewProjectComponent } from './test-new-project/test-new-project.component';
import { DatepikerComponent } from './datepiker/datepiker.component';

@NgModule({
  declarations: [
    AppComponent,
    SceduleComponent,
    DataGenshinComponent,
    DataBaseElementalComponent,
    BarMenuComponent,
    DataSceduleComponent,
    TestNewProjectComponent,
    DatepikerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'scedule', component: SceduleComponent },
      { path: 'data_scedule', component: DataSceduleComponent },
      { path: 'data_genshin', component: DataGenshinComponent },
      { path: 'genshin_base_elemental', component: DataBaseElementalComponent },
      { path: 'test_project', component: TestNewProjectComponent },
      { path: '**', redirectTo: 'scedule', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
