export default {
    createArrayFromLength: (len, start = 0) => {
        const arr = [];
        for (let index = start; index < len; index++) {
            arr.push(index);
        }
        return arr;
    },
    generateProduct: (count = 36) => {
        const genericProducts = [
            {
                img: 'images\\\yellow-product.png',
                title: 'Apple Telefon',
                brand: 'Apple',
                color: 'Sarı',
                netPrice: 124,
                price: 155.85,
                discount: 12,
            },
            {
                img: 'images\\\black-product.png',
                title: 'Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...',
                brand: 'Apple',
                color: 'Siyah',
                netPrice: 90.85,
                price: 124.00,
                discount: 12,
            },
            {
                img: 'images\\\color-product.png',
                title: 'Apple Telefon',
                brand: 'Apple',
                color: 'Lacivert',
                netPrice: 155.85,
                price: 124,
                discount: 12,
            },
            {
                img: 'images\\\yellow-product.png',
                title: 'Apple Telefon',
                brand: 'Apple',
                color: 'Sarı',
                netPrice: 124,
                price: 155.85,
                discount: 12,
            },
            {
                img: 'images\\\samsung-purple-product.jpg',
                title: 'Samsung Galaxy M12 64 GB (Samsung Türkiye Garantili)',
                brand: 'Samsung',
                color: 'Mor',
                netPrice: 2000,
                price: 2500,
                discount: 20,
            },
            {
                img: 'images\\\samsung-color-product.jpg',
                title: 'Samsung Galaxy A21s 64 GB (Samsung Türkiye Garantili)',
                brand: 'Samsung',
                color: 'Siyah',
                netPrice: 2499,
                price: 2699,
                discount: 7,
            },
            {
                img: 'images\\\samsung-white-product.jpg',
                title: 'Samsung Galaxy S21 Plus 5G 128 GB (Samsung Türkiye Garantili)',
                brand: 'Samsung',
                color: 'Beyaz',
                netPrice: 2000,
                price: 2500,
                discount: 20,
            },
            // {
            //     img: 'images\\\huwaei-blue-product.jpg',
            //     title: 'Huawei P30 Lite 128 GB (Huawei Türkiye Garantili)',
            //     brand: 'Huwaei',
            //     color: 'Mavi',
            //     netPrice: 2729,
            //     price: 3449,
            //     discount: 22,
            // },
            // {
            //     img: 'images\\\huwaei-color-product.jpg',
            //     title: 'Huawei P40 Lite 128 GB (Huawei Türkiye Garantili)',
            //     brand: 'Huwaei',
            //     color: 'Lacivert',
            //     netPrice: 3320,
            //     price: 3799,
            //     discount: 13,
            // },
            // {
            //     img: 'images\\\huwaei-pink-product.jpg',
            //     title: 'Huawei Y5 2019 16 GB (Huawei Türkiye Garantili)',
            //     brand: 'Huwaei',
            //     color: 'Pembe',
            //     netPrice: 1578,
            //     price: 1999,
            //     discount: 21,
            // },
            // {
            //     img: 'images\\\xiaomi-orange-product.jpg',
            //     title: 'Xiaomi Redmi Note 9S 128 GB (Xiaomi Türkiye Garantili)',
            //     brand: 'Xiaomi',
            //     color: 'Turuncu',
            //     netPrice: 3199,
            //     price: 3699,
            //     discount: 13,
            // },
            // {
            //     img: 'images\\\xiaomi-red-product.jpg',
            //     title: 'Xiaomi Mi Note 10 Lite 64 GB (Xiaomi Türkiye Garantiili)',
            //     brand: 'Xiaomi',
            //     color: 'Kırmızı',
            //     netPrice: 3459,
            //     price: 4299,
            //     discount: 13,
            // },
            // {
            //     img: 'images\\\xiaomi-yellow-product.jpg',
            //     title: 'Xiaomi Mi 10T 128 GB (Xiaomi Türkiye Garantili)',
            //     brand: 'Xiaomi',
            //     color: 'Sarı',
            //     netPrice: 4999,
            //     price: 5999,
            //     discount: 17,
            // },
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
    },
    orderBy: (array, key, order = 'asc') => {
        const orderedArray = array.sort(function (a, b) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });

        if (order === 'desc')
            return orderedArray.reverse();

        return orderedArray
    },
    orderTypes: {
        lowestPrice: 1,
        highestPrice: 2,
        newest: 3,
        oldest: 4,
    },
    orderTypeName: {
        1: 'En Düşük Fiyat',
        2: 'En Yüksek Fiyat',
        3: 'En Yeniler (A>Z)',
        4: 'En Eskiler (Z>A)',
    },
    getStoredBasket: () => {
        const item = localStorage.getItem('basket');
        if (!item)
            return {
                items: [],
            };

        return JSON.parse(item);
    },
    staticProducts: () => [
        {
            id: 1,
            price: 3500, discount: 20, createdDate: new Date(2021, 4, 1), img: "images\\samsung-color-product.jpg", title: "Samsung Galaxy A21s 64 GB (Samsung Türkiye Garantili)", brand: "Samsung", color: "Siyah", netPrice: 2499
        }
        , { id: 2, price: 2799, discount: 10, createdDate: new Date(2021, 4, 2), img: "images\\samsung-white-product.jpg", title: "Samsung Galaxy S21 Plus 5G 128 GB (Samsung Türkiye Garantili)", brand: "Samsung", color: "Beyaz", netPrice: 2000 }
        , { id: 3, price: 750, discount: 11, createdDate: new Date(2021, 4, 3), img: "images\\color-product.png", title: "Apple Telefon", brand: "Apple", color: "Lacivert", netPrice: 155.85 }
        , { id: 4, price: 2399, discount: 12, createdDate: new Date(2021, 4, 4), img: "images\\samsung-white-product.jpg", title: "Samsung Galaxy S21 Plus 5G 128 GB (Samsung Türkiye Garantili)", brand: "Samsung", color: "Beyaz", netPrice: 2000 }
        , { id: 5, price: 149, discount: 13, createdDate: new Date(2021, 4, 5), img: "images\\black-product.png", title: "Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...", brand: "Apple", color: "Siyah", netPrice: 90.85 }
        , { id: 6, price: 220, discount: 14, createdDate: new Date(2021, 4, 6), img: "images\\yellow-product.png", title: "Apple Telefon", brand: "Apple", color: "Sarı", netPrice: 125 }
        , { id: 7, price: 210, discount: 15, createdDate: new Date(2021, 4, 7), img: "images\\yellow-product.png", title: "Apple Telefon", brand: "Apple", color: "Sarı", netPrice: 124 }
        , { id: 8, price: 200, discount: 16, createdDate: new Date(2021, 4, 8), img: "images\\yellow-product.png", title: "Apple Telefon", brand: "Apple", color: "Sarı", netPrice: 123 }
        , { id: 9, price: 2330, discount: 17, createdDate: new Date(2021, 4, 9), img: "images\\samsung-white-product.jpg", title: "Samsung Galaxy S21 Plus 5G 128 GB (Samsung Türkiye Garantili)", brand: "Samsung", color: "Beyaz", netPrice: 2005 }
        , { id: 10, price: 2229.9, discount: 18, createdDate: new Date(2021, 4, 10), img: "images\\samsung-white-product.jpg", title: "Samsung Galaxy S21 Plus 5G 128 GB (Samsung Türkiye Garantili)", brand: "Samsung", color: "Beyaz", netPrice: 2000 }
        , { id: 11, price:199, discount: 19, createdDate: new Date(2021, 4, 11), img: "images\\color-product.png", title: "Apple Telefon", brand: "Apple", color: "Lacivert", netPrice: 165.85 }
        , { id: 12, price: 189, discount: 9, createdDate: new Date(2021, 4, 12), img: "images\\color-product.png", title: "Apple Telefon", brand: "Apple", color: "Lacivert", netPrice: 175.85 }
        , { id: 13, price: 144, discount: 8, createdDate: new Date(2021, 4, 13), img: "images\\yellow-product.png", title: "Apple Telefon", brand: "Apple", color: "Sarı", netPrice: 122 }
        , { id: 14, price: 2339, discount: 7, createdDate: new Date(2021, 4, 14), img: "images\\samsung-white-product.jpg", title: "Samsung Galaxy S21 Plus 5G 128 GB (Samsung Türkiye Garantili)", brand: "Samsung", color: "Beyaz", netPrice: 1999 }
        , { id: 15, price: 2439, discount: 6, createdDate: new Date(2021, 4, 15), img: "images\\samsung-white-product.jpg", title: "Samsung Galaxy S21 Plus 5G 128 GB (Samsung Türkiye Garantili)", brand: "Samsung", color: "Beyaz", netPrice: 1998 }
        , { id: 16, price: 505, discount: 5, createdDate: new Date(2021, 4, 16), img: "images\\color-product.png", title: "Apple Telefon", brand: "Apple", color: "Lacivert", netPrice: 255.85 }
        , { id: 17, price: 2206, discount: 4, createdDate: new Date(2021, 4, 17), img: "images\\samsung-white-product.jpg", title: "Samsung Galaxy S21 Plus 5G 128 GB (Samsung Türkiye Garantili)", brand: "Samsung", color: "Beyaz", netPrice: 1997 }
        , { id: 18, price: 2207, discount: 3, createdDate: new Date(2021, 4, 18), img: "images\\samsung-white-product.jpg", title: "Samsung Galaxy S21 Plus 5G 128 GB (Samsung Türkiye Garantili)", brand: "Samsung", color: "Beyaz", netPrice: 1996 }
        , { id: 19, price: 3449, discount: 14, createdDate: new Date(2021, 4, 19), img: "images\\samsung-color-product.jpg", title: "Samsung Galaxy A21s 64 GB (Samsung Türkiye Garantili)", brand: "Samsung", color: "Siyah", netPrice: 2499 }
        , { id: 20, price: 2999, discount: 12, createdDate: new Date(2021, 4, 20), img: "images\\samsung-purple-product.jpg", title: "Samsung Galaxy M12 64 GB (Samsung Türkiye Garantili)", brand: "Samsung", color: "Mor", netPrice: 2009 }
        , { id: 21, price: 225, discount: 11, createdDate: new Date(2021, 4, 21), img: "images\\yellow-product.png", title: "Apple Telefon", brand: "Apple", color: "Sarı", netPrice: 125 }
        , { id: 22, price: 235, discount: 10, createdDate: new Date(2021, 4, 22), img: "images\\yellow-product.png", title: "Apple Telefon", brand: "Apple", color: "Sarı", netPrice: 126 }
        , { id: 23, price: 245, discount: 11, createdDate: new Date(2021, 4, 23), img: "images\\yellow-product.png", title: "Apple Telefon", brand: "Apple", color: "Sarı", netPrice: 127 }
        , { id: 24, price: 255, discount: 22, createdDate: new Date(2021, 4, 24), img: "images\\yellow-product.png", title: "Apple Telefon", brand: "Apple", color: "Sarı", netPrice: 128 }
        , { id: 25, price: 265, discount: 23, createdDate: new Date(2021, 4, 25), img: "images\\yellow-product.png", title: "Apple Telefon", brand: "Apple", color: "Sarı", netPrice: 129 }
        , { id: 26, price: 335, discount: 12, createdDate: new Date(2021, 4, 26), img: "images\\yellow-product.png", title: "Apple Telefon", brand: "Apple", color: "Sarı", netPrice: 135 }
        , { id: 27, price: 3500, discount: 14, createdDate: new Date(2021, 4, 27), img: "images\\samsung-white-product.jpg", title: "Samsung Galaxy S21 Plus 5G 128 GB (Samsung Türkiye Garantili)", brand: "Samsung", color: "Beyaz", netPrice: 3001 }
        , { id: 28, price: 3600, discount: 25, createdDate: new Date(2021, 4, 28), img: "images\\samsung-white-product.jpg", title: "Samsung Galaxy S21 Plus 5G 128 GB (Samsung Türkiye Garantili)", brand: "Samsung", color: "Beyaz", netPrice: 3011 }
        , { id: 29, price: 3700, discount: 16, createdDate: new Date(2021, 4, 29), img: "images\\samsung-purple-product.jpg", title: "Samsung Galaxy M12 64 GB (Samsung Türkiye Garantili)", brand: "Samsung", color: "Mor", netPrice: 3111 }
        , { id: 30, price: 2000, discount: 25, createdDate: new Date(2021, 4, 30), img: "images\\yellow-product.png", title: "Apple Telefon", brand: "Apple", color: "Sarı", netPrice: 1244 }
        , { id: 31, price: 2300, discount: 1, createdDate: new Date(2021, 5, 1), img: "images\\samsung-color-product.jpg", title: "Samsung Galaxy A21s 64 GB (Samsung Türkiye Garantili)", brand: "Samsung", color: "Siyah", netPrice: 2289 }
        , { id: 32, price: 1200, discount: 6, createdDate: new Date(2021, 5, 2), img: "images\\color-product.png", title: "Apple Telefon", brand: "Apple", color: "Lacivert", netPrice: 1155.85 }
        , { id: 33, price: 2010, discount: 8, createdDate: new Date(2021, 5, 3), img: "images\\color-product.png", title: "Apple Telefon", brand: "Apple", color: "Lacivert", netPrice: 1955.85 }
        , { id: 34, price: 1740, discount: 11, createdDate: new Date(2021, 5, 4), img: "images\\yellow-product.png", title: "Apple Telefon", brand: "Apple", color: "Sarı", netPrice: 1240 }
        , { id: 35, price: 6000, discount: 30, createdDate: new Date(2021, 5, 5), img: "images\\samsung-color-product.jpg", title: "Samsung Galaxy A21s 64 GB (Samsung Türkiye Garantili)", brand: "Samsung", color: "Siyah", netPrice: 5499 }
        , { id: 36, price: 5555, discount: 35, createdDate: new Date(2021, 5, 6), img: "images\\samsung-color-product.jpg", title: "Samsung Galaxy A21s 64 GB (Samsung Türkiye Garantili)", brand: "Samsung", color: "Siyah", netPrice: 4499 }
    ]
};