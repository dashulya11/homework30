
const elem = document.querySelectorAll('li');
function ulArray() {
    const array = [];
    for (let item of elem){
        array.push(item.innerHTML);
    }
    console.log(array.length);
    return array;
}
console.log(ulArray());


