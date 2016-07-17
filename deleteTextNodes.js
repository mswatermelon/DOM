/**
 * Created by Вероника on 17.07.2016.
 */
'use strict';

// Функция проходится по элементу и удаляет дочернии узлы типа текст
export function deleteTextNodes(element) {
    let nodes = element.childNodes;

    for(let index = 0; index < nodes.length; index++){
        let node = nodes[index];

        // Если у дочернего элемента element есть дочернии узлы повторяем
        // процедуру
        if(node.nodeType == 1 && node.childNodes.length != 0){
            deleteTextNodes(nodes[index]);
        }

        if(node.nodeType == 3){
            element.removeChild(node);
            index--;
        }
    }
}
