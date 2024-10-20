
# Feature Options

## Context and Problem Statement
After implementing the base structure functionality of a footnote, our team needed to determine which features we should develop to create our tinyfoot.js project.

## Considered Options

* Create numbered footers (littlefoot/bigfoot currently only have "..." button)
* Colored footers (different footers have different colors/implement dark&light modes)
* Change how footnote popup is displayed
* Blur surrounding text when popup is displayed
* Add copy button to footnote popup

## Decision Outcome

Chosen options: Blur surrounding text when popup is displayed and adding a copy button to footnote popup, because these features were the most original in functionality and improved user experience the most.

## Pros and Cons of the Options

### Create Numbered Footers

* Neutral: follows a more traditional approach to displaying footnotes. Maybe more familiar UI/UX to new users
* Bad: Not original. Both bigfoot.js and littlefoot.js already have this as an option.

### Colored Footers

* Good: Original and fresh presentation of what footnotes can be. Could help with better UI displays.
* Bad: Too cosmetic rather than functionality based. Can be done in pure CSS which is not our goal for tinyfoot.js

### Change Footnote Popup Display

* Good: Major functionality difference from bigfoot.js and littlefoot.js
* Good: Depending on design decision, can improve readability and UX feel.
* Bad: We felt that displaying the footnote the way that bigfoot.js and littlefoot.js did was the best design choice both for readability and ease of access. Should we change the popup location, may disrupt user concentration as well as their ability to relocate their stopping point before reading the footnote.

### Blur Surrounding Text

* Good: Original functionality and improves user focus on footnote popup itself.
* Good: Prevents user from straying to rest of document and skewing comprehension of reading material.
* Bad: May be inconvenient to user if user forgets original context of footnote and needs to toggle on/off footnote popup constantly.

### Add Copy Button to Popup

* Good: Allows digital readers to easily take notes and copy vital information for their understanding
* Good: Unobstructive in its implementation/functionality to the user
* Neutral: Not all users will find this functionality the most useful, but it will be a great help to those who need it

## More Information
* More detailed descriptions of chosen functionalities need to be discussed further


# Blur Feature Design Decisions

## Context and Problem Statement
Now that the bluring feature has been decided, how we implement this feature is vital to our tinyfoot.js project's success. We want to determine the design that best improves user focus and comprehension while not being too disruptive in practice.

## Considered Options

* Bluring the whole screen when popup displays
* Bluring the whole screen except sentence/paragraph of significance when popup displays

## Decision Outcome

We chose to blur the whole screen when popup displays because it would be the best balance of improving user focus while not being too disruptive.

## Pros and Cons of the Options

### Bluring whole screen

* Good: Completely focuses user attention on footnote popup itself. Would prevent user eyes from wandering to unwanted information in next/prev lines of text
* Bad: Some users may forget what the original context of footnote popup to be and need to toggle footnote on/off constantly

### Blurring Screen Except Sentence of Significance

* Good: Some users may forget what the original context of footnote popup to be and can refer back to original context without toggling footnote on/off
* Bad: Existence of text behind the footnote popup will still serve as a distraction to what the footnote content is displaying. May preserve original problem blurring was trying to fix.


# Copy Button Feature Design Decisions

## Context and Problem Statement
After deciding on implementing a copy button on the footnote popup, determining how the copy button is displayed is a vital decision to ensure it is easily visible to the user while not being disruptive.

## Considered Options

* After click on copy button, screen pop up displays copied confirmation text
* After click on copy button, button text changes from "copy" to "copied"

## Decision Outcome
We chose the copy button text to change from "copy" to "copied" because it would be the option that disrupted the user experience the least.

## Pros and Cons of the Options

### Screen Popup After Click

* Good: Reassures user that footnote text has been copied to clipboard
* Bad: Popup may be a little too disruptive to user experience if user is copying multiple footnotes in succession

### Button Text Change After Click

* Good: Reassures user that footnote text has been copied to clipboard
* Good: Not disruptive to user experience (no unnecessary clicking) but still a responsive design
* Good: Responsive design is not disruptive to user when multipe footnotes are copied in succession 