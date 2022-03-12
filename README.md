<div align="center"> 
 <img src="https://user-images.githubusercontent.com/52588477/157951409-f879badf-6318-44d6-8852-c2290d670abb.svg"  width="150px"/>
  <br>
</div>

### <p align="center"> Dogs - Rede social para cachorros!</p>
#### <p align="center"> Dogs foi desenvolvido durante o curso de ReactJS Completo. O projeto permite o usuário adicionar fotos e informações de seus pets, interagir com outros usuários, postar e receber comentários, analisar gráficos de acessos e muito mais!</p>

#### <div align="center"> Acesse: https://dogs-git-master-wesed.vercel.app/ </div>

<div align="center">
  <img src="https://img.shields.io/static/v1?label=Version&message=0.1.0&color=406ae2&style=<for-the-badge>&logo=<ghost>" />
  <img src="https://img.shields.io/static/v1?label=Status&message=finished&color=greenstyle=<for-the-badge>&logo=<ghost>" />
  <img src="https://img.shields.io/static/v1?label=npm&message=V8.3.1 &color=C13534&style=<for-the-badge>&logo=<ghost>" />
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Wesed/dogs">
</div>

## Tabela de conteúdos
<!--ts-->
   <p align="center">
    • <a href="#instalação"> Instalação </a>
    • <a href="#tecnologias">Tecnologias</a>
    • <a href="#contribuição">Contribuição</a>
    • <a href="#features">Features</a>

  </p>
<!--te-->

# Instalação

Para usufruir do projeto, basta adicionar o seguinte comando para cloná-lo:   

```
git clone https://github.com/Wesed/dogs
```

E em seguida adicionar as dependências: 

```
npm install history react-router-dom

npm install victory
```

E por fim:

```
npm start
```

## Tecnologias

As tecnologias utilizadas foram: <br>

» <img src="https://img.shields.io/static/v1?label=React&message=V17.0.2 &color=greenstyle=<for-the-badge>&logo=<ghost>" /> <br>
React.useState | useEffect | useHooks | UserContext | Lazy&Suspense | BrowserRouter, Routes, Route, Link, Navigate | ProtectedRoute, etc
<br><br>
» <img src="https://img.shields.io/static/v1?label=&message=Victory&color=ff684e&style=<for-the-badge>&logo=<ghost>" /> <br>
React Component que permite criar gráficos, como os utilizados no projeto: VictoryPie & VictoryBar
<br><br>

» <a href="https://dogsapi.origamid.dev/json"> API consumida no projeto <a/>


## Contribuição

Todos os créditos de design pertencem ao centro de treinamento Origamid.
<br>   <br>   

## Features

- [x] Cadastro de usuário
  - Verifica se o usuário já existe | Verifica se os campos são válidos (regex).
  
- [x] Feed
  - No Feed é exibido as postagens de todos os usuários, permitindo interações entre si, como comentários e (futuramente) curtidas.
  
- [x] Minha conta
  - Na página 'minha conta' é possível visualizar todas as postagens do **usuário logado**.
  
- [x] Estatísticas
  - Na página de estatísticas é exibido informações das postagens que o usuário fez, como total de acessos e gráficos que comparam todas as postagens.
  
- [x] Postar uma foto 
  - É possível publicar uma nova foto, contendo nome, peso e idade. No canto direito é possível visualizar a foto antes de publicar.
  
<br>
  
## Features menores 
  
- [x] Recuperação de senha
  - Ao solicitar uma nova senha, um email é enviado ao email cadastrado, contendo o usuário e um token. Através do token, verifica se os dados sao verdadeiros e atualiza a senha.

- [x] ProtectedRoute
  - Só é permitido comentar, acessar a página de usuários, postar uma nova foto ou ver as estatísticas se estiver logado.
  

  
