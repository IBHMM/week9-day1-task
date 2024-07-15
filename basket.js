function AddToBasket() {
    var arr = [];

    return (element) => {
        arr.push(element);
        console.log(arr)
        return arr;
    }
}

const a = AddToBasket();

a(10);
a(20);
a(30);