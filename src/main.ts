import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router';
import {provide} from '@angular/core';
import {Renderer} from '@angular/core';

//import {OVERLAY_CONTAINER_TOKEN} from '@angular2-material/core/overlay/overlay';
//import {createOverlayContainer} from '@angular2-material/core/overlay/overlay-container';
//import {MdGestureConfig} from '@angular2-material/core/gestures/MdGestureConfig';
import { AngularPomodoroAppComponent, environment } from './app';

if (environment.production) {
  enableProdMode();
}

bootstrap(AngularPomodoroAppComponent,[
  ROUTER_PROVIDERS,

  
  Renderer
]);

