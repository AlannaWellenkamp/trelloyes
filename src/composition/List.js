import React from 'react';
import './List.css';
import Card from './Card';


class List extends React.Component {
    render() {
        return (
            <section className='List'>
                <header className='List-header'>
                    <h2>{this.props.header}</h2>
                </header>
                <div className='List-cards'>
                    {this.props.cards.map((card) =>
                        <Card title={card.title} key={card.id} content={card.content} />)}
                    <button type="button" class="List-add-button">
                        + Add Random Card
                    </button>
                </div>
            </section>
        )
    }
}

export default List;