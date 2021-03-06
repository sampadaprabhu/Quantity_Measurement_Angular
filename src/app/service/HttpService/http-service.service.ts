import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient:HttpClient) { }

  postService(data, url: string){
    return this.httpClient.post(url,data);
  }
}
