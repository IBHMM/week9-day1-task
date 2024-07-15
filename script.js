function setState(initial) {
    var count = initial || undefined;

    return [
        () => count,
        function (value) {
            count = value;
            return count
        }
    ]
}


const [value, update] = setState(10); 
console.log(value)
update(29)
console.log(value)
update(40)
console.log(value)