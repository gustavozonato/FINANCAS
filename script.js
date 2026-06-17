:root {
    --dark-blue: #2d3748;
    --green: #49aa26;
    --light-green: #3dd705;
    --red: #e92929;
    --text-color: #363f5f;
    --bg-color: #f0f2f5;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: var(--bg-color);
    font-family: 'Poppins', sans-serif;
    color: var(--text-color);
}

.container {
    width: min(90vw, 1100px);
    margin: auto;
}

/* Esconder elementos mantendo acessibilidade para leitores de tela */
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}

/* Header */
header {
    background: var(--dark-blue);
    padding: 2rem 0 10rem;
    text-align: center;
}

header h1 {
    color: #fff;
    font-weight: 400;
}

header h1 span {
    color: var(--light-green);
}

/* Layout Responsivo dos Cards */
#balance {
    margin-top: -6rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
}

.card {
    background: #fff;
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.card h3 {
    font-weight: normal;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.card p {
    font-size: 2rem;
    line-height: 3rem;
    margin-top: 1rem;
}

.card.total {
    background: var(--green);
    color: white;
}

/* Estilização Base dos Ícones Dinâmicos (Novidade) */
.icon {
    display: inline-block;
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}

/* Seta Verde para Cima */
.icon-income {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2349aa26'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 10v4h-2v-4H8l4-4 4 4h-3z'/></svg>");
}

/* Seta Vermelha para Baixo */
.icon-expense {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23e92929'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 8h3l-4 4-4-4h3V8h2v2z'/></svg>");
}

/* Cifrão Branco para o Total */
.icon-total {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-1.12c-1.24-.13-2.42-.74-3.15-1.67l1.39-1.16c.48.64 1.25 1.03 1.76 1.08V12c-1.84-.53-3-1.39-3-2.9 0-1.47 1.05-2.58 2.41-2.91V5h2v1.1c1.07.11 2.01.59 2.65 1.34l-1.39 1.16c-.4-.48-.99-.77-1.26-.82v3.1c1.9.59 3 1.43 3 2.97 0 1.57-1.13 2.75-2.41 3.03V18z'/></svg>");
}

/* Tabela e Botões */
#transaction {
    display: block;
    width: 100%;
    overflow-x: auto;
    margin-top: 2rem;
}

.button.new {
    display: inline-block;
    margin-bottom: .8rem;
    background: none;
    border: none;
    color: var(--green);
    font-size: 1rem;
    cursor: pointer;
}

.data-table-container {
    overflow-x: auto;
}

#data-table {
    width: 100%;
    border-spacing: 0 0.5rem;
    color: #969cb3;
}

#data-table th {
    background: #fff;
    font-weight: normal;
    padding: 1rem 2rem;
    text-align: left;
}

#data-table td {
    background: #fff;
    padding: 1rem 2rem;
}

#data-table td.description {
    color: var(--dark-blue);
}

#data-table td.income {
    color: var(--green);
}

#data-table td.expense {
    color: var(--red);
}

.action-delete {
    cursor: pointer;
    color: var(--red);
    font-weight: bold;
}

/* Modal Styling */
.modal-overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    z-index: 999;
}

.modal-overlay.active {
    opacity: 1;
    visibility: visible;
}

.modal {
    background: #f0f2f5;
    padding: 2.4rem;
    position: relative;
    width: min(90vw, 500px);
    border-radius: 0.3rem;
}

.input-group {
    margin-top: .8rem;
}

.input-group input {
    border: none;
    border-radius: 0.2rem;
    padding: 0.8rem;
    width: 100%;
}

.input-group small {
    opacity: 0.6;
}

.input-group.actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
}

.input-group.actions .button,
.input-group.actions button {
    width: 48%;
    height: 50px;
    border: 2px solid var(--red);
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
}

.input-group.actions .button.cancel {
    color: var(--red);
    background: transparent;
}

.input-group.actions button {
    background: var(--green);
    color: white;
    border: none;
}

footer {
    text-align: center;
    padding: 4rem 0 2rem;
    color: var(--dark-blue);
    opacity: 0.6;
}

/* Media Query para Telas Maiores (Desktops) */
@media (min-width: 768px) {
    #balance {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
}
