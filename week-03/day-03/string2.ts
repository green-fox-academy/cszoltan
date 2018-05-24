'use strict';
export {};

function removeX (text: string): string {
  if (text.length === 1 && text === 'x') {
    return '';
  } else if (text.length === 1 && text != 'x') {
    return text;
  } else if (text.charAt(text.length-1) === 'x') {
    return removeX(text.slice(0, text.length - 1));
  } else {
    return removeX(text.slice(0, text.length - 1)) + text.charAt(text.length-1);
  }
}

console.log(removeX('xasdfxghjklx'));
