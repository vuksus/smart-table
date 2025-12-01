import {rules, createComparison} from "../lib/compare.js";


export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор
    const compare = createComparison(rules.skipEmptyTargetValues, [
        rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false)
    ]);

    return (data, state, action) => {
        // #5.2 — применение компаратора
        switch (action.type) {
            case 'search':
                // Обновляем состояние поиска
                return {
                    ...state,
                    [searchField]: action.value
                };
            default:
                break;
        }

        // Фильтруем данные через компаратор
        return data.filter(row => compare(row, state));
    };
}