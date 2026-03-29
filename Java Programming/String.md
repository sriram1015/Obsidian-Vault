-  String is the type of object that can store a sequence of characters enclosed by doudle quotes and every character is stored in 16 bits.
- A string acts the same as an array of characters
## Ways of Creating a Java String

There are two ways to create a string in Java: 

- String Literal
- Using new Keyword

### *1. String literal (Static Memory)*

To make Java more memory efficient (because no new objects are created if it exists already in the string constant pool). 

*Example:*

> String str = “GeeksforGeeks”;

### **2. Using new keyword (Heap Memory)*

- String s = new String("Welcome");
- In such a case, JVM will create a new string object in normal (non-pool) heap memory and the literal "Welcome" will be placed in the string constant pool. The variable s will refer to the object in the heap (non-pool)

In the given example only one object will be created. Firstly JVM will not find any string object with the value "Welcome" in the string constant pool, so it will create a new object. After that it will find the string with the value "Welcome" in the pool, it will not create a new object but will return the reference to the same instance.

*Example:*

> String str = new String (“GeeksforGeeks”);

## Mutable vs Immutable
-  ![[Pasted image 20251007222005.png]]
- ![[Pasted image 20251007222027.png]]
``` java
String name = "Navin";
```
-  - The value `"Navin"` is **stored in the String Constant Pool (SCP)**.
    
- The variable `name` refers to this string object in the SCP.
```java
name = name + " Reddy";
```
- Since **strings are immutable** in Java, the original `"Navin"` cannot be changed.
    
- Instead, a **new String object** `"Navin Reddy"` is created in the **heap memory** (not in the SCP by default).
    
- The variable `name` now refers to this new string, while `"Navin"` still exists in the pool.

```java
String s1 = "Navin";
String s2 = "Navin";
```

- - Both `s1` and `s2` **point to the same object** in the String Constant Pool.
    
- Java avoids creating duplicate strings in the pool — this is called **string interning**.
    
- This mechanism helps **save memory** and improve performance.

## StringBuffer and StringBuilder

-  StringBuffer is actucaly a string which is mutable were we can change the string.
-  StringBuffer give us a buffer size of 16 bits.
- 