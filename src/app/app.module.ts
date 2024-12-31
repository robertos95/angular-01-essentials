import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './shared/card/card.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent, CardComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, TasksComponent],
})
export class AppModule {}
