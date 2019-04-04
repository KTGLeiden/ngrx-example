import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appStateReducer, IAppState } from './store';
import { CountEffects } from './store/count/count.effects';
import { AlertComponent } from './alert/alert.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [AppComponent, AlertComponent, SpinnerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot<IAppState>(appStateReducer),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CountEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
