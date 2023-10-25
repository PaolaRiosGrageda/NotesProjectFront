import { Navigate ,Route, Routes } from 'react-router-dom'
import {NotePage} from '../pages/NotePage'

export const JournalRoutes = () => {
    return (
        <Routes>
            <Route path = '/' element = {<NotePage/>}/>
            <Route path = '/*' element = {<Navigate to = '/auth'/>}/>

        </Routes>
    )
}