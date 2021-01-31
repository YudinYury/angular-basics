import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PostComponent} from './post/post.component';
import { PistComponent } from './pist/pist.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PistComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
