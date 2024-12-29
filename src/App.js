import logo from './logo.svg';
import './App.css';
import { useState , useEffect } from 'react';

function App() {

const [task , setTask] = useState('');
const [ taskList , setTaskList] = useState([]);

useEffect(()=>{
  console.log(taskList);
},[taskList])


  return (
    <div className="App absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] min-h-screen min-w-screen">

     <div className='heading text-center text-3xl font-bold ' >
      To Do List
     </div>

<div className='flex justify-center'>
<div className='mt-20 flex flex-col gap-2 justify-center w-72'>
<input
type='text'
placeholder='Add an item'
className='border-black rounded-md border-2 px-2 text-lg'
onChange={(e) => setTask(e.target.value)}
value={task}
/>

<button className='bg-blue-500 w-28 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded' 
onClick={
  ()=>{

    if(task === '') return;
    
    setTaskList([...taskList , task]);
    setTask('');
  }
}
>
  Add Task
</button>
</div>

</div>


<div className='mt-10 flex flex-col gap-2 items-center justify-center w-full'>
  {
    taskList.map((task, index )=>{
      return (
        <div key={index} className='border-grey-400 w-72 rounded-md border-2 px-2 text-lg font-semibold text-start' >
         {index + 1} - {task}
           </div>
      ) 
    }) 
  }
</div>
    </div>
  );
}

export default App;
