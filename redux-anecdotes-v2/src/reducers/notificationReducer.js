const notificationReducer = (state = '', action) => {
  switch (action.type) {
   case 'SET_NOTIFICATION':
     return action.notification
   case 'CLEAR':
    return state = ''
   default:
     return state
   }
}

export const notificationChange = (notification) => {
  return {
    type: 'SET_NOTIFICATION',
    notification
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR'
  }
}

export default notificationReducer
