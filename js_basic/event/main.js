const h1Element = document.querySelector('h1');
console.dir(h1Element);
console.dir(h1Element.textContent);
h1Element.textContent = '変更後のタイトル';

const btnEl = document.querySelector('button');

const helloFn = (e) => {
    console.dir(e.target.textContent);
    console.log('hello');
};

/*btnEl.addEventListener('click', (e) => {
    console.dir(e.target.textContent);
    console.log('hello');
})*/

// コールバック関数ver
btnEl.addEventListener('click', helloFn);