### Comandos basicos de git

- Repositorio: local onde os arquivos ficam na nuvem

  - local: que e sua maquina, ou seja, o computador do desenvolvedor
  - origin ou remote: a versao na nuvem dos codigos criados na maquina do dev
  - git config --get remote.origin.url : mostrar a url remote

- Branch: uma copia da branch princial ou "master" ou "main"

  - Se gente cria branches para poder fazer diferentes tipos de trabalho
  - main -> branch principal com o codigo mais estavel da aplicação
    - Criar uma nova branch geralmente e feito pela tela de um site tipo JIRA ou GIT ou pode-se usar um comando chamado git checkout
      - feature/TASK-87: voce realiza o trabalho da tarefa 87
      - depois de terminar o servico voce entrega por um processo chamado pull request

- git clone: serve pra clonar um repositorio remoto
- git add -- <caminho do arquivo> ou <--all>: adicionar arquivos para serem versionados
- git commit -m "Mensagem de texto": Dar um titulo para o commit
- git pull origin <nome da branch>: Trazer atualizacoes da branch
- git push origin <nome da branch>: Enviar atualiacoes pra branch
- git checkout <nome da branch que eu quero entrar>

### Command to up server

- docker compose -f docker-compose.yml up

### Commands to migrate

- Enter via terminal in the migration folder
- Run npm install (in the first time)
- To create a migration: npm run migrate:make <nome da tabela>
- To upgrade => npm run migrate:up
- To rollback => npm run migrate:rollback
