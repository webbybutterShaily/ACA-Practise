import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignServiceService {

  constructor(public http:HttpClient) { }

  getData(id:any){
    let url = `https://dev.api.syncstream.io/api/customer/${id}`
    return this.http.get(url)

  }

}
