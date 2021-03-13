import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountType } from 'src/app/shared/entities/account-type.entity';
import { Account } from '../../../../shared/entities/account.entity'
import { Entity } from '../../../../shared/entities/entity';
import { MetaService } from '../../../../shared/services/meta.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {

  @Output()
  created: EventEmitter<Account|null> = new EventEmitter<Account|null>();

  id?: number;

  @Input()
  updateAction?: (account: Account) => void;

  @Input()
  cancelAction?: () => void;

  //@ts-ignore
  formGroup: FormGroup;
  //@ts-ignore
  account: Account;

  accountTypes: AccountType[] = [];

  constructor(private metaService: MetaService ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('name', [Validators.required]),
      accountType: new FormControl('accountType',[Validators.required])
    });

    this.metaService.getAccountTypes().subscribe((accountTypes)=>{
      this.accountTypes = accountTypes;
    });
    
  }

  public setRecord(record: Account){
    this.id = record.id;
    this.formGroup.controls['name'].setValue(record.name);
    this.formGroup.controls['accountType'].setValue(record.accountType.id);
  }

  public update(){
    if (this.formGroup?.valid) {
      
      const rawValue: any = this.formGroup.getRawValue();
      for (const key of Object.keys(rawValue)) {
        rawValue[key] = rawValue[key] === null ? undefined : rawValue[key];
      }
      let account: Account;

      if(this.id){
        account = new Account(rawValue.name, new Entity(parseInt(rawValue.accountType)) as AccountType, this.id);
      }
      else {
        account = new Account(rawValue.name, new Entity(parseInt(rawValue.accountType)) as AccountType);
      }
      

      this.formGroup.reset();
      this.created.emit(account);
    }
  }

  public cancel(){
    if(this.formGroup){
      this.formGroup.reset();
    }
    this.created.emit(null);
  }

}
