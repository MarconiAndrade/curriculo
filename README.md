# Currículo em React/Next.js

Projeto de currículo pessoal feito com Next.js App Router, React Components, CSS global customizado e integração com API pública do GitHub.

## Páginas criadas

- Home
- Sobre
- Experiência Acadêmica
- Experiência Profissional
- Projetos Desenvolvidos

## Integração com API

O projeto possui uma rota interna:

```txt
/api/github?username=marconiandradefilho
```

Ela consulta a API pública do GitHub e retorna os repositórios públicos do perfil configurado.

## Como rodar

```bash
npm install
npm run dev
```

Abra:

```txt
http://localhost:3000
```

## Como personalizar

Edite o arquivo:

```txt
lib/profile.js
```

Lá estão nome, formação, experiências, tecnologias, projetos manuais e usuário do GitHub.
