window.onload = ()=>{
const tasks = document.querySelector('.tasks');
const add_task_btn = document.querySelector('.add_task');
const user_task = document.querySelector('.task');

add_task_btn.addEventListener('click',addTask);

const colors = ['alert-primary','alert-secondary','alert-success','alert-danger','alert-info','alert-warning','alert-dark'];

function addTask(){
    let task_text = user_task.value;

    let node = document.createElement('div');
    node.classList.add('alert', `${generateClr()}`, 'alert-dismissible', 'fade', 'show', 'mt-2');
    let task_msg = document.createTextNode(`${task_text}`);
    let btn = document.createElement('button');
    let btn_span = document.createElement('span');

    btn.classList.add('close');
    btn.setAttribute("type","button")
    btn.setAttribute("data-dismiss","alert");
    btn.setAttribute("aria-label","Close");
    btn.appendChild(btn_span);
    btn_span.setAttribute("aria-hidden","true");
    btn_span.innerHTML = '&times;';
    node.appendChild(task_msg);
    node.appendChild(btn);


    
    if(task_text == ''){
        alert('Task Cannot Be Empty');
        return;
    }

    tasks.appendChild(node);
}


function generateClr(){
    let random = Math.floor(Math.random()*colors.length);
    return colors[random];
}


}