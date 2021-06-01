export const initialState = {
    basket: [],
    user: null
};

export const itemSum = (items) => {
    let sum = 0;
    items.forEach(item => {
        sum += item.price;
    });
    console.log("Vrednost", sum);
    return sum;
}

const reducer = (state, action) => {
    //switch petlja koja omogucava korisniku
    //funkcionalnosti kao sto su:
    //dodavanje u korpu, gde ce se dodavati svaki novi
    //element u niz produkta
    //brisanje iz niza, gde ce se sa findIndex metodom
    //locirati zeljeni produkt za brisanje iz korpe
    //bez ostecivanje celokupnog niza
    //brisanje svih elementa iz niza, gde ce se obrisati svi produkti iz korpe
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex((item) => item.id === action.id);
            console.log("Remove: ", action);
            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.log(`Cant remove produc (id: ${action.id}))`);
            }
            return {
                ...state,
                basket:
                    newBasket
            }

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export default reducer;