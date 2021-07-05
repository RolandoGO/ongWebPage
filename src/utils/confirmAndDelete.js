import AlertMessage from "../components/AlertMessage";
import { deleteCategories } from "../services/categoriesService";

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
    onConfirmation: (id) => deleteCategories(id),
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
