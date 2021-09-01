import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import{ AddressService} from '../address.service';
export interface formdetails{
name:string,
Contact:number,
pincode:number,
address:any
};

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(public dilalogRef:MatDialogRef<AddressComponent>, private addservice:AddressService) { }
  // genders=['male','female'];
  signupForm !:FormGroup;
  
  onlyNumberAllowed(event:any):boolean{
const charCode= (event.which)?event.which:event.keyCode;
if(charCode>31 && (charCode<48 || charCode>57)){
  return false;
}
return true;
  };
  
  ngOnInit(): void {
   
    this.signupForm= new FormGroup({
      'name':new  FormControl(null, [Validators.required,this.nanames.bind(this ),Validators.pattern('[a-zA-Z ]*')]),
      'Contact':new FormControl(null, [Validators.required,Validators.maxLength(10) ] ),
      'pincode':new FormControl(null,Validators.required),
      'address':new FormControl(null, Validators.required ),
      // 'gender':new FormControl('male'),
      // 'hobbies': new FormArray([]),
          });
  }

  onSubmit(){
    console.log(this.signupForm.value);
    this.addservice.getAddress(this.signupForm.value);
    // this.addservice.addAddress(this.signupForm.value).subscribe((result)=>{
    //   console.log("result");
    // });
    // this.signupForm.reset();
    // this.dilalogRef.close();
    this.close();
    
  }
  close(){
    this.signupForm.reset();
    this.dilalogRef.close();
  }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  get hobbyControls(){
    return (<FormArray>this.signupForm.get('hobbies')).controls;
      }

      namesNotAllowed=['sourav','gourav','bippan'];

      nanames(control:FormControl){
if(this.namesNotAllowed.indexOf(control.value)!==-1){
  return {'nameISNotAllowed':true};
}
return null;
      }

}
