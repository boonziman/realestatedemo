# Images Directory

Place all site images here. Recommended sub-folder structure:

```
images/
├── hero/            ← Full-width hero & background images
├── properties/      ← Property listing photos (exterior, interior, etc.)
├── agents/          ← Agent headshots & portraits
├── logos/           ← Brand logos & icons
└── og-default.jpg   ← Default Open Graph image for social sharing
```

## How to Swap an Image
1. Add your new image file to the appropriate sub-folder above.
2. In the relevant HTML layout file (inside `layouts/`), update the `src` or
   `style="background-image: url(…)"` to point to `/images/your-subfolder/filename.jpg`.
3. Run `hugo server` to preview the change locally.

> **Tip:** For best results, use images that are at least **1920 × 1080 px** for
> hero/background images and **800 × 1000 px** for property cards.
