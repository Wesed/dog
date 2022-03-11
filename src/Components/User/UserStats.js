import React from "react";
import Head from "./../Helper/Head";
import useFetch from "./../../Hooks/useFetch";
import { GET_STATS } from "./../../api";
import Loading from "./../Helper/Loading";
import Error from "./../Helper/Error";
import UserStatsGraphs from './UserStatsGraphs';
import { Link } from 'react-router-dom';

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

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  if(data && data.length > 0)
      return (
        <div>
          <Head title="Estatísticas" />
          <UserStatsGraphs data={data} />
        </div>
      );
    
  else return (
    <div className="UserStatsLink">
      <p> Não há nenhuma postagem desse usuário.</p>
      <Link style={{opacity: .8}} to={'/conta/postar'}> Postar uma nova foto </Link>
    </div>
  )
};

export default UserStats;
