import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('PokiAPI tests', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  //teste 1
  it('Preenchendo formulário corretamente',() => {
    //preenche campo
    page.busca.sendKeys('pikachu');

    //valor input da busca deve ser igual a 'pikachu'
    expect<any>(page.busca.getAttribute('value')).toEqual('pikachu');
  });

  //teste 2
  it('Rota correta', () => {
    page.botao.click();
    page.espera(3000);
    //espera que vá para result
    expect(browser.getCurrentUrl()).toMatch("/result");
  });


  //teste 3
  it('Pesquisando valor digitado', () => {
    //preenche campo
    page.busca.sendKeys('pikachu');
    page.botao.click();
    page.espera(3000);
    //espera que vá para result/pikachu
    expect(browser.getCurrentUrl()).toMatch("/result/pikachu");
  });

  //teste 4
  it('Resultado igual ao valor pesquisado', () => {
    //preenche campo
    page.busca.sendKeys('12');
    page.botao.click();
    page.espera(3000);
    //espera que vá para result/12
    expect(page.getResult()).toMatch("12");

  });

  //teste 
  it('Pesquisa valor inexistente', () => {
    //preenche campo
    page.busca.sendKeys('tls123');
    page.botao.click();
    page.espera(3000);
    //espera que não encontre valor inexistente
    expect(page.getResult()).toMatch("inexistente");
    //p
  });
});
