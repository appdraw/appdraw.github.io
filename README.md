# AppDraw website

Static GitHub Pages site for https://appdraw.app. No build step is required.

## Terms page

`terms/index.html` contains AppDraw-specific Terms of Use, including optional Pro plans, recurring billing, cancellation, refunds, restoration, artwork rights and third-party content. The page is linked from Home, Support and Privacy. It supplements Apple's Standard EULA rather than replacing it with a custom Apple license.

The text is a draft for owner and legal review before publication. Confirm the developer details and that the purchase implementation and actual offers match it, especially restoration and the non-expiring Lifetime Pro entitlement. No prices, trial durations or cross-store purchase sharing are promised.

Publish the website changes before shipping the Android app change that links to `https://appdraw.app/terms/`. Confirm that URL returns the new page rather than a 404. The iOS app retains the direct Standard EULA link; leave the standard license enabled in App Store Connect and include its link in subscription metadata where required.

Sources checked on October 31, 2026:

- [Apple: standard and custom EULAs](https://developer.apple.com/help/app-store-connect/manage-app-information/provide-a-custom-license-agreement/)
- [Apple: subscription information, Schedule 2 section 3.8](https://developer.apple.com/support/terms/apple-developer-program-license-agreement/)
- [Google Play: subscription requirements](https://support.google.com/googleplay/android-developer/answer/12154973?hl=en)
- [Google Play: store terms](https://play.google.com/intl/en_us/about/play-terms/index.html)

Run a local preview from the Flutter repository root:

```sh
python3 -m http.server 8765 --bind 127.0.0.1 --directory tool/website
```

Open http://127.0.0.1:8765/terms/.
