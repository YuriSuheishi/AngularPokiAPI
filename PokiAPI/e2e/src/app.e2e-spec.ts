import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  //teste a ser executado
  it('should display welcome message', async () => {
    await page.navigateTo();
    //espera que o texto da pagina seja igual PokiAPI
    expect(await page.getTitleText()).toEqual('PokiAPI');
  });
});
