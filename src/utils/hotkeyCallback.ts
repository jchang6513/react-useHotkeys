import { KeyboardEvent } from "react"
import { isHotkeyPressed } from "./isHotkeyPressed"

export const hotkeyCallback = (
  hotkey: string, 
  callback: (e: KeyboardEvent) => void, 
  e: KeyboardEvent
) => {
  if (isHotkeyPressed(hotkey, e)) callback(e)
}