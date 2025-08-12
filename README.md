# UEFA Champions League Fixture Generator (Web Version)

This is a **JavaScript-based web app** that simulates the new UEFA Champions League league phase fixtures for 36 teams (Swiss model).  
The system dynamically allocates matches according to real competition rules, displays them interactively, and allows filtering by club.

---

## 📌 Features
- **Fixture Generator** – Creates 144 unique matches across 4 matchdays.
- **No Same-League Matches** – Prevents domestic clashes in the league phase.
- **No Duplicate Matches** – Ensures each fixture appears only once.
- **Team Filter** – View fixtures for a selected club.
- **Club Logos** – Each fixture includes official team icons.
- **Interactive UI** – Switch between Teams grid and Fixtures view.

---

## 🏟 Rules (Format Explanation)
This implementation follows the **Swiss model**:
1. **36 Teams** split into **4 pots** of 9 teams each.
2. Each team plays **8 matches** – **2 against teams from each other pot**.
3. **No two teams from the same domestic league** face each other in the league phase.
4. **No duplicate fixtures** – each pair plays only once.
5. Fixtures are allocated across **4 matchdays**.
6. Teams face **different opponents on each matchday**.

---

## 📊 Fixture Allocation Diagram (Swiss Model)

Each team plays against 2 teams from each other pot.  
Connections below show how pots are paired on different matchdays.

![Fixture Allocation Diagram](A_flowchart_diagram_illustrates_the_UEFA_Champions.png)

**Legend:**  
- **Pot1–Pot4** → Groups of 9 teams based on UEFA seeding.  
- **vs** → Fixtures allocated between all teams in the two pots for that matchday.  
- This rotation ensures **each team meets 8 unique opponents**, 2 from each other pot.

---

## 🛠 Functionality Table

| Function | Purpose |
|----------|---------|
| **addmatch(i, t1, t2)** | Adds a match card to the fixtures list with match number and team logos. |
| **clubCheck(st, st2)** | Checks if two clubs are in the same domestic league. |
| **shuffle(arr)** | Randomizes the order of teams in an array. |
| **checkst(S1, S2, st)** | Prevents the same match from being added twice in a matchday. |
| **fixtures(tempSet, pot, Matches, st, i)** | Core recursive allocation logic – assigns matches between two pots while avoiding rule violations. |
| **allocateFixtures(matchday, p1, p2, p3, p4, Matches)** | Calls `fixtures()` multiple times to generate all match pairings for a matchday. |
| **getFixtures(team, Matches)** | Filters matches to only show fixtures involving the selected team. |
| **shuffleSet(set)** | Randomizes the order of a JavaScript `Set`. |
| **main()** | Orchestrates the fixture generation process – shuffles pots, allocates matches for 4 matchdays, and displays them in the UI. |

---

## 📂 Project Structure
```
📁 UCL-Project-Web
 ├── index.html     # Main structure
 ├── styles.css     # Styling
 ├── script.js      # Fixture generation logic
 ├── images/        # Background & assets
 ├── A_flowchart_diagram_illustrates_the_UEFA_Champions.png  # Diagram
```

---

## 🚀 How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/Amilali09/Champions-League-Fixture-web-version.git
   ```
2. Open `index.html` in your browser.

---

## 📩 Contact
**Author:** Syed Amil Ali  
**Email:** aamilakil@gmail.com

---
