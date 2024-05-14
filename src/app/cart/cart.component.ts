import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Data, DataAndImageUrl, prodect } from '../app.component.models';
import { ButtonModule } from 'primeng/button';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ButtonModule, NgClass],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  @Input() prodect: prodect = {} as prodect;
  @Output() removeProdectEvent = new EventEmitter<prodect>();
  @Output() updateProdectEvent = new EventEmitter<prodect>();

  handelRemoveProdect(): void {
    console.log('AHNAD MOHASEN');
    this.removeProdectEvent.emit(this.prodect);
  }

  data : DataAndImageUrl = {
    text1: '',
    text3: '',
    selectedItem: 'man',
    imageUrl:""
  };



  isDialogOpenUpdate:boolean = false
  isDailogDelete: boolean = false;
  handelOpenDailogDelete() {
    this.isDailogDelete = true;
  }
  handelCloseDailogDelete() {
    this.isDailogDelete = false;
  }
  handelOpenDailogUpdate(){
    this.isDialogOpenUpdate= true
  }
  handelCloseDailogUpdate(){
    this.isDialogOpenUpdate = false
  }

  onTextFieldChange(event:any){
    this.data.text1 = event.target.value
  }



  onTextFieldChange3(event:any){
    this.data.text3 = event.target.value
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.data.imageUrl = reader.result as string;
      };
    }
  }

  onSelectChange(event:any){
    this.data.selectedItem = event.target.value
  }

  checkEmpty(...str:string[]) {
    for (let i = 0; i < str.length; i++) {
      if (typeof str[i] === 'string' && str[i].trim() === '') {
        return true;
      }
    }
    return false;
  }

  handelUpdateProdect(event:any) {
    event.preventDefault()
    this.updateProdectEvent.emit({
      id:this.prodect.id,
      title: this.data.text1,
      body: this.data.selectedItem,
      img: this.data.imageUrl,
      price: this.data.text3,
      catgure: this.data.selectedItem,
    });
    this.isDialogOpenUpdate = false
    this.data.text1 = ''
    this.data.text3 = ''
    this.data.imageUrl = ''
  }

  
}
