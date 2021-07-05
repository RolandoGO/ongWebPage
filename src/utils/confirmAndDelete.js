import AlertMessage from "../components/AlertMessage";

const contentConfiguration = {
  news: {
    titleText: "una novedad",
    onConfirmation: (id) => {
      console.log(`Novedad eliminada con id ${id}`);
      // deleteNews(id) -> this method should make a DELETE request to de API
    },
  },
  category: {
    titleText: "una categoría",
    onConfirmation: (id) => {
      console.log(`Categoría eliminada con id ${id}`);
      // deleteCategory(id) -> this method should make a DELETE request to de API
    },
  },
};

function confirmAndDelete(id, contentType) {
  const { titleText, onConfirmation } = contentConfiguration[contentType];

  AlertMessage(
    "warning",
    `Está a punto de eliminar ${titleText}`,
    "Una vez que lo haga no podrá deshacerlo"
  ).then(({ value }) => {
    if (value) {
      onConfirmation(id);
    }
  });
}

export default confirmAndDelete;
