import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly headers =  new HttpHeaders().set('ZUMO-API-VERSION', '2.0.0');
  readonly endpoint = 'https://reportrans.azurewebsites.net/tables/report';

  constructor(private httpClient: HttpClient) { }

  getReports() {
    return this.httpClient.get(this.endpoint, { headers: this.headers });
  }

  addReport(report: Object) {
    this.httpClient.post(this.endpoint, report, { headers: this.headers }).
      subscribe(
        function (res) {
          console.log(res);
        },
        function (err) {
          console.log(`Couldn't add report: ${JSON.stringify(err)}`);
        }
      );
  }
}
