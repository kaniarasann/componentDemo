import { Directive,HostListener,ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCusDirective]'
})
export class CusDirectiveDirective {

  constructor(private el:ElementRef) { }
  @Input('case') case='l';
  @HostListener('blur') blurEvent(){
  const val = this.el.nativeElement.value;
   if(this.case === 'l'){
     this.el.nativeElement.value = (val as string).toLowerCase();
   }
   else if(this.case === 'u'){
    this.el.nativeElement.value = (val as string).toUpperCase();
   }
  }

}
