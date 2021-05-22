var addButton = document.getElementById('add')    
var inputTask = document.getElementById('new-task')
var unfinishedTasks = document.getElementById('unfinished-tasks') 
var label = document.createElement('label') 
var priors = document.createElement('label1')
var nowDate = new Date()
let NewTodoArr = []


addButton.addEventListener ('click', function addTask () {
    
    if (inputTask.value === ''){
        return alert ('Введите текст задачи!') 
    }

    var listItem = document.createElement('li')     //элемент списка

    function createNewElement(task){
        
        function swap() { 
            let selected = document.getElementById('priority').options.selectedIndex
            let val = document.getElementById('priority').options[selected].value;
            if (val === 'low') {
                priors.innerHTML = `<font color="red">низкий</font>` + `&emsp; &emsp; &emsp;`
                } else if (val === 'middle') {
                priors.innerHTML = `<font color="blue">средний</font>` + `&emsp; &emsp; &emsp;`
                } else {
                priors.innerHTML = `<font color="green">высокий</font>` + `&emsp; &emsp; &emsp;`
                }
        } swap(priors) 
            
        label.innerHTML = task + `<br>` + nowDate.toUTCString() //в label передаем задачу 
            
        var checkBox = document.createElement('button');
        checkBox.className = "material-icons checkbox"; //задали класс для checkBox
        checkBox.innerHTML = "<i class ='material-icons'>checkbox</i>";
            
        var closeButton = document.createElement('button');  
        closeButton.className = "material-icons close";  
        closeButton.innerHTML = "<i class= 'material-icons'>close</i>"; 
        
        var deleteButton = document.createElement('button');
        deleteButton.className = "material-icons delete";  
        deleteButton.innerHTML = "<i class= 'material-icons'>delete</i>"; 
            
        listItem.appendChild(priors)  //добавляем элементы в лист
        listItem.appendChild(label)   
        listItem.appendChild(checkBox)
        listItem.appendChild(closeButton)
        listItem.appendChild(deleteButton)
        
        return listItem
    }
        
        
    if (inputTask.value) {  //если значение строки полученное через value не пустое, тогда
        listItem = createNewElement(inputTask.value)   //создаем элемент списка, параметром которого передаем нашу строку (значение поля)
        unfinishedTasks.appendChild(listItem)    //добавляем задачи
        bintTaskEvents(listItem)  //функция с кнопками
    } 
    
    
    task = document.getElementById('new-task').value
    let NewTodo = {
    text: task, 
    prioritet: priors.innerText,
    date: nowDate
    }
    NewTodoArr.push(NewTodo)
    console.log(NewTodoArr)


    inputTask.value = ''  //обнулим значение строки

    function deleteTask () {      // удаляет задачу
        var  listItem = this.parentNode   //обращаться к родителю, то есть к li
        var ul = listItem.parentNode 
        ul.removeChild(listItem)  //удаление из ul элемента li
    }

    function closeTask  () { 
        // for (var i = 0; i<NewTodoArr.length; i++) {
        //     NewTodoArr.push(NewTodoArr[i])
        //     NewTodoArr.splice(i, 1, NewTodo[i+1])
        // }
        //console.log(NewTodo)
    }

    function finishTask () {  
        //console.log('3')
    }

    function bintTaskEvents (listItem) {    
        var checkBox = listItem.querySelector('button.checkbox') //в переменную checkbox записываем то что в listItem 
        var closeButton = listItem.querySelector('button.close')
        var deleteButton = listItem.querySelector('button.delete')
    
        checkBox.onclick = finishTask
        closeButton.onclick = closeTask
        deleteButton.onclick = deleteTask
    
    }
})



    
// function save() {
    
//     //     for (j=0; j < unfinishedTasks.children.length; j++) {
//     //         unfinishedTasksArr.push(unfinishedTasks.children[j].getElementsByTagName('label1')[0].innerText) +  //в конец массива, поэлементно, добавляются значения из лейбла, и выводятся в виде текста 
//     //         console.log (unfinishedTasksArr[j])
//     //     }
//     // unfinishedTasksArr.push(unfinishedTasks.children[i].getElementsByTagName('label')[0].innerText) +  //в конец массива, поэлементно, добавляются значения из лейбла, и выводятся в виде текста 
//     // console.log (unfinishedTasksArr[i,j])
//      }
    
// asinc init() {
//     const fbData = await apiService.fetchPosts()
//    const posts = TransformService.fbObjectToArray(fbData)
//    const html = posts.map(post => renderPost(post))
//    const content = document.getElementById ('taskslower')

//    content.insertAdjacentHTML('afterbegin', html.join(' '))
//    console.log(fbData)
// }

//function closeTask  () {   //делает задачу отмененной, которая переходит в конец списка
    // var  listItem = this.parentNode   //обращаться к родителю, то есть к li
    // var ul = listItem.parentNode 
    // ul.appendChild(listItem)
    // this.style.backgroundColor = 'red' 
    // closeButton.style.display  === none
    // //ul.appendChild(listItem).innerHTML = `<background color="red"> ${label.innerHTML} </background>`  //перемещение элемента li в конец списка
    
    //console.log('2')
//}

//function finishTask () {   //делает задачу завершенной, которая переходит в начало списка
    // var  item = listItem.childNodes   //обращаться к родителю, то есть к li
    // //  var ul = listItem.parentNode
    // unfinishedTasksArr.unshift(item) 
    //  //ul.insertBefore(node, null)  //удаление из ul элемента li
    // //console.log(item)
//}




