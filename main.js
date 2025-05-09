const addBtn = document.getElementById('addBtn');

//add event to add task button
addBtn.addEventListener('click', addTask);

//define empty array for all tasks
var allTasks = [];
//define index of task
var counter = 0;
//add task to your taskList
function addTask() {
  //get value from input (user's task)
  var taskInput = document.getElementById("taskInput");
  var task = taskInput.value;
  //check if it empty/space
  if (task !== "" && task !== " ") {
    //add task(object) to all tasks array
    allTasks.push({
      id: counter,
      name: task,
      done: false
    });
    //increse index for the next task
    counter++;
    //empty input field
    taskInput.value = "";
    //finally call displyTaskList function to display the list of tasks
    displyTaskList();
  }
}
//disply your taskList
function displyTaskList() {
  var ulForTaskList = document.getElementById("taskList");
  ulForTaskList.innerHTML = "";
  for (var task of allTasks) {
      var li = document.createElement("li");
      //for each task we create li contain task name and two buttons done, delete
      li.innerHTML = `<div class="doneORno${task.id}">${task.name}</div> 
        <div><button class="done-btn done-btn${task.id}" onclick="doneTask(${task.id})">Done</button>
        <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button></div>`;
      
      //add li to ul in each time
      ulForTaskList.appendChild(li);
  }
  for(var task of allTasks){
    const done = document.querySelector(`.doneORno${task.id}`);
    const doneBtn = document.querySelector(`.done-btn${task.id}`);
      if(task.done === true){
        done.classList.add("done");
        doneBtn.textContent="Undo";
      }
  }
  checkAllTasksDone();
}
//change value of done if click to done button 
function doneTask(index) {
  const doneBtn = document.querySelector(`.done-btn${index}`);
  const doneORno = document.querySelector(`.doneORno${index}`);
  for(let task of allTasks){
    if(task.id == index){
      if (task.done === false) {
        task.done= true;
        doneORno.classList.add("done");
        doneBtn.textContent="Undo";
      } else {
        task.done= false;
        doneBtn.textContent="Done";
        doneORno.classList.remove("done");
      }
    }
  }
  checkAllTasksDone();
}
//to delete task
function deleteTask(index) {
  allTasks = allTasks.filter(task => task.id !== index);
  displyTaskList();
}
//
function checkAllTasksDone(){
  //this valiable like flag to check if all tasks done or no
  var allDone = true;
  for(const task of allTasks){
    //check each item in array if done value false to change allDone value
    if (task.done === false) {
      allDone = false;
    }
  }
  //after loop for all array if allDone still true this is mean that if allTasks array has items, all items done .so check it length
  if (allDone && allTasks.length > 0) {
    console.log("All tasks done!");
  }
}





/*//select add button, task input, task list
const addBtn = document.getElementById('addBtn');
var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");

//add event to add task button
addBtn.addEventListener('click', addTask);

//function to disply task
function addTask() {
  //remove any space from input text
  const taskText = taskInput.value.trim();
  //check if input empty
  if (taskText === '') return;

  //create li for each task
  const li = document.createElement('li');

  //put task name and done, delete buttons in li
  li.innerHTML = `<div class="doneORno">${taskText}</div> 
    <div><button class="done-btn">Done</button>
    <button class="delete-btn">Delete</button></div>`;

  //select done and delete buttons
  const doneBtn = li.querySelector(".done-btn");
  const deleteBtn = li.querySelector(".delete-btn");
  const doneORno = li.querySelector(".doneORno");

  //add events to done and delete buttons
  doneBtn.addEventListener("click",doneTask);
  deleteBtn.addEventListener("click", (e) => deleteTask(e));
  let done= false;
  //mark done on click
  function doneTask(){
    if(done){
      doneBtn.textContent="Done";
    }
    else{
      doneBtn.textContent="Undo";
    }
    doneORno.classList.toggle('done')
    done= !done;
    checkAllTasksDone();
  }
  //delete task
  function deleteTask(e){
    e.stopPropagation();
    li.remove();
    checkAllTasksDone();
  }
  //add li(task) to ul(task list)
  taskList.appendChild(li);
  //empty input field
  taskInput.value = '';
}
//check if all tasks done
function checkAllTasksDone(){
  const tasks = document.querySelectorAll('#taskList li');
  const doneTasks = document.querySelectorAll('#taskList li .done');
  if (tasks.length > 0 && tasks.length === doneTasks.length) {
    console.log("All tasks done!");
  }
}*/