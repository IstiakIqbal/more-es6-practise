// data access
const data = [{id: 1, name: 'Tanim', address: 'Loharpol'}];

// console.log(data[0].address);
const products = {
    count: 5000, 
    data: [
        {id: 1, name: 'hp', price: 65000},
        {id: 2, name: 'Macbook', price: 30000}
    ]
}

// console.log('Price of macbook: ',products.data[1].price);

const user = {
    id: 50001,
    name: 'Shoriful Raj',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poribagh er goli',
            third: 'no dorai'
        },
        city: 'Dhaka'
    }
}

const user2 = {
    id: 50001,
    name: 'Shoriful Raj',
    addresses: {
        city: 'Dhaka',
        phone: 112332
    }
}
console.log(user2.address?.phone);