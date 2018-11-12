const read = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

(async () => {
  let total = await getInput();

  for (let i = 0; i < total; i++) {
    let size = await getInput();
    let values = await getInput();
    let target = await getInput();

    target = parseInt(target);
    values = values.split(' ').map(Number).sort((a, b) => a - b);

    let result = search(target, values);

    console.log(result);
  }

  read.close();
})();

async function getInput() {
  return new Promise(resolve => {
    read.question('', input => {
      resolve(input);
    }); 
  });
}

function search(needle, haystack, index = 0) {
  let mid = Math.floor(haystack.length / 2);

  if (needle === haystack[mid]) {
    return mid + index;
  } else if (needle < haystack[mid] && haystack.length > 1) {
    return search(needle, haystack.slice(0, mid), index);
  } else if (needle > haystack[mid] && haystack.length > 1) {
    return search(needle, haystack.slice(mid + 1), index + haystack.slice(0, mid).length + 1);
  } else {
    return -1;
  }
}
