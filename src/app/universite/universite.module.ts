import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversiteRoutingModule } from './universite-routing.module';
import { ListUnivComponent } from './list-univ/list-univ.component';
import { AddUnivComponent } from './add-univ/add-univ.component';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from "@angular/forms";
import { ProductService } from '../productservice';

import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {HttpClientModule} from "@angular/common/http";
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [

    ListUnivComponent,
    AddUnivComponent
  ],
  imports: [
    CommonModule,
    UniversiteRoutingModule,
    ButtonModule,
    FormsModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,  FileUploadModule,
    HttpClientModule,

    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,ScrollingModule
  ],
  providers: [ProductService, MessageService, ConfirmationService]
})
export class UniversiteModule { }
