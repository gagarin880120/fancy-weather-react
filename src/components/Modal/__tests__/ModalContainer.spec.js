import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { ModalContainer, mapStateToProps, mapDispatchToProps } from '../ModalContainer';
import { setIsModalOpen, getDefaultAddress } from '../../../redux/actions';

jest.mock('../../../redux/actions', () => ({
  setIsModalOpen : jest.fn(),
  getDefaultAddress : jest.fn(),
}))

describe('ModalContainer', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<ModalContainer />);

      const result = renderer.getRenderOutput();

      expect(result).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
    test('should return right value', () => {
      const initialState = {
        language: 'en',
      }

      expect(mapStateToProps(initialState)).toEqual({
        language: 'en',
      })
    });
  });

  describe('mapDispatchToProps', () => {
    afterEach(() => {
      jest.clearAllMocks();
    })

    test('onMapMove should dispatch setIsModalOpen action', () => {
      const dispatch = jest.fn();
      const { onClose } = mapDispatchToProps(dispatch);

      onClose();

      expect(setIsModalOpen).toHaveBeenCalled();
      expect(getDefaultAddress).toHaveBeenCalled();
    });
  });
});
