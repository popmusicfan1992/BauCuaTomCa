import { ToDoListDarkTheme } from "../../JSS_StyledComponent/Theme/ToDoListDarkTheme";
import { ToDoListPrimaryTheme } from '../../JSS_StyledComponent/Theme/ToDoListPrimaryTheme';
import { add_task, delete_task, done_task, edit_task, update_task } from '../types/ToDoListType';
import { ToDoListLightTheme } from '../../JSS_StyledComponent/Theme/ToDoListLightTheme';
import { arrThemes } from "../../JSS_StyledComponent/Theme/ThemeManage";
const initialState = {
    themeToDoList: ToDoListLightTheme,
    taskList: [
        { id: 'task-1', taskName: 'task 1', done: false },
        { id: 'task-2', taskName: 'task 2', done: true },
        { id: 'task-3', taskName: 'task 3', done: false },
        { id: 'task-4', taskName: 'task 4', done: true },
    ],
    taskEdit: { id: '', taskName: '', done: '' }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case add_task: {
            if (action.newtask.taskName.trim() === '') {
                alert('Taskname is required');
                return { ...state };
            }
            let taskListUpdate = [ ...state.taskList ];
            let index = taskListUpdate.findIndex(task => task.taskName === action.newtask.taskName);
            if (index !== -1) {
                alert('task name already exist!');
                return { ...state };
            }
            taskListUpdate.push(action.newtask);
            state.taskList = taskListUpdate;
            return { ...state };

        }
        case 'Change_theme': {
            let themes = arrThemes.find(theme => theme.id == action.themeId);

            if (themes) {
                state.themeToDoList = { ...themes.theme };
            }
            return { ...state };
        }
        case done_task: {
            let taskListUpdate = [ ...state.taskList ];
            let index = taskListUpdate.findIndex(task => task.id == action.taskId);
            if (index !== -1) {
                taskListUpdate[ index ].done = true;
            }
            // state.taskList = taskListUpdate;
            // return { ...state };
            //Cach 2
            return { ...state, taskList: taskListUpdate };

        }
        case delete_task: {
            let taskListUpdate = [ ...state.taskList ];
            taskListUpdate = taskListUpdate.filter(task => task.id != action.taskId);
            return { ...state, taskList: taskListUpdate };
        }
        case edit_task: {
            return { ...state, taskEdit: action.task };
        }
        case update_task: {
            let taskEditUpdate = { ...state.taskEdit, taskName: action.taskName };
            let taskListUpdate = [ ...state.taskList ];
            let index = taskListUpdate.findIndex(task => task.id === taskEditUpdate.id);
            if (index !== -1) {
                taskListUpdate[ index ] = taskEditUpdate;
            }
            return { ...state, taskList: taskListUpdate };
        }
        default:
            return { ...state };
    }
};
