# KMP
## LPS (Longest Prefix Suffix)

### 1. Definition
LPS = Longest Proper Prefix which is also a Suffix.

- Prefix: Substring starting from the beginning.
- Suffix: Substring ending at the end.
- Proper Prefix: Cannot be the entire string.

Example: `ABAB`

- Prefix: `A`, `AB`, `ABA`
- Suffix: `B`, `AB`, `BAB`
- LPS = `2` (`AB`)

### 2. Variables
- `i`: Current index being processed (starts at 1).
- `len`: Length of the matching prefix and suffix (starts at 0).
- `lps[]`: Stores LPS values for each index.

### 3. LPS Finding Logic

```javascript
while (i < n) {
  if (pattern[i] === pattern[len]) {
    len++;
    lps[i] = len;
    i++;
  } else if (len > 0) {
    len = lps[len - 1];
  } else {
    i++;
  }
}
```

### Three Cases

**1. Characters match**
- Increment `len`.
- Store `len` in `lps[i]`.
- Move `i` forward.

**2. Mismatch and `len > 0`**
- Find the next smaller reusable prefix length using `lps[len - 1]`.
- Do not increment `i`.
- Retry comparison at the same index.

**3. Mismatch and `len === 0`**
- No previous matching information can be reused.
- Move `i` forward.

### 4. Example

Pattern: `AABAAA`

LPS: `[0, 1, 0, 1, 2, 2]`

At index 5:

```javascript
len = 2;

// Mismatch
len = lps[len - 1];

// len = lps[1] = 1
```

Compare the same character again. It matches, so `len` becomes 2.

### 5. Important Points

- `lps[0]` is always `0`.
- LPS stores lengths, not substring values.
- On mismatch, `len` doesn't always become `0`.
- During fallback, `i` remains at the same position.
- `len = lps[len - 1]` preserves reusable matching information.
- Time Complexity: `O(n)`.
- Space Complexity: `O(n)`.




