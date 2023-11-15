import * as React from 'react'
import { useEffect, useState } from 'react'
import { Wrapper } from '../utils/wrapper/wrapper'
import { useParams } from 'react-router-dom'
import { getGroupId } from '../../api/get-group-id'
import s from './payment-page.module.css'

export const PaymentPage = () => {
  const { groupId, userId } = useParams()
  const [bill, setBill] = useState([])
  const [payerInfo, setPayerInfo] = useState({})
  
  getGroupId(groupId).then(res => setBill(res.bill))
  useEffect(() => {
    if (bill[0]) {
      for (let i = 0; i < bill.length; i++) {
        if (bill[i] && bill[i]?.payerId.toString() === userId) {
          setPayerInfo(bill[i])
        }
      }
    }
  }, [bill])
  
  return <Wrapper>
    <div className={s.root}>
      <p className={s.title}>{`Ваш долг ${payerInfo?.totalPrice} руб.`}</p>
    </div>
  </Wrapper>
}
