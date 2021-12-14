The goal here is to help you see web development the way experienced developers do: as a series of finite and repeatable tasks.

There are only so many things we do in an app.

Here is a list of the 10 major plain JavaScript patterns. (Links to an external site.)

 Let's practice the 'display a list' and 'render function' patterns using data fetched with the `async fetch on load` pattern. 

## Grading Rubric: 2.5 points per array of items displayed on the site.

- Goal: asynchronously fetch and render 4 separate lists of things to the same index.html file.
- Start with the alchemy web template (Links to an external site.). Don't forget to add the supabase CDN to index.html and make a fetch-utils.js with some good copy paste work to set up the supabase client with the KEY and URL.
- Repeat the following process 4 times, with 4 different domains, all in the same template:
  - Come up with a domain for this data (like 'dogs' or 'candies'). Let's assume you picked 'candies'.
  - In the supabase.io app, create a 'candies' table, Your table should have at least 4 columns.
  - In the supabase.io app, create at least three rows in your table.
  - In your app, in a separate file, write a render function for your domain. Your function should accept one object and returns a DOM element. This function should return at minimum a div with two p tags. The outer div should have a css class of 'candy-item'.
  - Add a fetch function called `getCandies()` to your fetch-utils.js file to fetch all candies asynchronously.
  - Then, in app.js use `window.addEvenListener('load', () => {})` to fetch and display your data from supabase.
    - In your load event listener, first fetch the data.
    - Then, loop through the fetched array array, and for each object, render and appends a styled candy element to the container element you grabbed from the DOM.
  - Note: do this process one domain table at a time. Do not write 4 domain tables, then 4 render functions, etc. Please work through the first domain table, then the first render function, then the first display function.

<!-- 

# HTML Setup

## List page
- divs to hold the single plants
  - each plant should be a link to its detail page (anchor tag)
- big div to hold the list of all plants

### Events
- on load
  - get plants from the database
  - display those plants (loop, render, and append)

### Detail page
- div to hold the plant details

### Events
- on load
  - figure out which plant to go fetch . . .
  - get THIS SINGLE plant from the database
  - display THIS SIGNLE plant (render, and append)

# Step Zero:
## Make a supabase table with a few rows based on the `<thing>` of your choosing :)
  - `<thing>`s should have at least 4 properties.

## Stretch goal ideas
- Sort `<thing>`s by their name.
- Add an input that lets the user filter `<thing>`s on the list page.
- Add additional UI that lets the user sort `<thing>`s on the list page by different properties.
- For practice, make a second supabase table with another `<thing>` and add a second list to the list page. If you did <candies>, now do <candy-shops>, for example. Then, make a separate detail page for just that `<thing>`. Keep all the features from the original app as well.
- If you're feeling ambitious, see if you can get it working so that when you click on an item, it deletes from supabase then re-renders the list
- If you're feeling EVEN MORE ambitious, see if you can figure out how to let users create a `<thing>` in supabase and render it to the page.
- If you are mega-ultra final-form ambitious: see if you can figure out letting a user update a thing from the detail page.

| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Visit the deployed pages on GitHub pages, with link in the About section of the Github repo|        2 |


| Events                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| On load on the home page, see a list of `<thing>`s, fetched from supabase                               |        4 |
| On clicking a `<thing>`, user should be taken to that `<thing>`'s detail page.  | 2 |
| Detail page should get the id from the URL and use that id to fetch that `<thing>` from supabase.                                      |        2 |
| Detail page should show the user details about the `<thing>` with more details than on the list page|     2 |

| Functions                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| PURE: `render<Thing>Card(dog)` : return DOM node |2|
| PURE: `render<ThingDetail(dog)` : return DOM node |2|
| ASYNC: `fetch<Things>()` : return array of `<thing>`s from supabase |2|
| ASYNC: `fetch<Thing>(id)` : return single `<thing>` from supabase |2| -->