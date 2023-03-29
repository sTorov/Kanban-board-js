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
    
    localStorage.setItem("data", JSON.stringify(newDataTemplate))
    return newDataTemplate;
 }

 export function setData(value){
     localStorage.setItem("data", JSON.stringify(value))
 }