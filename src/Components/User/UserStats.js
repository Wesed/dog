import React from "react";
import Head from "./../Helper/Head";
import useFetch from "./../../Hooks/useFetch";
import { GET_STATS } from "./../../api";
import Loading from "./../Helper/Loading";
import Error from "./../Helper/Error";
import { Link } from "react-router-dom";
const UserStatsGraphs = React.lazy(() => import("./UserStatsGraphs"));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const token = window.localStorage.getItem("token");
      const { url, options } = GET_STATS(token);
      await request(url, options);
    }
    getData();
  }, [request]);

  if (error) return <Error error={error} />;

  if (data && data.length > 0)
    return (
      // so importa o Victory qd clicar em estatisticas
      <React.Suspense fallback={loading && <Loading />}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  else
    return (
      <div className="UserStatsLink">
        <p> Não há nenhuma postagem desse usuário.</p>
        <Link style={{ opacity: 0.8 }} to={"/conta/postar"}>
          Postar uma nova foto
        </Link>
      </div>
    );
};

export default UserStats;
