import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('PokiAPI tests', () => {
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

  //terceiro teste, pesquisa indo para /result
  it('Rota correta', () => {
    page.botao.click();
    page.espera(3000);
    //espera que vá para result
    expect(browser.getCurrentUrl()).toMatch("/result");
  });


  //quarto teste, valor correto
  it('Pesquisando valor digitado', () => {
    //preenche campo
    page.busca.sendKeys('pikachu');
    page.botao.click();
    page.espera(3000);
    //espera que vá para result/pikachu
    expect(browser.getCurrentUrl()).toMatch("/result/pikachu");
  });

  //quinto teste, resultado correto
  it('Resultado igual ao valor pesquisado', () => {
    //preenche campo
    page.busca.sendKeys('pikachu');
    page.botao.click();
    page.espera(3000);
    //espera que vá para result/pikachu
    expect(page.getResult()).toMatch("pikachu");

  });
});
