import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadjsonService } from '../loadjson.service';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css'],
})
export class ListviewComponent implements OnInit {
  id: any;
  mypagename: any;
  json: any;
  constructor(
    private route: ActivatedRoute,
    private service: LoadjsonService
  ) {}


  counter(i: number) {
    return new Array(i);
}

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: any;

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(
      (option) => option.toLowerCase().indexOf(filterValue) === 0
    );
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      // console.log(params.value);
      this.id = params.value;
      this.mypagename = params.mypagename;
      console.log(params);
      this.service.loadmyjson(this.id).subscribe((res) => {
        // console.log([res]);
        this.json = res;
      });

      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map((value) => this._filter(value))
      );

      // this.json[this.id];

      // this.json = [
      //   {
      //     id: 100,
      //     title: 'text',
      //     something: [
      //       {
      //         abc: 'text',
      //         def: {
      //           start: 'date',
      //           end: 'date',
      //         },
      //       },
      //     ],
      //   },
      // ];
    });
  }
}
