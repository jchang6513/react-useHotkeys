import { KeyboardEvent, useCallback, useEffect } from 'react';
import { hotkeyCallback } from './utils/hotkeyCallback';
import { hotkeysCallback } from './utils/hotkeysCallback';

const useHotkeys = (key: string | string[], _callback: (e: KeyboardEvent) => void) => {
  const callback = useCallback((e: KeyboardEvent) => {
    if (Array.isArray(key)) {
      hotkeysCallback(key, _callback, e)
    } else {
      hotkeyCallback(key, _callback, e)
    }
  }, [key, _callback])

  useEffect(() => {
    window.addEventListener('keydown', callback as any)

    return () => window.removeEventListener('keydown', callback as any)
  }, [callback])
}

export default useHotkeys