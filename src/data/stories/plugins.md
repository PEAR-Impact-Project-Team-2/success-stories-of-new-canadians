---
title: "What's in the Box?"
description: 'Learn more about the plugins currently loaded into the repository'
author: 'Frederic Pun'
image: ../../assets/demo.jpeg
date: '2019-10-28'
order: 2
---

## Plugins

One of the best things about Gatsby is it's large library of plugins. Plugins are snippets
of code which reside in the gatsby-config file. They do things from webpack to loading nodes into GraphQL.

Here are some of the plugins being used in this repo,

| **Plugin** | **Description** |
| --- | --- |
| **gatsby-plugin-alias-imports** | Sets up aliases for cleaner imports (@xxxx imports) |
| **gatsby-plugin-manifest** | Sets up HTML title and metadata, and also creates manifest for PWAs |
| **gatsby-plugin-offline** | Sets up service worker for offline caching (Currently disabled) |
| **gatsby-plugin-react-helmet** | Helps with setting up basic head tags with helmet |
| **gatsby-plugin-sass** | Helps set up webpack for sass |
| **gatsby-plugin-sharp** | Implements lazy loading and image scaling for image files |
| **gatsby-plugin-web-font-loader** | Loads web fonts |
| **gatsby-source-filesystem** | Adds files from a directory into GraphQL |
| **gatsby-transformer-remark** | Transforms markdown files into nodes in GraphQL with HTML |
| **gatsby-transformer-sharp** | Transforms image files into nodes in GraphQL for gatsby-plugin-sharp |