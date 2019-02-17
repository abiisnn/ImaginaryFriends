
import { HomeComponent } from "./home.component";
import {MenuComponent} from "~/app/home/components/menu/menu.component";
import {NewFriendComponent} from "~/app/home/components/new-friend/new-friend.component";
import {PlayComponent} from "~/app/home/components/play/play.component";
import {Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: 'menu', component: MenuComponent},
    { path: 'new-friend', component: NewFriendComponent},
    { path: 'play', component: PlayComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
