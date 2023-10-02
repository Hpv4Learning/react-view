import { useMachine } from '@xstate/react'
import React from 'react'
import { newsMachine } from '../machine'
import { FlatList, View } from 'react-native'
import { Article } from './Article'

export const NewsSection = () => {
    const [{context}] = useMachine(newsMachine)
  return (
    <FlatList
    data={context.news}
    renderItem={({item}) => <Article {...item} />}
    keyExtractor={({source:{id}}) => id}
    horizontal
    ItemSeparatorComponent={() => <View style={{width: 10}}/>}

    />
  )
}