export const FORM_STATUS = {
    IDLE: 'IDLE',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    PENDING: 'PENDING',
}

export const setField = (field, value) => ({
    type:'updateField',
    field,
    value,
})

export const setStatus = (value) => ({
    type: 'updateStatus',
    value,
})

export const reset = () => ({
    type:'reset'
})