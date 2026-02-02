export const initPagination = ({pages, fromRow, toRow, totalRows}, createPage) => {
    // @todo: #2.3 — подготовить шаблон кнопки для страницы и очистить контейнер
    pages.firstElementChild.remove();                                // и удаляем его (предполагаем, что там больше ничего, как вариант, можно и всё удалить из pages)
        let pageCount;

    const applyPagination = (query, state, action) => {
    const limit = state.rowsPerPage;
    let page = state.page;

    // переносим код, который делали под @todo: #2.6

    return Object.assign({}, query, { // добавим параметры к query, но не изменяем исходный объект
        limit,
        page
    });
}

const updatePagination = (total, { page, limit }) => {
    pageCount = Math.ceil(total / limit);

    // переносим код, который делали под @todo: #2.4
    // переносим код, который делали под @todo: #2.5 (обратите внимание, что rowsPerPage заменена на limit)
}

return {
    updatePagination,
    applyPagination
};
}