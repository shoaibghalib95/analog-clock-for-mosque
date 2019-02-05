import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-forms',
  templateUrl: './input-forms.component.html',
  styleUrls: ['./input-forms.component.css']
})
export class InputFormsComponent implements OnInit {

  fajr;
  zuhr;
  asar;
  maghrb;
  isha;
  jumma;
  announcements;
  news;


  constructor() {
    this.fajr = localStorage.getItem("fajr");
    this.zuhr = localStorage.getItem("zuhr");
    this.asar = localStorage.getItem("asar");
    this.maghrb = localStorage.getItem("maghrb");
    this.isha = localStorage.getItem("isha");
    this.jumma = localStorage.getItem("jumma");
    this.announcements = localStorage.getItem("announcements")
    this.news = localStorage.getItem("news")

   }

  

  ngOnInit() {
  }

  submit(){
    localStorage.setItem("fajr", this.fajr);
    localStorage.setItem("zuhr", this.zuhr);
    localStorage.setItem("asar", this.asar);
    localStorage.setItem("maghrb", this.maghrb);
    localStorage.setItem("isha", this.isha);
    localStorage.setItem("jumma", this.jumma);
    localStorage.setItem("announcements", this.announcements);
    localStorage.setItem("news", this.news);
  
    console.log(this.formatAMPM(this.fajr))
    console.log(this.formatAMPM(this.zuhr))
    console.log(this.formatAMPM(this.asar))
    console.log(this.formatAMPM(this.maghrb))
    console.log(this.formatAMPM(this.isha))
    console.log(this.formatAMPM(this.jumma)) 
    console.log(this.announcements, 'ann')
    console.log(this.news, 'n')

  }

  formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

}
