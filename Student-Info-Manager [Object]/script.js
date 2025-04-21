// ✅ Save info to localStorage
function saveInfo() {
    const name = document.getElementById("name").value;
    const stdClass = document.getElementById("stdClass").value;
  
    localStorage.setItem("studentName", name);
    localStorage.setItem("studentClass", stdClass);
  
    alert("✅ Info Saved! Ab refresh karo ya check karo.");
  }
  
  // 🔍 Load info from localStorage
  function loadInfo() {
    const name = localStorage.getItem("studentName");
    const stdClass = localStorage.getItem("studentClass");
  
    if (name && stdClass) {
      document.getElementById("output").innerText =
        `👋 Hello ${name} from class ${stdClass}`;
    } else {
      document.getElementById("output").innerText =
        "⚠️ No info found. Please save it first!";
    }
  }
  
  // ✏️ Update Info (reuse save)
  function updateInfo() {
    saveInfo();
    alert("✏️ Info Updated Successfully!");
  }
  
  // ❌ Remove class only
  function removeClass() {
    localStorage.removeItem("studentClass");
    alert("📦 Class removed! Name is still there.");
  }
  
  // 🧹 Clear all info
  function clearAll() {
    localStorage.clear();
    alert("🧹 All data cleared!");
    document.getElementById("output").innerText = "";
  }
  