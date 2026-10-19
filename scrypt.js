/* ===== Reset ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --cor-primaria: #f28c28;
  --cor-secundaria: #2e7d5b;
  --cor-fundo: #f4f4f4;
  --cor-texto: #333;
  --cor-branca: #fff;
  --sombra: 0 4px 12px rgba(0, 0, 0, 0.1);
  --raio: 12px;
}

body {
  font-family: 'Segoe UI', Roboto, Arial, sans-serif;
  background: var(--cor-fundo);
  color: var(--cor-texto);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* ===== Cabeçalho ===== */
.cabecalho {
  background: linear-gradient(135deg, var(--cor-secundaria), var(--cor-primaria));
  color: var(--cor-branca);
  text-align: center;
  padding: 2rem 1rem;
}

.titulo {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.subtitulo {
  font-size: 1rem;
  opacity: 0.9;
}

/* ===== Conteúdo ===== */
.conteudo {
  flex: 1;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  padding: 2rem;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
}

/* ===== Painel do jogo ===== */
.painel {
  background: var(--cor-branca);
  border-radius: var(--raio);
  box-shadow: var(--sombra);
  padding: 1.5rem;
}

.painel__titulo {
  margin-bottom: 1rem;
  color: var(--cor-secundaria);
}

.painel__jogo {
  min-height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fafafa;
  border: 2px dashed #ddd;
  border-radius: var(--raio);
  margin-bottom: 1rem;
  padding: 1rem;
  text-align: center;
  gap: 0.5rem;
}

.jogo__mensagem {
  font-size: 1.1rem;
}

.jogo__tentativas {
  font-size: 0.9rem;
  color: #666;
}

/* ===== Entrada ===== */
.painel__entrada {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.entrada {
  flex: 1;
  min-width: 150px;
  padding: 0.75rem 1rem;
  border: 2px solid #ddd;
  border-radius: var(--raio);
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

.entrada:focus {
  border-color: var(--cor-primaria);
}

.entrada--textarea {
  width: 100%;
  min-height: 100px;
  resize: vertical;
  margin: 0.75rem 0;
}

/* ===== Botões ===== */
.botao {
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: var(--raio);
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s, opacity 0.2s;
}

.botao:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}

.botao--primario {
  background: var(--cor-primaria);
  color: var(--cor-branca);
}

.botao--secundario {
  background: var(--cor-secundaria);
  color: var(--cor-branca);
}

/* ===== Feedback ===== */
.feedback {
  background: var(--cor-branca);
  border-radius: var(--raio);
  box-shadow: var(--sombra);
  padding: 1.5rem;
}

.feedback__titulo {
  margin-bottom: 1rem;
  color: var(--cor-primaria);
}

/* ===== Rodapé ===== */
.rodape {
  background: var(--cor-secundaria);
  color: var(--cor-branca);
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
}

/* ===== Responsivo ===== */
@media (max-width: 768px) {
  .conteudo {
    grid-template-columns: 1fr;
    padding: 1rem;
  }

  .titulo {
    font-size: 1.5rem;
  }
}