'use strict';
export {};

function swapX (text: string): string {
  if (text.length === 1) {
    return text;
  } else {
    return swapX(text.slice(0, text.length - 1)) + '*' + text.charAt(text.length-1) ;
  }
}

console.log(swapX('xasdfxghjklx'));
