import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer, { act } from 'react-test-renderer';
import SearchField from '../SearchField';

describe('SearchField', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<SearchField />);

      const result = renderer.getRenderOutput();

      expect(result).toMatchSnapshot();
    });
  });

  describe('SpeechRecognition', () => {
    const mockSpeechRecognition = jest.fn();
    const start = jest.fn();
    const onresult  = jest.fn();

    mockSpeechRecognition.mockReturnValue({
      start: start,
      onresult : onresult
    });

    window.SpeechRecognition = mockSpeechRecognition;
  });

  describe('Events', () => {
    describe('Input events', () => {
      const onSearch = jest.fn();

      const testRenderer = TestRenderer.create(
        <SearchField
          onSearch={onSearch}
        />
      );

      const input = testRenderer.root.findByProps({ type: 'search' });

      test('onChange should change input\'s value', () => {
        act(() => {
          input.props.onChange({ target: { value: 'minsk' } });
        });

        expect(input.props.value).toEqual('minsk');
      });

      describe('onKeyDown', () => {
        test('should not call onSearch function if keycode !== Enter', () => {
          act(() => {
            input.props.onKeyDown({ key: 's', code: 'KeyS', which: 83 });
          });

          expect(onSearch).not.toHaveBeenCalled();
        });

        test('should not call onSearch function if keycode === Enter, but input don\'t have value', () => {
          act(() => {
            input.props.onChange({ target: { value: '' } });
          });

          act(() => {
            input.props.onKeyDown({ key: 'Enter', code: 'Enter', which: 13 });
          });

          expect(onSearch).not.toHaveBeenCalled();
        });

        test('should call onSearch if keycode === Enter and input have value', () => {
          act(() => {
            input.props.onChange({ target: { value: 'minsk' } });
          });

          act(() => {
            input.props.onKeyDown({ key: 'Enter', code: 'Enter', which: 13 });
          });

          expect(onSearch).toHaveBeenCalled();
        });
      });

    });

    describe('voiceButton events', () => {
      const mockSpeechRecognition = jest.fn();
      const start = jest.fn();
      const onresult  = jest.fn();

      mockSpeechRecognition.mockReturnValue({
        start: start,
        onresult : onresult,
      });

      window.SpeechRecognition = null;
      window.webkitSpeechRecognition = mockSpeechRecognition;

      const recognition = new window.webkitSpeechRecognition;

      const onSearch = jest.fn();

      const testRenderer = TestRenderer.create(
        <SearchField
          onSearch={onSearch}
        />
      );

      const button = testRenderer.root.findByProps({ id: 'voiceButton' });

      describe('onClick', () => {
        test('should call onSearch', () => {
          act(() => {
            button.props.onClick();
          });

          act(() => {
            recognition.onresult({results: ['Minsk']});
          });

          expect(onSearch).toHaveBeenCalled();
        });
      });
    });

    describe('searchButton events', () => {
      const onSearch = jest.fn();

      const testRenderer = TestRenderer.create(
        <SearchField
          onSearch={onSearch}
        />
      );

      const input = testRenderer.root.findByProps({ type: 'search' });
      const button = testRenderer.root.findByProps({ id: 'searchButton' });
      describe('onClick', () => {
        test('if input don\'t have value, should not call onSearch function', () => {
          act(() => {
            button.props.onClick();
          });

          expect(onSearch).not.toHaveBeenCalled();
        });

        test('if input have value, should call onSearch function', () => {
          act(() => {
            input.props.onChange({ target: { value: 'minsk' } });
          });

          act(() => {
            button.props.onClick();
          });

          expect(onSearch).toHaveBeenCalled();
        });
      });
    });
  });
});
