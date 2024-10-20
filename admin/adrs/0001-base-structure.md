# Tinyfoot Base Structure 1

## Context and Problem Statement
Tasked with the problem of creating a similar footnote functionality to littlefoot and bigfoot, we were presented the options of either forking from bigfoot.js, littlefoot.js, or starting from scratch. All choices should result in a code repo with significant architecture/organization/functionality changes. Our changes should result in a javascript footnote plugin where it should pop-up the footnote upon click.

## Considered Options

* Start from a fork of bigfoot.js
* Start from a fork of littlefoot.js
* Start from scratch

## Decision Outcome

Chosen option "Start from a fork of littlefoot.js" because:
1) As we were unfamiliar with the difficulties of starting from scratch, we felt it was safer to start with a fork from a preexisting repo and work from there
2) As bigfoot.js is significantly older than littlefoot.js and also included a coding language that no one understood (coffee-script), we felt it was in our best interest to not choose a fork from bigfoot.js
3) Littlefoot.js already has a pre-existing unit testing structure in place as well as an implementation of a working footnote display outside of native Javascript
4) Littlefoot.js was written in the Typescript language, one that was similar to Javascript and also familar to a couple of our subteam members


# Tinyfoot Base Structure 2

## Context and Problem Statement
After dividing our problem into individual tasks, we set off to modify littlefoot.js into tinyfoot.js. However, we did not expect littlefoot.js to be extremely complicated with too many options to work with. Since team members were working individually, many of these struggles were not brought to light. After a failed struggle for a couple days, our team met together again to reevaluate our original decision and discuss future plans.

## Considered Options

* Start from a fork of bigfoot.js
* Start from a fork of littlefoot.js
* Start from scratch

## Decision Outcome

Chosen option "Start from scratch" because:
1) We initially chose to fork littlefoot.js without an in depth code analysis of both bigfoot.js and littlefoot.js before starting. After further discussion with both the bigfoot.js and littlefoot.js team, we felt that both repositories were not suitable for what we needed for tinyfoot.js
2) We are building "tinyfoot," from the name it shouldn't be too complex. Even littlefoot.js provides too many options. Need something that is truly "tiny"
2. It avoided using cross-compile, this product should not be that big that requires Typescript (what littlefoot uses) 
3. It avoided using out-dated libraries: the coffee script that bigfoot.js used is too outdated
4. No need to maintain dependacies. 

Thus, Starting from scratch with plain javascript best suited our needs.