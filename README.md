##
### MyTeacher
##

### Pré-Requisitos.

React.js, Node.js, Python.

**Node.js**
- Site: https://nodejs.org/en/

**React.js**
- Site: https://pt-br.reactjs.org/


### Ferramentas do programador.

**Visual Studio Code**
- Site: https://code.visualstudio.com/download

**Extenção VsCode**
- Visual Studio Code
    - `vscode-styled-components`


##
### Front-End
##

**Criação do Projeto**.

- Criação da pasta frontend.
- Habilitar a execução de scripts no Windows.
- Prompt de comando, globalmente.
```
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

**Criar o projeto**.
```    
npx create-next-app . --ts
``` 

**Iniciar o servidor**
```
npm run dev
```

### Material UI
- Site: https://mui.com/pt/

```
npm i @mui/material@5.10.2 @emotion/react@11.10.0 @emotion/styled@11.10.0
```
- Criação da pasta `src` na raiz do projeto.
- Criação da pasta `components` em `src`.
- Criação do componente *Cabecalho*.
- Criação da pasta `Cabecalho` em `components`.
- Criação do arquivo `Cabecalho.style.tsx`.

**Configurando o Tema**

- Criar uma pasta chamada `themes` dentro de `src`.
- Criar o arquivo chamado `theme.ts` com o seguinte conteúdo.


```tsx
import { createTheme } from '@mui/material';

const tema = createTheme({
    palette: {
        primary: {
            main: '#F52273',
        },
        secondary: {
            main: '#F5F5F5',
        },
        text: {
            primary: '#F52273',
            secondary: '#6c6767',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#FFF',
                    borderRadius: '0',
                    backgroundColor: '#F52273',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    ":hover": {
                        backgroundColor: '#F52273',
                    }

                },
            },
        },
        MuiTextField: {
            defaultProps: {
                InputLabelProps: {
                    required: false,
                },
                required: true,
            },
        },
    },
});

export default tema;
```

- Definir o tema em `_app.tsx`.

### Criar a listagem de professores

- Criar o componente `Lista` de professores
- Criar os itens dentro da lista de professores
- Criar a pasta `@types` dentro de `src`
- Criar o arquivo `professor.ts` dentro da pasta `@types`
- Criar a lista de professores para exibir

### Listar os professores via API

- O que são os React Hooks
- Conhecendo o hook `useState`
- Criar a pasta `hooks` em `src`
- Criar a pasta `pages` em `hooks`
- Criar o arquivo `useIndex.ts` na pasta `pages` e definir a lista de professores
- Instalar o Axios

```
npm i axios@0.27.2
```
    
- Criar a pasta `services` dentro de `src`
- Criar o arquivo `ApiService.ts` na pasta `services`
- Iniciar o serviço de back-end

**Windows**
```
.\.venv\Scripts\activate
python manage.py runserver
```

**Linux/MacOS**
```
source .venv/bin/activate
python manage.py runserver
```

- Buscar os dados dinamicamente na API back-end
- Criar o arquivo `FormatadorService.ts` na pasta `services`
- Formatar o valor monetário
- Limitar o tamanho do texto da descrição

### Marcar aula com professor

- Mostrar o diálogo com os campos e botões
- Passar o valor dos campos para o `useIndex`
- Definir o professor selecionado
- Lógica para fechar o diálogo
- Enviar o pedido a solicitação de marcação de aula
- Mostrar feedback para o usuário usando a `snackbar`
- Limpar o formulário

## Problemas comuns

- Windows diz que não tenho permissão para executar o comando
    - Execute:
    `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`
- Os comandos não funcionam
    - Se tiver algum anti-vírus, desative-o
    - Verifique se digitou corretamente
    - Verifique se está dentro da pasta correta
    - Tente atualizar o NPM executando:

```        
npm install -g npm@latest --force
```      

- Limpe o cache com o comando:

```        
npm cache clean --force
```
        
- Feche o terminal e abra novamente
- Ao executar a criação do projeto recebe a mensagem: `O termo ‘npm’ não é reconhecido como nome de cmdlet…`
    - Certifique que baixou o nome e instalou corretamente, você pode baixar o node nesse link [https://nodejs.org/dist/v16.17.1/node-v16.17.1-x86.msi](https://nodejs.org/dist/v16.17.1/node-v16.17.1-x86.msi)
    - Fecha e abre o Visual Studio Code para ter certeza que o terminal está reconhecendo o comando após instalar o node.
- Meu VS Code está diferente
    - Isso não é um problema. A aparência do VS Code é customizável. Isso não irá influenciar na aula.
- Minhas pastas no VS Code são criadas todas juntas, por exemplo: "src/ui/components"
    - O VS Code junta o nome das pastas vazias. Você pode mudar esse comportamento indo em `File > Preferences > Settings`
    Pesquise por "Compact folders"
    Desmarque o checkbox da configuração `Explorer: Compact Folders`
- O comando de criar projeto inicia, mas não finaliza (ou termina com erro)
    - Pode ser que o processo de instalação tenha travado. Você pode forçar a finalização desse processo seguindo este guia:
    [https://www.theopenindia.com/2021/04/found-0-vulnerabilities-how-to-fix-this-create-react-app-problem-.html](https://www.theopenindia.com/2021/04/found-0-vulnerabilities-how-to-fix-this-create-react-app-problem-.html)
- PORT 3000 is already in use
    - Sua porta 3000 já está sendo usada. No arquivo `package.json` altere o comando `next dev` para `next dev --port 3001` e tente acessar agora por `[http://localhost:3001](http://localhost:3001)` ou reinicie o computador
- Mensagem de erro no navegador, dizendo "Module not found"
    - Um arquivo não foi encontrado. Verifique se digitou tudo certo como está na aula, se todos os arquivos que você alterou foram salvos e se todas as pastas e arquivos estão na estrutura correta
- Meu arquivo `tsconfig.json` não foi criado automaticamente
    - Veja se você criou o projeto com `--ts`
- Mensagem de Token não reconhecido
    - O PowerShell pode dar erro ao executar um comando com `@`. Coloque aspas em volta do comando, como:

```        
npm i axios "@mui/material"
```
        
- Minha pasta foi criada mas está vazia
    - O projeto não foi criado corretamente e nem teve sua instalação concluída. Apague a pasta e execute `npx create-next-app . --ts`  novamente













##
### Back-End
##

**Python**
- Site: https://www.python.org/downloads/

**Insomnia**
- Site: https://insomnia.rest/download


##

- Instalar o python.
- Verificar a versão instalada do python(**Prompt de comando**(`console`) globalmente).
- Powershell
```
python -- version
```

**Criar o projeto**.
- Criar a pasta do projeto `backend`.
- Criar e ativar a `virtualenv`.

**Django**
- Site: https://www.djangoproject.com/

- Linux/MacOS

```
python3 -m venv .venv
source .venv/bin/activate
```
- Windows

```
python -m venv .venv
.\.venv\Scripts\activate
```

- Resolvendo erros. 
```
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

**Instalar o Django**
```
pip install django
```

**Criar o projeto**
```    
django-admin startproject myteacher . 
``` 

**Iniciar o servidor**
```    
python manage.py runserver
```


### Checklist do Desenvolvimento

- Configurar idioma e timezone da aplicação.
    - Alterar o arquivo `settings.py`

```py
LANGUAGE_CODE = 'pt-br'

TIME_ZONE = 'America/Manaus'
```
- Lista de fusos horários do banco de dados tz
- https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

- Ex: App
- settings.py
```py
INSTALLED_APPS = [
    'app.apps.AppConfig'
]
```

```
python .\manage.py startapp app
```
- views.py
- Criar uma pasta `templates` dentro da pasta `app`
- Criar uma pasta `app` dentro de `templates`
- Criar o arquivo `home.html` dentro da pasta `app` (Dentro de templates). 
- Seguindo o modelo. 'app/templates/app/home.html'

- views.py
```py
from django.shortcuts import render

def home(request):
    return render(request, 'app/home.html')
```

- urls.py (myteacher)
```py
from app.views import home

urlpatterns = [
    path('', home),
]
```

**Whimsical**
- Para criação de Fluxogramas.
- Site: https://whimsical.com/

- http://127.0.0.1:5500/app/templates/app/home.html
- Json: http://127.0.0.1:8000/

**Django REST framework**
- Site: https://www.django-rest-framework.org/
- Instalar a framework.
- https://www.django-rest-framework.org/#installation

```
pip install djangorestframework
```

- Adicionar `rest_framework` em `INSTALLED_APP` no arquivo settings.py
- settings.py
```py
INSTALLED_APPS = [
    'rest_framework',
]
```


- Criar e configurar a app `teacher`.
```
python .\manage.py startapp teacher
```

- settings.py (myteacher)
```py
INSTALLED_APPS = [
    'teacher.apps.TeacherConfig',
]
```

- Criar o `model` de `Professor`.
- Criar o `serializer` de `Professor`.
- Criar a `view` de `Professor`.
- Configurar as `urls` do projeto.
- Criar o `model` de `Aula`.
- Criar o `serializer` de cadastro de `Aula`.
- Criar a `view` de cadastro de `Aula`.
- Criar a validação customizada no `serializer` de cadastro de `Aula`.
- Configurar o CORS.

### Problemas frequentes

- Caso a virtualenv não esteja ativada no Windows, digite os seguintes comandos no terminal
- Caso esteja utilizando o CMD:
```        
.venv\Scripts\activate`
```        
- Caso esteja utilizando o PowerShell
```        
.venv\Scripts\Activate.ps1`
```

- Ao executar o comando `.venv\Scripts\Activate.ps1` no PoweShell exibe o erro de segurança como da imagem abaixo:
    
    
    - Para resolver basta executar o comando `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`, porém vale ressaltar que essa solução só funciona para o terminal ao qual o comando foi executado, caso abra um novo terminal o erro irá acontecer novamente e será necessário executar novamente o comando.
    - Para resolver de forma definitiva de maneira que não seja necessário executar o comando toda vez que abrir o terminal é necessário fechar o terminal aberto no momento e então abrir um novo PoweShell com privilégios de administrador, para isso basta clicar com o botão direito no ícone do PowerShell e então selecionar a opção “Executar como administrador”
    
    
    - Com o novo PowerShell aberto execute o comando `Set-ExecutionPolicy Unrestricted` e logo em seguida digite a letra “A” para aceitar. Feito isso pode fechar esse PowerShell e então abrir um novo PowerShell normalmente que o comando de ativação da virtualenv não dará mais problema.
    














##



##

- By:  **Daniel Oliveira**

  - `Instagram` - https://www.instagram.com/danieloliv3/
  - `Facebook` - https://web.facebook.com/danielsapup3/
  - `Twitter` - https://twitter.com/danielsapup3/
  - `Linkedin` - https://www.linkedin.com/in/danielsapup3/

  ##