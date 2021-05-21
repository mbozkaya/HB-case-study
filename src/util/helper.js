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
            {
                img: 'images\\samsung-purple-product.jpg',
                title: 'Samsung Galaxy M12 64 GB (Samsung Türkiye Garantili)',
                brand: 'Samsung',
                color: 'Mor',
                netPrice: 2000,
                price: 2500,
                discount: 20,
            },
            {
                img: 'images\\samsung-color-product.jpg',
                title: 'Samsung Galaxy A21s 64 GB (Samsung Türkiye Garantili)',
                brand: 'Samsung',
                color: 'Siyah',
                netPrice: 2499,
                price: 2699,
                discount: 7,
            },
            {
                img: 'images\\samsung-white-product.jpg',
                title: 'Samsung Galaxy S21 Plus 5G 128 GB (Samsung Türkiye Garantili)',
                brand: 'Samsung',
                color: 'Beyaz',
                netPrice: 2000,
                price: 2500,
                discount: 20,
            },
            // {
            //     img: 'images\\huwaei-blue-product.jpg',
            //     title: 'Huawei P30 Lite 128 GB (Huawei Türkiye Garantili)',
            //     brand: 'Huwaei',
            //     color: 'Mavi',
            //     netPrice: 2729,
            //     price: 3449,
            //     discount: 22,
            // },
            // {
            //     img: 'images\\huwaei-color-product.jpg',
            //     title: 'Huawei P40 Lite 128 GB (Huawei Türkiye Garantili)',
            //     brand: 'Huwaei',
            //     color: 'Lacivert',
            //     netPrice: 3320,
            //     price: 3799,
            //     discount: 13,
            // },
            // {
            //     img: 'images\\huwaei-pink-product.jpg',
            //     title: 'Huawei Y5 2019 16 GB (Huawei Türkiye Garantili)',
            //     brand: 'Huwaei',
            //     color: 'Pembe',
            //     netPrice: 1578,
            //     price: 1999,
            //     discount: 21,
            // },
            // {
            //     img: 'images\\xiaomi-orange-product.jpg',
            //     title: 'Xiaomi Redmi Note 9S 128 GB (Xiaomi Türkiye Garantili)',
            //     brand: 'Xiaomi',
            //     color: 'Turuncu',
            //     netPrice: 3199,
            //     price: 3699,
            //     discount: 13,
            // },
            // {
            //     img: 'images\\xiaomi-red-product.jpg',
            //     title: 'Xiaomi Mi Note 10 Lite 64 GB (Xiaomi Türkiye Garantiili)',
            //     brand: 'Xiaomi',
            //     color: 'Kırmızı',
            //     netPrice: 3459,
            //     price: 4299,
            //     discount: 13,
            // },
            // {
            //     img: 'images\\xiaomi-yellow-product.jpg',
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
    }
};