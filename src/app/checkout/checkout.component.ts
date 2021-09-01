import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddressComponent } from './address/address.component';
import {AddressService } from './address.service';

 



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private dialog:MatDialog ,private aservice:AddressService) { }
// toggel
  // address=false;

  addAddress(){
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="40%";
    dialogConfig.height="90%";
  this.dialog.open(AddressComponent,dialogConfig);
        }

        collection:any=[];
  ngOnInit(): void {
    this.aservice.addAddress().subscribe((result)=>{
      this.collection=result;
    })
    // this.aservice.getAddress().subscribe((result)=>{
    //   console.log(result);
    //   this.collection=result; 
    // });
   
  }
  
}
