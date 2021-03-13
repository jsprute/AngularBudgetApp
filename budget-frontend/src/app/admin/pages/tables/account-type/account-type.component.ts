import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { AccountType } from '../../../../shared/entities/account-type.entity'
import { MetaService } from '../../../../shared/services/meta.service'
import { PopUpComponent } from '../../../../shared/components/pop-up/pop-up.component'
import { AccountTypeFormComponent } from 'src/app/admin/components/forms/account-type-form/account-type-form.component';

@Component({
  selector: 'app-account-type',
  templateUrl: './account-type.component.html',
  styleUrls: ['./account-type.component.scss']
})
export class AccountTypeComponent implements OnInit {

  @ViewChild('PopUpRecordForm')
  popupForm?: PopUpComponent;

  @ViewChild('RecordForm')
  recordForm?: AccountTypeFormComponent;

  @ViewChild('PopUpConfirm')
  popupConfirm?: PopUpComponent;
  
  //@ts-ignore
  public records: AccountType[];

  public selectedRecord?: AccountType;

  constructor(private metaService: MetaService ) { }

  ngOnInit(): void {
    this.refreshData();
  }

  trackById(index: number, record: AccountType): number {
    if(record.id)
      return record.id;
    else
      return -1;
  }

  addRecord(): void {
    if(this.popupForm){
      this.selectedRecord = undefined;
      this.popupForm.show()
      .then(() => {
        this.refreshData();
      });
    }
  }

  editRecord(id: number): void {
    if(this.popupForm){
      this.selectedRecord = this.records.filter(record => record.id==id)[0];
      this.recordForm?.setRecord(this.selectedRecord);
      this.popupForm.show()
      .then(() => {
        this.selectedRecord = undefined;
        this.refreshData();
      });
    }
  }

  deleteRecord(id: number): void {
    if(this.popupConfirm){
      this.selectedRecord = this.records.filter(record => record.id==id)[0];
      this.popupConfirm.show()
      .then(() => {
        this.selectedRecord = undefined;
        this.refreshData();
      });
    }
  }

  confirmDeleteRecord(confirm: boolean): void {
    if(confirm && this.selectedRecord?.id){
      this.metaService.deleteAccountType(this.selectedRecord.id).subscribe(()=>{
        this.refreshData();
      });
    }
    this.popupConfirm?.close();
  }

  updateRecord(accountType: AccountType|null){
    if(accountType){
      if(accountType.id){
        this.metaService.updateAccountType(accountType).subscribe((accountType: AccountType)=>{
          this.popupForm?.close();
      });
    }
    else{
        this.metaService.createAccountType(accountType).subscribe((accountType: AccountType)=>{
          this.popupForm?.close();
      });
    }
    }
    else {
      this.popupForm?.close();
    }
  }

  cancelRecord(){
    this.popupForm?.close();
  }

  private refreshData(){
    this.metaService.getAccountTypes().subscribe((accountTypes: AccountType[])=>{
      this.records = accountTypes;
    });
  }

}
