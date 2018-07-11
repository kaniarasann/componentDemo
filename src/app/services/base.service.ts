import { Observable } from 'rxjs/Observable';
import { Injectable, Pipe } from '@angular/core';
import {Http} from '@angular/http';
import { NotFoundError } from '../common/NotFoundError';
import { _throw } from 'rxjs/observable/throw';
import { AppError } from '../common/AppError';
import { catchError, map, mergeMap, concatMap } from 'rxjs/operators';
import { from } from 'rxjs/observable/from';
import { concat } from 'rxjs/operators/concat';
import { delay, concatAll  } from 'rxjs/operators';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Injectable()
export class BaseService {

  constructor(private service: Http, private url: string) { }

  getData() {
   return this.service.get(this.url).pipe(map(r => r.json()), catchError(this.handleError));
  }

  submitData(data: string) {
   return this.service.post(this.url, data).pipe(catchError(this.handleError));
  }

  patchData(...params) {
    const data = {title: params[1] + '- updated'};
    return this.service.patch(this.url + params[0], JSON.stringify(data)).pipe(catchError(this.handleError));
  }

  /*Transformation syntax*/
  /*Concats will wait for previous to complete and merges the output result*/
  /*from is used to create observable from array*/
  getConcatMap(id: number[]) {
    return from(id).pipe(concatMap(x => this.service.get(this.url + `/${x}`)
    .pipe(delay(3000), map(r => r.json()))));
  }

  /*same as concat map but does not wait for previous to complete*/
  getMergeMap(id: number[]) {
    return from(id).pipe(mergeMap(x => this.service.get(this.url + `/${x}`)
    .pipe(delay(3000), map(r => r.json()))));
  }

  getForkJoin(id: number[]) {
   return forkJoin(
     id.map((i, index) => this.service.get(this.url + `/${i}`).pipe(map(y => y.json())))
    ).pipe(concatAll());
  }

  private handleError(error: Response) {
    if (error.status === 404) {
    return _throw(new NotFoundError());
    }
    return _throw(new AppError());
  }
}
