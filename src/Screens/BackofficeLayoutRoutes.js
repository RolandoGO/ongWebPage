import React from 'react'
import {HeaderBackOffice} from "../components/HeaderBackOffice"
import {Switch,Route, Redirect,Link} from "react-router-dom"

export default function BackofficeLayoutRoutes() {
    //Note: the Link in the HeaderBackOffice change the url but dosent refresh the page, maby is the Browser router that is call in it and also in the App section.
    return (
        <div>
            
            <HeaderBackOffice/>
               
                {/* <Link to="/backoffice/news/create">News create</Link>
                 */}
            
                <Switch>
                    <Route path="/backoffice/news" exact render={()=><h1>News</h1>}/>
                    <Route path="/backoffice/news/create" exact render={()=><h1>Create News</h1>}/>
                    <Route path="/notfound" exact render={()=><h1>Not Found</h1>}/>
                    <Redirect to="/notfound"/>
                </Switch>
            

        </div>
    )
}
