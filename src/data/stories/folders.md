---
title: 'What the Source?'
description: 'Get to know the starter code by learning more about the structure of repository.'
author: 'Frederic Pun'
image: ../../assets/demo.jpeg
date: '2019-10-28'
order: 1
---

## File Structure

In this section you would learn about the file structure of the repo. React is very unopinionated,
therefore there is many ways to organize and import your files. Here is one of the ways of approaching
it,

It is important to note before starting this that imports may seem slightly odd compared to typical
repos. We would be using imports via barrel files, and the paths are masked with aliases (You would learn
more about the aliases in the [plugins page](/plugins))

### Root Directory ```/```
| File | Description |
| --- | --- |
| **README.md** | The markdown file about repository |
| **package.json** | Information regarding the node project |
| **package-lock.json** | Information regarding node_modules (Do not touch unless if you know what you're doing) |
| **gatsby-\*** | These are additional gatsby configurations for loading plugins and handling pre-loading of pages and data |
| **.prettierrc/.prettierignore** | Configuration for code formatter |
| **.gitignore** | Tells version control what to ignore |

### Source Directory ```/src```
| File | Description |
| --- | --- |
| **assets** | Static files such as images, videos, fonts (Load these from ```gatsby-source-filesystem```) |
| **components** | Reusable pieces of React code |
| **data** | Static data (Load these with transformers such as ```gatbsy-transformer-remark```) |
| **layouts** | Components for defining how content is contained |
| **pages** | Pages of the site (This follows specific rules by Gatsby) |
| **style** | SCSS styles |
| **templates** | Templates for dynamically generated pages |
| **utils** | Helper functions |
