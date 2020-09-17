import React from "react";
import styled from "styled-components";


const Form = styled.form`
margin-bottom: 15px;
font-size: 1.2em;
display: flex;
flex-direction: column;
`;

const Label = styled.label`
margin-bottom: 20px;
`;

const Input = styled.input`
margin-left: 2%;
`;

const Button = styled.button`
width: 30%;
height: 50px;
border-radius: 75%;
margin-left: 4%;
`;

class TodoForm extends React.Component {

    constructor(){
        super();
        this.state={
            task: ""
        }
    }

    handleChange = e => {
        this.setState({
            task: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.task);
        this.setState({
            task: ""
        })
    }

    render(){
        return(
        <div>
            <Form>
                <Label htmlFor="task">
                    Add a task:
                    <Input type="text" name="task" id="task" value={this.state.task} onChange={this.handleChange} />
                </Label>
                <Button onClick={this.handleSubmit}>Add Task</Button>
            </Form>
        </div>
        )
    }
}

export default TodoForm;