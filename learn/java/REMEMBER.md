
```java
// max value of integer
int max = Integer.MAX_VALUE;

// min value of integer
int min = Integer.MIN_VALUE;

// Get max value
Math.max(v1, v2)

// Get min value
Math.min(v1, v2)

// fill array with a value
Arrays.fill(arr, 10);

// Array sort
int[] arr = [3, 1, 2];
Arrays.sort(arr);

// Array print
System.out.println(Arrays.toString(arr));
```


```java
// Create a HashMap
HashMap<String, Integer> hashMap = new HashMap<>();

// Initialization
Map<String, Integer> mutableMap = new HashMap<>(Map.of("Apple", 10, "Banana", 20));

// Complex object 1
Map<String, List<List<Integer>>> map = new HashMap<>();

map.put("alice", Arrays.asList(
    Arrays.asList(6, 8),
    Arrays.asList(9, 10),
    Arrays.asList(10, 11)
));

// Complex object 2
Map<String, List<Integer[]>> map = new HashMap<>();

map.put("alice", Arrays.asList(
    new Integer[]{6, 8},
    new Integer[]{9, 10},
    new Integer[]{10, 11}
));


// iterate
for (Map.Entry<String, Integer> entry : hashMap.entrySet()) {
  System.out.println(entry.getKey() + " -> " + entry.getValue());
}

// methods
hashMap.clear()
hashMap.clone()
hashMap.containsKey(Object key)
hashMap.containsValue(Object value)
hashMap.get(Object key)
hashMap.isEmpty()
hashMap.put(K key, V value)
hashMap.remove(K key)
hashMap.size()
hashMap.values()
```


```java
// ArrayList
ArrayList<Integer> list = new ArrayList<>();

// Initialization
ArrayList<Integer> list = new ArrayList<>(
    List.of(10, 20, 30)
);

// Iterating
for (int v: list) {}

// Sorting
Collections.sort(list);
Collections.sort(list, Collections.reverseOrder()); 
list.sort(null); // Passing null uses natural ordering
list.sort(Collections.reverseOrder());
list.sort((a, b) -> Integer.compare(a, b));

// mathods
list.add(int index, Object element)
list.add(Object element)
list.clear()
list.clone()
list.contains()
list.get(int index)
list.indexOf(Object element)
list.lastIndexOf(Object element)
list.isEmpty()
list.remove(int index)
list.remove(Object element)
list.set(int index, Object element)
list.size()
list.toArray()
```

```java
// Random

Random rand = new Random();

// Generate random integers in range 0 to 999
int r1 = rand.nextInt(1000);
int r2 = rand.nextInt(1000);
```

```java
// Create a new stack (Legacy)
Stack<Integer> s = new Stack<>();

// Methods
s.empty()
s.peek()
s.pop()
s.push(Object element)
s.search(Object element)

```


```java
// ArrayDeque
ArrayDeque<Integer> d = new ArrayDeque<>();

// Methods
d.add(Object element)
d.addFirst(Object element)
d.addLast(Object element)
d.clear()
d.clone()
d.contains(Object element)
d.getFirst()
d.getLast()
d.isEmpty()
d.peek()
d.poll()
d.pop()
d.removeFirst()
d.removeLast()
d.size()
d.toArray()
```

```java
// Strings
String str = “GeeksforGeeks”;

// creating Java string using a new keyword
String str = new String("Geeks");

// ch to string
String.valueOf(ch)

// Repeat
String repeated = "abc".repeat(3);

// Methods
str.length()
str.charAt(int index)
str.substring(int begin, int end)
str.toLowerCase()
str.toUpperCase()
str.equals(Object obj)
str.contains(CharSequence s)
str.trim()
```

```java
// Sets
Set<String> s = new HashSet<>();

// Iterating
for (String value : h){}

// Methods
s.add(element)
s.remove(element)
s.contains(element)
s.size()
s.isEmpty()
s.clear()
s.toArray()
```