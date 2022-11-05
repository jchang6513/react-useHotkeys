import { KeyboardEvent } from "react"
import { Callback } from "../types"
import { isHotkeyPressed } from "./isHotkeyPressed"

export const hotkeysCallback = (
  hotkeys: string[], 
  callback: Callback, 
  e: KeyboardEvent
) => {
  for (let hotkey of hotkeys) {
    if (isHotkeyPressed(hotkey, e)) callback(e)
  }
}