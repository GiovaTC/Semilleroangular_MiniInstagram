import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { SearchComponent } from './search/search.component';
import { ExploreComponent } from './explore/explore.component';
import { ReelsComponent } from './reels/reels.component';
import { MessagesComponent } from './messages/messages.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NewComponent } from './new/new.component';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { PostComponent } from './post/post.component';
import { PersonalInformationService } from './services/personal-information.service';
import { NetworkService } from './services/network.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    SearchComponent,
    ExploreComponent,
    ReelsComponent,
    MessagesComponent,
    NotificationsComponent,
    NewComponent,
    HomeComponent,
    VideoComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [PersonalInformationService, NetworkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
