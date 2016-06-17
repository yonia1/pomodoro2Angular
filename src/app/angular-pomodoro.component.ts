import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

import { PomodoroServiceService } from './services/pomodoro-service.service';
import { NotifyServicesService } from './services/notifyer/notify-services.service'

//import {MATERIAL_DIRECTIVES} from 'ng2-material';

@Component({
  directives: [  ],
  selector: 'angular-pomodoro-app',
  templateUrl: 'app/angular-pomodoro.component.html',
  styleUrls: ['app/angular-pomodoro.component.css'],
  providers: [PomodoroServiceService, NotifyServicesService, Title]
})
export class AngularPomodoroAppComponent {

  constructor(private pomodoro: PomodoroServiceService) {

  }

  public title = 'angular-pomodoro works!';

  config = {

    numberOfSprints : 4,

    sprint_duration : 25,

    short_break_duration : 5 ,

    long_break_duration : 15,
  };


  onStart() {
    this.pomodoro.initPopodoro(this.config);
    this.pomodoro.startPomodoro();
  }

  onPause() {
    this.pomodoro.pausePomodoro();
  }

  onResume() {
    this.pomodoro.resume();
  }

  onReset() {
    this.pomodoro.reset();
  }

}
