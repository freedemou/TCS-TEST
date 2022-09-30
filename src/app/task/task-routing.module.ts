import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskContentComponent } from './task-content/task-content.component';

const routes: Routes = [
  {
    path: '',
    component: TaskContentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class TaskRoutingModule {}
