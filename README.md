# 📦 Local Storage in JavaScript – **Short & Desi Guide**

---

## 🔍 What is Local Storage?

Local Storage is like your browser's **locker** or **kitchen drawer** — it lets you **store data in the browser** so it doesn’t disappear even if you close or refresh the page.

- ✅ Stores **key-value pairs**
- ✅ Stays until **you remove it**
- ❌ Only stores **strings**
- ✅ Use `JSON.stringify()` for Arrays & Objects

---

## 🧠 Desi Example:

Imagine your mom writes your tiffin preferences on a sticky note and sticks it in the kitchen drawer with your name.

Next day, she checks that note and gives you your favorite lunch — without asking again.

That's how **localStorage** works. You write once, browser remembers.

---

## 💡 Basic Operations:

| Operation | Code |
|----------|------|
| Add/Update | `localStorage.setItem("name", "Aman")` |
| Get       | `localStorage.getItem("name")` |
| Remove    | `localStorage.removeItem("name")` |
| Clear All | `localStorage.clear()` |

---


## 🧠 Summary (Desi Style)

🗂️ `localStorage.setItem()` – Store  
🔎 `localStorage.getItem()` – Fetch  
🧹 `localStorage.removeItem()` – Remove one  
🧼 `localStorage.clear()` – Clean all  
📜 Use `JSON.stringify()` to store dabbas (arrays/objects)  
📦 Use `JSON.parse()` to open the dabba

