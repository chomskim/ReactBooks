import { useRouteError } from 'react-router-dom';
import { Header } from '../Header';

export function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <Header />
      <div className="text-center p-5 text-xl">
        <h1 className="text-xl text-slate-900">Sorry, an error has occurred</h1>
        {isError(error) && <p className="text-base text-slate-700">{error.statusText}</p>}
      </div>
    </>
  );
}

function isError(error: any): error is { statusText: string } {
  if (error !== undefined) return 'statusText' in error;
  return false;
}
