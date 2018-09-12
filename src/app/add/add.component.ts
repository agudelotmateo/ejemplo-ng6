import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  report = {};

  constructor(private apiService: ApiService) { }

  onSubmit() {
    this.apiService.addReport(this.report);
  }

}
