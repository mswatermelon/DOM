/**
 * Created by Вероника on 17.07.2016.
 */
'use strict';

// Функция добавляет в начало container элемент newElement
function prepend(container, newElement) {
    // Вставляем новый элемент перед первым элементом контейнера
    container.insertBefore(newElement, container.firstChild);
}
