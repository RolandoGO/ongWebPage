import * as React from "react";
import { ErrorMessage, Field } from "formik";

const ErrorTooltip = (msg) => <div className="invalid-tooltip mt-1">{msg}</div>;

function InputGroup({ identifier, type = "text", labelText, errors }) {
  return (
    <div className="mb-3 position-relative">
      <label htmlFor={identifier} className="formLabel">
        {labelText}
      </label>
      <Field
        name={identifier}
        type={type}
        className={`form-control ${errors[identifier] && "is-invalid"}`}
      />
      <ErrorMessage name={identifier} render={ErrorTooltip} />
    </div>
  );
}

export default InputGroup;
