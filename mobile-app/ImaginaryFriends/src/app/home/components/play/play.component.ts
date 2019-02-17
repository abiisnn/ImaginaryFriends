import { Component, OnInit } from '@angular/core';
import {Page} from "tns-core-modules/ui/page";
import {RouterExtensions} from "nativescript-angular";
import {Observable, of} from "rxjs";
import {ImaginaryFriend} from "~/app/home/components/friend-card/friend-card.component";

@Component({
  selector: 'ns-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css'],
  moduleId: module.id,
})
export class PlayComponent implements OnInit {
  item$: Observable<ImaginaryFriend[]>;
  myArr: ImaginaryFriend[];
  constructor(page: Page, private router: RouterExtensions) {
    page.actionBarHidden = true;
     this.myArr = [];

    this.myArr.push(new ImaginaryFriend('Bing Bong', 'https://banner2.kisspng.com/20180623/plk/kisspng-bing-bong-pixar-glitter-clipart-5b2df2382db7d7.2517409915297377841873.jpg'));
    this.myArr.push(new ImaginaryFriend('Sully', 'https://banner2.kisspng.com/20180406/lcw/kisspng-james-p-sullivan-mike-wazowski-monsters-inc-mik-monster-inc-5ac74971163fc8.0407294615230099050911.jpg'));
    this.myArr.push(new ImaginaryFriend('Blue', 'https://pngimage.net/wp-content/uploads/2018/05/blue-mansion-foster-png-4.png'));

  }
  goMenu() {
    this.router.navigate(['/home/menu'], {clearHistory: true})
  }
  ngOnInit() {
  }

}
