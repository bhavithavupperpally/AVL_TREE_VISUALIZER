function insertNode(){

    let val = document.getElementById("value").value
    if(val === "") return

    let svg = document.getElementById("tree")

    // Clone current tree (before insertion)
    let beforeTree = structuredClone(root)

    // Insert new node (AVL may rotate)
    root = tree.insert(root, parseInt(val))

    let afterTree = structuredClone(root)

    console.log(operations)

    // Step 1: show tree BEFORE rotation
    svg.innerHTML = ""
    drawTree(beforeTree, 400, 50, 200)

    if(operations.length > 0){

        let rotateNode = operations[0].node
        document.getElementById("rotationLabel").innerText =
        "Rotation: " + operations[0].type

        // highlight imbalance
        highlightNode(rotateNode)

        // Step 2: show tree AFTER rotation
        setTimeout(() => {

            svg.innerHTML = ""
            drawTree(afterTree, 400, 50, 200)

        },1200)

    }
    else{

        // no rotation needed
        svg.innerHTML = ""
        drawTree(afterTree, 400, 50, 200)

    }

    operations = []
}



function drawTree(node, x, y, gap){

    if(node == null) return

    let svg = document.getElementById("tree")

    // create circle
    let circle = document.createElementNS("http://www.w3.org/2000/svg","circle")

    circle.setAttribute("cx", x)
    circle.setAttribute("cy", y)
    circle.setAttribute("r", 20)
    circle.setAttribute("fill", "#3b82f6")

    circle.style.transition = "all 0.6s ease"

    svg.appendChild(circle)

    // create text
    let text = document.createElementNS("http://www.w3.org/2000/svg","text")

    text.setAttribute("x", x)
    text.setAttribute("y", y + 5)
    text.setAttribute("text-anchor", "middle")
    text.setAttribute("fill", "white")

    text.style.transition = "all 0.6s ease"

    text.textContent = node.data

    svg.appendChild(text)

    // draw left subtree
    if(node.left != null){

        drawLine(x, y, x-gap, y+80)

        drawTree(node.left, x-gap, y+80, gap/2)

    }

    // draw right subtree
    if(node.right != null){

        drawLine(x, y, x+gap, y+80)

        drawTree(node.right, x+gap, y+80, gap/2)

    }

}



function drawLine(x1, y1, x2, y2){

    let svg = document.getElementById("tree")

    let line = document.createElementNS("http://www.w3.org/2000/svg","line")

    line.setAttribute("x1", x1)
    line.setAttribute("y1", y1)
    line.setAttribute("x2", x2)
    line.setAttribute("y2", y2)

    line.setAttribute("stroke", "black")
    line.setAttribute("stroke-width", "2")

    line.style.transition = "all 0.6s ease"

    svg.appendChild(line)

}



function highlightNode(value){

    let svg = document.getElementById("tree")

    let texts = svg.getElementsByTagName("text")

    for(let t of texts){

        if(t.textContent == value){

            let circle = t.previousElementSibling

            if(circle){
                circle.setAttribute("fill","red")
            }

        }

    }

}