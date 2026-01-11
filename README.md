# Fake Mousemove for Microsoft Teams (Tampermonkey)

## Overview

This project is a **Tampermonkey userscript** that periodically dispatches a synthetic `mousemove` event in the browser to prevent Microsoft Teams from setting your status to **Away**.

The script is intentionally simple, lightweight, and runs fully client-side.

---

## Script Details

- **Name:** Fake Mousemove
- **Version:** 1.0
- **Target:** Microsoft Teams Web
- **Interval:** Every 15 seconds
- **Method:** Synthetic `MouseEvent` (`mousemove`)

---

## Requirements

- Modern browser (Chrome, Edge, Firefox, etc.)
- Tampermonkey extension  
  https://www.tampermonkey.net/
- Microsoft Teams running in the browser

---

## Installation

1. Install **Tampermonkey** in your browser.
2. Create a new userscript.
3. Paste the following script into Tampermonkey:

```js
(function() {
  'use strict';
  setInterval(() => {
    const evt = new MouseEvent('mousemove', {
      bubbles: true,
      cancelable: true,
      clientX: 100,
      clientY: 100,
      movementX: 1,
      movementY: 1,
    });
    document.dispatchEvent(evt);
    console.log("Synthetic 'mousemove' event dispatched");
  }, 15000);
})();
```

4. Save the script.
5. Open Microsoft Teams in your browser.
6. Ensure the script is enabled in Tampermonkey.

---

## How It Works

- Every 15 seconds, a synthetic `mousemove` event is dispatched at document level.
- The movement is minimal and invisible.
- Teams detects browser activity and keeps the user status as **Available**.

---

## Configuration

You can adjust the interval by changing:

```js
15000 // milliseconds (15 seconds)
```

Increase or decrease based on your needs.

---

## Disclaimer

- This script is **not affiliated with Microsoft**.
- Usage may violate internal company policies.
- Use at your own risk.
- Intended for educational and personal use.

---

## License

Provided **as-is**.  
Feel free to use, modify, and fork.

