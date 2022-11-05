import { KeyboardEvent } from "react"
import { CallbackMap } from "../types"
import { isHotkeyPressed } from "./isHotkeyPressed"

export const hotkeyMapCallback = (
  hotkeys: string | string[],
  callbackMap: CallbackMap,
  e: KeyboardEvent
) => {
  if  (!Array.isArray(hotkeys)) {
    throw new Error('Hotkeys should be an array')
  }

  for (let hotkey of hotkeys) {
    if (isHotkeyPressed(hotkey, e)) {
      if (callbackMap[hotkey]) {
        callbackMap[hotkey](e)
      } else {
        console.warn(`No callback for hotkey: '${hotkey}'`)
      }
    }
  }
}
