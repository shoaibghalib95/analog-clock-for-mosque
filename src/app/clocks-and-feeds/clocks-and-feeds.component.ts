import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class MyItems {
  Value: string;
  constructor(Value: string) {
    this.Value = Value;
  }
}

@Component({
  selector: 'app-clocks-and-feeds',
  templateUrl: './clocks-and-feeds.component.html',
  styleUrls: ['./clocks-and-feeds.component.css']
})
export class ClocksAndFeedsComponent implements OnInit {
  namaz = [
    'fajar',
    'dohr',
    'asar',
    'maghrib',
    'isha',
    'jummah'
  ];
  myItems: MyItems[] = new Array();

  namazTimings = {
    fajar: '',
    dohr: '',
    asar: '',
    maghrib: '',
    isha: '',
    jummah: '',
  }

  constructor(public route: Router) { }

  ngOnInit() {
    this.namazTimings.fajar = localStorage.getItem('fajar');
    this.namazTimings.dohr = localStorage.getItem('dohr');
    this.namazTimings.asar = localStorage.getItem('asar');
    this.namazTimings.maghrib = localStorage.getItem('maghrib');
    this.namazTimings.isha = localStorage.getItem('isha');
    this.namazTimings.jummah = localStorage.getItem('jummah');
    if (
      !this.namazTimings.fajar &&
      !this.namazTimings.dohr &&
      !this.namazTimings.asar &&
      !this.namazTimings.maghrib &&
      !this.namazTimings.isha &&
      !this.namazTimings.jummah
      ) {
      this.route.navigate(['/AddTimings']);
    }else{
      this.namaz.forEach((element) => {
        this.drawClock1(element);
      });
    }
    this.myItems = JSON.parse(localStorage.getItem("announcements"));
  }

  drawClock1(canvas_name) {
    var self = this;
    var canvas: any = document.getElementById(canvas_name);
    var ctx = canvas.getContext("2d");
    var radius = canvas['height'] / 2;
    ctx.translate(radius, radius);
    radius = radius * 0.80
    drawClock(canvas_name);

    function drawClock(canvas_name) {
      drawFace(ctx, radius);
      drawNumbers(ctx, radius);
      drawTime(canvas_name, ctx, radius);
    }

    function drawFace(ctx, radius) {
      var grad;
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, 2 * Math.PI);
      ctx.fillStyle = 'white';
      ctx.fill();
      grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
      grad.addColorStop(0, '#333');
      grad.addColorStop(0.5, 'white');
      grad.addColorStop(1, '#333');
      ctx.strokeStyle = grad;
      ctx.lineWidth = radius * 0.1;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
      ctx.fillStyle = '#333';
      ctx.fill();
    }

    function drawNumbers(ctx, radius) {
      var ang;
      var num;
      ctx.font = radius * 0.20 + "px arial";
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      for (num = 1; num < 13; num++) {
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
      }
    }

    function drawTime(canvas_name, ctx, radius) {
      var now;
      if(canvas_name === "fajar"){
        now = new Date(self.namazTimings.fajar);
      }
      else if(canvas_name === 'dohr'){
        now = new Date(self.namazTimings.dohr);
      }
      else if(canvas_name === 'asar'){
        now = new Date(self.namazTimings.asar);
      }
      else if(canvas_name === 'maghrib'){
        now = new Date(self.namazTimings.maghrib);
      }
      else if(canvas_name === 'isha'){
        now = new Date(self.namazTimings.isha);
      }
      else if(canvas_name === 'jummah'){
        now = new Date(self.namazTimings.jummah);
      }
      var hour = now.getHours();
      var minute = now.getMinutes();
      var second = now.getSeconds();
      //hour
      hour = hour % 12;
      hour = (hour * Math.PI / 6) +
        (minute * Math.PI / (6 * 60)) +
        (second * Math.PI / (360 * 60));
      drawHand(ctx, hour, radius * 0.5, radius * 0.07);
      //minute
      minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
      drawHand(ctx, minute, radius * 0.8, radius * 0.07);
      // second
      // second=(second*Math.PI/30);
      // drawHand(ctx, second, radius*0.9, radius*0.02);
    }

    function drawHand(ctx, pos, length, width) {
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.moveTo(0, 0);
      ctx.rotate(pos);
      ctx.lineTo(0, -length);
      ctx.stroke();
      ctx.rotate(-pos);
    }
  }

  //   initLocalClocks() {
  //     // Get the local time using JS
  //     var date = new Date;
  //     var seconds = date.getSeconds();
  //     var minutes = date.getMinutes();
  //     var hours = date.getHours();

  //     // Create an object with each hand and it's angle in degrees
  //     var hands = [
  //       {
  //         hand: 'hours',
  //         angle: (hours * 30) + (minutes / 2)
  //       },
  //       {
  //         hand: 'minutes',
  //         angle: (minutes * 6)
  //       },
  //       {
  //         hand: 'seconds',
  //         angle: (seconds * 6)
  //       }
  //     ];
  //     // Loop through each of these hands to set their angle
  //     for (var j = 0; j < hands.length; j++) {
  //       var elements = document.querySelectorAll('.' + hands[j].hand);
  //       for (var k = 0; k < elements.length; k++) {
  //         // elements[k].style.transform = 'rotateZ(' + hands[j].angle + 'deg)';
  //         elements[k].style.transform = 'rotateZ(' + hands[j].angle + 'deg)';
  //         // If this is a minute hand, note the seconds position (to calculate minute position later)
  //         if (hands[j].hand === 'minutes') {
  //           elements[k].parentNode[0].setAttribute('data-second-angle', hands[j + 1].angle);
  //         }
  //       }
  //     }
  //   }

  //   /*
  //  * Set a timeout for the first minute hand movement (less than 1 minute), then rotate it every minute after that
  //  */
  //   moveMinuteHands(containers) {
  //     for (var i = 0; i < containers.length; i++) {
  //       containers[i].style.webkitTransform = 'rotateZ(6deg)';
  //       containers[i].style.transform = 'rotateZ(6deg)';
  //     }
  //     // Then continue with a 60 second interval
  //     setInterval(() => {
  //       for (var i = 0; i < containers.length; i++) {
  //         if (containers[i].angle === undefined) {
  //           containers[i].angle = 12;
  //         } else {
  //           containers[i].angle += 6;
  //         }
  //         containers[i].style.webkitTransform = 'rotateZ(' + containers[i].angle + 'deg)';
  //         containers[i].style.transform = 'rotateZ(' + containers[i].angle + 'deg)';
  //       }
  //     }, 60000);
  //   }

  //   setUpMinuteHands() {
  //     // Find out how far into the minute we are
  //     var containers = document.querySelectorAll('.minutes-container');
  //     var secondAngle = containers[0].getAttribute("data-second-angle");
  //     if (secondAngle > 0) {
  //       // Set a timeout until the end of the current minute, to move the hand
  //       var delay = (((360 - secondAngle) / 6) + 0.1) * 1000;
  //       setTimeout(() => {
  //         this.moveMinuteHands(containers);
  //       }, delay);
  //     }
  //   }



}
