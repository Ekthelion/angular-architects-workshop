import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [SidebarComponent, NavbarComponent],
  imports: [CommonModule],
  exports: [SidebarComponent, NavbarComponent],
})
export class CoreModule {}
