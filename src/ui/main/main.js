import * as React from 'react'
import s from './main.module.css'
import { Wrapper } from '../utils/wrapper/wrapper'

export const Main = () => {
  return (
    <Wrapper>
      <div className={s.root}>
        <a href={'/new'}>Разделить чек</a>
        <a href={'/find'}>Оплатить чек</a>
      </div>
    </Wrapper>
  )
}
