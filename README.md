# CI-MilestoneProjectTwo

## GO MCR Overview
This site has been created to be a guide for potential visitors to Manchester, or local residents, to find a selection of activities to do, places to eat, or accomodation within the city.

This site has been designed to be easy to navigate and for users to find something that takes their fancy.

## Live site

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

[Mobile wireframe](https://github.com/lewisclark4/CI-MilestoneProjectTwo/blob/master/wireframes/Mobile%20Wireframes.pdf)

[Tablet wireframe](https://github.com/lewisclark4/CI-MilestoneProjectTwo/blob/master/wireframes/Tablet%20Wireframe.pdf)

[Desktop wireframe](https://github.com/lewisclark4/CI-MilestoneProjectTwo/blob/master/wireframes/Desktop%20Wireframes.pdf)

### Surface

The idea was to create a site which shows off the fun bubbly side of manchester, adopting the colours of the Manchester Worker Bee.

The font of 'Indie Flower' was chosen as I felt that while retaining legibility, it also offers a fun and unique design to the site.
It is described by the designer as "carefree and open" "with the bubbly, rounded edges".

The deep yellow/ orange colour offers a comfortable contrast against 'black' and 'white' backgrounds without causing any strain to read.

Ease of navigation was a key strategy for the site, and therefore there are clear and obvious effects when a user is able to interact with the site (e.g. the cursor is replace by a pointer, and the particular element will be visually interactive)

## Technologies & Tools
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

## Future Features to implement

## Testing

### Bugs Encoutered & Fixed
1. Minor issue causing some sections to stack, so I added a container around the landing page and applied 100vh/ 100vw to prevent the stacking.
2. Minor bug where the location details didn't hide after being displayed. I added this ID into the navHideSections & homeHideSections to add the class of hide.
3. When creating my displayDetails function, i was receiving the error, “$.getJSON is not a function”. This was because I was using a jquery 'slim' CDN which does not contain the getJSON method. Therefore I changed this to receive a CDN that did contain this method.
4. When creating my initMap function, I was receiving the error 'google is not defined'. I found a solution on stackoverflow, that suggested to remove the async defer script tags. When I did this, it resolved the error.
5. I had an issue when I was looking at a location, then navigating back to look at another location, the map would keep adding markers to the map. I created (with guidance from the developers.google.com) the DeleteMarkers function to clear the map each time the DisplayDetails function was called.
6. When creating my markers in the mainMap, the markers weren't clearing when I was selecting another button, so I added a markers array and pushed the markers into the array once created, and a loop function to clear that array, which I could then call to clear the markers. 
7. When creating my marker infoWinows, I was able to have multiple windows open at once which meant that they were overlapping. I fixed this making a global infoWindo variable, meaning only 1 window could be open at any time.
8. when creating my marker labels, I initially created my label/ labelIndex as global variables, which meant that the letters continued iterating when the using the mainMap, however when I moved them to be local variables, as the labelIndex was reset to 0 each time the function was run, the labels started from 'A' each time.

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

The site can also be ran locally by creating a clone of this repository. In the git hub repository, click on the clone or download button and copy the URL.

Within a new git terminal, you can clone the project with the command git clone "Copied URL"

## Credits
### Content
All code has been written by myself. There have been instances where I have used online sources for guidance on particular issues, but the code has been adapted by myself for the purpose of my site (see Acknowledgements).

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
9. I have been watching the 'JavaScript: From Fundamentals to Functional JS' course on [Pluralsight](https://app.pluralsight.com/id/) by Bianca Gandolfo to supplement my learning from the Code Institute.

