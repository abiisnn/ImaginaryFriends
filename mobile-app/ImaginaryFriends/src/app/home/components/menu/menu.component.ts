
import {RouterExtensions} from "nativescript-angular";
import {Page} from "tns-core-modules/ui/page";
import {Component, OnInit} from "@angular/core";


@Component({
  selector: 'ns-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  moduleId: module.id,
})
export class MenuComponent implements OnInit {

  constructor(page: Page, private router: RouterExtensions) {
    page.actionBarHidden = true;
  }
  onExit() {
    this.router.navigate(['/home'], {clearHistory: true});
  }
  onNewFriend() {
    this.router.navigate(['/home/new-friend']);
  }
  onPlay() {
    this.router.navigate(['/home/play']);
  }
  ngOnInit() {
  }

}
