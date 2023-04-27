import { FormInputLabel, Input, Group } from "./form-input.styles.jsx";
const FormInput = ({ label, ...optherProps }) => {
  return (
    <Group>
      <Input {...optherProps} />
      {label && (
        <FormInputLabel shrink={optherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};
export default FormInput;
