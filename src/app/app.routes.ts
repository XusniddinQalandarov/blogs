import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SetterGetterAngularComponent } from './setter-getter-angular/setter-getter-angular.component';
import { SetterGetterComponent } from './setter-getter/setter-getter.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { PipeComponent } from './pipe/pipe.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SetterGetterComponent,
  },
  { path: 'setter-getter-angular', component: SetterGetterAngularComponent },
  { path: 'control-flow', component: ControlFlowComponent },
  { path: 'pipes', component: PipeComponent },
];
