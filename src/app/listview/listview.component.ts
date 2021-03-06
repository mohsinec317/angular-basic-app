import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadjsonService } from '../loadjson.service';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css'],
})
export class ListviewComponent implements OnInit {
  id: any;
  json: any;
  constructor(
    private route: ActivatedRoute,
    private service: LoadjsonService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      // console.log(params.value);
      this.id = params.value;
      this.service.loadmyjson(this.id).subscribe((res) => {
        console.log(res);
        this.json = res;
      });

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
