---
title: Silverpine.com
date: 2024-07-09
link: https://www.silverpine.com/
---

I migrated the website for [Silverpine](https://www.silverpine.com/) (my employer) from Squarespace to a custom site built with [Astro](https://astro.build/) & [Vue.js](https://vuejs.org/). In doing so, I was able to decrease the cumulative size of transferred assets from 33 MB to 4 MB (loading the home screen with empty cache). This resulted in noticably faster <abbr title="first contentful paint">FCP</abbr> and <abbr title="time to interactive">TTI</abbr> metrics.

<content-img-row collapse columns="repeat(2, 1fr)">
  <content-img src="/images/silverpine/phoenix/silverpine-landing.gif"></content-img>
  <content-img src="/images/silverpine/phoenix/silverpine-services.gif"></content-img>
</content-img-row>

To replicate the <abbr title="content management system">CMS</abbr> of Squarespace, I also built a full-stack admin web app that allows company employees to update dynamic content on the site. The company logo can be configured to change depending on the date, and employee names, roles, and profiles can be easily updated. The app was built with [Node.js](https://nodejs.org) & [Express](https://expressjs.com/) on the backend and [Vite](https://vitejs.dev/) & [Vue.js](https://vuejs.org/) on the frontend.

<content-img-row>
  <content-img src="/images/silverpine/phoenix/web-admin-login.png"></content-img>
  <content-img src="/images/silverpine/phoenix/web-admin-header.png"></content-img>
  <content-img src="/images/silverpine/phoenix/web-admin-employees.png"></content-img>
  <content-img src="/images/silverpine/phoenix/web-admin-logos.png"></content-img>
</content-img-row>