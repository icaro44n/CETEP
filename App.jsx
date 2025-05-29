import React, { useState } from 'react';
import Desenvolvedores from './Desenvolvedores';

function App() {
  const [pagina, setPagina] = useState('inicio');

  return (
    <div>
      <nav style={{ marginBottom: '2em' }}>
        <button onClick={() => setPagina('inicio')} style={{ marginRight: '1em' }}>
          Início
        </button>
        <button onClick={() => setPagina('desenvolvedores')}>
          Desenvolvedores
        </button>
      </nav>
      {pagina === 'inicio' && (
        <div>
          {/* Conteúdo da página inicial */}
          <h1>Bem-vindo ao site!</h1>
        </div>
      )}
      {pagina === 'desenvolvedores' && <Desenvolvedores />}
    </div>
  );
}

export default App;