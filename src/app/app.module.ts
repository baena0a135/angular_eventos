import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductEventComponent } from './product-event/product-event.component';
import { FormsModule } from '@angular/forms';
import { EventFilterPipe } from './pipes/event-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductEventComponent,
    EventFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
