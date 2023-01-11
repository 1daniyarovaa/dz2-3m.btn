let red = document.getElementById('btn1')
let yellow = document.getElementById('btn2')
let green = document.getElementById('btn3')
let reset = document.getElementById('btn4')
let body = document.getElementsByTagName('body');

red.addEventListener('click', ()=> {
    setTimeout(()=>{
        document.body.style.backgroundColor = 'red',
        console.log('Red');
    },650)
})
yellow.addEventListener('click', ()=> {
    timeOutId = setTimeout(()=>{
        document.body.style.backgroundColor = 'yellow',
        console.log('Paint it yellow');
    },650)

    })
green.addEventListener('click', ()=> {
    setTimeout(()=>{
        document.body.style.backgroundColor = 'green',
        console.log('Green');
        },650)
    })
reset.addEventListener('click' ,() => {
    setTimeout(()=>{
        document.body.style.backgroundColor = 'white'
        console.log("Reset");
    },369)
})






// reset.addEventListener('click', ()=> {
//     HTMLFormElement .body.style.backgroundColor.reset()
// })
// HTMLFormElement()


// reset.onclick = function() {
//    document.body.style.backgroundColor.reset();
// };


// reset.addEventListener('click',()=>{
// document.body.style.backgroundColor = reset();
// })


// reset.addEventListener('reset', (event) => {});

// onreset = (event) => { };


// onClick=document.body.elements[0].value




























// reset.style.cssText = `
// color : red;
// font-weight: bold;
// background-color:#7d7573;
// `
// red.style.cssText =`
// background-color :#98FF98;

// `
// yellow.style.cssText = `
// background-color:#4682B4;
// `
// green.style.cssText = `
// background-color :#c1ffc8;
// `