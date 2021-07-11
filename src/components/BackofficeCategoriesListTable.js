import React, { memo } from "react";
import deleteIcon from "../assets/delete-icon.svg";
import confirmAndDelete from "../utils/confirmAndDelete";

const CONTENT_TYPE = "category";

export const BackofficeCategoriesListTable = memo(({ data, handleEdit }) => {
  const displayData = data.map((category) => {
    return (
      <tr key={category.id}>
        <td>{category.name}</td>
        <td>{category.createdAt}</td>
        <td>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => confirmAndDelete(category.id, CONTENT_TYPE)}
          >
            <img
              src={deleteIcon}
              style={{ height: "20px", width: "20px" }}
            ></img>
          </button>
          <button
            className="btn btn-sm btn-warning m-2"
            onClick={() => handleEdit(category)}
          >
            Edit
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container w-75">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Categories</th>
            <th scope="col">CreatedAt</th>
          </tr>
        </thead>
        <tbody>{displayData}</tbody>
      </table>
    </div>
  );
});
