# PASSMAN DEMO


# Portfolio Repository
---

## 1. Password Strength Meter

Utilizes the `zxcvbn` library to gauge password strength. Users receive feedback labels: "UNSTEADY", "FEEBLE", "ACCEPTABLE", or "EXCEPTIONAL".  Additionally, a colored progress bar visually represents the strength score.

- [View Code](https://github.com/tobeyesong/passmandemo/blob/master/frontend/src/components/misc/PasswordMeter.js)
---

![alt text](https://imgur.com/a/Y6JjQc8)

## 2. Notes Management

Enables users to create, view, and manage notes with a title, and caption. 

- [View Code](https://github.com/tobeyesong/passmandemo/blob/master/frontend/src/components/screens/NoteScreen.js)


---

## 3. Passwords Management

Securely store and manage passwords. Each entry includes a URL, username, password, and optional notes. Automatically fetches associated website logos.

- [View Code](https://github.com/tobeyesong/passmandemo/blob/master/frontend/src/components/screens/PasswordScreen.js)

---

## 4. Algolia Integration

Integrates with Algolia for efficient indexing and searching of notes and passwords.

- [View Code for Passwords](https://github.com/tobeyesong/passmandemo/blob/master/backend/controllers/passwordsControllers.js)
- [View Code for Notes](https://github.com/tobeyesong/passmandemo/blob/master/backend/controllers/notesController.js)
