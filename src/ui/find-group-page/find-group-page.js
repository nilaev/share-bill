import * as React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Wrapper } from '../utils/wrapper/wrapper'
import { getGroupById } from '../../api/get-group-by-id'
import s from './find-group-page.module.css'

export const FindGroupPage = () => {
  const { groupId } = useParams()
  const [participants, setParticipants] = useState([])
  
  if (!groupId) {
    return <Wrapper>
      <div className={s.title}>Страница не найдена</div>
    </Wrapper>
  }
  
  getGroupById(groupId).then(res => setParticipants(res.participants))
  
  return (
    <Wrapper>
      <div className={s.root}>
        <p className={s.title}>Выбери себя из списка</p>
        {participants.map(user => {
            return <a className={s.button}
                      href={`/${groupId}/user/${user.id}`}
                      key={user.id}
            >{user.name}</a>
          }
        )}
      </div>
    </Wrapper>
  )
}
