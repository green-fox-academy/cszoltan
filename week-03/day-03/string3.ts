'use strict';
export {};

function stars (text: string): string {
  if (text.length === 1) {
    return text;
  } else {
    return stars(text.slice(0, text.length - 1)) + '*' + text.charAt(text.length-1) ;
  }
}

console.log(stars('xasdfxghjklx'));
