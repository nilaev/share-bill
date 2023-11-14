import * as React from 'react';
import { useParams } from 'react-router-dom'
import s from './find-group-page.css';

export const FindGroupPage = () => {
  const { id } = useParams();
  
  if (!id) {
    return <div>Страница не найдена</div>
  }
  
  return (
    <div>
      Group id: {id}
    </div>
  );
}
