/**
 * Created by Вероника on 17.07.2016.
 */
'use strict';

export function scanDOM() {
    let html = document.children[0],
        tags = {},
        classes = {},
        textNodes = 0;

    //Функция увеличивает счетчик по количеству элементов
    let iterNumber = function (prop, obj) {
        if (!(prop in obj)){
            obj[prop] = 1;
        }
        else obj[prop]++;
    };

    //Функция перебирает узлы на странице и формирует статистику по элементам
    // и классам
    let recScan = function (nodes) {
        for (let i = 0; i < nodes.length; i++){
            let node = nodes[i];

            // Если узел типа элемент в статистику учитываем его тэг, класс
            // Иначе если узел типа текст увеличиваем счетчик текстовых узлов
            if (node.nodeType == 1){
                iterNumber(node.nodeName.toLowerCase(), tags);

                for (let j = 0; j < node.classList.length; j ++){
                    iterNumber(node.classList[j], classes);
                }

                // Если у элемента есть дочернии узлы, повторяем перебор
                if(node.childNodes.length != 0){
                    recScan(node.childNodes);
                }
            }
            else if(node.nodeType == 3){
                textNodes ++;
            }
        }
    };

    //Функция выводит в консоль статистику по каждому классу и типу элемента
    let logElementsNumber = function(obj, beginStr){
        for(let prop in obj){
            if(obj.hasOwnProperty(prop)) {
                console.log(`${beginStr} ${prop}: ${obj[prop]}`);
            }
        }
    };

    recScan(html.childNodes);

    // Вывод в консоль статистики по элементам и классам
    logElementsNumber(tags, 'Тэгов');
    logElementsNumber(classes, 'Элементов с классом');
    console.log(`Текстовых узлов: ${textNodes}`);
}
