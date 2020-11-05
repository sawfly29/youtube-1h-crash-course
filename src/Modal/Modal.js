import React from 'react';
import './Modal.css';
//пример на основе классового подхода


export default class Modal extends React.Component {
state = {
    isOpen: false
}

    render() {
        return (
            <React.Fragment>
            <button onClick={() => this.setState({isOpen: true})}> Open modal</button>
            {this.state.isOpen && (<div className='modal'> 
                    <div className='modal-body'>
                    <h1>This is modal window!</h1>
                    <p>Yeah, it's cool!</p>
                    <button onClick={() => this.setState({isOpen: false}) }>close me</button>
                </div>
            </div>)}
                
               
            </React.Fragment>
        )
    }

}
//Чтобы не добавлять корневых элементов и не сильно модифицировать  Dom-дерево, 
//воспользуемся React.Fragment

//если стейт тру, то покажем вот это все окно. Запись страшная, но лаконичная