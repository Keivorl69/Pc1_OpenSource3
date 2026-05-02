import {Component, input} from '@angular/core';
import {Team} from '../../../domain/model/team.entity';
import {MatListItem} from '@angular/material/list';
import {
  MatCard, MatCardActions, MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-team-item',
  imports: [
    MatListItem,
    MatCard,
    MatCardImage,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardTitleGroup,
    MatCardContent,
    MatCardActions,
    MatButton,
    TranslatePipe
  ],
  templateUrl: './team-item.html',
  styleUrl: './team-item.css',
})
export class TeamItem {
  team=input.required<Team>();
  copyToClipboard(text:string) {
    navigator.clipboard.writeText(text);

  }
}
