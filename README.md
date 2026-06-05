# CBM Hub

The internal onboarding & resource dashboard for the **Sapphire United — CBM Estate & Trust** team.

A single place for new (and existing) employees to find:

- 👋 A warm welcome & leadership message
- 📣 News & announcements (latest items also appear on the home page)
- 💎 Our mission, vision and values
- ✅ An interactive onboarding checklist (progress saved in the browser)
- 📋 Standard Operating Procedures (SOPs)
- 🔗 Tools & useful links
- 👥 Key contacts — who to ask for what
- ❓ FAQ

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build      # output goes to /dist
npm run preview    # preview the production build
```

## ✏️ Editing the content (no coding needed)

**Almost everything you'll want to change lives in one file:**

```
src/data/content.ts
```

Open it and replace the placeholder text, contacts and links. In particular:

- Swap every `url: "#"` for a real link to your SOP / document / tool.
- Replace `[Name]` and `email: "#"` in the contacts list with real people.
- Update the welcome message, mission, vision and values to match your wording.
- Post a new announcement by adding an entry to the top of the `announcements` array.

The design updates automatically — you don't need to touch any other file.

### Changing brand colours

Brand colours (the navy + gold theme) are defined in `tailwind.config.ts`
under `colors.brand` and `colors.gold`. Adjust them to match Sapphire
United's brand.

## Tech stack

Vite · React · TypeScript · Tailwind CSS · React Router · lucide-react icons.
