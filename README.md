# Notas de lembrança

### receita do git

- git status: ver a situação atual dos arquivos
- git add -- <endereço do arquivo> ou git add --all
  - diferença: no primeiro caso voce seleciona
    exclusivamente o arquivo, no segundo (--all)
    todos os arquivos modificados vao ser comitados
- git commit -m "Mensagem do commit"
- git pull origin <nome da branch>
- git push origin <nome da branch>

### pontos de css

- o css serve para selecionar elementos html
- pode ser usado de formar hierarquica tambem
- classes: representadas por "." exemplo:
  - <div class="nome-da-classe"> -> .nome-da-classe {}
- id: representado por "#" exemplo:
  - <div id="id_unique"> -> #id_unique {}
- element: representado pelo nome do elemento exemplo:

  - <div></div> -> div {}

- no css podemos declarar a hierarquia:

  - <div class="first-item menu-area">
      <span class="second-item">
        <label class="third-item">Texto</label>
      </span>
    </div>
  - selecionar o second-item
    - .second-item { ... }
    - span.second-item { ... }
    - .first-item .second-item { ... }
  - selecionar o third-item
    - div span label { ... }
    - .first-item .second-item .third-item { ... }
    - div span .third-item { ... }
  - no css podemos declarar conjunto:
    - .first-item.menu-area { ... }
