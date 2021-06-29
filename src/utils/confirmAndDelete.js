import AlertMessage from "../components/AlertMessage";

function confirmAndDelete(id) {
  AlertMessage('warning', 'Está a punto de eliminar una novedad',
    'Una vez que lo haga no podrá deshacerlo').then(({ value }) => {
      if (value) {
        console.log(`Novedad eliminada con id ${id}`)
        //deleteNews(id) -> this method should make a DELETE request to de API
      }
    })
}

export default confirmAndDelete;