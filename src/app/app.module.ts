import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {MatDividerModule} from '@angular/material/divider';
// flex layout
import { FlexLayoutModule } from '@angular/flex-layout';

// my component
import { PeopleListComponent } from './people-list/people-list.component';
import { PlanetsComponent } from './planets/planets.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PlanetsComponent,
    PeopleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	FormsModule,
	// angular material
	BrowserAnimationsModule,
	ScrollDispatchModule,
	MatDividerModule,
	// flex layout
	FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
