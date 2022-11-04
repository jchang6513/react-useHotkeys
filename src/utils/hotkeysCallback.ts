import { KeyboardEvent } from "react"
import { isHotkeyPressed } from "./isHotkeyPressed"

export const hotkeysCallback = (
  hotkeys: string[], 
  callback: (e: KeyboardEvent) => void, 
  e: KeyboardEvent
) => {
  for (let hotkey of hotkeys) {
    if (isHotkeyPressed(hotkey, e)) callback(e)
  }
}