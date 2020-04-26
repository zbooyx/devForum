import React, {Fragment} from "react";
import spinner from './15.gif'

export default () => (
    <Fragment>
        <img src={spinner}
             style={{width: '200px', margin: 'auto', display: 'block'}}
             alt="LOADING..."/>
    </Fragment>
);
