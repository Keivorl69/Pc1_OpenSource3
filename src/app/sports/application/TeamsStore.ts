import {computed, inject, Injectable, signal} from '@angular/core';
import {Team} from '../domain/model/team.entity';
import {TeamsApi} from '../infraestructure/teams-api';
import {LogoDevApi} from '../../shared/infraestructure/logo-dev-api';


@Injectable({providedIn: 'root'})

export class TeamsStore{
  private teamsSignal=signal<Team[]>([])
  private teamsApi= inject(TeamsApi);
  private logoApi=inject(LogoDevApi);
  readonly teams=computed(()=>this.teamsSignal());

  loadTeams() {
    if (this.teamsSignal().length === 0) {
      this.teamsApi.getTeams().subscribe(res => {
        this.teamsSignal.set(res);
        console.log("Teams loaded:", res);
      });
    }
  }
}
