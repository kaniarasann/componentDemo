import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from './base.service';
@Injectable()
export class LoginService extends BaseService {
constructor(private http: Http) {
    super(http, 'https://reqres.in/api/login');
}
}
