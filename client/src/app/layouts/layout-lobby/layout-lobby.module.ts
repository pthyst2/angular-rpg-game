//#region Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutLobbyRoutingModule } from './layout-lobby-routing.module';
//#endregion

//#region Components
import { LayoutLobbyComponent } from './layout-lobby.component';
import { PageWelcomeComponent } from 'src/app/pages/page-welcome/page-welcome.component';
import { ButtonBaseComponent } from 'src/app/buttons/button-base/button-base.component';
//#endregion

@NgModule({
  declarations: [
    LayoutLobbyComponent,
    PageWelcomeComponent,
    ButtonBaseComponent,
  ],
  imports: [CommonModule, LayoutLobbyRoutingModule],
})
export class LayoutLobbyModule {}
