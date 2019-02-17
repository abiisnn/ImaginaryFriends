import {Page} from "tns-core-modules/ui/page";
import {registerElement, RouterExtensions} from "nativescript-angular";
import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
registerElement('DrawingPad', () => require('nativescript-drawingpad').DrawingPad);
@Component({
  selector: 'ns-new-friend',
  templateUrl: './new-friend.component.html',
  styleUrls: ['./new-friend.component.css'],
  moduleId: module.id,
})
export class NewFriendComponent implements OnInit {

  constructor(page: Page, private router: RouterExtensions) {
    page.actionBarHidden = true;
  }
  goMenu() {
    this.router.navigate(['/home/menu'], {clearHistory: true})
  }
  ngOnInit() {
  }
    @ViewChild('DrawingPad') DrawingPad: ElementRef;

    async getMyDrawing(args) {
        // get reference to the drawing pad
        let pad = this.DrawingPad.nativeElement;

        // then get the drawing (Bitmap on Android) of the drawingpad
        let img;
        pad.getTransparentDrawing().then(
            function(data) {
                console.dir(data);/*
                let bmp = BitmapFactory.asBitmap(data.toBase64String("png", 100));
                bmp.dispose(() => {

                    const folderDest = knownFolders.documents();
                    const pathDest = path.join(folderDest.path, "test.png");
                    const saved: boolean = bmp.toImageSource().saveToFile(pathDest, "png");
                    if (saved) {
                        console.log("Image saved successfully!");
                    }
                });
*/
            },
            function(err) {
                console.log(err);
            }
        );
    }

    clearMyDrawing(args) {
        var pad = this.DrawingPad.nativeElement;
        pad.clearDrawing();
    }

}
