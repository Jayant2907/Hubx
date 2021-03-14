import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button"

import Chart from "./Chart"
const Graph = () => {
    
    const [subData,setSubData]=useState({})
    const [finalData,setFinalData]=useState([])
    const handleChange=(event)=>{
        event.preventDefault()
        setFinalData(...finalData,subData)
        setSubData({})
        document.myform.reset()
    }   
    return (
        <div>
            <Form name="myform">
                <Form.Group >
                    <Form.Label>No. of Invites</Form.Label>
                    <Form.Control type="text"  onChange={(e)=>setSubData({...subData,"invites":e.target.value})} value={subData.invites} placeholder="Enter No. of Invites" />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Duration of Event</Form.Label>
                    <Form.Control type="text" onChange={(e)=>setSubData({...subData,"duration":e.target.value})} value={subData.duration} placeholder="Enter duration of event" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleChange}>
                    Submit
                </Button>
            </Form>
            <Chart data={finalData}/>
            
        </div>
    )
}

export default Graph
