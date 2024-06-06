import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Data, prodect } from '../app.component.models';
import {  NgClass } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-models',
  standalone: true,
  imports: [NgClass,ReactiveFormsModule],
  templateUrl: './models.component.html',
  styleUrl: './models.component.css'
})
export class ModelsComponent implements  OnChanges , OnInit {
  @Input() Prodec:prodect = {} as prodect
  @Input() nameAction : string= ""
  @Input() isDialogOpen!: boolean  ;
  @Input() isDialogclose!:any   ;
  @Output() sheringDatatoApp = new EventEmitter<Data>()
  @Output() sheringDatatoCard = new EventEmitter<Data> ()
  dataForm:FormGroup;
  imageSrc:string | ArrayBuffer |null  = ""
  constructor(){
    this.dataForm = new FormGroup(
      {
        text1: new FormControl('',[Validators.required,Validators.minLength(10)]),
        text3: new FormControl('',[Validators.required]),
        selectedItem: new FormControl('',[Validators.required]),
        file: new FormControl("",[Validators.required])
      }
    )
  }




  
  CreatProdect(){
    if(this.nameAction === "CraetProdect"){
      this.sheringDatatoApp.emit({text1:this.dataForm.controls["text1"].value,text3:this.dataForm.controls["text3"].value,selectedItem:this.dataForm.controls["selectedItem"].value,imageUrl:this.imageSrc})
      this.dataForm.patchValue({
        text1:"",
        text3:"",
        file:""      
      })
      this.imageSrc= ""
    }
    else if(this.nameAction === "UpdataProdect"){
      this.sheringDatatoCard.emit({text1:this.dataForm.controls["text1"].value,text3:this.dataForm.controls["text3"].value,selectedItem:this.dataForm.controls["selectedItem"].value,imageUrl:this.imageSrc})
      this.closeDialog()
    }
 }


  
  onFileChange(event: any): void {
    const reader = new FileReader();
    
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.dataForm.patchValue({
        file: file
      });

      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result;
      };
    }
  }



  closeDialog(): void {
    this.isDialogclose()
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log(this.Prodec);
    
    
  }
  ngOnInit(): void {
    if(this.Prodec){
      this.dataForm.patchValue({
        text1:this.Prodec.title,
        text3:this.Prodec.price,
        selectedItem: this.Prodec.catgure,
        file:this.Prodec.img
      })

      this.imageSrc = this.Prodec.img
    }

  }


}
