# Kvalifik dk static site

Kvalifik's new website built with Gatsby and Dato CMS!

## How to develop

We use **npm** for all development. Make sure you have the Gatsby development tool installed [gatsby-cli](https://www.npmjs.com/package/gatsby-cli).

`npm install`

Then

`npm run start`

Navigate to http://localhost:8000

Refer to Gatsby's own docs for more information about the endless universe of Gatsby!

## Stack

We follow the JAMStack paradigm. Read more [here](https://jamstack.org/).

* Dato CMS (API)
* Gatsby (Javascript and markup)
* Netlify (Static file hosting)

## Documentation

**Modular block setup**: [At the wiki](https://github.com/Kvalifik/kvalifik/wiki/Modular-setup)

**Source structure**

```
./src
├── Blocks
├── Components
├── graphics
├── models
│   ├── blocks
│   └── page.js
├── templates
│   └── page.js
└── utils
```

*Blocks* are small reusable components that are not designed to be used by themselves. *Components* are larger autonomous components (contains all blocks).

*templates* are template components used in the build process.

*models* are primarily prop type schemas, but might also contain other types of models.

*utils* are various utility functions that are used in various places, such as within the build process or within a component.

*graphics* are all graphics that *never* change and therefore doesn't have to be loaded from the Cms.
