import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Data, prodect } from '../app.component.models';
import { ButtonModule } from 'primeng/button';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModelsComponent } from '../models/models.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ButtonModule, NgClass, FormsModule, ModelsComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  data: Data = {
    text1: '',
    text3: '',
    selectedItem: 'man',
    imageUrl: '',
  };

  @Input() prodect: prodect = {} as prodect;
  @Output() removeProdectEvent = new EventEmitter<prodect>();
  @Output() updateProdectEvent = new EventEmitter<prodect>();

  handelRemoveProdect(): void {
    this.removeProdectEvent.emit(this.prodect);
  }

  isDailogDelete: boolean = false;
  handelOpenDailogDelete() {
    this.isDailogDelete = true;
  }
  handelCloseDailogDelete() {
    this.isDailogDelete = false;
  }

  isDialogOpen = false;
  handelOpenDailog(): void {
    this.isDialogOpen = true;
  }

  closeDialog() {
    this.isDialogOpen = false;
  }

  updataProdect(event: Data) {
   let updateData:prodect = {
      id: this.prodect.id,
      title: event.text1,
      body: event.selectedItem,
      catgure: event.selectedItem,
      img: event.imageUrl,
      price: event.text3,
    };
    this.updateProdectEvent.emit(updateData);
  }

  // uploadFile(event:Data){
  //   this.data.text1 = event.text1
  //   this.data.text3 = event.text3
  //   this.data.selectedItem = event.selectedItem
  //   this.data.imageUrl = event.imageUrl

  // }

  // handelUpdateProdect(event:any) {
  //   event.preventDefault()
  //   this.updateProdectEvent.emit({
  //     id:this.prodect.id,
  //     title: this.data.text1,
  //     body: this.data.selectedItem,
  //     img: this.data.imageUrl,
  //     price: this.data.text3,
  //     catgure: this.data.selectedItem,
  //   });

  //   this.data.text1 = ''
  //   this.data.text3 = ''
  //   this.data.imageUrl = ''
  // }
}
