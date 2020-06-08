import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESAComponent } from './resa/resa.component';
import { RPMComponent } from './rpm/rpm.component';



@NgModule({
  declarations: [RESAComponent, RPMComponent],
  imports: [
    CommonModule
  ],
  exports : [RESAComponent, RPMComponent]
})
export class RMSModule { }
