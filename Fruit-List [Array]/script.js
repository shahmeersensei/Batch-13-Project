// Add fruit to localStorage array
function addFruit() {
    const fruit = document.getElementById("fruitInput").value.trim();
    if (!fruit) return alert("Please enter a fruit!");
  
    // Get existing array or empty
    let fruits = JSON.parse(localStorage.getItem("fruits")) || [];
  
    fruits.push(fruit); // Add new fruit
  
    localStorage.setItem("fruits", JSON.stringify(fruits)); // Save back
    document.getElementById("fruitInput").value = ""; // Clear input
    alert("Fruit added successfully!");
  }
  
  // Show fruits from localStorage
  function showFruits() {
    const fruits = JSON.parse(localStorage.getItem("fruits")) || [];
    const list = document.getElementById("fruitList");
  
    list.innerHTML = ""; // Clear previous
  
    fruits.forEach((fruit) => {
      const li = document.createElement("li");
      li.textContent = fruit;
      list.appendChild(li);
    });
  }
  
  // Clear all fruits
  function clearFruits() {
    localStorage.removeItem("fruits");
    document.getElementById("fruitList").innerHTML = "";
    alert("Fruits cleared!");
  }
  