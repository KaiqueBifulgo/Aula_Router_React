import { useRouteError } from "react-router-dom"

const ErrorPage = () => {

  const error = useRouteError();

  console.error(error);
  return (
    <div>
      <h1>Eita!</h1>
      <p>Ocorreu um problema</p>
      <p>{error.statusText}</p>
      <p>{error.error.message}</p>
    </div>
  )
}

export default ErrorPage