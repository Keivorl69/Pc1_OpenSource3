import {Team} from '../domain/model/team.entity';
import {TeamResource, TeamsResponse} from './teams-response';

export class TeamAssembler{


  static toEntityFromResource(resource: TeamResource): Team{
    return {
      strTeam: resource.strTeam,
      strCountry: resource.strCountry,
      strSport: resource.strSport,
      strLogo: resource.strLogo,
      strStadium: resource.strStadium,
      strDescriptionEN: resource.strDescriptionEN,
      strWebsite: resource.strWebsite
    }
  }

  static toEntitiesFromResponse(response: TeamsResponse): Team[]{
    return response.teams.map(team => this.toEntityFromResource(team));
  }
}
