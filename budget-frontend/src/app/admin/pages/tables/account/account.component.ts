import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Account } from '../../../../shared/entities'
import { MetaService } from '../../../../shared/services/meta.service'
import { PopUpComponent } from '../../../../shared/components/pop-up/pop-up.component'
import { AccountFormComponent } from 'src/app/admin/components/forms/account-form/account-form.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  @ViewChild('PopUpRecordForm')
  popupForm?: PopUpComponent;

  @ViewChild('RecordForm')
  recordForm?: AccountFormComponent;

  @ViewChild('PopUpConfirm')
  popupConfirm?: PopUpComponent;
  
  //@ts-ignore
  public records: Account[];

  public selectedRecord?: Account;

  constructor(private metaService: MetaService ) { }

  ngOnInit(): void {
    this.refreshData();
  }

  trackById(index: number, record: Account): number {
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
      this.metaService.deleteAccount(this.selectedRecord.id).subscribe(()=>{
        this.refreshData();
      });
    }
    this.popupConfirm?.close();
  }

  updateRecord(account: Account|null){
    if(account){
      if(account.id){
        this.metaService.updateAccount(account).subscribe((account: Account)=>{
          this.popupForm?.close();
      });
    }
    else{
        this.metaService.createAccount(account).subscribe((account: Account)=>{
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
    this.metaService.getAccounts().subscribe((accounts: Account[])=>{
      this.records = accounts;
    });
  }

}
