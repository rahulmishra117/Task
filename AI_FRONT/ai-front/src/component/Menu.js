import React, {useState,useEffect, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import APIHelper from "../APIHelper";
import {
  Nav,
  Form,
  FormControl,
  Button,
  Navbar,
  Row,
  Container,
  Col,
  Card,
  CardColumns,
} from "react-bootstrap";

function Menu () {
  // Set the state for the app 
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    const fetchTaskAndSetTasks = async () => {
      const tasks = await APIHelper.getAllTasks();
      setTasks(tasks);
    };
    fetchTaskAndSetTasks();
  }, []);

  // Create the task that are added
  const createTask = async e => {
    e.preventDefault();
    if (!task) {
      alert("please enter something");
      return;
    }
    if (tasks.some(({ task1 }) => task1 === task)) {
      alert(`Task: ${task} already exists`);
      return;
    }
    const newTask = await APIHelper.createTask(task);
    console.log(newTask);
    setTasks([...tasks, newTask]);
  };

  // Just delete the task
  const deleteTask = async (e, id) => {
    try {
      e.stopPropagation();
      await APIHelper.deleteTask(id);
      setTasks(tasks.filter(({ _id: i }) => id !== i));
    } catch (err) {}
  };

  // Update the task..
  const updateTask = async (e, id) => {
    e.stopPropagation();
    const payload = {completed: !tasks.find(task => task._id === id).completed}
    const updatedTask  = await APIHelper.updateTask(id, payload);
    setTasks(tasks.map((task)=> task._id === id ? updatedTask: task));
    
  };
  const clerwindow = ()=> {
    alert("Total count 5");
    return ;
  }


    return (
      <div>
        <Container>
          <Row>
            <Col>
              <div>
                <Form className="task-form">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>TASK</Form.Label>
                    {/*Call that method in the box*/}
                    <Form.Control type="text" placeholder="Enter Task" 
                    value={task}
                    onChange={({target}) => setTask(target.value)}
                    
                    />
                  </Form.Group>

                  <Button className="btton" variant="primary" type="submit"
                  onClick={createTask}
                  >
                    ADD
                  </Button>
                  <Button className="btton" variant="primary" 
                  
                  >
                    UPDATE
                  </Button>
                  <Button onClick={clerwindow} className="btton" variant="primary" type="submit">
                    COUNT
                  </Button>
                </Form>
              </div>
            </Col>
            <Col>
              <div>
                <Card className="task-form">
                  <Card.Header>ALL TASK</Card.Header>
                  <Card.Body>
                    <Card.Title>ADDED,UPDETED,COUNTED</Card.Title>
                    
                    <Card.Text>
                    <ul>
                    {/* etrate the map for the task..*/}
                    {tasks.length ? tasks.map(({_id,task,completed },i)=>(
                    <li key={i} 
                    onClick={e => updateTask(e,_id)}
                    className={completed ? "completed":""}>

                    {task} 
                    
                    <button onClick={e => deleteTask(e, _id)}>X</button>
                    </li>
                    )):<p>TASK SPACE IS EMPTY(</p>
                  }
                    </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  
}
export default Menu;
