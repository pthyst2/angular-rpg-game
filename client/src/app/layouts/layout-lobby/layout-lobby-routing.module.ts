import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutLobbyComponent } from './layout-lobby.component';
import { PageWelcomeComponent } from 'src/app/pages/page-welcome/page-welcome.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutLobbyComponent,
    children: [
      {
        path: '',
        component: PageWelcomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutLobbyRoutingModule {}
