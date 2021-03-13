import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountType } from '../../../../shared/entities/account-type.entity';

@Component({
  selector: 'app-account-type-form',
  templateUrl: './account-type-form.component.html',
  styleUrls: ['./account-type-form.component.scss']
})
export class AccountTypeFormComponent implements OnInit {

  @Output()
  created: EventEmitter<AccountType|null> = new EventEmitter<AccountType|null>();

  id?: number;

  @Input()
  updateAction?: (accountType: AccountType) => void;

  @Input()
  cancelAction?: () => void;

  //@ts-ignore
  formGroup: FormGroup;
  //@ts-ignore
  accountType: AccountType;

  constructor() { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('name', [Validators.required])
    });
 }

  public setRecord(record: AccountType){
    this.id = record.id;
    this.formGroup.controls['name'].setValue(record.name);
  }

  public update(){
    if (this.formGroup?.valid) {
      const rawValue: any = this.formGroup.getRawValue();
      for (const key of Object.keys(rawValue)) {
        rawValue[key] = rawValue[key] === null ? undefined : rawValue[key];
      }
      let accountType: AccountType;

      if(this.id){
        accountType = new AccountType(rawValue.name, this.id);
      }
      else {
        accountType = new AccountType(rawValue.name);
      }
      this.created.emit(accountType);
      this.formGroup.reset();
      this.id = undefined;
    }
  }

  public cancel(){
    if(this.formGroup){
      this.formGroup.reset();
    }
    this.created.emit(null);
  }

}
