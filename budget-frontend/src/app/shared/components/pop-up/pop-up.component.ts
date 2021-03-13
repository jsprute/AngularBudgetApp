import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  _visible: boolean = false;
  _resolve: any;
  _reject: any;

  @Input()
  //@ts-ignore 
  tplRef: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {
  }

  async show(): Promise<void> {
    this._visible = true;
    
    let _this: PopUpComponent = this;

    return new Promise(function(resolve: any, reject: any) {
        _this._resolve = resolve;        
        _this._reject = reject;
    }.bind(this));
  }

  close(){
    this._resolve();
    this._visible = false;
  }

}
