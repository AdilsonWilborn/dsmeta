/* Estrutura básica de uma aplicação REACT */
/* O REACT é uma biblioteca que vai ser responsável por processar as informações que estão no projeto e apresentar um resultado gráfico no navegador,
 esse processamento chama-se renderização, o processo de converto informações em imagem é renderização  */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render( /* esse .render manda renderizar a aplicação na tela do navegador
ele faz isso conersando com o documento html que está na raiz ''index.html'' lá no arquivo dentro de body tem um div com id="root"
esse processo de renderização vai ta dentro daquele div marcado com root*/
  <React.StrictMode>
    <App /> {/* um componente visual é uma função do javascript, no app.tsx tem a função com um comando para retornar algum conteúdo */}
  </React.StrictMode>
)
