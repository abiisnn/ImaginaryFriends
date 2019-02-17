import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { MenuComponent } from './components/menu/menu.component';
import { NewFriendComponent } from './components/new-friend/new-friend.component';
import {DrawingPad} from "nativescript-drawingpad";
import { PlayComponent } from './components/play/play.component';
import { FriendCardComponent } from './components/friend-card/friend-card.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        MenuComponent,
        NewFriendComponent,
        PlayComponent,
        FriendCardComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
