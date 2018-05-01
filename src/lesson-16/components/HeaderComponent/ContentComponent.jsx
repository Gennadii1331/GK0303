import * as React from 'react';

export class HeaderComponent extends React.Component {
    clickHandler(){
        console.log('Test')
    }
    render(){
        return <header>
            HEADER
        </header>
    }
}