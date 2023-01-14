import React from 'react'
import { Table as AntTable } from 'antd'
import { useDispatch } from 'react-redux'
import { getPoints } from '../reducers/PointsSlice'

const Table = () => {
   const dispatch = useDispatch()
   const columns = [
      {
         title: 'Номер заявки',
         dataIndex: 'numberOfApplication',
         key: 'name',
      },
      {
         title: 'Координаты от lat',
         dataIndex: 'pointsFromLat',
         key: 'name',
      },
      {
         title: 'Координаты от lng',
         dataIndex: 'pointsFromLng',
         key: 'age',
      },
      {
         title: 'Координаты до lat',
         dataIndex: 'pointsToLat',
         key: 'address',
      },
      {
         title: 'Координаты до lng',
         dataIndex: 'pointsToLng',
         key: 'address',
      },
   ]
   const data = [
      {
         key: '1',
         numberOfApplication: '1',
         pointsFromLat: '59.84660399',
         pointsFromLng: '30.29496392',
         pointsToLat: '59.82934196',
         pointsToLng: '30.42423701',
      },
      {
         key: '2',
         numberOfApplication: '2',
         pointsFromLat: '59.82934196',
         pointsFromLng: '30.42423701',
         pointsToLat: '59.82761295',
         pointsToLng: '30.41705607',
      },
      {
         key: '3',
         numberOfApplication: '3',
         pointsFromLat: '59.83567701',
         pointsFromLng: '30.38064206',
         pointsToLat: '59.84660399',
         pointsToLng: '30.29496392',
      },
      {
         key: '4',
         numberOfApplication: '4',
         pointsFromLat: '59.84660399',
         pointsFromLng: '30.29496392',
         pointsToLat: '59.82761295',
         pointsToLng: '30.41705607',
      },
      {
         key: '5',
         numberOfApplication: '5',
         pointsFromLat: '59.83567701',
         pointsFromLng: '30.38064206',
         pointsToLat: '59.84660399',
         pointsToLng: '30.29496392',
      }
   ]
   return (
      <AntTable onRow={(record) => {
         return {
            onClick: event => {
               dispatch(getPoints(`${record.pointsFromLng},${record.pointsFromLat};${record.pointsToLng},${record.pointsToLat}`))
            },
         }
      }} columns={columns} dataSource={data} />
   )
}

export default Table