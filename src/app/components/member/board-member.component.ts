import { Component, OnInit } from '@angular/core';
import { UserService } from '../../authentication/services/user.service';
import {ShareClub} from '../../models/ShareClub.model';

@Component({
  selector: 'app-board-member',
  templateUrl: './board-member.component.html',
  styleUrls: ['./board-member.component.css']
})

export class BoardMemberComponent implements OnInit {
  shareClub: ShareClub = new ShareClub();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getMemberBoard().subscribe(
      dataSingleShareClub => {
        this.shareClub = dataSingleShareClub;
      }
    );
  }

}
