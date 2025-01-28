import { Route,Routes } from 'react-router-dom';
import { lazy, Suspense } from "react";
import MainLayout from "../../pages/Layout";
import { Facebook } from "react-content-loader";
import CustomErrorBoundaryUI from '../ErrorBoundary/CustomErrorBoundary';
const Home=lazy(()=>import("../../pages/Home"));
const CoinDetailsPage=lazy(()=>import("../../pages/CoinDetailsPage"));

function Routing(){
return (
<CustomErrorBoundaryUI>
<Routes>
    <Route path="/"element={<MainLayout/>}>
    <Route index element={
    <Suspense fallback={<Facebook/>}>
    <Home/>
</Suspense>
}/>
    <Route path="/details/:coinId" element={
        <Suspense fallback={<Facebook/>}>
             <CoinDetailsPage/>
        </Suspense>
        }/>
    </Route>
</Routes>
</CustomErrorBoundaryUI>
)
}
export default Routing;


