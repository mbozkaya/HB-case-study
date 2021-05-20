export default {
    createArrayFromLength: (len, start = 0) => {
        const arr = [];
        for (let index = start; index < len; index++) {
            arr.push(index);
        }
        return arr;
    },
};