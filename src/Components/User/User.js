import React from 'react'
import { Route, Routes } from 'react-router-dom';
import UserHeader from './UserHeader';
import Feed from './../Feed/Feed';
import UserPhotoPost from './../Feed/UserPhotoPost';
import UserStats from './../Feed/UserStats';
import { UserContext } from './../../UserContext';
import NotFound from './../NotFound';


const User = () => {
  const {data} = React.useContext(UserContext);
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />}/>
        <Route path="/estatisticas" element={<UserStats />}/>
        <Route path="/postar" element={<UserPhotoPost />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      </section>
  )
}

export default User;