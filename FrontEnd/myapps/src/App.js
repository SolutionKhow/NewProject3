
import React from 'react'
import './App.css'
import GoaList from './components/GoaList'

const App=()=> {
  const cousrseGoals=[
    { id:'cg1', text:'Finish'},
    { id:'cg2', text:'Start'},
    { id:'cg3', text:'FRepeat'}
  ];
  return (
    <div className='goal'>
      <h2></h2>
      <GoaList MyGoals={cousrseGoals} ></GoaList>
    </div>
  )
}

export default App
