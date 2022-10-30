import { KeyboardEvent, KeyboardEventHandler, useCallback, useEffect } from 'react';

const useHotkeys = (key: string, _callback: (e: KeyboardEvent) => void) => {
  const callback = useCallback<KeyboardEventHandler>((e) => {
    const keys = key.split('+')
    
    if (keys.includes('ctrl') && !e.ctrlKey) return
    if (keys.includes('shift') && !e.shiftKey) return
    if (keys.includes('alt') && !e.altKey) return

    const _key = keys.reduce((acc, cur) => {
      if (cur !== 'ctrl' && cur !== 'alt' && cur !== 'shift') {
        acc += cur
      }
      return acc
    }, '')

    if (e.key === _key) {
      console.log(e, e.key, _key)
      _callback(e)
    }
  }, [key, _callback])

  useEffect(() => {
    window.addEventListener('keydown', callback as unknown as EventListenerObject)

    return () => window.removeEventListener('keydown', callback as unknown as EventListener)
  }, [callback])
}

export default useHotkeys