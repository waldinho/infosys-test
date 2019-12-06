export const getEmployee = () => ({
    type: 'GET_EMPLOYEE',
})

export const getCompany = () => ({
    type: 'GET_COMPANY',
})

export const displayEmployee = (employee) => ({
    type: 'DISPLAY_EMPLOYEE',
    employee,
})

export const closeLightbox = (employee) => ({
    type: 'CLOSE_LIGHTBOX',
})
