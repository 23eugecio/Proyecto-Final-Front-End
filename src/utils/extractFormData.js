
export const extractFormData = (form_fields, form_values, form_HTML) => {
    for (let field in form_fields) {
        form_fields[field] = form_values.get(field)
        form_HTML[field].value = form_fields.get(field)
    }
    return form_fields
}
