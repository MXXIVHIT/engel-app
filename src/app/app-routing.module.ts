import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {ManagerComponent} from './components/manager/manager.component';
import {FormtestComponent} from "./components/formtest/formtest.component";
import {HeroFormReactiveComponent} from "./components/reactive/hero-form-reactive.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent  },
  { path: 'manager',  component: ManagerComponent  },
  { path: 'test',  component: FormtestComponent  },
  { path: 'hero',  component: HeroFormReactiveComponent  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
