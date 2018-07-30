import { AppConstants } from './../constant/constant';
import { Component } from '@angular/core';

@Component({
  selector    :  'app-root',
  templateUrl : './app.component.html',
  styleUrls   : ['./app.component.scss']
})

export class AppComponent {

  State = new AppConstants().STATE;
  Date = new AppConstants().DATE;

  visibleDate     : boolean = false;
  visibleLocation : boolean = false;

  showDate() {
    this.visibleDate = !this.visibleDate;
  }

  showLoacation() {
    this.visibleLocation = !this.visibleLocation;
  }

}
