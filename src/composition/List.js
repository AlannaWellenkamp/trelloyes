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
                        <Card title={card.title}
                            id={card.id}
                            key={card.id}
                            content={card.content}
                            onDelete={this.props.onDelete}
                        />)}
                    <button
                        type="button"
                        className="List-add-button"
                        onClick={() => this.props.onAdd(this.props.id)}
                    >
                        + Add Random Card
                    </button>
                </div>
            </section>
        )
    }
}

export default List;