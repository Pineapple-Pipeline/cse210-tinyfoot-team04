# Code Review: Bigfoot.js

## Overview
**Review Date:** [10/16/2024] 
**Reviewer:** Team 4 (Pineapple Pipeline), Lead: Yunhao Jiang, Tim Kraemer 
**Library Version:** 2.1.4 
**Library Website**: bigfootjs.com
**Original Repo:** https://github.com/lemonmade/bigfoot
**Our Fork (updated):** https://github.com/Pineapple-Pipeline/bigfoot
**Working Demo:** https://pineapple-pipeline.github.io/bigfoot/

**Purpose of the Library:**
The purpose of this library is to detect and create good looking footnotes in HTML. It creates clickable footnote links that open popup windows in an intuitive and neat manner, without moving the page to another location. It provides optional arguements and options to change style, where the popup appears, etc.

---

## Summary of Findings
The library is depracated, with the last update/issue fix 9 years ago. It uses an old Javascript language variation called CoffeeScript, as well as a variation of CSS called SCSS (Sassy CSS). Both are "cross-compiled" into plain vanilla Javascript and plain CSS stylesheets through a gruntfile, and includes .map files which maps the CSS stylesheets to the SCSS stylesheets for debugging purposes, such as in the Chrome Developer Tools. 

The library has a lack-luster README with missing information about usage and installation methods. It does include its own website bigfootjs.com, which includes a demo and installation methods, but it isnt readily apparent that this exists in the repository.

The library has a few issues, both stylistic, code quality, and functionality that are described below. 

---

## Code Structure & Organization

### Strengths:
- Usage of pre-compiled .js and .css files in the '/dist' directory, which allows user to use them immediately without the need to manually compile them
- Library structure is need and easy to find where everything is. Includes a '/src' directory for separated coffeescript and scss files, a '/dist' directory for the compiled .js and .css files, as well as the .map files that map the css stylesheets to the scss stylesheets
- Thorough .gitignore
- Includes a bower.json file which specifies project specifics and dependency version requirements (jquery)
- Also includes a package.json file which specifies project specifics and gruntfile dependency requirements
- Only one file coffee script is included, all code component is in there.

### Areas for Improvement:
- The usage of outdated/less known languages like Coffeescript and SCSS is an odd choice, as a curious developer needs to spend more time researching the language and how it works to get a general understanding of the functionality of the library
- Due to cross compilation, the compiled vanilla javascript and css have no comments at all leading to difficulties reading the files to understand them
- Less used languages have less support. When coffeescript or scss loses support, this library becomes even more depracated 
- Lost support of modern jQuery versions

---

## Code Quality

### Strengths:
- Coffeescript file is well commented and documented, with sections divided into init, runtime, and miscealaneous functions
- Easy to navigate through different part of the code.
- SCSS files also well commented and documented

### Issues:
- Cross-compiled javascript file bigfoot.js feels like spaghetti code, no comments and difficult to understand thought process (understandable since it is compiled from the coffeescript files).
- Coffeescript file is almost 1000 lines long, includes functions that might not be necessary for such a simplistic design/functionality.

---

## Compatibility & Performance

### Strengths:
- The library is still useable even it's 10 years old. With the old jquery included, it can run on modern web browser without issues.
- Although it states that bigfoot.js are not compatible with newer jquery version, preliminary tests with jQuery 3.7.1 show that the library is functional even with the most recent version of jQuery.
### Issues:
- It is not officially compatible with the new jQuery version.

---

## Security

### Strengths:
- Client-side only, which means that it has no connection with any back-end service/API.
- Open source, meaning its inner-workings are available to the public. Follows the security design principle of Open Design.

### Issues:
- It requires an out-dated jQuery library. Older versions recieve no support, meaning that any vulnerability is bake in.
- The original dependencies have 26 vulnerabilities (5 moderate, 15 high, 6 critical). Even with up-to-date version, it still has 4 vulnerabilities (2 moderate, 2 high).

---

## Testing

### Test Coverage:
- N/A, BigFoot does not contain any tests (excludes test directory in .gitignore).
### Issues:
- No tests created for this library. Most javascript plugin libraries, no matter how small/light-weight, have tests to prove usability in different scenariors.

---

## Documentation

### Strengths:
- Provided a brief introduction to what's this plug-in about, including several behaviour of the footnote.
- Has its own website, which is still available to view

### Issues:
- The README doesn't include specific installation instructions, such as how to download or include the plugin, which is standard for most projects.
- The code snippets or usage is only on their website, but not on GitHub. It should at least provide a link to usage
- The README invites users to ask questions or request features, but it lacks clear instructions on how to contribute to the project via GitHub.
- No introduction on the technology stack being used. Other contributors have to figure out themselves.
- Link in README to project page is broken.

---

## Conclusion
This plugin might have been a widely used library 10-15 years ago, since many resources and text pages require the usage of footers and due to its simplistic design. However the code design choice of using unique and now depracated languages such as coffeescript lead to its demise. It is never a good idea to create a widely used application/library using a language that is not standardized and might lose support any day. 

The library did not have much documentation readily present, and even with a complrehensive plugin website with a demo, the instructions were uncleear and missed crucial steps such as sass dependency and linking the css stylesheet. The only test that was provided was in the form of the demo on the library webpage.


