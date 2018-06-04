# TypeScript Virtual Template

*TypeScript Virtual Template* (*TSVT*) is a statically typed, fluent template format for Virtual DOM with TypeScript.

## Features

- `@`
- `import`
- `argument name: Type`
- `if (condition) { ... }`
- `foreach (item in items) { ... }`
- `when case ... `

## Example

```html
@import ArticleState from "states/article";

@argument state: ArticleState | null;

<template>
  <h1>Article List</h1>
  @if (state.subject !== null) {
    // temporal constant for shorthand.
    const articles = state.subject.articles;

    <table>
      <tr>
        <td>Title</td>
        <td>Body</td>
        <td>Created</td>
      </tr>
      @when {
        case (articles.length > 0) =>
          foreach (const article in subject) {
            <tr>
              <td>{ article.title }</td>
              <td>{ article.body }</td>
              <td>{ article.created }</td>
            </tr>
          }
        otherwise =>
          <p>no articles.</p>
      }
    </table>
  }
</template>
```

where

```ts
interface ArticleState {
  subject: { articles: Article[] } | null;
}

interface Article {
  title: string;
  body: string;
  created: string;
}
```

## Ecosystem

- transpiler: parse and converts TSVT code into corresponding TypeScript *abstract syntax tree* (AST).
- compiler: compiles TSVT code into TypeScript using the transpiler with other TypeScript code.
- Language server: compiles TSVT and reports the diagnostics using the compiler.
- webpack plugin: compiles TSVT into TypeScript on webpack.

![ecosystem](https://www.plantuml.com/plantuml/png/ROyn3i8m34Ltdy8dw04OK2LMDYIMm61IAuf8tM0dxVM9Wjg99T9_Nq_v7gsGbZedS7wPSqoiJt15IMmFLv9GAJ0Qwze8ac4oS1k_ClatvbH3b8wt3Ev-myioSS-hUO3su32ScuCdLFvKjeA_pw84V8YovxWoJf62M8dU85bNzabDhCQmvN_qYBtSfn_ro3Ar-xu0)

<!-- Plant UML
@startuml
[compiler]
[transpiler]
[Language server] as ls
[webpack plugin] as wp
[VS Code] as vsc

vsc ..> ls : request compiling \nreceive diagnstics
ls ..> compiler : use
wp ..> compiler : use
compiler  ..> transpiler : use
@enduml
-->
