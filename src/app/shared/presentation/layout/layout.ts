import {Component, inject, OnInit} from '@angular/core';
import {TeamsStore} from '../../../sports/application/TeamsStore';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatToolbar} from '@angular/material/toolbar';
import {TranslatePipe} from '@ngx-translate/core';
import {LanguageSwitcher} from '../language-switcher/language-switcher';
import {TeamList} from '../../../sports/presentation/components/team-list/team-list';
import {LogoDevApi} from '../../infraestructure/logo-dev-api';
import {Footer} from '../footer/footer';

@Component({
  selector: 'app-layout',
  imports: [
    MatSidenavContainer,
    MatToolbar,
    TranslatePipe,
    LanguageSwitcher,
    MatSidenavContent,
    TeamList,
    Footer
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout implements OnInit {
  protected store=inject(TeamsStore);
  protected logoApi = inject(LogoDevApi);

  protected readonly teams=this.store.teams;

  appLogo = this.logoApi.getUrlToLogo('https://www.thesportsdb.com/');

  ngOnInit() {
    this.store.loadTeams();
  }


}
