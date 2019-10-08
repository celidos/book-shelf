import {
    INIT_FILTERS, CHOOSE_FILTER
} from "../actions/actions";

export function filtersSetter(state : {items:any[]} = {
    items: []
}, action:any) {
    if (action.type === INIT_FILTERS)
        return Object.assign({}, state, { items: action.data.map((item: any) => ({ value: item, isSelected: false })) });
    if (action.type === CHOOSE_FILTER) {
        let filter = state.items.find(el => el.value.toLowerCase() === action.value);
        filter.isSelected = !filter.isSelected;
        const newItems = [...state.items];
        return Object.assign({}, {...state, items:newItems});
    }
    return state;
}