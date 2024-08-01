import imagem from './streamer.jpg';
import imagem2 from './streamer2.jpg';
import './App.css';

function App() {
  return (
    <div>
      <header>
      <p>Streamer</p>
      <a href=''>Ferramentas</a>
      <a href=''>Oportunidades</a>
      <a href=''>Habilidades</a>
      <a href=''>Introdução</a>
      </header>
      <section id='introducao'>
        <img src={imagem}></img>
        <p><h2>Introdução</h2>O streamer é o profissional que transmite conteúdos ao vivo, sejam de jogos eletrônicos, programações esportivas, análises e reações, entre outras possibilidades. Sua atuação possui ênfase na interação com o público, o que é possível devido a utilização de plataformas de streaming on-line.<br></br>
        A pluralidade de programações e nichos é característica presente no setor. O streamer pode transmitir um podcast, por exemplo, ou, então, realizar a cobertura de um evento. Dentre tantas possibilidades, o usuário possui autonomia para acompanhar o conteúdo do profissional que lhe convém.<br></br>
        Como forma de geração de renda, os streamers tradicionalmente ofertam produtos em seus canais, garantindo, ao usuário, determinados benefícios resultantes de uma inscrição mensal, por exemplo. Outras alternativas incluem a venda de acessórios e a vinculação com empresas por meio de anúncios.</p>
      </section>
      <section id='habilidades'>
        <br></br>
        <ol>
          <h2>Habilidades</h2>
          <p>Um streamer pode precisar de uma variedade de habilidades para ter sucesso na transmissão de conteúdos ao vivo. Aqui estão algumas das mais importantes:</p>
          <li>Habilidades de Comunicação</li>
          <li>Carisma</li>
          <li>Conhecimento Técnico</li>
          <li>Habilidades em Jogos (ou Conteudo)</li>
          <li>Marketing</li>
          <li>Criatividade</li>
          <li>Gestão de Comunidade</li>
          <li>Capacidade de Adaptação</li>
          <li>Resiliência e Paciência</li>
        </ol>
        <br></br>
      </section>
      <section id='oportunidades'>
          <ol>
            <h2>Oportunidades</h2>
            <p>As oportunidades de carreira para um streamer vão além da simples transmissão de conteúdos ao vivo. Com o crescimento da indústria de streaming, diversos caminhos profissionais podem ser explorados. Aqui estão algumas oportunidades de carreira que um streamer pode considerar:</p>
            <li>Criação de Conteúdo</li>
            <li>Parcerias e Patrocínios</li>
            <li>Marketing Digital e Gestão de Mídias Sociais</li>
            <li>Desenvolvimento de Jogos e Consultoria</li>
            <li>Produção de Eventos</li>
            <li>Criação de Comunidades</li>
            <li>Trabalho em Plataformas de Streaming</li>
          </ol>
          <img src={imagem2}></img>
      </section>
      <section id='ferramentas'>
        <br></br>
        <ol>
          <h2>Ferramentas</h2>
          <li>PC</li>
          <li>Câmera</li>
          <li>Microfone</li>
          <li>Fones de Ouvido</li>
          <li>Iluminação</li>
          <li>Equipamentos de Captura</li>
          <li>OBS Studio</li>
        </ol>
        <br></br>
      </section>
    </div>
    
  );
}

export default App;
