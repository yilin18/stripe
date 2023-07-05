import {
    FormInputLabel,
    Input,
    Group,
} from "./form-input.styles"
const FormInput = ({label, ...input}) => {
    return(
        <Group>
            <Input className="form-input" {...input}/>
            {label && (
                <FormInputLabel shrink={input.value.length}>
                    {label}
                </FormInputLabel>
            )}
        </Group>
    )
}

export default FormInput;