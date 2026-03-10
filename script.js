let nodeCounter = 0

function insertNode(){

    let input = document.getElementById("value")
    let val = input.value

    if(val === "") return

    root = tree.insert(root, parseInt(val))

    renderTree()

    if(operations.length > 0){

        let rotateNode = operations[0].node

        document.querySelectorAll("circle").forEach(c => {
            c.setAttribute("fill","#3b82f6")
        })

        highlightNode(rotateNode)

        setTimeout(() => {
            renderTree()
        },1000)

    }

    operations = []

    input.value = ""
}

function renderTree(){

    let svg = document.getElementById("tree")

    let depth = getTreeHeight(root)

    svg.setAttribute("height", depth * 110)

    let width = svg.clientWidth

    svg.querySelectorAll("line").forEach(l => l.remove())

    computeLayout(root)

    let minX = Infinity
    let maxX = -Infinity

    collectBounds(root)

    function collectBounds(node){
        if(!node) return
        minX = Math.min(minX,node.x)
        maxX = Math.max(maxX,node.x)
        collectBounds(node.left)
        collectBounds(node.right)
    }

    let treeWidth = maxX - minX + 1
    let scale = width / (treeWidth + 2)

    normalizeLayout(root, scale, -minX + 1)

    drawTree(root)

}

function drawTree(node){

    if(!node) return

    let svg = document.getElementById("tree")

    let x = node.x
    let y = node.y

    let circleId = "circle-" + node.id
    let textId = "text-" + node.id

    let circle = document.getElementById(circleId)
    let text = document.getElementById(textId)

    if(!circle){

        circle = document.createElementNS("http://www.w3.org/2000/svg","circle")
        circle.setAttribute("id",circleId)
        circle.setAttribute("r",20)
        circle.setAttribute("fill","#3b82f6")
        circle.style.transition="all 1s ease"
        svg.appendChild(circle)

        text = document.createElementNS("http://www.w3.org/2000/svg","text")
        text.setAttribute("id",textId)
        text.setAttribute("text-anchor","middle")
        text.setAttribute("fill","white")
        text.style.transition="all 1s ease"
        svg.appendChild(text)

    }

    circle.setAttribute("cx",x)
    circle.setAttribute("cy",y)

    text.setAttribute("x",x)
    text.setAttribute("y",y+5)

    let bf = tree.getBF(node)
    text.textContent = node.data + "|" + bf

    if(node.left){

        drawLine(x,y,node.left.x,node.left.y)
        drawTree(node.left)

    }

    if(node.right){

        drawLine(x,y,node.right.x,node.right.y)
        drawTree(node.right)

    }

}

function drawLine(x1,y1,x2,y2){

    let svg = document.getElementById("tree")

    let r = 20

    let dx = x2 - x1
    let dy = y2 - y1

    let length = Math.sqrt(dx*dx + dy*dy)

    let offsetX = (dx/length) * r
    let offsetY = (dy/length) * r

    let startX = x1 + offsetX
    let startY = y1 + offsetY

    let endX = x2 - offsetX
    let endY = y2 - offsetY

    let line = document.createElementNS("http://www.w3.org/2000/svg","line")

    line.setAttribute("x1",startX)
    line.setAttribute("y1",startY)
    line.setAttribute("x2",endX)
    line.setAttribute("y2",endY)

    line.setAttribute("stroke","#333")
    line.setAttribute("stroke-width","2")

    svg.appendChild(line)
}

function highlightNode(nodeId){

    let circle = document.getElementById("circle-" + nodeId)

    if(circle){
        circle.setAttribute("fill","red")
    }

}

function getTreeHeight(node){

    if(node == null) return 0

    return 1 + Math.max(
        getTreeHeight(node.left),
        getTreeHeight(node.right)
    )
}


let nextPos = 0

function computeLayout(node, depth=0){

    if(!node) return

    computeLayout(node.left, depth+1)

    node.x = nextPos++
    node.y = depth

    computeLayout(node.right, depth+1)

}
function normalizeLayout(node, scale, shift){

    if(!node) return

    node.x = (node.x + shift) * scale
    node.y = node.y * 90 + 60

    normalizeLayout(node.left, scale, shift)
    normalizeLayout(node.right, scale, shift)

}


document.getElementById("value").addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        insertNode()
    }

})