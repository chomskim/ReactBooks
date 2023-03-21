# Chapter 1

#### [Using Sandbox](https://codesandbox.io/s/react-new)

#### In Sandbox, Create Account using Github and Fork

# Chapter 2 Introducing TypeScript

#### In Sandbox, Use Vanilla

#### [Using TypeScript Playground](https://www.typescriptlang.org/play)

# Chapter 3 Setting Up React and TypeScript

#### Creating a project with webpack

```
npm install
npm start

```

#### Creating a project with Create React App

```
cd Chapter3

npx create-react-app myapp --template typescript
cd myapp

npm i -D prettier
npm i -D eslint-config-prettier eslint-plugin-prettier

npm start

```

# Chapter 4 Using React Hooks

#### Using the effect Hook, Using state Hooks, Using useReducer

#### Using the ref Hook, Using the memo Hook

```
npx create-react-app myapp --template typescript

cd myapp
npm i -D prettier eslint-config-prettier eslint-plugin-prettier

npm start

```

# Chapter 5 Approaches to Styling React Frontends

# Chapter 6 Routing with React Router

#### createBrowserRouter with errorElement is not working(I don't know why)

```
npx create-react-app chapter06-routes-v6-1 --template typescript

```

# Chapter 7 Working with Forms

#### Using controlled fields -- Re-render for every keystroke

#### Using uncontrolled fields

#### Using React Router Form, Using native validation

#### Using React Hook Form

# Chapter 8 State Management

#### Using React context

# Chapter 9 Interacting with RESTful APIs

#### Creating a REST API

```
npm i -D json-server
npm run server
```

#### Using the effect hook with fetch, Posting data with fetch

#### Using React Router

#### Using React Query

#### Using React Router with React Query

# Chapter 10 Interacting with GraphQL APIs

#### Understanding the GraphQL syntax

[GraphQL API Explorer](https://docs.github.com/en/graphql/overview/explorer)

```
query ($owner: String!, $name: String!) {
  repository (owner:$owner, name:$name) {
    id
    name
    description
    stargazers {
      totalCount
    }
  }
}
====================================
{
  "owner": "facebook",
  "name": "react"
}
{
  "data": {
    "repository": {
      "id": "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
      "name": "react",
      "description": "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
      "stargazers": {
        "totalCount": 203719
      }
    }
  }
}
=====================================
{
  "owner": "microsoft",
  "name": "typescript"
}

{
  "data": {
    "repository": {
      "id": "MDEwOlJlcG9zaXRvcnkyMDkyOTAyNQ==",
      "name": "TypeScript",
      "description": "TypeScript is a superset of JavaScript that compiles to clean JavaScript output.",
      "stargazers": {
        "totalCount": 89258
      }
    }
  }
}
```

#### Using React Query with fetch -- Too complicated and I don't know when query is rerendered

```
[.env]
REACT_APP_GITHUB_URL = https://api.github.com/graphql
[.env.local]
REACT_APP_GITHUB_PAT = ghp_xxxxxxxxxxxxxxxxxxxxx

```

#### Using Apollo Client

```
[.env.local]
REACT_APP_GITHUB_PAT = ghp_xxxxxxxxxxxxxxxxxxxxx

```

# Chapter 11 Reusable Components

#### Using generic props

#### Using props spreading

#### Using render props, Adding checked functionality

#### Creating custom hooks

# Chapter 12 Unit Testing with Jest and React Testing Library

#### Testing pure functions

#### Testing components
