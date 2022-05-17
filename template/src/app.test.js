import { queryByText } from '@testing-library/dom';
import app from './app';

describe('app', () => {
	it('should render a link to the tram-one site', () => {
		const appElement = app();
		const link = queryByText(appElement, 'Learn Tram-One');
		expect(link).toHaveAttribute('href', 'https://tram-one.io');
	});
});
