import React from "react"
import { Button, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useAppDispatch, useAppSelector } from "../../../core/store/root-store/RootStore"
import { setUser } from "../../../core/store/user-store/UserStore"


const Home = () => {
  const { UserStore } = useAppSelector((state) => state)
  const dispatch = useAppDispatch()
  return (
    <SafeAreaView>
      <Text>{UserStore.name}</Text>
      <Button
        title="Set Name"
        onPress={() => {
          dispatch(setUser({
            name: 'Zidane Adhitya',
          }))
        }}
      />
    </SafeAreaView>
  )
}

export default Home