import * as React from "react";
import { ErrorMessage, Field } from "formik";

const ErrorTooltip = (msg) => <div className="invalid-tooltip mt-1">{msg}</div>;

const TextField = (props) => {
  const { identifier, type, errors } = props;
  return (
    <Field
      name={identifier}
      type={type}
      className={`form-control ${errors[identifier] && "is-invalid"}`}
    />
  );
};

const TextareaField = (props) => {
  const { identifier, type, errors } = props;
  return (
    <Field
      as="textarea"
      name={identifier}
      type={type}
      className={`form-control ${errors[identifier] && "is-invalid"} textarea`}
    />
  );
};

const SelectField = (props) => {
  const { identifier, type, errors } = props;

  //Replace "categories" with real categories from store
  const categories = [
    { name: "A", id: "1" },
    { name: "B", id: "2" },
    { name: "C", id: "3" },
    { name: "D", id: "4" },
  ];

  const categoriesOptions = () => {
    return categories.map((option) => {
      return (
        <option key={option.id} value={option.value}>
          {option.name}
        </option>
      );
    });
  };

  const options = categoriesOptions();

  return (
    <Field
      as="select"
      name={identifier}
      type={type}
      className={`form-control ${errors[identifier] && "is-invalid"}`}
    >
      <option key={0}>Seleccione una categoría</option>
      {options}
    </Field>
  );
};

const FieldComponent = (props) => {
  const { type, ...rest } = props;
  switch (type) {
    case "textarea":
      return <TextareaField {...rest} />;
    case "select":
      return <SelectField {...rest} />;
    default:
      return <TextField {...rest} />;
  }
};

function InputGroup({ identifier, type, labelText, errors }) {
  return (
    <div className="mb-3 pt-3 position-relative">
      <label htmlFor={identifier} className="formLabel">
        {labelText}
      </label>
      <FieldComponent
        identifier={identifier}
        type={type}
        labelText={labelText}
        errors={errors}
      />
      <ErrorMessage name={identifier} render={ErrorTooltip} />
    </div>
  );
}

export default InputGroup;
