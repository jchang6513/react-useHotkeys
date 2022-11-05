import { KeyboardEvent, useCallback, useEffect } from 'react';
import { Callback, CallbackMap } from './types';
import { hotkeyCallback } from './utils/hotkeyCallback';
import { hotkeyMapCallback } from './utils/hotkeyMapCallback';
import { hotkeysCallback } from './utils/hotkeysCallback';

const useHotkeys = (keys: string | string[], callback: Callback | CallbackMap) => {
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (typeof callback === 'object') {
      hotkeyMapCallback(keys, callback, e)
    } else if (Array.isArray(keys)) {
      hotkeysCallback(keys, callback, e)
    } else {
      hotkeyCallback(keys, callback, e)
    }
  }, [keys, callback])

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown as any)

    return () => window.removeEventListener('keydown', onKeyDown as any)
  }, [onKeyDown])
}

export default useHotkeys
