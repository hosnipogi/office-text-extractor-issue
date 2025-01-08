"use client";

import { action } from "./action";

export function Button() {
  return (
    <button
      onClick={async () => {
        const result = await action();
        console.log(result);
      }}
    >
      CLICK ME!!
    </button>
  );
}
