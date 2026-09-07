---
layout: page
title: projects
permalink: /projects/
description: Selected work across planning, simulation, and deployed robotics.
nav: true
nav_order: 3
---

<div class="portfolio">
  <div class="portfolio-intro">
    <p class="portfolio-eyebrow">Research → simulation → deployment</p>
    <h2>Building autonomy.<br>From reasoning to real-world action.</h2>
    <p>I develop planning algorithms and the systems that bring them to life: prediction-aware maneuvers, on-vehicle decision-making, and ground and aerial robotics.</p>
    <div class="portfolio-actions"><a class="portfolio-button" href="{{ '/publications/' | relative_url }}">Publications</a><a class="portfolio-link" href="{{ '/cv/' | relative_url }}">Experience & skills ↗</a></div>
  </div>
  {% assign selected = site.projects | where: 'portfolio', true | sort: 'importance' %}
  <section aria-labelledby="featured-research">
    <h2 id="featured-research" class="portfolio-section-title">01 / Featured research</h2>
    {% for project in selected limit:1 %}{% include portfolio-card.liquid project=project hero=true %}{% endfor %}
  </section>
  <section aria-labelledby="engineering-projects">
    <h2 id="engineering-projects" class="portfolio-section-title">02 / Engineering in practice</h2>
    <div class="portfolio-grid">{% for project in selected offset:1 %}{% include portfolio-card.liquid project=project %}{% endfor %}</div>
  </section>
  <section class="portfolio-more" aria-labelledby="more-projects">
    <h2 id="more-projects" class="portfolio-section-title">03 / More engineering & tutorials</h2>
    {% assign extras = site.projects | sort: 'importance' %}
    {% for project in extras %}{% if project.title == 'RoadRunner to LGSVL via Unity' or project.title == 'Laptop Keyboard Replacement' %}
      <a class="portfolio-extra" href="{{ project.url | relative_url }}"><strong>{{ project.title }}</strong><span>{{ project.description }}</span><span aria-hidden="true">↗</span></a>
    {% endif %}{% endfor %}
  </section>
  <div class="portfolio-contact"><h2>Let’s talk autonomy.</h2><p>For research collaborations and engineering opportunities.</p><a class="portfolio-button" href="mailto:mayssjamal@gmail.com">Get in touch</a></div>
</div>
