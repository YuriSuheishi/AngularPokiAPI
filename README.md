
<h1>Busca utilizando PokiAPI</h1>
<blockquote>Status do Projeto: Em desenvolvimento :warning: </blockquote>
<br>
Sistema Simples de Pesquisa utilizando Angular e a PokiAPI
utilizando os recursos HTTPClient do Angular e a PokiAPI.
<br>
<h1>Tecnologias utilizadas no projeto</h1>
<ul>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
<li>TypeScript</li>
<li>Protractor</li>
</ul>
<br>
<h1>PokiAPI</h1>
A <a href="https://pokeapi.co/">PokiAPI</a> é uma RESTful API de Pokémon, que todas as informação possiveis de Pokémon.
Ela não precisa de autenticação, esse foi um dos principais motivos que me levou a ela.
Ela é uma API apenas de consumo, ou seja, só permite métodos GET.
<br>
<h1>Execução</h1>
Caso todas as dependecias estejam devidamente instaladas, Basta entrar na pasta PokiAPI e rodar o comando: 
<blockquote>	ng serve </blockquote>

Caso queira abrir a página no navegador:
<blockquote>    ng serve --open </blockquote>

Caso o seu computador não reconheça o comando 'ng', você pode tentar:
 <blockquote>   npm run ng serve </blockquote>

<br>

<h1>Testes</h1>
Testa se formulário está sendo preenchido. Verifica se as rota de busca está correta, e se a rota esta com o mesmo valor do campo digitado, <br>
Checa se o valor pesquisado aparece na página de resultado, e caso o valor não exista se exibe a mensagem de erro corretamente. <br>
Para Rodar os testes, use um dos comandos: <br><br>
 <blockquote>   ng e2e  </blockquote> 
 <blockquote>   npm run ng e2e  </blockquote>
   
<br>

### Checklist

- [x] Implementar Busca	
- [x] Implementar a Estilização
- [x] Implementar Testes e2e
- [ ] Criar Pokedex
