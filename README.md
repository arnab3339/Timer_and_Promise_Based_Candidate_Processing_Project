# Candidate Processing Project

A JavaScript project demonstrating **Asynchronous Programming** using **Timers** and **Promises**. The project simulates a candidate recruitment system where candidate information is processed using timer-based and promise-based operations.

---

## 📌 Project Objective

The objective of this project is to understand and implement JavaScript asynchronous concepts such as:

- setTimeout()
- setInterval()
- clearTimeout()
- clearInterval()
- Promise
- Promise Chaining
- Promise.all()
- Error Handling using catch()
- finally()

---

## 🛠 Technologies Used

- JavaScript (ES6)
- Node.js
- Visual Studio Code

---

## 📂 Project Structure

```
Candidate Processing Project
│
├── Timer_Based_Candidate_Processing_Project.js
├── Promise_Based_Candidate_Processing_Project.js
└── README.md
```

---

# Part A – Timer Based Functions

### 1. announceCandidate()

Displays the candidate's name and email after a specified delay using **setTimeout()**.

---

### 2. scheduleStatusUpdate()

Updates the candidate status after a delay.

Example:

```
pending → reviewed
```

---

### 3. startCandidateCountdown()

Creates a countdown using **setInterval()**.

Example:

```
3
2
1
Candidate review started
```

---

### 4. scheduleCandidateReminders()

Sends reminders to candidates one by one at fixed intervals.

---

### 5. createCancelableReview()

Schedules a review using **setTimeout()** and allows cancellation using **clearTimeout()**.

---

# Part B – Promise Based Functions

### 1. findCandidateById()

Searches a candidate using the candidate ID.

---

### 2. validateCandidateScore()

Checks whether the test score and interview score are valid (0–100).

---

### 3. calculateFinalScore()

Calculates the final score using:

```
Final Score = (Test Score × 0.6) + (Interview Score × 0.4)
```

---

### 4. updateCandidateStatus()

Updates the candidate status only if it is one of the allowed values:

- pending
- reviewed
- shortlisted
- rejected

---

### 5. processCandidate()

Processes a candidate using Promise Chaining.

Steps:

- Find Candidate
- Validate Scores
- Calculate Final Score
- Decide Status

---

### 6. processAllCandidates()

Processes all candidates simultaneously using **Promise.all()**.

---

# Concepts Covered

### Timers

- setTimeout()
- setInterval()
- clearTimeout()
- clearInterval()

### Promises

- Promise
- resolve()
- reject()
- then()
- catch()
- finally()

### Promise Chaining

- Returning Promises
- Sequential execution
- Error propagation

### Promise Combinators

- Promise.all()

---

# Learning Outcomes

After completing this project, you will be able to:

- Understand asynchronous JavaScript.
- Schedule tasks using timers.
- Create and consume Promises.
- Handle asynchronous errors.
- Chain multiple Promises.
- Process multiple asynchronous tasks using Promise.all().

---

# Sample Output

```
Candidate: Aman
Email: aman@example.com

Scores are valid for Aman

{
  id: 1,
  name: "Aman",
  finalScore: 75.6,
  status: "shortlisted"
}

Processing completed
```

---

# Author

**Arnab Mukherjee**

GitHub: https://github.com/arnab3339

---

## License

This project is created for educational and learning purposes.
