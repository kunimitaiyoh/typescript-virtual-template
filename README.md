# TypeScript Virtual Template

A statically typed, fluent template format for Virtual DOM with TypeScript.

## Features

- `@`
- `import`
- `argument name: Type`
- `if (condition) { ... }`
- `foreach (item in items) { ... }`
- `when case ... `

## Example

```html
<template>
  <h1>Article List</h1>
  @if (subject !== null) {
    <table>
      <tr>
        <td>Title</td>
        <td>Body</td>
        <td>Created</td>
      </tr>
      @when {
        case (subject.articles.length > 0) =>
          foreach (const article in subject.articles) {
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
