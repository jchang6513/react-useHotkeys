import { KeyboardEvent } from "react"
import { Callback } from "../types"
import { isHotkeyPressed } from "./isHotkeyPressed"

export const hotkeyCallback = (
  hotkey: string, 
  callback: Callback, 
  e: KeyboardEvent
) => {
  if (isHotkeyPressed(hotkey, e)) callback(e)
}