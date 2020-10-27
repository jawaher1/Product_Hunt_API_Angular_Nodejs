import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '@core';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';


import { ChartsModule } from 'ng2-charts';
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    //IconPieChart,
  
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MultiSelectAllModule,
    DatePickerModule,
    ChartsModule
  ],
  declarations: [DashboardComponent],
})
export class PagesModule {}
