import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';

test('should render ExpenseListItem correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});
