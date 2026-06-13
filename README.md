# Facebook Auto Unfollow

Automatically unfollows accounts from your Facebook Following page.

## Features

* Auto unfollow
* Auto counting
* Auto scrolling
* Batch limit

## Usage

1. Go to:
   https://www.facebook.com/YourUserName/following

2. Open Developer Tools.

   * Windows: F12 or Ctrl + Shift + J
   * Mac: Cmd + Option + J

3. Open the Console tab.

4. Paste the script.

5. Press Enter.

## Limit

```javascript
const targetLimit = 100;
```

Change the number to set how many accounts to unfollow before stopping.

## Notes

* Run only on the Facebook Following page.
* Stops when the target limit is reached.
* Facebook UI updates may break the script.
