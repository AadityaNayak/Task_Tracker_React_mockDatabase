import React from 'react'
import { useState } from 'react'



function AddTask(props) {

    const [text, setText] = useState('')
    const [Day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e)=>{
        e.preventDefault()

        if(!text){
            alert('Please add a task')
            return
        }

        props.onAdd({ text, Day, reminder})

        setText('')
        setDay('')
        setReminder('')
    }


  return (
    <form className = "add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label> Task </label>
            <input type="text" placeholder='Add Task' value={text} onChange = {(e)=>{setText(e.target.value)}}/>
        </div>
        <div className="form-control">
            <label> Day and Time </label>
            <input type="text" placeholder='Add Day and Time' value={Day} onChange = {(e)=>{setDay(e.target.value)}}/>
        </div>
        <div className="form-control from-control-check">
            <label> Set Reminder </label>
            <input type="checkbox" 
            checked = {reminder}
            value={text} 
            onChange = {(e)=>{setReminder(e.currentTarget.checked)}}
            />
        </div>
        <input type="submit" value="Save Task" className='btn btn-block'/>
    </form>
  )
}

export default AddTask