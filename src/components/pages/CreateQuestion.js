import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function CreateQuestion() {
  const [Ques,setQues]=useState(" ")
  const [op1,setop1]=useState(" ")
  const [op2,setop2]=useState(" ")
  const [op3,setop3]=useState(" ")
  const [Right,setRight]=useState(" ")

function submit(e){
  e.target.preventDefault();
  
}
  
  return (
   <> 
  
    <div className="main-container">
    
      
      <div className='Inner-container'>
      <Form.Group className="mb-3" controlId="formGroupEmail">
       
        <textarea type="textarea" placeholder="Question" onChange={(e)=> setQues(e.target.value)} />
      </Form.Group>

      </div >

      <div className='Inner-container'>

      <Form>
      <Form.Group className="mb-3" controlId="formGroupPassword">
       
        <Form.Control type="text" placeholder="option1" onChange={(e)=> setop1(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        
        <Form.Control type="text" placeholder="option2" onChange={(e)=> setop2(e.target.value)}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
     
        <Form.Control type="text" placeholder="option3" onChange={(e)=> setop3(e.target.value)}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
       
        <Form.Control type="text" placeholder="Right Answer" onChange={(e)=> setRight(e.target.value)} />
      </Form.Group>
    </Form>
    <div className='d-grid gap-2'> 
    <Button   onClick={submit}>Add Question</Button>

    </div>
   
      </div>
      
    </div>
    
    
    </>
  )
}

export default CreateQuestion