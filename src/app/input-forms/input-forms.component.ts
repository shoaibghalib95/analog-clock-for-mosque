import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export class MyItems {
  Value: string;
  constructor(Value: string) {
    this.Value = Value;
  }
}

@Component({
  selector: 'app-input-forms',
  templateUrl: './input-forms.component.html',
  styleUrls: ['./input-forms.component.css']
})
export class InputFormsComponent implements OnInit {

  fajar;
  dohr;
  asar;
  maghrib;
  isha;
  jummah;

  namazTimings = {
    fajar: '',
    dohr: '',
    asar: '',
    maghrib: '',
    isha: '',
    jummah: '',
  }


  // Array where we are going to do CRUD operations    
  myItems: MyItems[] = new Array();

  // Other variables    
  IsForUpdate: boolean = false;
  newItem: any = {};
  updatedItem;

  constructor() {
    this.namazTimings.fajar = localStorage.getItem("fajar");
    this.namazTimings.dohr = localStorage.getItem("dohr");
    this.namazTimings.asar = localStorage.getItem("asar");
    this.namazTimings.maghrib = localStorage.getItem("maghrib");
    this.namazTimings.isha = localStorage.getItem("isha");
    this.namazTimings.jummah = localStorage.getItem("jummah");
    if(this.namazTimings){
      this.fajar = this.namazTimings['fajar'];
      this.dohr = this.namazTimings['dohr'];
      this.asar = this.namazTimings['asar'];
      this.maghrib = this.namazTimings['maghrib'];
      this.isha = this.namazTimings['isha'];
      this.jummah = this.namazTimings['jummah'];
    }

    this.myItems = JSON.parse(localStorage.getItem("announcements"));
    if(!this.myItems){
      this.myItems = [];
    }

    
  }



  ngOnInit() {
   
  }

  submit() {
    this.namazTimings = {
      fajar: this.fajar,
      dohr: this.dohr,
      asar: this.asar,
      maghrib: this.maghrib,
      isha: this.isha,
      jummah: this.jummah
    }
    
    localStorage.setItem("fajar", this.fajar);
    localStorage.setItem("dohr", this.dohr);
    localStorage.setItem("asar", this.asar);
    localStorage.setItem("maghrib", this.maghrib);
    localStorage.setItem("isha", this.isha);
    localStorage.setItem("jummah", this.jummah);
    localStorage.setItem("announcements", JSON.stringify(this.myItems));
  }

  // formatAMPM(date) {
  //   var hours = date.getHours();
  //   var minutes = date.getMinutes();
  //   var ampm = hours >= 12 ? 'pm' : 'am';
  //   hours = hours % 12;
  //   hours = hours ? hours : 12; // the hour '0' should be '12'
  //   minutes = minutes < 10 ? '0' + minutes : minutes;
  //   var strTime = hours + ':' + minutes + ' ' + ampm;
  //   return strTime;
  // }

  // To add new item in array    
  AddItem() {
    this.myItems.push(
      this.newItem
    );
    this.newItem = {};
    localStorage.setItem("announcements", JSON.stringify(this.myItems));
  }

  // When user selects edit option  
  EditItem(i) {
    this.newItem.Value = this.myItems[i].Value;
    this.updatedItem = i;
    this.IsForUpdate = true;
  }

  // When user clicks on update button to submit updated value  
  UpdateItem() {
    let data = this.updatedItem;
    for (let i = 0; i < this.myItems.length; i++) {
      if (i == data) {
        this.myItems[i].Value = this.newItem.Value;
        localStorage.setItem("announcements", JSON.stringify(this.myItems));

      }
    }
    this.IsForUpdate = false;
    this.newItem = {};
  }

  // To delete specific item  
  DeleteItem(i) {
    this.myItems.splice(i, 1);
    localStorage.setItem("announcements", JSON.stringify(this.myItems));
  }

}
