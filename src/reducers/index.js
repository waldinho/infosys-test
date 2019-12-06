const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_EMPLOYEE':
            return { 
                ...state, 
                loading: true,
            }
        case 'GET_COMPANY':
            return { 
                ...state, 
            }
        case 'EMPLOYEE_RECEIVED':
            return { 
                ...state, 
                employee: action.json, 
                loading: false,
            }
        case 'COMPANY_RECEIVED':
            return { 
                ...state, 
                company: action.json, 
            }
        case 'DISPLAY_EMPLOYEE':
            return  {
                ...state,
                lightbox: action.employee,
                displayDetails: true,
            }
        case 'CLOSE_LIGHTBOX':
            return  {
                ...state,
                displayDetails: false,
            }
        default:
            return state
    }
   }
   export default reducer