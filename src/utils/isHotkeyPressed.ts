import { KeyboardEvent } from "react"

export const isHotkeyPressed = (hotkey: string, e: KeyboardEvent) => {
  const keys = hotkey.split('+')
  
  if (keys.includes('ctrl') && !e.ctrlKey) return
  if (keys.includes('shift') && !e.shiftKey) return
  if (keys.includes('alt') && !e.altKey) return

  const _key = keys.reduce((acc, cur) => {
    if (cur !== 'ctrl' && cur !== 'alt' && cur !== 'shift') {
      acc += cur
    }
    return acc
  }, '')
  
  return !_key || e.key.toLowerCase() === _key
}