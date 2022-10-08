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


**Extenção VsCode**
- Visual Studio Code
    - `vscode-styled-components`


- Criação da pasta `Cabecalho` em `components`.
- Criação do arquivo *Cabecalho.style.tsx*.

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










##
### Back-End
##







##



##

- By:  **Daniel Oliveira**

  - `Instagram` - https://www.instagram.com/danieloliv3/
  - `Facebook` - https://web.facebook.com/danielsapup3/
  - `Twitter` - https://twitter.com/danielsapup3/
  - `Linkedin` - https://www.linkedin.com/in/danielsapup3/

  ##