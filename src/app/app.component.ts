import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { prodect } from './app.component.models';
import { CartComponent } from './cart/cart.component';
import { Data } from './app.component.models';
import uuid4 from 'uuid4';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CartComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  imageUrl: string = '';

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };
    }
  }

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

  //  Start filter Data
  filterDataWoman = this.items.filter((i) => i.catgure === "woman" )
  filterDataMan = this.items.filter((i) =>  i.catgure === "man")
  filterDataAll = this.items
  

  handelFilterDataAll() {
    this.items = this.filterDataAll
    
  }
  handelFilterDataWoman() {
    this.items = this.filterDataWoman
  }
  handelFilterDataMan() {
    this.items = this.filterDataMan
  }
  // End filter Data

  isDialogOpen: boolean = false;
  data: Data = {
    text1: '',
    text3: '',
    selectedItem: 'man',
  };

  openDialog(): void {
    this.isDialogOpen = true;
  }

  closeDialog(): void {
    this.isDialogOpen = false;
  }

  onTextFieldChange(event: any) {
    this.data.text1 = event.target.value;
  }
  onTextFieldChange3(event: any) {
    this.data.text3 = event.target.value;
  }

  onSelectChange(event: any) {
    this.data.selectedItem = event.target.value;
    console.log('this is select', this.data.selectedItem);
  }

  uploadFile(): void {
    // هنا يمكنك إرسال الملف إلى الخادم
    const data = this.data;
    this.items.push({
      id: uuid4(),
      img: this.imageUrl,
      title: this.data.text1,
      body: this.data.selectedItem,
      price: this.data.text3,
      catgure: this.data.selectedItem,
    });
    this.isDialogOpen = false;
    this.data.text1 = '';
    this.data.text3 = '';
    this.imageUrl = '';
    console.log(this.items);
  }

  checkEmpty(...str: string[]) {
    for (let i = 0; i < str.length; i++) {
      if (typeof str[i] === 'string' && str[i].trim() === '') {
        return true;
      }
    }
    return false;
  }

  onCartClicked(event: prodect) {
    this.items = this.items.filter((data) => data.id != event.id);
  }

  updateprodect(event: prodect) {
    const index = this.items.findIndex((item) => item.id === event.id);
    if (index !== -1) {
      // قم بتحديث البيانات هنا بناءً على احتياجاتك
      this.items[index] = event;
    }
  }


}
