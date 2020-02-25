import React, { useReducer } from 'react';
import { formReducer,  initialState } from '../reducers/formReducer';
import { setField, setStatus, reset, FORM_STATUS } from '../reducers/formReducerActionTypes';

import styles from './form.module.css';

const Form = () => {
    const [state, dispatch] = useReducer(formReducer, initialState);

    const handleStatusChange = (status) => dispatch(setStatus(status));

    const handleReset = () => {
        handleStatusChange(FORM_STATUS.IDLE)
        dispatch(reset);
    }

    const handleSend = (event) => {
        event.preventDefault();
        handleStatusChange(FORM_STATUS.PENDING);

        setTimeout(() => handleStatusChange(FORM_STATUS.SUCCESS), 6000)
    }

    const handleChange = (field) => (event) => dispatch(setField(field, event.target.value))

    if (state.status === FORM_STATUS.SUCCESS) {
        return (
            <div className={styles.success}>
                <p>Message sent successfully!</p>
                <button type="reset" onClick={handleReset} className={styles.button}>Reset</button>
            </div>
        )
    }

    return (
        <>
            {state.status === FORM_STATUS.ERROR && (
                <p className={styles.error}>
                    Something went terribly wrong!
            </p>
            )}
            <form className={`${styles.form} ${state.status === 'PENDING' && styles.pending}`}>
                <label className={styles.label}>
                    Name
               <input className={styles.input} type="text" name="name" value={state.name} onChange={handleChange('name')} />
                </label>
                <label className={styles.label}>
                    Email
               <input className={styles.input} type="email" name="email" value={state.email} onChange={handleChange('email')} />
                </label>
                <label className={styles.label}>
                    Subject
               <input className={styles.input} type="text" name="subject" value={state.subject} onChange={handleChange('subject')} />
                </label>
                <label className={styles.label}>
                    Body
               <textarea className={styles.input} type="text" name="textarea" value={state.textarea} onChange={handleChange('textarea')} />
                </label>
                <button type="button" onClick={handleSend} className={styles.button}>Send</button>
            </form>
        </>
    )
}


export default Form;