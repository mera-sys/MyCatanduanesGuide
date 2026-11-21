# TaraSaIsla — modular website + Firebase/OpenAI AI planner

## What is preserved
`public/index.html` comes from the supplied 4,086-line website. Its CSS is extracted to `public/css/style.css`, navigation code to `public/js/navigation.js`, and existing site logic to `public/js/app.js`. Existing tourist, owner, admin, maps, bookings, and localStorage flows remain unchanged. `public/js/firebase-ai.js` adds a separate Firebase sign-in for the new AI planner.

## Setup
1. Install Node.js 22 and Firebase CLI (`npm install -g firebase-tools`).
2. Create a Firebase project (Blaze billing plan required for Cloud Functions and external API usage). Enable **Authentication > Email/Password**, **Firestore**, and **Hosting**.
3. In Firebase Console > Project settings > Your apps, create a Web app and paste its Firebase config into `public/js/firebase-config.js`.
4. In this folder run `firebase login`, `firebase use --add` (choose your project), `cd functions`, `npm install`, `cd ..`.
5. Run `firebase functions:secrets:set OPENAI_API_KEY` and enter your OpenAI API key (from platform.openai.com, separately billed).
6. Run `firebase deploy --only hosting,functions,firestore`.
7. In Firestore, create `destinations` documents with fields `published: true`, `name`, `location`, `description`, `category`. Use **numeric string IDs** corresponding to the original destination IDs if you want View Details to open the existing destination modal.
8. Create `businesses` documents with `status: "approved"`, `name`, `municipality`, `description`, `category`. Business IDs must match existing business IDs for View Details to open the original local business modal. Existing localStorage business records do NOT automatically sync to Firestore.
9. Visit the hosted website, click **AI Travel Planner**, create a Firebase email/password account, and generate a sample itinerary.

## Important limitations
- This is an **additive prototype integration**, NOT a complete migration of localStorage accounts, reservations, or admin/owner permissions to Firebase. Firebase AI sign-in is separate from the legacy login. Existing account passwords cannot be migrated securely from localStorage; users must create Firebase accounts.
- The AI only reads curated, approved Firestore catalog data. Firestore rules intentionally block client writes to prevent anyone from approving their own business. Add sample data manually in the Firebase Console until a secure admin publishing workflow is implemented.
- The AI page renders matching cards from Firestore, but opening an existing View Details modal works only when the ID is also present in the original website's local arrays or localStorage.
- A real shared booking system and secure role-based owner/admin dashboard require a subsequent backend migration.
- Do not paste OpenAI secrets into HTML/JS or expose passwords. Firebase web API config is public; the OpenAI API key is secret.
- Add production controls before launch: Firebase App Check enforcement, stronger abuse prevention, verified listings, privacy policy, billing alerts, and human validation of emergency details.
- OpenAI responses can be imperfect. Pricing, availability, routes, and emergency information require verification.
