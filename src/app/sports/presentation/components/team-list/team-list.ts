import {Component, input, output} from '@angular/core';
import {Team} from '../../../domain/model/team.entity';
import {TeamItem} from '../team-item/team-item';

@Component({
  selector: 'app-team-list',
  imports: [
    TeamItem
  ],
  templateUrl: './team-list.html',
  styleUrl: './team-list.css',
})
export class TeamList {
  teams=input.required<Array<Team>>();

}
