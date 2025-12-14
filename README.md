# Gerenciador de Chamados

Aplicação web responsiva para gerenciamento de chamados de serviço corporativos, desenvolvida como desafio técnico de Front-end.

O projeto permite visualizar e cadastrar chamados, com foco em organização, clareza de código, boa experiência do usuário e uso de tecnologias modernas do ecossistema Angular.

---

## 📌 Funcionalidades

- Listagem de chamados com paginação
- Busca e filtragem de chamados
- Cadastro de novo chamado com validação de campos obrigatórios
- Feedback visual com toast de sucesso e erro
- Interface responsiva (desktop e mobile)
- Utilização de dados mockados (JSON) para simular backend
- Geração sequencial de IDs para novos chamados

---

## 🚀 Instalação e Execução

### Pré-requisitos

- Node.js (versão 18 ou superior recomendada)
- Angular CLI (versão 17 ou superior)

> A aplicação foi desenvolvida para ser executada em ambiente local utilizando Angular CLI.  
> Os dados são simulados localmente e não dependem de backend real.

---

### Comandos

- git clone https://github.com/NatanRocha43/gerenciador-chamados.git
- cd gerenciador-chamados
- npm install
- ng serve

---

### Acesso local

- http://localhost:4200

---

## 🛠️ Tecnologias Utilizadas

### Angular (Standalone Components)

Framework principal da aplicação, utilizando a abordagem de **componentes standalone**, sem uso de NgModules.

**Justificativa:**  
O Angular oferece uma estrutura robusta para aplicações corporativas, com excelente suporte a formulários, rotas, tipagem com TypeScript e organização de código, sendo amplamente utilizado em projetos de médio e grande porte.

---

### PrimeNG

Biblioteca de componentes UI para Angular, utilizada para construção da interface (tabela, botões, selects e mensagens de feedback).

**Justificativa:**  
PrimeNG acelera o desenvolvimento de interfaces ricas e padronizadas, sendo uma escolha comum em sistemas corporativos Angular.

---

### TypeScript

Linguagem utilizada no desenvolvimento da aplicação.

**Justificativa:**  
A tipagem estática melhora a segurança, legibilidade e manutenção do código, reduzindo erros durante o desenvolvimento.

---

### SCSS

Pré-processador CSS utilizado para estilização da aplicação.

**Justificativa:**  
SCSS facilita a organização dos estilos, permite uso de nesting e melhora a manutenção de layouts responsivos.

---

### JSON Mock (dados simulados)

Utilização de arquivos JSON para simular dados de uma API de backend.

**Justificativa:**  
Permite desenvolver e testar a aplicação sem dependência de backend real, simulando o comportamento esperado de um serviço externo.

---

## 🤖 Uso de Inteligência Artificial e Ferramentas de Apoio

### Ferramentas utilizadas

- ChatGPT (apoio técnico, esclarecimento de dúvidas, sugestões de UX e arquitetura)
- Documentação oficial do Angular e PrimeNG

### Observações sobre o uso de IA

A inteligência artificial foi utilizada como **ferramenta de apoio** ao desenvolvimento, auxiliando na resolução de dúvidas técnicas, revisão de soluções e sugestões de melhoria.

Todo o código foi compreendido, revisado e ajustado manualmente antes de ser incorporado ao projeto.

---

## 📊 Percentual Estimado de Código

- Código desenvolvido manualmente: aproximadamente **60%**
- Código gerado ou auxiliado por IA: aproximadamente **40%**

A IA foi utilizada principalmente para apoio conceitual e validação de abordagens técnicas.

---

## 📝 Observações Finais

- O projeto não utiliza backend real.
- Os dados são mantidos em memória e em arquivos mock.
- Ao recarregar a página, os chamados criados são perdidos (comportamento esperado).
- A geração de IDs é centralizada no service, simulando comportamento de backend.
- O layout mobile recebeu tratamento específico para garantir boa legibilidade.
- O código prioriza clareza, organização e boas práticas de Front-end.

---

## 📎 Possíveis Evoluções

- Persistência de dados em localStorage ou integração com API real
- Edição e exclusão de chamados
- Ordenação e filtros avançados
- Testes unitários
- Autenticação de usuários

---

Projeto desenvolvido como desafio técnico, com foco em qualidade, organização e boas práticas de desenvolvimento Front-end.
