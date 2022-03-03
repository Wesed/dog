import React from 'react';
import styles from './FeedModal.module.css';
import useFetch from './../../Hooks/useFetch';
import { PHOTOS_GET, PHOTO_GET } from '../../api';
import Error from './../Helper/Error';
import Loading from './../Helper/Loading';
import PhotoContent from './../Photo/PhotoContent';


const FeedModal = ({photo, setModalPhoto}) => {

  const {data, error, loading, request} = useFetch();

  React.useEffect(()=> {
    const {url, options} = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(e) {
    console.log(e.target);
    console.log(e.currentTarget);
    if(e.target === e.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
      FeedModal
    </div>
  )
}

export default FeedModal;