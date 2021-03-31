import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-livevideo',
  templateUrl: './livevideo.component.html',
  styleUrls: ['./livevideo.component.css']
})
export class LivevideoComponent implements OnInit {
  name: any;
  url: any;
  constructor(private route: ActivatedRoute, private dom:DomSanitizer) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      // console.log(params.value);
      this.name = params.name;
      this.url = params.url;
      
      console.log(this.name)
      console.log(this.url)

    
    });
  }

}
