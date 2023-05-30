const sketch = document.getElementById('grid')
let range = document.getElementById('myRange')
let size = 50
const eraseBtn = document.getElementById('erase')

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
createGrid()


function createGrid() {
    for(let i = 0; i < size * size;i++) {
        sketch.style.gridTemplateRows = `repeat(${size}, 1fr)`
        sketch.style.gridTemplateColumns = `repeat(${size}, 1fr)`
        console.log('hi')
        let square = document.createElement('div')
        sketch.appendChild(square)
        square.addEventListener('mouseover', color)
        square.addEventListener('mousedown', color)
    }
}

function color(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = 'black'
}

function erase() {
    for(let i = 0; i < sketch.children.length;i++) {
        let square = sketch.children[i]
        square.style.backgroundColor = 'white'
    }
}


range.addEventListener('input', () => {
    size = range.value
    createGrid()
    erase()
    
})
eraseBtn.addEventListener('click', erase)
