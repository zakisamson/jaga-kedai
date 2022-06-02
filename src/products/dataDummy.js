const importImage = (value) => {
    return require(`./images/${value}.jpeg`);
}

const image = {
    thaiSalad: importImage('thai-salad'),
    sweetChickenRoast: importImage('sweet-chicken-roast'),
    bloomGloom: importImage('bloom-gloom'),
    roseMeTender: importImage('sweet-chicken-roast')
}

export const productsDummy = [
    {
        productId: 1,
        productName: 'Thai Salad',
        productCategory: 'Foods',
        productPrice: 74000,
        productImage: image.thaiSalad,
        productImageUrl: './images/thai-salad.jpeg',
        productCreated: new Date()
    },
    {
        productId: 2,
        productName: 'Sweet Chicken Roast',
        productCategory: 'Foods',
        productPrice: 92000,
        productImage: image.sweetChickenRoast,
        productImageUrl: './images/sweet-chicken-roast.jpeg',
        productCreated: new Date()
    },
    {
        productId: 3,
        productName: 'Bloom Gloom',
        productCategory: 'Drinks',
        productPrice: 74000,
        productImage: image.bloomGloom,
        productImageUrl: './images/bloom-gloom.jpeg',
        productCreated: new Date()
    },
    {
        productId: 4,
        productName: 'Rose Me Tender',
        productCategory: 'Drinks',
        productPrice: 74000,
        productImage: image.roseMeTender,
        productImageUrl: './images/rose-me-tender.jpeg',
        productCreated: new Date()
    }
]