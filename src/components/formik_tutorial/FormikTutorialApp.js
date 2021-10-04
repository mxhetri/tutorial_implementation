import React from 'react';
import YouTubeForm from "./forms/YouTubeForm";
import {Link, Route, Switch} from "react-router-dom";
import FormikContainer from "./forms/FormikContainer";
import './FormikTutorialApp.css'
import LoginForm from "./forms/LoginForm";

function FormikTutorialApp(props) {
    return (
        <div>
            <div className='formik_tut_list'>
                <ul>
                    <li><Link to='/formik_tut/youtube_form'>Youtube Form</Link></li>
                    <li> <Link to='/formik_tut/register'>Registration</Link></li>
                    <li><Link to='/formik_tut/login_form'>Login</Link></li>
                </ul>


            </div>
            <Switch>
                <Route path='/formik_tut/youtube_form' component={YouTubeForm} exact/>
                <Route path='/formik_tut/register' component={FormikContainer}/>
                <Route path='/formik_tut/login_form' component={LoginForm} exact/>
            </Switch>
        </div>
    );
}

export default FormikTutorialApp;