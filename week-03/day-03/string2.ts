'use strict';
export {};

function swapX (text: string): string {
  if (text.length === 1 && text === 'x') {
    return '';
  } else if (text.length === 1 && text != 'x') {
    return text;
  } else if (text.charAt(text.length-1) === 'x') {
    return swapX(text.slice(0, text.length - 1));
  } else {
    return swapX(text.slice(0, text.length - 1)) + text.charAt(text.length-1);
  }
}

console.log(swapX('xasdfxghjklx'));
