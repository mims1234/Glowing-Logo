X = document.getElementById('X')
colorText = document.getElementById('text')

// NORMAL COLORS
// colors = ['red','green','blue','grey']

// HEX COLORS
// hexColor = ['00FF00','FF0000','0000FF']

// HEX ARRAY
hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

X.addEventListener('click',function(){
    hexCol = '#'

    for(let i=0;i<6;i++){
        random = Math.floor(Math.random()*hex.length)
        hexCol+= hex[random]
    }
    
    X.style.textShadow = `0 0 50px ${hexCol},0 0 100px ${hexCol},0 0 150px ${hexCol},0 0 200px ${hexCol},0 0 250px ${hexCol}`

    colorText.innerHTML = `New Color is ${hexCol}`
    colorText.style.background = `${hexCol}`
})