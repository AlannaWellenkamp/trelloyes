import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';



describe('List component', () => {
    const cards = [
        { title: 'First card', content: 'lorem ipsum' },
        { title: 'Second card', content: 'lorem ipsum' },
        { title: 'Third card', content: 'lorem ipsum' }
    ];

    it('renders without crashing', () => {
        const cards = [];
        const div = document.createElement('div');
        ReactDOM.render(<List header={'First list'} key={1} cards={cards} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<List header={'First list'} key={1} cards={cards} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });



});