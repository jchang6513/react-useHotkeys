import { KeyboardEvent } from 'react';

export type Callback = (e: KeyboardEvent) => void

export type CallbackMap = Record<string, Callback>
