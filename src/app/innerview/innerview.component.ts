import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadjsonService } from '../loadjson.service';


@Component({
  selector: 'app-innerview',
  templateUrl: './innerview.component.html',
  styleUrls: ['./innerview.component.css']
})
export class InnerviewComponent implements OnInit {
  id: any;
  surahdetails: any;
  surahname: any;
  arsurahname: any;

  constructor(
    private route: ActivatedRoute,
    private service: LoadjsonService
  ) {}


  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.id = params.value;
      this.surahname = params.surahname;
      this.arsurahname = params.arsurahname;

      this.service.loadmyjson(this.id).subscribe((res) => {
        console.log([res]);
        this.surahdetails = res;
      });

    });
  }

}
