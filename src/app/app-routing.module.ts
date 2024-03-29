import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdvancedComponent } from './advanced/advanced.component';
import { AnimationsComponent } from './animations/animations.component';
import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';
import { TestComponent } from './test/test.component';

const appRoutes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'animations', component: AnimationsComponent },
  { path: 'advanced-animations', component: AdvancedComponent },
  { path: 'users', component: UsersComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
