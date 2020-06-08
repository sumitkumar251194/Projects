import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceComponent } from './finance/finance.component';
import { DistributionComponent } from './distribution/distribution.component';



@NgModule({
  declarations: [FinanceComponent, DistributionComponent],
  imports: [
    CommonModule
  ],
  exports :[FinanceComponent,DistributionComponent]
})
export class EBSModule { }
