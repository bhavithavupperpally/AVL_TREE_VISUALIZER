function insertNode(){

    let val = document.getElementById("value").value

    if(val === "") return

    // insert into AVL tree
    root = tree.insert(root, parseInt(val))
    console.log(operations)
    operations = []

    // clear old drawing
    let svg = document.getElementById("tree")
    svg.innerHTML = ""

    // redraw tree
    drawTree(root, 400, 50, 200)

}


function drawTree(node, x, y, gap){

    if(node == null) return

    let svg = document.getElementById("tree")

    // create circle
    let circle = document.createElementNS("http://www.w3.org/2000/svg","circle")

    circle.setAttribute("cx", x)
    circle.setAttribute("cy", y)
    circle.setAttribute("r", 20)
    circle.setAttribute("fill", "#4CAF50")

    svg.appendChild(circle)

    // create text
    let text = document.createElementNS("http://www.w3.org/2000/svg","text")

    text.setAttribute("x", x)
    text.setAttribute("y", y + 5)
    text.setAttribute("text-anchor", "middle")
    text.setAttribute("fill", "white")

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

    svg.appendChild(line)

}