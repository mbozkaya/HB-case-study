import { mount, render, shallow } from 'enzyme';
import React from 'react';
import Modal from './Modal';

describe('Modal should ', () => {

    const onCancel = jest.fn();
    const onClose = jest.fn();
    const onSuccess = jest.fn();
    const title = 'title';
    const content = 'content';
    let isOpen = false;
    const renderedModal = (isOpen = true) => {

        return shallow(<Modal
            content={content}
            isOpen={isOpen}
            onCancel={onCancel}
            onClose={onClose}
            onSuccess={onSuccess}
            title={title}
        />)
    }

    it('be rendered successfull', () => {
        const modal = renderedModal();
        expect(modal.length).toEqual(1);
    });

    it('trigger onsuccess when click success button ', () => {
        const wrapper = mount(<Modal
            content={content}
            isOpen={isOpen}
            onCancel={onCancel}
            onClose={onClose}
            onSuccess={onSuccess}
            title={title}
        />);

        wrapper.find('.success').simulate('click');

        expect(onSuccess).toHaveBeenCalled();
    });

    it('trigger oncancel when click cancel button ', () => {
        const wrapper = mount(<Modal
            content={content}
            isOpen={isOpen}
            onCancel={onCancel}
            onClose={onClose}
            onSuccess={onSuccess}
            title={title}
        />);

        wrapper.find('.cancel').simulate('click');

        expect(onCancel).toHaveBeenCalled();
    });

    it('trigger onclose when click close button ', () => {
        const wrapper = mount(<Modal
            content={content}
            isOpen={isOpen}
            onCancel={onCancel}
            onClose={onClose}
            onSuccess={onSuccess}
            title={title}
        />);

        wrapper.find('.modal-close').simulate('click');

        expect(onClose).toHaveBeenCalled();

    });

    it('add modal-open class when modal active', () => {
        isOpen = true;
        const wrapper = shallow(<Modal
            content={content}
            isOpen={isOpen}
            onCancel={onCancel}
            onClose={onClose}
            onSuccess={onSuccess}
            title={title}
        />);

        expect(wrapper.find('.modal-open').length).toBe(1);
    })
})