const importImage = (value) => {
    return require(`./images/${value}.jpeg`);
}

const image = {
    thaiSalad: importImage('thai-salad'),
    sweetChickenRoast: importImage('sweet-chicken-roast'),
    bloomGloom: importImage('bloom-gloom'),
    roseMeTender: importImage('sweet-chicken-roast')
}

export const products = [
    {
        productId: 1,
        productName: 'Thai Salad',
        productCategory: 'Foods',
        productPrice: 74000,
        productImage: image.thaiSalad,
        productCreated: new Date()
    },
    {
        productId: 2,
        productName: 'Sweet Chicken Roast',
        productCategory: 'Foods',
        productPrice: 92000,
        productImage: image.sweetChickenRoast,
        productCreated: new Date()
    },
    {
        productId: 3,
        productName: 'Bloom Gloom',
        productCategory: 'Drinks',
        productPrice: 74000,
        productImage: image.bloomGloom,
        productCreated: new Date()
    },
    {
        productId: 4,
        productName: 'Rose Me Tender',
        productCategory: 'Drinks',
        productPrice: 74000,
        productImage: image.roseMeTender,
        productCreated: new Date()
    }
]