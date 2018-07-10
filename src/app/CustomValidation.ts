import { Observable } from 'rxjs/Observable';
import { AbstractControl, ValidationErrors } from '@angular/forms';

export class Customvalidation {
 static WhiteSpace(control: AbstractControl): ValidationErrors | null {
 if ((control.value as string).indexOf(' ') >= 0) {
     return  {WhiteSpace: true};
 }
 return null;
 }

//  static validateAsync (control: AbstractControl): Promise<ValidationErrors | null> {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if((control.value as string).toLowerCase() === 'kani') {
//       resolve({validateAsync: true});
//       } else {
//         resolve(null);
//       }
//     }, 5000);
//   });
// }

 static validateAsync (control: AbstractControl): Observable<ValidationErrors | null> {
 return new Observable((x) => {
  setTimeout(() => {
    if ((control.value as string).toLowerCase() === 'kani') {
      x.next({validateAsync: true});
    } else {
      x.next(null);
    }
    x.complete();
  }, 2000);
 });
}
}
