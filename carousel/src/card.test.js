import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
    test('renders without crashing', () => {
        render(
            <Card
                caption="Test Caption"
                src="https://example.com/test.jpg"
                currNum={1}
                totalNum={3}
            />
        );
    });

    test('matches snapshot', () => {
        const { container } = render(
            <Card
                caption="Test Caption"
                src="https://example.com/test.jpg"
                currNum={1}
                totalNum={3}
            />
        );
        expect(container).toMatchSnapshot();
    });
});
