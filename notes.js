const textArea=document.querySelector('#textform')
const contain=document.querySelector("#contain")
textform.addEventListener('submit',function (e){
    e.preventDefault()
    const textinp=document.querySelector('#textArea')
    console.log(textinp.value)
    const ol=document.createElement('ol')
    const list=document.createElement('li')
    const b=document.createElement('b');
    
    b.append(textinp.value)
    list.append(b)
    ol.append(list)
    contain.append(ol)
    console.log(list)
    textinp.value=''
})