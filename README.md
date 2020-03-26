# CI-MilestoneProjectTwo
## Table of Contents
1. [Overview](#go-mcr-overview)
    
    - [Live Site](#live-site)
2. [User Experience & Design](#uxd)
    
    - [Wireframes](#skeleton)
3. [Technologies and Tools](#technologies-and-tools)
4. [Features](#features)
5. [Testing](#testing)
6. [Deployment](#deployment)
7. [Credits](#credits)


## GO MCR Overview
This site has been created to be a guide for potential visitors to Manchester, or local residents, to find a selection of activities to do, places to eat, or accomodation within the city.

This site has been designed to be easy to navigate and for users to find something that takes their fancy.

### Live site

My live site can be found [here](https://lewisclark4.github.io/CI-MilestoneProjectTwo/).

## UXD
### User stories

**Prospective visitor 1** 
A party of friends for a social day out:

This group is looking for a fun day out for some food and drinks, also with the possibility of a fun activity or two.

**Prospective visitor 2**
A couple looking for a weekend away:

These visitors are looking for some enjoyable activities to make the most of their weekend, as well as finding some nice places to eat and accomodation to suit.

**Prospective visitor 3**
Local resident looking to try something new:

Even the local residents don't know everything... this site should allow them to look for some fun activities in the area, and maybe even grab a nice bite to eat.

**Prospective visitor 4**
A working professional on a business trip:

Whether a frequent commuter, or just someone on a one off business trip, this visitor is just looking for a new a place to eat, or find a new home away from home.

### Strategy

The key design principle of this site, is to have minimal text, and be very visual. 
Each of the prospective customers wants to be able to see the places they want to visit, without it being overcrowded by lots of text.
The site should also be very intuitive, and have clear navigation based on the visitors requirements.

### Scope

The scope was to cater for a variety of vistors, and be able to display a range of places to visit. 

The key areas identified that a visitor might be looking for were:

1. Activities / things to do
2. Places to eat and drink.
3. Accomodation / places to stay over

### Structure

Given the strategy to have clear navigation based on the user preference, the landing screen was designed to have 3 clear options (as detailed in the scope) that a user can select to view more detail.

Depending on which option is selected, the site will display a variety of locations that the user can then also select, which will display further information about that location, including a marked map.

### Skeleton

[Mobile wireframe](https://github.com/lewisclark4/CI-MilestoneProjectTwo/blob/master/wireframes/mobile-wireframes.pdf)

[Tablet wireframe](https://github.com/lewisclark4/CI-MilestoneProjectTwo/blob/master/wireframes/tablet-wireframe.pdf)

[Desktop wireframe](https://github.com/lewisclark4/CI-MilestoneProjectTwo/blob/master/wireframes/desktop-wireframes.pdf)

### Surface

The idea was to create a site which shows off the fun bubbly side of manchester, adopting the colours of the Manchester Worker Bee (which is also the site logo).

The font of 'Indie Flower' was chosen as I felt that while retaining legibility, it also offers a fun and unique design to the site, that fits with the unique character and atmposphere that can be found in Manchester.
It is described by the designer as "carefree and open" "with the bubbly, rounded edges".

The deep yellow/ orange colour offers a comfortable contrast against 'black' and 'white' backgrounds without causing any strain to read.

Ease of navigation was a key strategy for the site, and therefore there are clear and obvious effects when a user is able to interact with the site (e.g. the cursor is replace by a pointer, and the particular element will be visually interactive)

I added the logo (the Manchester Worker Bee) as a favIcon for the site to help users identify the page if they have multiple tabs open.

## Technologies and Tools
1. HTML
2. CSS
3. Bootstrap 4
4. JavaScript / jQuery
5. Font Awesome (for icons - e.g. socials)
6. TinyPNG (to compress images/ reduce file size).
7. Cacoo (for wireframes)
8. Responsinator (to check site responsiveness)
9. Chrome DevTools (to utilise the console log to identify and fix bugs)
10. W3C Markup Validation Service (to validate HTML)
11. W3C CSS Validation Service (to validate CSS)
12. JSHint (to validate JS)
13. GitHub & GitPod (repository & IDE)
14. Styling Wizard: Google Maps APIs

## Features

### Navigation Bar
The navbar (collapsable on smaller devices) can be used to navigate to different areas of the site depending on user interaction.
The navbar is fixed so that it can be selected by the user at all times for improved UX/ site navigation.
The website logo also acts as a link back to the home page.

### Landing Page
The landing page for the site is very mininal to prompt the user to interact with the site depending on their requirements. 
The users are able to select from one of 3 clearly labelled buttons (which highlight upon hover)...**Activities, Food & Drink** and **Accomodation**.
It is therefore simple for the user to select options based on what they are searching for.

There is also a 'down' arrow which can be selected (or prompts the user to scroll down the page) which then displays the 'main map' section.
This section has a short message explaining the another 3 buttons (with the same labels), can be selected to display where the locations are on the map.

The Map has been designed to only show markers (also clustered where applicable) of the selected option (e.g. if a user selected accomodation the map will only display those locations). 
Each marker on the map also has an InfoWindow which displays a short summary about that location

### Footer
A succint footer has been added for links to social media pages, although is hidden from smaller devices to prevent overcrowding of the page.

### Activities, Food & Drink, Accomodation
The site has been designed as a single page, but uses javascript to display sections of the site depending on user interactivity. 
Each of these subsections can be displayed if the user selects on the relevant nav item, or the relevant 'button' on the home page.
Once navigated to these sections, the user is presented with 12 different options that have been specially selected to have a range of offerings to cater for many tastes.
When a user hovers over one of the locations, the image is transformed using javascript to apply css.
The user is able to click on each location to display further details of their selection.

### Location details
This section is dynamically populated depending on the user's selection.
There is javascript functions which iterates through a JSON file to populate details of the selected location (Name, type & subtype, a link to the website of the location, a phone number and a short summary about that location).
There is also a large map which has a marker displaying the location of the selected option only (compared to the main map which displays markers for a specific feature type).

### Responsiveness
I wanted my site to be fully responsive across all devices, so I used **Bootstrap** as my framework to achieve this. 
I was able to use Responsinator and use Chrome Development Tools throughout the design of the site to ensure that everything was displayed neatly and clearly across various resolutions.
Images use 'cover' and 'contain' properties to preserve their aspect ratio.


## Future Features to implement
1. I'd like for the location images to be displayed using javascript (rather than defined within the HTML), this would allow for the content to be updated much easier in the future (rather than having to update the HTML for image locations etc.).
2. I'd like to display more information about each location (e.g. reviews, prices, opening times)
3. Possibly more places of interest and addition subsets of these sections (e.g. a whole section for 'sport activities' or different types of cuisine within the Food & Drink category).


## Testing
###General
I have run my HTML and CSS code through the W3C validation websites. and I have run my js code through JSHint.

[W3C Markup Validation Service](https://validator.w3.org/)

[W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)

[JSHint](https://jshint.com/)

I frequently used these tools to check my code quality and ensure everything was in order. This highlighted small errors as I was building my site (e.g. erroneous or missing closing tags or missing parenthesis when building a JS function)

I frequently used [Responsinator](http://www.responsinator.com/) and Google DevTools, to allow me to test the responsiveness of my site across different devices & resolutions throughout development.

I also tested across different browsers (Chrome, Safari, IE, Mi browser) which led to me identifying that ES6 is not supported in IE. This prompted me to add the script to display a message to a user that the site experience may not be the same and to update their browser.

I heavily relied on use of the console.log() function when developing my js functions, particularly when reading data from the JSON & adding map markers (to assist me with understanding exactly what data had been unpacked at each point).
### Nav Bar
1. Test that the Nav Links can all be clicked, and take me to the relevant location on the site.
2. Test that the Nav Bar toggles on smaller devices (using Chrome DevTools to check different devices), and can be clicked to drop down and links can still be selected to navigate.
3. Test that the orange border is displayed when nav links are hovered over. 
4. Test that the navbar remains fixed to the top of the page 

### Home Page div/buttons
1. Test that the buttons are highlighted on hover.
2. Test that the buttons can be clicked an they navigate me to the relevant section of the site.
3. Test responsiveness across devices to ensure the buttons are displayed neatly as per the bootstrap grid.
4. Test that the arrow button accurately navigates to the mainMap section.
5. Test that the landing page heading and tagline are not displayed on smaller devices.

###Footer
1. Test that the footer is fixed to the bottom of the page.
2. Test that the social icons change colour on hover.
3. Test that the footer is hidden on smaller devices.

### Main Map
1. Test that the map successfully initiates.
2. Test that each of the location buttons adds markers (and clusters) to the map.
3. Test that when a location button is selected, any markers/ clusters currently on the map are removed.
4. Test that the map is resonsive across devices.
5. Test that markers are given a label when loaded & and these reset from 'A' each time a location button is selected.
6. Test that an infoWindow is displayed when a marker is hovered over.
7. Test that interpolation of data into infowindow content is displayed correctly
8. Test that only one infowindow can be open at one time (open infowindows should close when another marker is hovered over). 
9. Test that the map has a suitable centering and zoom to be able to see all markers.

### Activities, Food & Drink, Accomodation sections
1. Test responsiveness across devices to ensure the locations/ images are displayed neatly as per the bootstrap grid.
2. Test that all nav items still function/ navigate accordingly.
3. Test the feature heading and summary are visible on all devices.
4. Test that the location images are scaled on hover (and the location names scale too)
5. Test that the I am able to navigate to location details if I click on a location image.

### Location details
1. Test responsiveness across devices to ensure the location details, and map were both clearly displayed as per the bootstrap grid.
2. Test each location to ensure that the relevant information is correctly displayed based on the selection.
3. Test that the marker for the location is correctly added to the map.
4. Test that if a user selects another location, that the original marker is cleared and the marker for the new selection is displayed.
5. Test that the href to the location's website works correctly, and opens in a new browser tab.
9. Test that the map has a suitable centering and zoom to be able to identify where the location is.

### Bugs Encoutered & Fixed
1. Minor issue causing some sections to stack, so I added a container around the landing page and applied 100vh/ 100vw to prevent the stacking.
2. Minor bug where the location details didn't hide after being displayed. I added this ID into the navHideSections & homeHideSections to add the class of hide.
3. When creating my displayDetails function, i was receiving the error, “$.getJSON is not a function”. This was because I was using a jquery 'slim' CDN which does not contain the getJSON method. Therefore I changed this to receive a CDN that did contain this method.
4. When creating my initMap function, I was receiving the error 'google is not defined'. I found a solution on stackoverflow, that suggested to remove the async defer script tags. When I did this, it resolved the error.
5. I had an issue when I was looking at a location, then navigating back to look at another location, the map would keep adding markers to the map. I created (with guidance from the developers.google.com) the DeleteMarkers function to clear the map each time the DisplayDetails function was called.
6. When creating my markers in the mainMap, the markers weren't clearing when I was selecting another button, so I added a markers array and pushed the markers into the array once created, and a loop function to clear that array, which I could then call to clear the markers. 
7. When creating my marker infoWinows, I was able to have multiple windows open at once which meant that they were overlapping. I fixed this making a global infoWindo variable, meaning only 1 window could be open at any time.
8. when creating my marker labels, I initially created my label/ labelIndex as global variables, which meant that the letters continued iterating when the using the mainMap, however when I moved them to be local variables, as the labelIndex was reset to 0 each time the function was run, the labels started from 'A' each time.
9. when adding the mainmap section to my landing page, a horizontal scroll bar was introduced upon the page loading. I therefore added CSS to define the body as 100% width and to hide any overflow.
10. when adding the nav-link border on hover, it was causing the a mis-alignment of the nav links. to solve this I added a static border of 2px, but transparent, so it is not visible until hovered.  

## Deployment
The site is deployed on GitHub. 

1. Create a git hub repository.
2. Open in GitPod
3. Create index.html file.
4. Add the file to staging area using the command git add index.html (or git add .)
5. We then want to commit the file, with the command git commit -m "Intial commit" (standard practice for the first commit into a repository).
6. We then want to push the file back to the repository, which can be done with the command git push.
7. You should now be able to see this commit in your repository.
8. You can repeat steps 5-7 for any further updates to the file (though your git commit message should contain more detail regarding the updates).
9. In your repository, select the settings option.
10. Scroll Down to the github pages section and click on the dropdown option under source, and select master branch.
11. This now publishes the site, and provides the URL to that published site.

The site can also be ran locally by creating a clone of this repository. 
1. In the git hub repository, click on the clone or download button
2. Copy the URL.
3. Open your own local IDE terminal
4. You can clone the project with the command git clone "Copied URL"

## Credits
### Content
All code has been written by myself (except code for outdated browser script, see below). There have been instances where I have used online sources for guidance on particular issues, but the code has been adapted by myself for the purpose of my site (see Acknowledgements).

The script code added to my HTML to display an alert if the user has an out of date browser, that may not work with my site, was sourced from [browser-update.org](https://browser-update.org/#install).

All of the location description text has been sourced directly from the locations' own website.

### Images
Home images were sourced from the following stock images library, and were all free for use, sharing or modification, even commercially.

[Flickr](https://www.flickr.com/)
[Pixabay](https://pixabay.com/)

All location images were sourced directly from the locations' own website.

### Acknowledgements

1. I used [VisitManchester](https://www.visitmanchester.com/) for inspiration on design and locations to choose for my own site.
2. I used [api.jquery](https://api.jquery.com/) for guidance on formatting of the functions implemented within my site (particularly for the $.each() function which allowed me to iterate through my JSON data to dynamically populate location details).
3. I used [developers.google.com](https://developers.google.com/maps/documentation/javascript/examples/marker-remove) for guidance on removing markers from the map.
4. I used [Stackoverflow](https://stackoverflow.com/questions/40600396/jquery-issue-typeerror-getjson-is-not-a-function) for guidance on my getJSON bug.
5. I used [Stackoverflow](https://stackoverflow.com/questions/12249136/referenceerror-google-is-not-defined/12252771) for guidance on my google not defined bug.
6. I used [Stackoverflow](https://stackoverflow.com/questions/1544739/google-maps-api-v3-how-to-remove-all-markers) to help solve the issue that my markers/ marker clusters weren't clearing.
7. I used [Stackoverflow](https://stackoverflow.com/questions/12621274/close-infowindow-when-another-marker-is-clicked) to help solve my issue with multiple infoWindows being displayed.
8. I used [developers.google.com](https://developers.google.com/maps/documentation/javascript/examples/marker-labels) for guidance on adding labels to the mainMap markers.
9. I used [codepen](https://codepen.io/pjwiebe/pen/VmmxpM) for guidance on creating my down arrow with CSS.
10. I used [w3schools](https://www.w3schools.com/howto/howto_css_smooth_scroll.asp) for guidance on using javascript to scroll to an element (my scrollToMap function).
11. My mentor, **Antonio Rodriguez**, for guidance on the content and design for my site, and also for guidance on my horizontal scroll bug.
12. **Andreas Jost** for his feedback on the slack Peer-code-review channel, regarding 'white space' & use of the site logo as a link to the home page.
13. I have been watching the 'JavaScript: From Fundamentals to Functional JS' course on [Pluralsight](https://app.pluralsight.com/id/) by Bianca Gandolfo to supplement my learning from the Code Institute.

