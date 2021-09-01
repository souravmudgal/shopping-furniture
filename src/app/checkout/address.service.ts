import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { formdetails } from './address/address.component';
// import{HttpClient} from '@angular/common/http private http:HttpClient';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  // url="http://localhost:3000/address";

  constructor( ) { }
  public subject = new BehaviorSubject<Array<formdetails>>([]);

getAddress(data:formdetails){
  const currentValue=this.subject.value;
  const updatedValue= [...currentValue,data];
  this.subject.next(updatedValue);
}

addAddress(){
  return this.subject.asObservable();
}


  // getAddress(){
  //   return this.http.get(this.url);
  //  }

//    addAddress(value:any){
// return this.http.post(this.url,value);
// console.log('some data');
//    }

}
