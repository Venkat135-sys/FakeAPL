import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { BiryaniComponent } from './biryani/biryani.component';
import { CooldrinkComponent } from './cooldrink/cooldrink.component';
import { DessertsComponent } from './desserts/desserts.component';
import { TestComponent } from './test/test.component';

import { ContactusComponent } from './contactus/contactus.component';
import { HttpClientModule } from '@angular/common/http';
import { TestingComponent } from './testing/testing.component';
import { ChefDataComponent } from './chef-data/chef-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    RegisterComponent,
    RecipeComponent,
    RecipeDetailsComponent,
    BiryaniComponent,
    CooldrinkComponent,
    DessertsComponent,
    TestComponent,
    TestingComponent,
    ContactusComponent,
    ChefDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
