# ToDa
[Live at](https://marking-time.github.io/To-Da/?description=Test&status=Open#)  
Usage:  To use this offline save it to your local drive and it will run without connection to the internet.
### Definition
This is a simple work order system using local storage. It has the following features:  

- Can be used offline without an internet connection because it is a single page application(SPA), however the data will not persist.
- All the files necessary for running it are in the index.HTML (js and css), so it is easy to install and share.
- Free and open source - MIT license
- Minimally styled to allow for changes to the fonts and colors
- Includes text instructions for screen readers
- Can run offline

### Suitability/Limitations/Known Issues  

It is not suitable for production. It probably requires cookies to be allowed. Will not work with browsers that have policies set to prohibit data persistence. Data is stored in the browser and will not persist to other browsers either locally, on the web or on other devices. See https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage for more details. It has not been extensively tested, but it does work on the platforms below.

- Windows/Firefox
- Android/Chrome
- Android/Duck Duck Go

### Motivation
I wanted to learn JS and DOM manipulation and building a project is the best way to learn.  It is replicated from some software I used in an IT department that I once worked in.  That software ran on a UNIX mainframe.  I have written this before on the HTML/CSS/PHP/MySQL stack, but that work is lost to history.  

It is a good project for me because I already knew the business logic and simply needed to implement it on a different stack. I made it a SPA because it fits well with my ethos and programming style.

### Goals
- I wouldn't mind developing this for a business, but that would require paid work for me to implement it. Perhaps adding:
	- login with view restrictions
	- the ability to generate reports on the data like work orders completed etc
- Add the ability to export the data to CSV
- Better styling
- using a different storage mechanism than local storage while keeping the offline functionality
- there is always to to be done :)


### Build Log
This log is included because this project was for me a learning experience, so it makes sense to share what it took for me to learn JS and DOM manipulation.

| Date |     Description          |  Time     |
| ---- | ------------------------ | --------- |
| Date | Set up test env for  forms using test and test2  |     2     |
| Date | Test local storage for lists including embedded arrays |  .25 |
| Date | Save data to local storage from form with JS |  4 |
| Date | Begin setting up application with JS inquiry for order_number  | 1 |
| Date | Continue setting up application in test - get data from form, save to localStorage - partial round trip  | 3 |
| Date | Begin add_orders | 1 |
| Date | Continue testing add_orders | 1 |
| 12/12/2024 | Continue testing add_orders | .25 |
| 12/16/2024 | add_order and save_order working - CRUD-Create complete| 1 |
| 12/17/2024 | Testing display_data, createElement and appendChild  in test.js with test3.html| 1 |
| 12/19/2024 | Begin working on CRUD-Read. Completed displaying single row | 1.5 |
| 12/20/2024 | Testing cross browser support for saved html - Thanks Hacker News | 1.5 |
| 12/21/2024 | Work on styling with css grid | 3.5 |
| 1/2/2025 | Work on retrieving data from local storage for display | 1 |
| 1/3/2025 | Work on retrieving data from local storage for display - in progress| 3 |
| 1/4/2025 | Work on retrieving data from local storage for display - Retrieved rows from LS complete - In progress | .5 |
| 1/7/2025 | Retrieved data from LS, set variables, display variables on index/test.js- Complete | 1.5 |
| 1/7/2025 | CRUD-Read -  Complete | .5 |
| 1/8/2025 | Style display  | 1 |
| 1/7/2025 | Style form| .5 |
| 1/13/2025 | Updated schema, display and integrated into test3  | 3 |
| 1/14/2025 | Create button for update delete and integrated into test3  | 2 |
| 1/14/2025 | Move working code to index/scripts from test3.html and test.js  | .5 |
| 1/18/2025 | Add id form1 and onclick attribute for button  | 2 |
| 1/20/2025 | Change html and js to hide form1 and display - return id of button clicked - update_function_display() | 2 |
| 1/21/2025 | Create update/delete/cancel buttons on form2 | .5 |  
| 1/23/2025 | Display order to update in update view | 2 |  
| 1/27/2025 | Format order to update in update view | 1 |  
| 2/1/2025 | Change all variables in form 2 for comparison to stored data | 1 |   
| 2/6/2025 | update compare - build string to append to LSdescription | 2 |   
| 2/7/2025 | continue to work on update/compare | 1.5 |   
| 2/8/2025 | continue to work on update/compare - type 2 error | .75 |   
| 2/10/2025 | need to rewrite update_order() and compare() | 1 |   
| 2/12/2025 | Prepare for refactor | 1 |  
| 2/14/2025 | create is_changed to compare update'var' and form2 - appending date if changed  | 1.25 |  
| 2/15/2025 | complete append and build functions  | 2 |   
| 2/16/2025 | add code for description formatting and integrate into test.js - CRUD-Update complete | 1.5 |   
| 2/18/2025 | CRUD-Delete complete -- __CRUD COMPLETE__ -- | 1 |   
| 2/19/2025 | Add column headings to display | 1 |   
| 2/20/2025 | Add Accessibility Instructions and tested result | 2 |   
| 2/21/2025 | Deploy from Main branch - update readme - __Project Complete__ | 1 |   












