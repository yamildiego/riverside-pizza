var userData = {
    id: 1,
    name: "Testing",
    phone: 0,
    orders: {}
}

export default function user(state = userData, action = {}) {
    switch (action.type) {
        default:
            return state;
    }
}