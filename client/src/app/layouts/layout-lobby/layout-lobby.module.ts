import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutLobbyRoutingModule } from './layout-lobby-routing.module';
import { LayoutLobbyComponent } from './layout-lobby.component';
import { PageWelcomeComponent } from 'src/app/pages/page-welcome/page-welcome.component';
@NgModule({
  declarations: [LayoutLobbyComponent, PageWelcomeComponent],
  imports: [CommonModule, LayoutLobbyRoutingModule],
})
export class LayoutLobbyModule {}
