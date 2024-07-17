import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { prodect } from './app.component.models';
import { CartComponent } from './cart/cart.component';
import { Data } from './app.component.models';
import uuid4 from 'uuid4';
import {  NgClass } from '@angular/common';
import { ModelsComponent } from './models/models.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CartComponent,
    ModelsComponent,
    NgClass,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  filterDataWoman: any[] = [];
  filterDataMan: any[] = [];
  filterDataAll: any[] = [];

  items: Array<prodect> = [
    {
      id: uuid4(),
      img: 'assets/image/dunk-low-next-nature-se-womens-shoes-8Dk7Jr.png',
      title: 'Nick Air Force 1 shadow',
      body: "Women's Shoes",
      price: '$135',
      catgure: 'woman',
    },
    {
      id: uuid4(),
      img: 'assets/image/dunk-low-womens-shoes-9WJtmn.png',
      title: 'Nick Air Force 1 07',
      body: "Women's Shoes",
      price: '$91.97',
      catgure: 'woman',
    },
    {
      id: uuid4(),
      img: 'assets/image/dunk-low-big-kids-shoes-S3lSGW.png',
      title: 'Nike Dunk Low LX',
      body: "Women's Shoes",
      price: '$135',
      catgure: 'woman',
    },
    {
      id: uuid4(),
      img: 'assets/image/free-metcon-5-womens-workout-shoes-h4Zl5h.png',
      title: 'Nike Air 2023 Flyknit ',
      body: "Men's Shoes",
      price: '$210',
      catgure: 'man',
    },
    {
      id: uuid4(),
      img: 'assets/image/go-flyease-easy-on-off-shoes-LGmqKx.png',
      title: 'Nike Air Max Alpha Trainer',
      body: "Men's Shoes",
      price: '$95',
      catgure: 'man',
    },
    {
      id: uuid4(),
      img: 'assets/image/air-force-1-07-womens-shoes-b19lqD.png',
      title: 'Nike Dunk ',
      body: "Men's Shoes",
      price: '$135',
      catgure: 'man',
    },
    {
      id: uuid4(),
      img: 'assets/image/air-force-1-07-womens-shoes-PqdxJw.png',
      title: 'Nike Dunk Low LX',
      body: "Women's Shoes",
      price: '$200',
      catgure: 'woman',
    },
    {
      id: uuid4(),
      img: 'assets/image/air-max-90-mens-shoes-6n3vKB.png',
      title: 'Nike Dunk Low LX',
      body: "Men's Shoes",
      price: '$150',
      catgure: 'man',
    },
    {
      id: uuid4(),
      img: 'assets/image/air-max-90-mens-shoes-Bd2qnn.png',
      title: 'Nike Dunk Low LX',
      body: "Men's Shoes",
      price: '$125',
      catgure: 'man',
    },
    {
      id: uuid4(),
      img: 'assets/image/air-max-dn-shoes-dFBSQh.png',
      title: 'Nike Dunk Low LX',
      body: "Men's Shoes",
      price: '$300',
      catgure: 'man',
    },
    {
      id: uuid4(),
      img: 'assets/image/air-vapormax-plus-womens-shoes-xbt7zf.png',
      title: 'Nike Dunk Low LX',
      body: "Women's Shoes",
      price: '$170',
      catgure: 'woman',
    },
    {
      id: uuid4(),
      img: 'assets/image/court-vision-low-next-nature-womens-shoes-ZkMMBG.png',
      title: 'Nike Dunk Low LX',
      body: "Men's Shoes",
      price: '$150',
      catgure: 'man',
    },
  ];
  isDialogOpen!: boolean;
  ngOnInit(): void {
    this.filterDataAll = this.items;
    this.populateArrays();
     this.isDialogOpen= false;
  }

  //  Start filter Data

  handelFilterDataAll() {
    this.items = this.filterDataAll;
  }
  handelFilterDataWoman() {
    this.items = this.filterDataWoman;
  }
  handelFilterDataMan() {
    this.items = this.filterDataMan;
  }
  // End filter Data
  



  uploadFile(obj:Data): void {

    this.filterDataAll.push({
      id: uuid4(),
      img:obj.imageUrl,
      title:obj.text1,
      body:obj.selectedItem,
      price:obj.text3,
      catgure:obj.selectedItem,
    });
    this.populateArrays();
    console.log(obj);
    this.isDialogOpen = false
    obj
  }

  openDialog(): void {
    this.isDialogOpen = true;
  }
  closeDialog():void{
    this.isDialogOpen = false
  }

  populateArrays() {
    this.filterDataWoman = this.filterDataAll.filter(
      (i) => i.catgure === 'woman'
    );
    this.filterDataMan = this.filterDataAll.filter((i) => i.catgure === 'man');
  }

  onCartClicked(event: prodect) {
    this.items = this.items.filter((data) => data.id != event.id);
  }

  updateprodect(event: prodect) {
    const index = this.items.findIndex((item) => item.id === event.id);
    if (index !== -1) {
      this.items[index] = event;
    } 
  }
}
