let operations = []

class AVLNode {

    constructor(data){

        this.data = data
        this.left = null
        this.right = null
        this.h = 1

        this.id = nodeCounter++
    }

}

class AVLTree {

insert(root,x){

    if(root == null){
        return new AVLNode(x)
    }

    if(x < root.data){
        root.left = this.insert(root.left,x)
    }
    else{
        root.right = this.insert(root.right,x)
    }

    this.updateHeight(root)

    let bf = this.getBF(root)

    if(bf == -2){

        if(this.getBF(root.right) <= 0){

            operations.push({type:"RR", node:root.id})
            root = this.leftRotate(root)

        }
        else{

            operations.push({type:"RL", node:root.id})
            root.right = this.rightRotate(root.right)
            root = this.leftRotate(root)

        }

    }

    else if(bf == 2){

        if(this.getBF(root.left) >= 0){

            operations.push({type:"LL", node:root.id})
            root = this.rightRotate(root)

        }
        else{

            operations.push({type:"LR", node:root.id})
            root.left = this.leftRotate(root.left)
            root = this.rightRotate(root)

        }

    }

    return root
}

leftRotate(root){

    let newRoot = root.right

    root.right = newRoot.left
    newRoot.left = root

    this.updateHeight(root)
    this.updateHeight(newRoot)

    return newRoot
}

rightRotate(root){

    let newRoot = root.left

    root.left = newRoot.right
    newRoot.right = root

    this.updateHeight(root)
    this.updateHeight(newRoot)

    return newRoot
}

updateHeight(root){

    if(root == null) return

    let lh = root.left ? root.left.h : 0
    let rh = root.right ? root.right.h : 0

    root.h = 1 + Math.max(lh,rh)
}

getBF(root){

    if(root == null) return 0

    let lh = root.left ? root.left.h : 0
    let rh = root.right ? root.right.h : 0

    return lh - rh
}

}

let tree = new AVLTree()
let root = null