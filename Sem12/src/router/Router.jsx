
import {browserRouter as Router, Routes, Route} from 'react-router-dom'
function Router () {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
          
            <Route path="*" element={<NotFound />} />
        </Routes>
    )    
}
export default Router;