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
  totCustomers: number;
  distance = 100;
  defDes = {city: 'Dublin', latitude: '53.339428', longitude: '-6.257664'};

  constructor(private ds: DataService) { }

  ngOnInit() {

    this.dataSource = this.ds.getCustomers();
    this.totCustomers = this.dataSource.length;

    this.ds.getCustomerSubjectObservable().subscribe((data) => {
      this.dataSource = [];
      setTimeout(() => {
        this.dataSource = data;
      });
    });

    this.checkCrowd(this.distance);
  }

  checkCrowd(distance) {
    this.ds.getCustomersInRange(this.defDes, distance);
  }

}
