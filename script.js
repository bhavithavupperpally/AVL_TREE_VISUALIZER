function insertNode(){

    let val = document.getElementById("value").value
    if(val === "") return

    let svg = document.getElementById("tree")

    root = tree.insert(root, parseInt(val))

    console.log(operations)

    // remove old edges only
    let lines = svg.querySelectorAll("line")
    lines.forEach(l => l.remove())

    drawTree(root,400,50,200)

    if(operations.length > 0){

        let rotateNode = operations[0].node

        highlightNode(rotateNode)

        setTimeout(() => {

            // redraw edges after animation
            let lines = svg.querySelectorAll("line")
            lines.forEach(l => l.remove())

            drawTree(root,400,50,200)

        },1000)

    }

    operations = []
}



function drawTree(node,x,y,gap){

    if(node == null) return

    let svg = document.getElementById("tree")

    let circleId = "circle-" + node.data
    let textId = "text-" + node.data

    let circle = document.getElementById(circleId)
    let text = document.getElementById(textId)

    // create node if it doesn't exist
    if(!circle){

        circle = document.createElementNS("http://www.w3.org/2000/svg","circle")
        circle.setAttribute("id",circleId)
        circle.setAttribute("r",20)
        circle.setAttribute("fill","#3b82f6")

        circle.style.transition = "all 1s ease"

        svg.appendChild(circle)

        text = document.createElementNS("http://www.w3.org/2000/svg","text")
        text.setAttribute("id",textId)
        text.setAttribute("text-anchor","middle")
        text.setAttribute("fill","white")
        text.textContent = node.data

        text.style.transition = "all 0.8s ease"

        svg.appendChild(text)
    }

    // update position (animation happens here)
    circle.setAttribute("cx",x)
    circle.setAttribute("cy",y)

    text.setAttribute("x",x)
    text.setAttribute("y",y+5)

    // draw left child
    if(node.left){

        drawLine(x,y,x-gap,y+80)
        drawTree(node.left,x-gap,y+80,gap/2)

    }

    // draw right child
    if(node.right){

        drawLine(x,y,x+gap,y+80)
        drawTree(node.right,x+gap,y+80,gap/2)

    }
}



function drawLine(x1,y1,x2,y2){

    let svg = document.getElementById("tree")

    let line = document.createElementNS("http://www.w3.org/2000/svg","line")

    line.setAttribute("x1",x1)
    line.setAttribute("y1",y1)
    line.setAttribute("x2",x2)
    line.setAttribute("y2",y2)

    line.setAttribute("stroke","black")
    line.setAttribute("stroke-width","2")

    svg.appendChild(line)
}



function highlightNode(value){

    let circle = document.getElementById("circle-" + value)

    if(circle){
        circle.setAttribute("fill","red")
    }

}