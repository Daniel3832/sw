import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PlanetsComponent } from './planets/planets.component';

const routes: Routes = [
	{ path: '',  pathMatch: 'full', redirectTo: 'people' },
	{ path: 'people', component: PeopleListComponent, children: [{ path: ':name', component: PeopleDetailsComponent }] },
	{ path: 'planets', component: PlanetsComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
