# cse210-tinyfoot-team04

Tinyfoot is a simple, streamlined way to add footnotes to your web page.

## Installation:

*Prereqisites - make must be installed.*

First,

`git clone git@github.com:Pineapple-Pipeline/cse210-tinyfoot-team04.git`

Then, to build into the `dist` folder, run

`make build` from the new directory.

## Demo

See a working demo of our footnotes in action:

[Pineapple Pipeline Tinyfoot Demo](https://pineapple-pipeline.github.io/cse210-tinyfoot-team04/demo/tinyfoot_demo.html)

## Usage

*For all examples, we'll assume the html file is in the same directory as this README.*

To use in your html web pages:

1. Inside the head, include the link to the `main.css` stylesheet in your dist folder, for example:
```html
<link rel="stylesheet" href="dist/main.css" />
```

2. Include the path to the tinyfoot.js file in the dist folder at the bottom of the body:
```html
<script src="dist/tinyfoot.js"></script> 
```

Once you've done these two things, all you need to do to create a footnote is:

1. include a **link** element with `class="footnote-link"` and `data-footnote={some-unique-id}`
2. include a **content** element with `id="footnote-{some-unique-id}" style="display:none;"`

For example:

```html
<span class="footnote-link" data-footnote="a">[alphabet note!]</span>
<div id="footnote-a" style="display:none;">An example lettered footnote.</div>
```

Will result in a footnote labeled `[alphabet note!]` (and unique id "a") with content from the second line popping up on click.

## Features

We have included a couple of functional features that we believe will enhance user experience.

### Blur

This blurs everything except the footnote that has just been clicked on.

### Copy Button

A footnote classic that saves a few clicks when a user wants to store footnote content on their clipboard.

## Future Directions

For some future planned changes, we would like to:

* Make files aren't as accessible on Windows. In the future, we could consider extra installation options to reach a broader audience.
* Make inserting footnotes into html more concise and less case-sensitive, perhaps in a single line of html if possible.