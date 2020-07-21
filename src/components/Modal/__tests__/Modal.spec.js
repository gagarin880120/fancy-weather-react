import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer, { act } from 'react-test-renderer';
import Modal from '../Modal';

describe('Modal', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<Modal />);

      const result = renderer.getRenderOutput();

      expect(result).toMatchSnapshot();
    });
  });

  describe('mount with testRenderer', () => {
    const onClose = jest.fn();
    const testRenderer = TestRenderer.create(
    <Modal
      onClose={onClose}
      language="en"
    />,
    {
      createNodeMock: (element) => {
        return {...element, focus: jest.fn()};
      }
    }
    );

    const button = testRenderer.root.findByType('button')

    describe('Events', () => {
      describe('onKeyDown', () => {
        test('should not call onClose function if key !== Escape', () => {
          act(() => {
            button.props.onKeyDown({ key: 'Enter', code: 'Enter', which: 13 });
          });

          expect(onClose).not.toHaveBeenCalled();
        });

        test('should call onClose function if key === Escape', () => {
          act(() => {
            button.props.onKeyDown({ key: 'Escape', code: 'Escape', which: 27 });
          });

          expect(onClose).toHaveBeenCalled();
        });
      });

      describe('onClick', () => {
        test('should call onClose function', () => {
          act(() => {
            button.props.onClick();
          });

          expect(onClose).toHaveBeenCalled();
        });
      });
    });
  });
});
