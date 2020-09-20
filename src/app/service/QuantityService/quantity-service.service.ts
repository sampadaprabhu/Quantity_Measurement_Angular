import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class QuantityServiceService {

  baseUrl=environment.apiUrl;
  constructor(private httpService:HttpServiceService) { }

  convertedValues(data){
    return this.httpService.postService(data,this.baseUrl+'unit/conversion');
  }
}
