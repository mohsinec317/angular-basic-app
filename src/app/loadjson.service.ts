import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { ɵTestingCompiler } from '@angular/core/testing';

@Injectable({
  providedIn: 'root',
})
export class LoadjsonService {
  constructor(public http: HttpClient) {}

  loadmyjson(id: any) {
    console.log(id);
    // return this.http.get('http://127.0.0.1:5000/json?' + id).map((res) => {
    //   console.log(res);
    //   return res;
    // });

    return this.http.get('http://127.0.0.1:5000/json?' + id).map((data) => {
      // console.log(data);
      return data;
    });
  }
}
