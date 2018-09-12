import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  reports$: Object;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getReports().subscribe((data) => {
      this.reports$ = data;
    });
  }

}
