import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule }  from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { RoutedComponents } from './app-routing.module';
import { HoverDirective } from './hover.directive';

@NgModule({
      imports: [BrowserModule, AppRoutingModule, FormsModule, HttpModule ], //HttpModule also register http service , so we do not need to list in our provider array
      declarations: [AppComponent, RoutedComponents, HoverDirective ],
      bootstrap:    [ AppComponent ]
})
export class AppModule { }
