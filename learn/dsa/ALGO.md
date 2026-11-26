## **Knuth-Morris-Pratt (KMP) String Matching Algorithm Notes**
[YouTube](https://youtu.be/V5-7GzOfADQ?si=6kKbg33yo1dV3xm8)

#### **1. Overview & Problem Definition**
* **Goal**: Find whether a **pattern string** of length m exists inside a main **text string** of length n, and identify its starting index.

#### **2. Drawbacks of Naive (Basic) Algorithm**
* **Mechanism**: When a character mismatch occurs, the naive method shifts the pattern right by 1 position and **backtracks** the text pointer I back to the start of the previous attempt plus 1.
* **Issue**: Repeatedly re-checks previously matched characters in the main text string.
* **Time Complexity**: Takes **O(m × n)** time in worst-case scenarios.

#### **3. Core KMP Concept**
* **No Text Backtracking**: The main text pointer I never moves backwards; it advances strictly forward.
* **Pattern Pre-Analysis**: Analyzes the pattern to observe if any prefix of the pattern appears again as a suffix inside the pattern.
* **Smart Shifts**: On a mismatch, KMP uses precomputed prefix information to shift pattern pointer J directly to the next viable matching prefix, skipping redundant comparisons.

#### **4. π (PI) Table / LPS Array**
* **Definition**: A auxiliary lookup table (also called the **Longest Prefix Suffix / LPS** table) built from the pattern.
* **Function**: Maps each index of the pattern to the length of the longest prefix that is also a suffix up to that point.
* **Mismatch Handling**: When characters mismatch at pattern position J, J updates to the value stored in the π table instead of resetting back to index 0.

#### **5. Algorithm Execution Steps**
1. **Initialize**: Set text pointer I and pattern pointer J.
2. **On Match**: Advance both I and J.
3. **On Mismatch**:
   * If J > 0, set J to the value from the π table without advancing I.
   * If J = 0, advance text pointer I by 1.
4. **Completion**: When J reaches the end of the pattern, a full match is confirmed.

#### **6. Time Complexity**
* **π Table Preprocessing**: **O(m)** time.
* **Text Searching**: **O(n)** time.
* **Total Time Complexity**: **O(m + n)**, making KMP significantly more efficient than naive matching.

---

```javascript
// KMP implementation
const text = "ABCDABEDHIABDBEDHUII";
const pattern = "BEDH";

const textLength = text.length;
const patternLength = pattern.length;

const lps = new Array(patternLength).fill(0);

// Build LPS array
let i = 1;
let len = 0;

while (i < patternLength) {
    if (pattern[i] === pattern[len]) {
        lps[i++] = ++len;
    } else if (len > 0) {
        len = lps[len - 1];
    } else {
        i++;
    }
}

// KMP Search
let textIndex = 0;
let patternIndex = 0;

const indexes = [];

while (textIndex < textLength) {
    if (text[textIndex] === pattern[patternIndex]) {
        textIndex++;
        patternIndex++;

        if (patternIndex === patternLength) {
            indexes.push(textIndex - patternLength);
            patternIndex = lps[patternIndex - 1];
        }
    } else if (patternIndex > 0) {
        patternIndex = lps[patternIndex - 1];
    } else {
        textIndex++;
    }
}

console.log(indexes); // [4, 12]
```






