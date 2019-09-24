# Kvalifik dk static site

Kvalifik's new website built with Gatsby and Dato CMS!

## How to develop

We use **npm** for all development. Make sure you have the Gatsby development tool installed [gatsby-cli](https://www.npmjs.com/package/gatsby-cli).

`npm install`

The app needs an API key to Dato CMS. Acquire this API key (read-only is sufficient) and assign it to environment variable `KVALIFIK_API_KEY`. This should be done in your bash settings, and **should not be checked into git**.
[Check this article how to set global variables in bash](https://medium.com/@himanshuagarwal1395/setting-up-environment-variables-in-macos-sierra-f5978369b255)

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

[**Modular block setup**](https://github.com/Kvalifik/kvalifik/wiki/Modular-setup)

[**Content management guide**](https://github.com/Kvalifik/kvalifik/wiki/Content-management-guide)

**Source structure**

```
./src
├── Components
├── graphics
├── models
│   ├── blocks
│   └── page.js
├── templates
│   └── page.js
└── utils
```

*Components* are usually larger autonomous components, but also contains *Components/Shared* which are smaller reusable components.

*templates* are template components used in the build process.

*models* are primarily prop type schemas, but might also contain other types of models.

*utils* are various utility functions that are used in various places, such as within the build process or within a component.

*graphics* are all graphics that *never* change and therefore doesn't have to be loaded from the Cms.
