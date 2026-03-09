# AVL Tree Visualizer 🌳

An interactive web-based visualizer that demonstrates how an **AVL Tree balances itself during insertions** using rotations.

This project visually illustrates AVL tree operations with animated node movements and imbalance highlighting, helping users understand how **self-balancing binary search trees maintain height balance**.

---

## 🚀 Features

* Insert nodes into an AVL Tree
* Automatic **AVL balancing**
* Detects and highlights **unbalanced nodes**
* Visualizes **tree structure using SVG**
* Smooth **node movement animation during rotations**
* **Edges dynamically update** during tree restructuring
* Press **Enter key to insert nodes**
* Input box **clears automatically after insertion**

---

## 🧠 AVL Tree Concepts Demonstrated

The visualizer demonstrates how AVL Trees maintain balance using rotations:

* **LL Rotation**
* **RR Rotation**
* **LR Rotation**
* **RL Rotation**

Each insertion updates the tree while ensuring the **balance factor remains between -1 and +1**.

---

## 🖥️ Technologies Used

* **HTML**
* **CSS**
* **JavaScript**
* **SVG Graphics**

The tree visualization is rendered using **SVG elements** (circles, text, and lines).

---

## 📷 Example Visualization

Example AVL insertion:

Insert:
10 → 20 → 30

Before balancing:

```
10
  \
   20
     \
      30
```

After AVL rotation:

```
   20
  /  \
10   30
```

The visualizer highlights the **imbalanced node in red** before performing the rotation.

---

## 🎮 How to Use

1. Enter a number in the input box.
2. Press **Enter** or click **Insert**.
3. The node will be added to the AVL tree.
4. If the tree becomes unbalanced:

   * The problematic node will turn **red**
   * The tree will rebalance with a **visual animation**.

---

## 📂 Project Structure

```
AVL_TREE_VISUALIZER
│
├── index.html      # Main UI structure
├── style.css       # Styling and layout
├── script.js       # Visualization and UI logic
├── avl.js          # AVL Tree implementation
└── README.md
```

---

## 💡 Learning Purpose

This project was built to better understand:

* AVL tree balancing
* Tree rotations
* Data structure visualization
* Interactive algorithm demonstrations

---

## 📌 Future Improvements

Possible enhancements:

* Delete node visualization
* Random tree generator
* Animation speed control
* Step-by-step rotation explanation
* Highlight balance factors
* Support for larger trees

---

## 👩‍💻 Author

**Bhavitha Vupperpally**

B.Tech Computer Science Student
Passionate about **Data Structures, Algorithms, and Visualization Tools**

---

## ⭐ If you like this project

Consider **starring the repository** on GitHub to support the project!
