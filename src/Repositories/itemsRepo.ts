const items = [
    {id: 1, title: 'computer', price: 19499},
    {id: 2, title: 'mouse', price: 499},
    {id: 3, title: 'headphones', price: 1999},
]


export const itemsRepo = {
    getItems() {
        return items;
    },
    getSingleItem(id: number) {
        const res = items.filter(i => i.id === id);
        if (res.length === 0) return 404;
        return res;
    }
}