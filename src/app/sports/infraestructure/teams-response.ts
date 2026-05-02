

export interface TeamsResponse{
  status: string;
  teams: TeamResource[];


}


export interface TeamResource{

  strTeam: string;
  strCountry: string;
  strSport: string;
  strLogo: string;
  strStadium: string;
  strDescriptionEN: string;
  strWebsite: string;
}
