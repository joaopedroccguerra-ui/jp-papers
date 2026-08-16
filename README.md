# JP Papers

Site estático de practice papers e revision notes para IGCSE (época May/June 2027).
Sem servidor, sem build, sem dependências — funciona tal e qual no GitHub Pages.

## Estrutura

    index.html        Página inicial
    resources.html    Biblioteca de disciplinas com pesquisa e filtros
    subject.html      Página de uma disciplina (recebe ?code=0625)
    updates.html      Todas as atualizações
    contact.html      Formulário "Suggest a change"
    assets/data.js    << O ÚNICO ficheiro que precisas de editar no dia a dia
    assets/app.js     Contador, pesquisa, filtros, render das listas
    assets/styles.css Todo o estilo
    files/            (opcional) PDFs alojados no próprio site
    .nojekyll         Impede o GitHub de processar o site com Jekyll

## Publicar no GitHub Pages

1. Em github.com clica em **New repository**. Nome: `jp-papers`. Visibilidade: **Public**
   (o Pages só é gratuito em repositórios públicos). Não adiciones README.
2. No repositório vazio, clica em **uploading an existing file** e arrasta **o conteúdo**
   desta pasta (o `index.html` tem de ficar na raiz do repositório, não dentro de outra pasta).
3. **Commit changes**.
4. Vai a **Settings → Pages**. Em *Source* escolhe **Deploy from a branch**,
   branch `main`, pasta `/ (root)`. Guarda.
5. Espera 1–2 minutos. O site fica em:
   `https://<o-teu-utilizador>.github.io/jp-papers/`

### Domínio próprio (opcional)
Settings → Pages → Custom domain. Depois cria um registo CNAME no teu fornecedor
de domínio a apontar para `<o-teu-utilizador>.github.io`.

## Adicionar um teste

Os testes ficam no Google Drive; o site só aponta para lá. Para acrescentar um:

1. No Drive, abre o documento → Partilhar → Copiar link.
2. No link, troca o `/edit?...` final por `/preview`.
3. Abre `assets/data.js` e acrescenta uma linha à disciplina certa:

       { name: "Physics PSA Term 1 Revision", type: "PSA", term: "Term 1", url: "https://docs.google.com/document/d/ID/preview" }

4. Commit. O site atualiza sozinho em ~1 minuto.

Tipos usados: `PSA`, `Cycle test`, `EoY`, `Skills`, `MCQ`, `Practice`.

## Publicar uma atualização

Acrescenta um objeto no topo da lista `UPDATES` em `assets/data.js`.

## O formulário de contacto

O GitHub Pages não corre código de servidor, por isso o formulário precisa de um
serviço externo. O mais simples é o [Formspree](https://formspree.io) (plano
gratuito): cria uma conta, cria um form, copia o ID e substitui `YOUR_FORM_ID`
no `contact.html`.

## Quem consegue abrir os documentos

O site é público, mas os documentos não: continuam no teu Drive, com as tuas
permissões. Quem não tiver acesso vê o ecrã de pedir permissão do Google.
Na prática é isto que substitui o login que tinhas no Wix — a lista de testes
é visível, o conteúdo só para quem autorizares.

Se quiseres abrir a toda a escola de uma vez: na pasta do Drive → Partilhar →
"Qualquer pessoa em park-is.com com o link" → Leitor.

## Se um dia quiseres proteger também a lista

Neste momento os nomes dos testes são públicos (qualquer pessoa vê a lista), e só
o conteúdo é que está protegido pelo Drive. Se quiseres que nem a lista apareça
a estranhos, põe o **Cloudflare Access** à frente do site: é gratuito, faz login
com Google e podes restringir ao domínio da escola.

Se algum dia alojares PDFs na pasta `files/` deste repositório, atenção: esses
ficam completamente públicos, sem qualquer proteção.

## Segurança

Nunca partilhes tokens do GitHub em chats, capturas de ecrã ou dentro do código.
Se um token for exposto, revoga-o imediatamente em
Settings → Developer settings → Personal access tokens.
