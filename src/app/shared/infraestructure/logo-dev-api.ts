import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class LogoDevApi {
  /** BASE URL */
  baseUrl = environment.logoProviderApiBaseUrl;
  /** API KEy for authentication */
  apiKey = environment.logProviderPublishableKey;

  constructor() {}

  /** Builds the URL the source's logo using the Logo Provider API */
  getUrlToLogo(source: string) {
    return `${this.baseUrl}${new URL(source).hostname}?token=${this.apiKey}`;
  }
}
