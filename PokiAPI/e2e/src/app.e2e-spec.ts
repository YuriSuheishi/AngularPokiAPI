import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  //teste a ser executado
  it('Titulo PokiAPI na tag H1', async () => {
    await page.navigateTo();
    //espera que o texto dentro da tag h1 seja igual PokiAPI
    expect(await page.getTitleText()).toEqual('PokiAPI');
  });

  //segundo teste 
  it('Preenchendo formulário corretamente',() => {
    //preenche campo
    page.busca.sendKeys('pikachu');

    //valor input da busca deve ser igual a 'pikachu'
    expect<any>(page.busca.getAttribute('value')).toEqual('pikachu');
  });

});
