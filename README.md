# Humu hiring challenge

Hi!

To run this project in development mode: `$ npm run` (in the project root)

To run the built project: `$ npx http-server` (in the build folder)

The most interesting "algorithmy" parts of the code can be found in `src/data/employeeUtils.ts`. I tried to comment that part especially well.

The UI code is fairly cut-and-dry React + TypeScript, and doesn't have any bells and whistles like state management libraries.

## Answers to questions

### 1. Are there any questions would you ask to a designer who sent this mockup and spec?

There are some issues with this design as the number of departments increases. They get totally squashed, and everything past the first few departments doesn't provide much useful information to the user. How can we better represent large numbers of departments without squishing them down completely? Perhaps pagination, or being able to scrub through the data?

The aspect where each subsequent department's information gets pushed down a further 30 pixels vertically means that it takes up a lot of visual space without adding any information.

### 2. Did you make any assumptions while developing this page?

- I ordered the departments by number of employees.

- I assumed the width of each department card corresponded to its proportion of total employees

- I assumed we would show all departments, regardless of how small they were

- I assumed that the first employee I encountered in a department (while doing a depth-first tree traversal) was the head of that department.

- I assumed that brand colors should cycle in order rather than being selected randomly.

- Visually, I tried to keep assumptions to a minimum. I didn't add any interactivity or hover states.

### 3. You don’t need to make this responsive but if given more time, how would you make it responsive?

The major thing is add a breakpoint below which departments are listed top-to-bottom, rather than horizontally. After that, I would fine tune spacing and font weights to ensure readability and usability on mobile devices.

### 4. If given more time, how would you improve readability and accessibility?

- I would work with the designer to come up with a design that makes the information more readable once there are large amounts of employees and departments. The current design does some data visualization by representing department size as the relative width of that department's card, but I feel that that could be improved on to communicate more useful information to the user without increasing clutter.

- I would ensure that all interactive elements are usable with the keyboard, prioritizing the use of semantically correct HTML, and rebuilding any native browser accessibility features that I overwrote with JavaScript.

- I would audit font colors and sizes to ensure they are compliant with WCAG readability guidelines.

- I would audit this project using a screenreader to ensure it is navigable without visual aids.

- I would test the site at zoom levels up to 200% to ensure that it remains usable when zoomed in.
