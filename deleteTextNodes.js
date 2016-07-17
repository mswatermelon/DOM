/**
 * Created by Вероника on 17.07.2016.
 */
'use strict';

function deleteTextNodes(element) {
    let nodes = element.childNodes;

    for(let index = 0; index < nodes.length; index++){
        let node = nodes[index];

        if(node.nodeType == 1 && node.childNodes.length != 0){
            deleteTextNodes(nodes[index]);
        }

        if(node.nodeType == 3){
            console.log(node);
            element.removeChild(node);
            index--;
        }
    }
}
