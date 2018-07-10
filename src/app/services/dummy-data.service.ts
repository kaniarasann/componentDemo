import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import { BaseService } from './base.service';

@Injectable()
export class DummyDataService extends BaseService  {
  constructor(private http:Http) {
    super(http,"https://jsonplaceholder.typicode.com/posts")
   }
}
