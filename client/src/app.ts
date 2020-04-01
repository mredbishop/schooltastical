import {PLATFORM} from 'aurelia-pal';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      {
        route: ['', 'welcome'],
        name: 'welcome',
        moduleId: PLATFORM.moduleName('./welcome'),
        nav: true,
        title: 'Welcome'
      },
      {
        route: 'timestable-grid',
        name: 'users',
        moduleId: PLATFORM.moduleName('./timestable-grid'),
        nav: true,
        title: 'Timestable Grid'
      }
    ]);

    this.router = router;
  }
}
