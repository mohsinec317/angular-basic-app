import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css'],
})
export class ListviewComponent implements OnInit {
  id: any;
  json: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      // console.log(params.value);
      this.id = params.value;
      this.json = [
        {
          id: 100,
          title: 'text',
          something: [
            {
              abc: 'text',
              def: {
                start: 'date',
                end: 'date',
              },
            },
          ],
        },
      ];
    });
  }
}
