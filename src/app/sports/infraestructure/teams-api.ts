import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LogoDevApi} from '../../shared/infraestructure/logo-dev-api';
import {TeamResource, TeamsResponse} from './teams-response';
import {TeamAssembler} from './team-assembler';
import {map, Observable} from 'rxjs';
import {Team} from '../domain/model/team.entity';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})


export class TeamsApi{
  private baseUrl= environment.sportsProviderApiBaseUrl;
  private teamsEndpoint= environment.sportsProviderNewsEndpointPath;
  private http= inject(HttpClient);
  private logoApi= inject(LogoDevApi);

  getTeams(): Observable<Team[]> {
    return this.http.get<TeamsResponse>(`${this.baseUrl}${this.teamsEndpoint}`)
      .pipe(
        map(response => response.teams.map(team =>
          TeamAssembler.toEntityFromResource(team)
        ))
      );
  }
}
