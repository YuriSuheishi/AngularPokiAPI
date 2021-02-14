import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root h1')).getText();
  }

  async getResult(): Promise<string> {
    return element(by.css('app-root')).getText();
  }

  espera = (milisegundos:number) => {
    browser.sleep(milisegundos);
  } 

  busca = element(by.name('input'));
  botao = element(by.buttonText('Buscar'));

}
