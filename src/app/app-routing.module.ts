import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component'
import { ExploreComponent } from './explore/explore.component'

const routes: Routes = [
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: "explore",
    component: ExploreComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
