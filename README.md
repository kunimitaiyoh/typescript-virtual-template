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
import ArticleState from states/article;

argument state: ArticleState | null;

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

## Ecosystem

- transpiler: parse and converts TSVT code into corresponding TypeScript *abstract syntax tree* (AST).
- compiler: compiles TSVT code into TypeScript using the transpiler with other TypeScript code.
- Language server: compiles TSVT and reports the diagnostics using the compiler.
- webpack plugin: compiles TSVT into TypeScript on webpack.
