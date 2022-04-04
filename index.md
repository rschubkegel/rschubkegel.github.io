---
layout: default
---

# Rylan Schubkegel

Hello, my name is Rylan. I'm a <abbr title="computer science">CS</abbr> student at [George Fox University](https://www.georgefox.edu/). The purpose of this site is to showcase some of my personal work.

- [Engineering Projects](#engineering-projects)
- [Web Design](#web-design)
- [Graphic Design](#graphic-design)
- [Hobbies](#hobbies)

## Engineering Projects

### Senior Design

I am currently the team manager of 6 students working with [Daimler Trucks of North America](https://northamerica.daimlertruck.com/) to research the utility of [Microsoft's Hololens 2](https://www.microsoft.com/en-us/hololens/hardware) for Daimler's servicing intake process. We are developing small-scale text input applications in <abbr title="mixed reality">MR</abbr> using [Unity](https://unity.com/) and Microsoft's <abbr title="mixed reality toolkit">MRTK</abbr>. By having users test these applications we will derive insights about the unique user experience of the Hololens headset, providing our client with valuable information about the efficacy of MR in their truck servicing process.

![real hand holding virtual cube]({{ site.baseurl }}/assets/images/engr/senior/cube.jpg)

<div class="row align-items-center">
  <div class="col-sm-6">
    <img src="{{ site.baseurl }}/assets/images/engr/senior/user-flow.png" alt="user flow"/>
  </div>
  <div class="col-sm-6">
    <img src="{{ site.baseurl }}/assets/images/engr/senior/sketch_1_3_2.jpg" alt="UI sketch"/>
  </div>
</div>

### Servant Engineering

Our team explored the design challenge of helping visually impaired individuals navigate the world around them. As part of our human-centered design approach to tackling this challenge, we developed a high-level user story to frame our design efforts: "As a visually impaired person, I want to identify common objects and read text and symbols on signs as I navigate my environment." [Read more here.](https://cs.georgefox.edu/about/research/computer-vision-for-the-visually-impaired/)

<div class="row align-items-center">
  <div class="col-sm-6">
    <img src="{{ site.baseurl }}/assets/images/engr/servant/prototype.png" alt="low-fidelity prototype"/>
  </div>
  <div class="col-sm-6">
    <img src="{{ site.baseurl }}/assets/images/engr/servant/detection.png" alt="playing card dection via computer vision"/>
  </div>
</div>

### Human-Computer Interactions

This class was my first encounter with <abbr title="human-computer interactions">HCI</abbr>, an <abbr title="information systems">IS</abbr> subset of human-centered engineering. My final project was to explore an <abbr title="alternative and augmented communication">AAC</abbr> problem and/or solution of my interest. I chose to research _audio visualization for the deaf and hard of hearing_ by reading relavent literature, creating a high-level design of a <abbr title="head-mounted display">HMD</abbr> device, and examining a recent study by the University of Washington.

<div class="row align-items-center justify-content-center">
  <div class="col-4">
    <img src="{{ site.baseurl }}/assets/images/engr/hci/hci_paper_1.jpg" alt="audio visualization research paper page 1"/>
  </div>
  <div class="col-4">
    <img src="{{ site.baseurl }}/assets/images/engr/hci/hci_paper_2.jpg" alt="audio visualization research paper page 2"/>
  </div>
  <div class="col-4">
    <img src="{{ site.baseurl }}/assets/images/engr/hci/hci_paper_3.jpg" alt="audio visualization research paper page 3"/>
  </div>
</div>

## Web Design

### Voluntime

Voluntime is 1st place winner of George Fox University's second annual Code Jam, a 30-hour coding competition. Voluntime is a platform that connects volunteers to service events, allowing people to easily find ways to help their community. I designed the front-end in [Figma](https://www.figma.com/) and implemented it using [React](https://reactjs.org/) and [Material UI](https://mui.com/).

Check out the [Voluntime website](https://volunti.me/) or the [Code Jam competition submission](https://devpost.com/software/top-secret-team-3-project-title).

<div class="row align-items-center">
  <div class="col-6">
    <img src="{{ site.baseurl }}/assets/images/web-design/voluntime1.jpg" alt="Voluntime screenshot"/>
  </div>
  <div class="col-6">
    <img src="{{ site.baseurl }}/assets/images/web-design/voluntime2.jpg" alt="Voluntime screenshot"/>
  </div>
</div>

### Portfolio Site

<a class="header-link" href="https://github.com/rschubkegel/rschubkegel.github.io">view source</a>

This website started out as a landing page for projects made in my [CSIS 304 class]({{ site.baseurl }}/csis304). I kept adding to it until it became a monolithic collection of HTML tags, inline CSS, and sluggish JavaScript. After copy/pasting HTML headers for months, I resolved to find a more sustainable and elegant way to build my portfolio site.

I first looked at [Next.js](https://nextjs.org/), a JavaScript framework built on [React.js](https://reactjs.org/). I dove into its many unfamiliar features including React, JSX, TypeScript, Sass, and more. After an overwhelming amount of learning to re-generate _the same static website_, I came to the conclusion that Next.js was too heavy-weight for my purposes. I didn't need the fine-grained control of React or the powerful dynamic routing of Next, I just needed a framework to turn my portfolio site from <abbr title="write everything twice">WET</abbr> development into <abbr title="don't repeat yourself">DRY</abbr> development.

In search of a lightweight static site generator, I looked at both [Hugo](https://gohugo.io/) and [Jekyll](https://jekyllrb.com/). I chose to use Jekyll since that's what my host service, [GitHub pages](https://pages.github.com/), is built on. Jekyll retains the beauty of templating while encouring the use of other features like [Markdown](https://daringfireball.net/projects/markdown/) blogging and [Liquid](https://github.com/Shopify/liquid/wiki) processing. Feel free to [check out the source code](https://github.com/rschubkegel/rschubkegel.github.io) for the current version of this site.

### Web Design Class

<a class="header-link" href="{{ site.baseurl }}/artd270">view page</a>

The following are school projects from ARTD 270, which focused on <abbr title="user interface">UI</abbr> design, page layout, and usability.

<div class="row align-items-center">
  <div class="col-sm-6">
    <img src="{{ site.baseurl }}/assets/images/web-design/bagels-banner.jpg" alt="product page about bagels"/>
  </div>
  <div class="col-sm-6">
    <img src="{{ site.baseurl }}/assets/images/web-design/style-tile.png" alt="style tile for website redesign"/>
  </div>
</div>

### Web Programming Class

<a class="header-link" href="{{ site.baseurl }}/csis304">view page</a>

The following are school projects from CSIS 304. In this class I learned about HTTP requests, HTML, CSS, JavaScript, PHP, REST APIs, and more. The class also required a landing page for our projects, [which has been revamped into the website you are now reading](#portfolio-site-view-source).


<div class="row align-items-center">
  <div class="col-sm-6">
    <img src="{{ site.baseurl }}/assets/images/web-programming/zen.jpg" alt="CSS Zen garden"/>
  </div>
  <div class="col-sm-6">
    <img src="{{ site.baseurl }}/assets/images/web-programming/conway.jpg" alt="Conway's Game of Life made in JavaScript"/>
  </div>
</div>

## Graphic Design

### Typography Class

<a class="header-link" href="{{ site.baseurl }}/artd220">view page</a>

This page showcases some school projects from ARTD 220. The class explored type anatomy, page layout, hierarchy, and more.

<div class="row align-items-center">
  <div class="col-sm-3">
    <img src="{{ site.baseurl }}/assets/images/typography/made-by-humans.jpg" alt="poster design"/>
  </div>
  <div class="col-6 col-sm-3 py-4">
    <img src="{{ site.baseurl }}/assets/images/typography/anatomy/1.png"/>
  </div>
  <div class="col-6 col-sm-3 py-4">
    <img src="{{ site.baseurl }}/assets/images/typography/anatomy/2.png"/>
  </div>
  <div class="col-sm-3">
    <img src="{{ site.baseurl }}/assets/images/typography/twenty-seventh-letter.jpg" alt="twenty-seventh letter"/>
  </div>
</div>

### Creative Suite Class

<a class="header-link" href="{{ site.baseurl }}/artd110">view page</a>

This page showcases some school projects from ARTD 110. The class taught the fundamentals of Adobe Creative Cloud using Photoshop, Illustrator, and InDesign.

<div class="row align-items-center">
  <div class="col-6 col-sm-3">
    <img src="{{ site.baseurl }}/assets/images/creative-suite/coasters-1.png" alt="coaster design"/>
  </div>
  <div class="col-6 col-sm-3 order-sm-last">
    <img src="{{ site.baseurl }}/assets/images/creative-suite/playlist/18.jpg" alt="playlist cover"/>
  </div>
  <div class="col-sm-6 pt-3 pt-sm-0">
    <img src="{{ site.baseurl }}/assets/images/creative-suite/business-card-2.png" alt="business card design"/>
  </div>
</div>

## Hobbies

<a class="header-link" href="{{ site.baseurl }}/hobbies">view page</a>

I have numerous other creative hobbies such as game design, animation, music production, painting, etc. For more of my personal projects, check out [this page]({{ site.baseurl }}/hobbies).

<div class="row align-items-center">
  <div class="col-6">
    <img src="{{ site.baseurl }}/assets/images/games/ED.png" alt="Earth Defense game"/>
  </div>
  <div class="col-6">
    <img src="{{ site.baseurl }}/assets/images/animations/explosion.gif" alt="explosion animation"/>
  </div>
</div>