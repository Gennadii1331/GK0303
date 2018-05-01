import * as React from 'react';
import { HeaderComponent} from "../HeaderComponent/ContentComponent.jsx"
import { ContentComponent} from "../ContentComponent/ContentComponent.jsx"

import './AppComponent.scss';

export class AppComponent extends React.Component{
    clickHandler(){
        console.log('Test');
    }
    render() {
        return <div className='page' onClick={this.clickHandler}>
        <HeaderComponent/>
        <ContentComponent/>
    </div>
    }
}