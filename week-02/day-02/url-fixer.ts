'use strict';
export {};

// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

url = url.replace("https//", "https://");
url = url.replace("bots", "odds");

console.log(url);