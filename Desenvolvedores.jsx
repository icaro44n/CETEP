import React from 'react';

const Desenvolvedores = () => (
  <div>
    <h2>Desenvolvedores</h2>
    <div style={{ marginBottom: '1.5em', padding: '1.2em', border: '2.5px solid #1976d2', borderRadius: '10px', background: '#e3f2fd', boxShadow: '0 2px 8px #1976d233' }}>
      <strong style={{ fontSize: '1.3em', color: '#1976d2' }}>Desenvolvedor do site:</strong>
      <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.15em', color: '#0d47a1', letterSpacing: '1px' }}>
        Ícaro Henrique Costa Silva
      </p>
    </div>
    <div style={{ marginBottom: '1.5em', padding: '1.2em', border: '2.5px solid #388e3c', borderRadius: '10px', background: '#e8f5e9', boxShadow: '0 2px 8px #388e3c33' }}>
      <strong style={{ fontSize: '1.2em', color: '#388e3c' }}>Apresentadores do projeto à instituição:</strong>
      <ul style={{ margin: 0, listStyle: 'none', paddingLeft: 0 }}>
        <li style={{ fontWeight: 'bold', color: '#1b5e20', fontSize: '1.08em' }}>Ícaro Henrique Costa Silva</li>
        <li style={{ fontWeight: 'bold', color: '#1b5e20', fontSize: '1.08em' }}>Arthurm José Dantas Torres</li>
        <li style={{ fontWeight: 'bold', color: '#1b5e20', fontSize: '1.08em' }}>Maria Luiza Costa Araújo</li>
        <li style={{ fontWeight: 'bold', color: '#1b5e20', fontSize: '1.08em' }}>João Pedro Guimarães Pedrosa</li>
      </ul>
    </div>
    <div style={{ marginBottom: '1em', padding: '1em', border: '2px solid #bdbdbd', borderRadius: '8px', background: '#f5f5f5' }}>
      <strong style={{ fontSize: '1.1em', color: '#616161' }}>Colaboradores (informações e apoio):</strong>
      <ul style={{ margin: 0 }}>
        <li>Adcleison Pereira Da Costa</li>
        <li>Walalace dos Santos Regis</li>
        <li>Ronald Oliveira</li>
      </ul>
    </div>
  </div>
);

export default Desenvolvedores;