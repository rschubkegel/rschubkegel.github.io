---
layout: default
title: "Web Design"
---

{% include navbar.html %}

# Creative Suite

- [Business Card](#business-card)
- [Spotify Playlists](#spotify-playlists)
- [Coasters](#coasters)
- [Nautical Icons](#nautical-icons)

## Business Card

This was a concept I created for a personal business card. This project is what inspired me to create a personal logo, which is used on my portfolio site.

<div class="row">
  <div class="col-sm-5">
    <img src="{{ site.baseurl }}/assets/images/creative-suite/business-card-1.png" alt="business card front"/>
  </div>
  <div class="col-sm-7">
    <img src="{{ site.baseurl }}/assets/images/creative-suite/business-card-2.png" alt="business card back"/>
  </div>
</div>

## Spotify Playlists

I am a huge fan of music, so I chose to practice my Illustrator skill on a series of cover images for my Spotify playlists. I originally started with 16 images, but as my playlists grew I expanded the project. [Check out my playlists here!](https://open.spotify.com/user/213u4fxzegwrbttorspgre2gq?si=ab9808ff92e2474e)

<div class="row justify-content-center">
  {% for i in (1..24) %}
    <div class="col-4 col-sm-2" style="padding: 0.25rem;">
      <img src="{{ site.baseurl }}/assets/images/creative-suite/playlist/{{ i }}.jpg" alt="playlist cover" style="padding: 0;"/>
    </div>
  {% endfor %}
</div>

## Coasters

Each student created a set of matching coasters that were then printed on wood using a laser-cutter. I chose to use the same image (the right-most image below) with various quotes related to tea or coffee.

<div class="row">
  {% for i in (1..3) %}
    <div class="col-sm-4">
      <img src="{{ site.baseurl }}/assets/images/creative-suite/coasters-{{ i }}.png" alt="coaster design {{ i }}"/>
    </div>
  {% endfor %}
</div>

## Nautical Icons

The first project involving Adobe Illustrator, I was tasked with creating a set of icons with a unifying theme. I chose to make cartoony nautical icons, because of my dad's recent interest in sailing.

<div class="row justify-content-center">
  <div class="col-sm-9 col-md-6">
    <img src="{{ site.baseurl }}/assets/images/creative-suite/nautical-icons.png" alt="collection of nautical icons"/>
  </div>
</div>