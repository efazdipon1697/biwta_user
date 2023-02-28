const initialTab = "hydrographic";

const changeResourceTab = (state = initialTab, action) => {
    switch (action.type) {
        case "CHANGE_RESOURCE_TAB": {
            return action.payload;
        }
        default: return state;
    }
}

export default changeResourceTab;