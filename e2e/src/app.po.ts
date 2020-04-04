import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getSidebar(): Promise<string> {
    return element(by.css('page-wrapper')).getText() as Promise<string>;
  }
}
