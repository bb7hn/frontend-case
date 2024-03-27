import React from 'react';
  
  export default function useEventListener(
    eventType:EventType,
    callback:(e:Event)=>void,
    ref?:React.RefObject<HTMLElement>,
  ) {
    const callbackRef = React.useRef(callback);
  
    React.useEffect(() => {
      callbackRef.current = callback;
    }, [callback]);
  
    React.useEffect(() => {
      const element = ref?.current ?? window;
      const handler = (e:Event) => callbackRef.current(e);
      element.addEventListener(eventType, handler);
  
      return () => element.removeEventListener(eventType, handler);
    }, [eventType, ref]);
  }

  type EventType =
  | 'copy'
  | 'cut'
  | 'paste'
  | 'compositionEnd'
  | 'compositionStart'
  | 'compositionUpdate'
  | 'keyDown'
  | 'keyPress'
  | 'keyUp'
  | 'focus'
  | 'blur'
  | 'focusIn'
  | 'focusOut'
  | 'change'
  | 'input'
  | 'invalid'
  | 'submit'
  | 'reset'
  | 'click'
  | 'contextMenu'
  | 'dblClick'
  | 'drag'
  | 'dragEnd'
  | 'dragEnter'
  | 'dragExit'
  | 'dragLeave'
  | 'dragOver'
  | 'dragStart'
  | 'drop'
  | 'mouseDown'
  | 'mouseEnter'
  | 'mouseLeave'
  | 'mouseMove'
  | 'mouseOut'
  | 'mouseOver'
  | 'mouseUp'
  | 'popState'
  | 'select'
  | 'touchCancel'
  | 'touchEnd'
  | 'touchMove'
  | 'touchStart'
  | 'resize'
  | 'scroll'
  | 'wheel'
  | 'abort'
  | 'canPlay'
  | 'canPlayThrough'
  | 'durationChange'
  | 'emptied'
  | 'encrypted'
  | 'ended'
  | 'loadedData'
  | 'loadedMetadata'
  | 'loadStart'
  | 'pause'
  | 'play'
  | 'playing'
  | 'progress'
  | 'rateChange'
  | 'seeked'
  | 'seeking'
  | 'stalled'
  | 'suspend'
  | 'timeUpdate'
  | 'volumeChange'
  | 'waiting'
  | 'load'
  | 'error'
  | 'animationStart'
  | 'animationEnd'
  | 'animationIteration'
  | 'transitionCancel'
  | 'transitionEnd'
  | 'transitionRun'
  | 'transitionStart'
  | 'doubleClick'
  | 'pointerOver'
  | 'pointerEnter'
  | 'pointerDown'
  | 'pointerMove'
  | 'pointerUp'
  | 'pointerCancel'
  | 'pointerOut'
  | 'pointerLeave'
  | 'gotPointerCapture'
  | 'lostPointerCapture'
  | 'offline'
  | 'online';