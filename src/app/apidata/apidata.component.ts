import { Component, OnInit } from '@angular/core';
import { DummyDataService } from '../services/dummy-data.service';
import { AppError } from '../common/AppError';
import { NotFoundError } from '../common/NotFoundError';
@Component({
  selector: 'app-apidata',
  templateUrl: './apidata.component.html',
  styleUrls: ['./apidata.component.css']
})
export class ApidataComponent implements OnInit {
  data = [];
  constructor(private service: DummyDataService) { }

  ngOnInit() {
  this.service.getData().subscribe(response => {
    this.data = response;
  }, (e: Response) => {
    if (e.status === 404) {
      alert('Something went wrong');
      /*form error*/
      // this.form.setError({});
    } else {
    throw e;
    }
  });

  this.service.getForkJoin([1, 2]).subscribe(x => {
    console.log(x);
  });
  }

  submitData(input: HTMLInputElement) {
    const data = {title: input.value};
    this.service.submitData(JSON.stringify(data)).subscribe(x => {
    const result = x.json();
    result['title'] = input.value;
    this.data.splice(0, 0, result);
   }, (e) => {
    alert('Something went wrong');
    console.log(e);
  }, () => {input.value = ''; });
  }

  onUpdate(...params) {
   this.service.patchData(params).subscribe(
     x => {
       console.log(x.json());
     }, (e: AppError) => {
       if (e instanceof NotFoundError) {
        alert('Not Found');
       }
      console.log(e);
    }
   );
  }

}
