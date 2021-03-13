import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent implements OnInit {

  @Input()
  columns:string[] = [];

  @Input()
  records:any[] = [];

  @Input()
  addAction?: () => void;

  @Input()
  editAction?: (id: number) => void;

  @Input()
  deleteAction?: (id: number) => void;

  constructor() { }

  ngOnInit(): void {
  }

  deleteRecord(id: number) {
    if(this.deleteAction)this.deleteAction(id);
  }

  editRecord(id: number) {
    if(this.editAction)this.editAction(id);
  }

  addRecord() {
    if(this.addAction) this.addAction();
  }

  getValue(record: any, column: string){
    if(column.indexOf('.') > -1){
      column.split('.').forEach(key => {
        record = record[key];
      });
      return record;
    }
    else{
      return record[column];
    }
  }
}
