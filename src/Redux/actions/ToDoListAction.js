import { add_task, change_theme, delete_task, done_task, edit_task, update_task } from "../types/ToDoListType";

export const addTaskAction = (newtask) => ({
    type: add_task,
    newtask
});

export const ChangeThemeAction = (themeId) => ({
    type: change_theme,
    themeId
});
export const DoneTaskAcTion = (taskId) => ({
    type: done_task,
    taskId
});
export const DeletedTaskAction = (taskId) => ({
    type: delete_task,
    taskId
});
export const EditTaskAction = (task) => ({
    type: edit_task,
    task
});
export const UpdateTaskAction = (taskName) => ({
    type: update_task,
    taskName
});
