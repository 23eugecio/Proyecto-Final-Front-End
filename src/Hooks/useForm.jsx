import { useState } from "react";

const useForm = (form_fields) => {
    const [form_values_state, setFormValuesState] = useState(form_fields);

    const handleChangeInputValue = (event) => {
        const input_name = event.target.name;
        const input_value = event.target.value;
        console.log("Input Name:", input_name, "Input Value:", input_value);
        setFormValuesState(
            (prev_form_values_state) => {
                return {
                    ...prev_form_values_state,
                    [input_name]: input_value
                }
            }
        ) 
    }

    return {
        form_values_state,
        handleChangeInputValue
    }
};

export default useForm


/* import { useState } from "react"


const useForm = (form_fields) => {
    const [form_values_state, setFormValuesState] = useState(form_fields);
    const [errors, setErrors] = useState({});
    const handleChangeInputValue = (event) => {
        const input_name = event.target.name;
        const input_value = event.target.value;
        setFormValuesState(
            (prev_form_values_state) => {
                return {
                    ...prev_form_values_state,
                    [input_name]: input_value}
            }
        )
        if(errors[input_name]) {
            setErrors((prev_errors) => {
                return {
                    ...prev_errors,
                    [input_name]: ''
                }
            })
        }
    }
    return {
        form_values_state,
        handleChangeInputValue
    }
} */

/*     const useForm = (form_fields) => {
        const [form_values_state, setFormValues] = useState(form_fields)
        const [errors, setErrors] = useState({})
    
        const handleChangeInputValue = (event) => {
            const { name, value } = event.target
            setFormValues(prev => ({
                ...prev, form_values_state,
                [name]: value
            }))

            if (errors[name]) {
                setErrors(prev => ({
                    ...prev,
                    [name]: ''
                }))
            }
            return {
                form_values_state,
                handleChangeInputValue
            }
        }
    } */
/* export default useForm */