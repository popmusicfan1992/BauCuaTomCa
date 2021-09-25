import React, { Component } from 'react';

import { ThemeProvider } from 'styled-components';
import { Container } from '../../ComponentsToDoList/Container';
import { ToDoListDarkTheme } from '../../Theme/ToDoListDarkTheme';
import { Dropdown } from '../../ComponentsToDoList/Dropdown';
import { Heading1, Heading2, Heading3, Heading4, Heading5 } from '../../ComponentsToDoList/Heading';
import { TextField } from '../../ComponentsToDoList/TextField';
import { Button } from '../../ComponentsToDoList/Button';
import { Table, Thead, Tbody, Tr, Td, Th } from '../../ComponentsToDoList/Table';
import { connect } from 'react-redux';
import { addTaskAction, DeletedTaskAction, DoneTaskAcTion, EditTaskAction, UpdateTaskAction } from '../../../Redux/actions/ToDoListAction';
import { arrThemes } from '../../Theme/ThemeManage';
import { ChangeThemeAction } from '../../../Redux/actions/ToDoListAction';
import { update_task } from '../../../Redux/types/ToDoListType';
class Todolist extends Component {

    state = {
        taskName: '',
        disabled: true
    };
    renderTaskToDo = () => {
        //CACH 1
        // return this.props.taskList.map((task, index) => {
        //     if (task.done) {
        //         return <Tr key={index}>
        //             <Th>{task.taskName}</Th>
        //             <Th className='text-right'>
        //                 <Button><i className='fa fa-edit'></i></Button>
        //                 <Button><i className='fa fa-check'></i></Button>
        //                 <Button><i className='fa fa-trash'></i></Button>
        //             </Th>

        //         </Tr>;
        //     }
        // });
        //CACH 2
        return this.props.taskList.filter(task => !task.done).map((task, index) => {
            return <Tr key={index}>
                <Th>{task.taskName}</Th>
                <Th className='text-right'>
                    <Button onClick={() => {
                        this.setState({
                            disabled: false
                        }, () => {
                            this.props.dispatch(EditTaskAction(task));
                        });

                    }}><i className='fa fa-edit'></i></Button>
                    <Button onClick={() => {
                        this.props.dispatch(DoneTaskAcTion(task.id));
                    }}><i className='fa fa-check'></i></Button>
                    <Button onClick={() => {
                        this.props.dispatch(DeletedTaskAction(task.id));
                    }}><i className='fa fa-trash'></i></Button>
                </Th>

            </Tr>;
        });
    };
    renderTaskCompelete = () => {
        return this.props.taskList.filter(task => task.done).map((task, index) => {
            return <Tr key={index}>
                <Th>{task.taskName}</Th>
                <Th className='text-right'>
                    <Button onClick={() => {
                        this.props.dispatch(DeletedTaskAction(task.id));
                    }}><i className='fa fa-trash'></i></Button>
                </Th>

            </Tr>;
        });
    };
    renderSelectThemes = () => {
        return arrThemes.map((theme, index) => {
            return <option key={index} value={theme.id}>{theme.name}</option>;
        });
    };

    //Life cycle tĩnh không truy xuất được con trỏ this
    static getDerivedStateFromProps(newProps, currentState) {

    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.taskEdit.id !== this.props.taskEdit.id) {
            this.setState({
                taskName: this.props.taskEdit.taskName
            });
        }
    }
    render() {
        return (
            <ThemeProvider theme={this.props.themeToDoList}>
                <Container className='w-50'>
                    <Dropdown onChange={(e) => {
                        let { value } = e.target;
                        this.props.dispatch(ChangeThemeAction(value));

                    }}>
                        {this.renderSelectThemes()}
                    </Dropdown>
                    <Heading3>To do list</Heading3>
                    <TextField label='task name' value={this.state.taskName} className='w-50' onChange={(e) => {
                        this.setState({
                            taskName: e.target.value
                        });

                    }}></TextField>
                    <Button className='ml-2' onClick={() => {
                        //Lay thong tin nguoi dung nhap vao
                        let { taskName } = this.state;
                        //tao 1 object task
                        let task = {
                            id: "task-" + parseInt((this.props.taskList.length + 1)),
                            taskName: taskName,
                            done: false
                        };
                        console.log(task);
                        //gui len redux de xu ly
                        this.props.dispatch(addTaskAction(task));
                    }}> <i className='fa fa-plus'></i> Add task </Button>
                    {
                        this.state.disabled ? <Button disabled className='ml-2' onClick={() => {
                            this.props.dispatch(UpdateTaskAction(this.state.taskName));
                        }}> <i className='fa fa-upload'></i> Update task </Button> :
                            <Button className='ml-2' onClick={() => {
                                this.props.dispatch(UpdateTaskAction(this.state.taskName));
                            }}> <i className='fa fa-upload'></i> Update task </Button>
                    }

                    <hr></hr>
                    <Heading3>Task to do</Heading3>
                    <Table>
                        <Thead>
                            {this.renderTaskToDo()}
                        </Thead>
                    </Table>
                    <hr></hr>
                    <Heading3>Task Complete</Heading3>
                    <Table>
                        <Thead>
                            {this.renderTaskCompelete()}
                        </Thead>
                    </Table>
                </Container>
            </ThemeProvider>
        );
    }

}

const mapStateToProps = state => {
    return {
        themeToDoList: state.ToDoListReducer.themeToDoList,
        taskList: state.ToDoListReducer.taskList,
        taskEdit: state.ToDoListReducer.taskEdit
    };
};

export default connect(mapStateToProps)(Todolist);