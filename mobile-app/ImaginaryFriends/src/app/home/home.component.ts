import {Page} from "tns-core-modules/ui/page";
import {RouterExtensions} from "nativescript-angular";
import {Component, OnInit} from "@angular/core";


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

    constructor(page: Page, private router: RouterExtensions) {
        // Use the component constructor to inject providers.
        page.actionBarHidden = true;
    }
    goMenu() {
        this.router.navigate(['/home/menu'], {clearHistory: true});
    }
    ngOnInit(): void {
        // Init your component properties here.
    }
}
