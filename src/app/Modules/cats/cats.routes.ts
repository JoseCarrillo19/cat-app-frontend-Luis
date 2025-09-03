import { BreedsListComponent } from './breeds-list/breeds-list.component';
import { BreedDetailComponent } from './breed-detail/breed-detail.component';
import { BreedTableComponent } from './breed-table/breed-table.component';
import { BreedFilterComponent } from './breed-filter/breed-filter.component';
import { Routes } from '@angular/router';

export const LOGIN_CATS: Routes = [
  { path: 'breeds', component: BreedsListComponent },
      { path: 'breeds/:id', component: BreedDetailComponent },
      { path: 'table', component: BreedTableComponent },
      { path: 'search', component: BreedFilterComponent },
];


