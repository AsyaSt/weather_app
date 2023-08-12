export const GET_CHANGE_THEME = 'GET_CHANGE_THEME';
export const SET_CHANGE_THEME ='SET_CHANGE_THEME';


export const getChangeTheme = () => ({
    type: GET_CHANGE_THEME,
});
export const ChangeTheme = (theme) => {
    localStorage.theme = theme
return {
    type: SET_CHANGE_THEME,
    theme: theme
}
};