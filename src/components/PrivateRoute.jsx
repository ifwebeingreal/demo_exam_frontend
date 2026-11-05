import userStore from '../store';
import { observer } from 'mobx-react-lite';
import { Navigate } from 'react-router-dom'

function PrivateRouter({ children }) {
    if (userStore.isLoading) {
        return <p>Загрузка...</p>
    }
    if (userStore.user === null) {
        return <Navigate to="/login" replace />
    }
    return (
      children
    )
  }
  
export default observer(PrivateRouter);
  