import { Component, NgZone, ViewChild } from '@angular/core';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nickname="rafinhavix";

  mychats=[
    {
      sendDate: new Date(),
      message: "falaaaaa mousepad",
      user:"rafinhavix"
    },
    {
      sendDate: new Date(),
      message: "falaaaaaaa rafinhavix",
      user:"mousepad"
    }
  ]

  public model={
    message: ""
  };
}
