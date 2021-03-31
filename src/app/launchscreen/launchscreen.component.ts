import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-launchscreen',
  templateUrl: './launchscreen.component.html',
  styleUrls: ['./launchscreen.component.css']
})
export class LaunchscreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
        // do init at here for current route.

        setTimeout(() => {
          this.router.navigate(['details']);
      }, 3000);  //5s
  }

}
