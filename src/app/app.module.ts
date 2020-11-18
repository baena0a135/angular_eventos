import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventShowComponent } from './event-show/event-show.component';
import { FormsModule } from '@angular/forms';
import { EventFilterPipe } from './pipes/event-filter.pipe';
import { EventItemComponent } from './event-item/event-item.component';
import { EventAddComponent } from './event-add/event-add.component';

@NgModule({
  declarations: [
    AppComponent,
    EventShowComponent,
    EventFilterPipe,
    EventItemComponent,
    EventAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
