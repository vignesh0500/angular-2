import { Component } from '@angular/core';
import { SafeValue } from '@angular/platform-browser';
@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent {
  
  qrdata='';
  qrCodeDownloadLink: SafeValue = "";
  onChangeURL(url: SafeValue) {
    this.qrCodeDownloadLink = url;
  }
  // generateQR(){
  //  this.qrImage ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+this.qrText  
  // }
  // qrText: string = '';
  
  // get qrImage(): string {
  //   return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${this.qrText}`;
  // }
}
