const newDataTemplate = [
     {
         title: 'Backlog',
         issues: []
    },
    {
         title: 'Ready',
         issues: []
    },
     {
         title: 'In progress',
         issues: []
    },
    {
         title: 'Finished',
         issues: []
    },
 ]

 export function getData(){
    if(localStorage.getItem("data"))
        return JSON.parse(localStorage.getItem("data"));
    
    localStorage.setItem("data", JSON.stringify(newDataTemplate));
    return newDataTemplate;
 }

 export function setData(value){
     localStorage.setItem("data", JSON.stringify(value));
 }

 export function getTask(id, index){
     const data = JSON.parse(localStorage.getItem("data"))[index];
     return data.issues.find(el => el.id === id);
 }

 export function setDescription(task, index){
     const data = JSON.parse(localStorage.getItem("data"));
     const list = data[index];

     const replacedTask = list.issues.find(el => el.id === task.id);
     const indexTask = list.issues.indexOf(replacedTask);

     data[index].issues.splice(indexTask, 1, task);
     localStorage.setItem("data", JSON.stringify(data));
 }