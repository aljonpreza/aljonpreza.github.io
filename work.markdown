---
layout: default
title: Work and Projects
permalink: /work/
description: Work, projects, and explorations.
---
<section class="hero">
    <div class="container">
        <div class="page-title">
            <h1 class="title display">{{ page.description }}</h1>
        </div>
    </div>
</section>
<section class="work-and-projects">
    <div class="row">
        {% for post in site.posts %}
            <div class="col">
                <div class="image card {{ post.title | replace: ' ', '-' | remove: ',' | downcase }}">
                    <hr class="divider">
                    <div class="content">
                        <div class="card-title">
                            <span class="subheading">{{ post.title }} – {{ post.date | date: '%Y' }}</span>
                            <span class="title h4">{{ post.description }}.</span>
                        </div>
                        <div class="card-button">
                            <a class="hidden" href="{{ post.url }}"></a>
                        </div>
                    </div>
                    <div class="image-wrapper">
                        <img class="thumbnail" src="{{ post.thumbnail }}">
                    </div>
                </div>
            </div>
        {% endfor %}
    </div>
</section>