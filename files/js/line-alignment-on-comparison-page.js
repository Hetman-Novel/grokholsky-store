$(document).ready(function() {
    function setUniqueHeight() {
        var maxHeightByList = {};

        // Проходимся по каждому списку сравнения
        $('.js-product-comparison-list').each(function() {
            // Получаем значение атрибута data-list для текущего списка
            var listId = $(this).data('list');

            // Получаем все элементы списка
            var items = $(this).find('li');

            // Проходимся по каждому элементу списка
            items.each(function() {
                var height = $(this).outerHeight();

                // Обновляем максимальную высоту для текущего data-list
                if (!maxHeightByList[listId] || height > maxHeightByList[listId]) {
                    maxHeightByList[listId] = height;
                }
            });
        });

        // Применяем максимальные высоты ко всем элементам с соответствующим значением data-list
        for (var listId in maxHeightByList) {
            $('.js-product-comparison-list[data-list="' + listId + '"] li').css('height', maxHeightByList[listId] + 'px');
        }
    }

    // Вызываем функцию при загрузке страницы
    setUniqueHeight();
});
