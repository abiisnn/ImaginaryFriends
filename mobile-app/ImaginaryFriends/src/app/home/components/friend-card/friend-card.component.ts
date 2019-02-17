import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ns-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.css'],
  moduleId: module.id,
})
export class FriendCardComponent implements OnInit {
  @Input() imaginaryFriend: ImaginaryFriend;
  constructor() { }

  ngOnInit() {
  }

}
export class ImaginaryFriend {
  photo: string;
  name: string;
  constructor(name: string = '', photo: string = '') {
    this.name = name;
    this.photo = photo;
  }
}
