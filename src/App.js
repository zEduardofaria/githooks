import React, { useState, useEffect } from 'react';

function App() {
  const [repositories, setRepositories] = useState([
    { id: 1, name: 'repo-teste1' },
    { id: 2, name: 'repo-teste2' },
    { id: 3, name: 'repo-teste3' },
  ]);

  function handleAddRepository() {
    setRepositories([
      ...repositories, 
      { id: Math.random(), name: "Novo repo" },
     ]);
  }

  return (
    <>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>
        Adicionar repositório
      </button>
    </>
  );
}

export default App;
