import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';  
import { NgxFileDropModule } from 'ngx-file-drop';

@NgModule({
  declarations: [
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    NgxFileDropModule
  ],
  exports: [
    FileUploadComponent   // 🔹 başka modüllerde kullanmak için export et
  ]
})
export class FileUploadModule { }
