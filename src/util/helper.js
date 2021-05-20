export default {
    createArrayFromLength: (len, start = 0) => {
        const arr = [];
        for (let index = start; index < len; index++) {
            arr.push(index);
        }
        return arr;
    },
    generateProduct: (count = 36) => {
        const genericProducts = [{
            img: 'images\\yellow-product.png',
            title: 'Apple Telefon',
            brand: 'Apple',
            color: 'Sarı',
            netPrice: 124,
            price: 155.85,
            discount: 12,
        },
        {
            img: 'images\\black-product.png',
            title: 'Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...',
            brand: 'Apple',
            color: 'Siyah',
            netPrice: 90.85,
            price: 124.00,
            discount: 12,
        },
        {
            img: 'images\\color-product.png',
            title: 'Apple Telefon',
            brand: 'Apple',
            color: 'Lacivert',
            netPrice: 155.85,
            price: 124,
            discount: 12,
        },
        {
            img: 'images\\yellow-product.png',
            title: 'Apple Telefon',
            brand: 'Apple',
            color: 'Sarı',
            netPrice: 124,
            price: 155.85,
            discount: 12,
        },
        ];

        const products = [];

        for (let index = 0; index < count; index++) {
            const prd = { ...genericProducts[Math.floor(Math.random() * genericProducts.length)] };
            prd.id = index + 1;
            prd.createdDate = new Date();
            products.push(prd);
        }

        return products;
    },
    groupBy: (arr, key) => {
        return arr.reduce((acc, val) => {
            if (!acc[val[key]]) {
                acc[val[key]] = {};
                acc[val[key]].row = [];
            }
            acc[val[key]].row.push(val);
            return acc;
        }, {});
    }
};