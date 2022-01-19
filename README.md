# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](screenshots/easybank-page-desktop.png)

### Links

- [Live site](https://fluffykas.github.io/easybank-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

*Easybank logo - using SVG*

I usually wrap my SVGs in an <img> tag. In this challenge however, Easybank logo was coloured differently in the header and footer sections so I had to go with using an inline SVG which allowed me to make the necessary changes. Apart from being a bit hard on the eyes, an inline SVG comes with a few accessibility issues, I found (like not having an alternative text description, which you may not even be warned of, since its not an <img> but an <svg>). I followed a CSS-Tricks article on the topic (link in resources) and added a role="img" and an aria-labelledby that points to the title and description that provides an alternative text. I suppose, this wasn't hugely important in a case of a logo (perhaps I could've just hidden it, as there was another logo in the header already), but it was a good opportunity to learn about accessible SVGs. ^^

*Further accessibility*

I learned about keyboard navigation fairly recently and since then I pay attention to adding custom focus indicators to all projects. Since this project has a very pretty linear-gradient colour theme, I thought I use it for the focus indicators as well. Turns out it's not possible. :( Too bad really, would've been great.

Few weeks ago I came across Kevin Powell's video (link in resources) on hidden Skip navigation buttons. Never thought of this before (I don't really navigate through websites with keyboard, unless I'm testing something) but it's pretty smart so I included a button in this challenge (and will do it in future projects, for sure).

### Continued development

### Useful resources

- [CSS-Tricks: Accessible SVGs](https://css-tricks.com/accessible-svgs/) 
- [Kevin Powell's video on skip navigation button](https://www.youtube.com/watch?v=jDDaOFr9nqQ) 

## Author

- Frontend Mentor - [@FluffyKas](https://www.frontendmentor.io/profile/FluffyKas)