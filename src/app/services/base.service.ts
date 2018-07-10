import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { NotFoundError } from "../common/NotFoundError";
import { _throw } from 'rxjs/observable/throw';
import { AppError } from '../common/AppError';
import { catchError, map, concatMap, delay, mergeMap, concatAll, switchMap } from 'rxjs/operators';
import { from } from 'rxjs/observable/from';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Injectable()
export class BaseService {

  constructor(private service:Http,private url:string) { }

  getData(){
   return this.service.get(this.url).pipe(map(r => r.json()),catchError(this.handleError));
  }

  submitData(data:string){
   return this.service.post(this.url,data).pipe(catchError(this.handleError))
  }

  patchData(...params){
    let data = {title: params[1] + "- updated"};
    return this.service.patch(this.url+params[0],JSON.stringify(data)).pipe(catchError(this.handleError));
  } 

  /*Concat map make call one by one and does not wait for other observales*/
  getDataWithConcatMap(ids:number[]){
    return from(ids).pipe(concatMap(
      x=>this.service.get(this.url+`/${x}`)
      .pipe(
        // delay(10000),
        map(y=>y.json())
      )
    ));
  }

  /*Merge map waits for others observable to complete*/
  /*excluded the failed record*/
  getDataWithMergeMap(ids:number[]){
    return from(ids).pipe(
     mergeMap(x=> this.service.get(this.url + `/${x}`)
    .pipe(
      //delay(5000),
      map(y=>y.json()
    )
     ))
    )
  }

  /*forkJoin waits for others observable to complete*/
  /*fails the whole request if one fails*/
  getDataWithForkJoin(ids:number[]){
    return forkJoin(
      ids.map((val,index)=>{return this.service.get(this.url + `/${val}`)
     .pipe(map(res=>res.json())
    )})
    )
  }

  /*waits for previous observable to execute then compute the result*/
  getDataWithSwitchMap(ids:number[]){
   return this.getDataWithForkJoin(ids).pipe(switchMap(x=>
    {
    let id= x.reduce((pv,cv)=> { return pv+cv.id},0);
    return this.service.get(this.url + `/${id}`).pipe(map(y=>y.json()))
    }
  ));
  }

  

  private handleError(error:Response){
    if(error.status === 404)
    return _throw(new NotFoundError()); 
    return _throw(new AppError()); 
  }
}
