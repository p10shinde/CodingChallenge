import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.less']
})
export class CustomersListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'latitude', 'longitude'];
  dataSource: Customer[] = [];

  constructor(private ds: DataService) { }

  ngOnInit() {
    this.dataSource = this.ds.getCustomers();
    this.ds.getCustomerSubjectObservable().subscribe((data) => {
      this.dataSource = [];
      setTimeout(() => {
        this.dataSource = data;
      });
    });
  }

  pop() {
    this.ds.pop();
  }

}
