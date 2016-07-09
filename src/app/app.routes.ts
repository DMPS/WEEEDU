import { provideRouter, RouterConfig } from '@angular/router';
import {GameComponent} from './game/game.component';
import {AboutComponent} from './about/about.component'

export const routes: RouterConfig = [
  { path: 'about', component: AboutComponent },
  { path: 'game', component: GameComponent },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];