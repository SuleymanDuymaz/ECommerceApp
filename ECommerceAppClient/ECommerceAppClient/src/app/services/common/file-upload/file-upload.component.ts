import { Component, Input } from '@angular/core';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { HttpClientService } from '../http-client.service';
import { AlertifyService, MessageType, Position } from '../../admin/alertify.service';
import { CustomToastrService, ToastrMessasgeType, ToastrPosition } from '../../ui/custom-toastr.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { SpinnerType } from '../../../base/base.component';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  constructor(
    private httpClientService: HttpClientService,
    private alertifyService: AlertifyService,
    private customToastrService: CustomToastrService,
    private spinner: NgxSpinnerService) { }

  public files: NgxFileDropEntry[];

  @Input() options: Partial<FileUploadOptions>;

  public selectedFiles(files: NgxFileDropEntry[]) {
    this.files = files;
    const fileData: FormData = new FormData();

    for (const file of files) {
      (file.fileEntry as FileSystemFileEntry).file((_file: File) => {
        fileData.append(_file.name, _file, file.relativePath);
      });
    }

  this.spinner.show("allPage")

    this.httpClientService.post({
      controller: this.options.controller,
      action: this.options.action,
      queryString: this.options.queryString,
      headers: new HttpHeaders({ "responseType": "blob" })
    }, fileData).subscribe(data => {

      const message: string = "Dosyalar başarıyla yüklenmiştir.";
      this.spinner.hide(SpinnerType.BallScaleMultiple);

      if (this.options.isAdminPage) {
       this.alertifyService.message(message,{
       messageType: MessageType.Success,
       position:Position.TopRight

       })
          
      } else {
        this.customToastrService.message(message, "Başarılı.", {
          messageType:ToastrMessasgeType.Success,
          position: ToastrPosition.TopRight
        })
      }

    }, (errorResponse: HttpErrorResponse) => {
      const message: string = "Dosyalar yüklenirken beklenmeyen bir hatayla karşılaşılmıştır.";
      this.spinner.hide(SpinnerType.BallScaleMultiple);

      if (this.options.isAdminPage) {
        this.alertifyService.message(message,
          {
            
            messageType: MessageType.Error,
            position: Position.TopRight
          })
      } else {
        this.customToastrService.message(message, "Başarsız.", {
          messageType: ToastrMessasgeType.Error,
          position: ToastrPosition.TopRight
        })
      }
    });
  }
}

export class FileUploadOptions {
  controller?: string;
  action?: string;
  queryString?: string;
  explanation?: string;
  accept?: string;
  isAdminPage?: boolean = false;
}
