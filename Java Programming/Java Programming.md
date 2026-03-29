# Why Java is Famous?  
Java became popular because of its **multiple features** that support **enterprise applications, mobile apps, and web development**. Its **platform independence, object-oriented nature, security, and scalability** make it a leading language in the software industry.

---

## History of Java  
- Java was created in **1995** by **Sun Microsystems**, led by **James Gosling**.  
- Later, **Oracle acquired Sun Microsystems**, and now the **Java trademark belongs to Oracle**.

---

## Java Development Kit (JDK)  
- **JDK (Java Development Kit)** is a software development environment used for building Java applications, applets, and components.  
- It provides tools for **writing, compiling, debugging, and running** Java programs.  
- **Java IDEs (Integrated Development Environments):**
  - **VS Code** → lightweight editor.  
  - **Eclipse** and **IntelliJ IDEA** → powerful IDEs for large projects.  
- To run Java programs, we need a **compiler**, which comes with the JDK.  
- We often use **Java 17 (LTS – Long Term Support)** for stability and support.  
- When you save a Java program, you must save it with the extension **`.java`**.

---

## First Code in Java  

Let’s write the classic **“Hello World”** program in Java:

```java
// MyFirstProgram.java
public class MyFirstProgram {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```
---

**How java works:**
	# How Java Works

- On our machine, we have something called the **JVM (Java Virtual Machine)**.  
- By default, when we say Java is *platform independent*, it’s because **any OS with a JVM installed can run Java applications**.  

---

## JVM, OS, and Hardware
- **JVM runs on top of the OS**, and the OS runs on the **hardware** (laptop, desktop, phone, etc.).  
- The main task of the JVM is to **run Java bytecode**.  
- **Java code is not directly executed by the JVM**. Instead:
  - We first write Java code (`.java` file).
  - The **Java compiler (javac)** converts the code into **bytecode** (`.class` file).
  - The JVM then reads and executes this bytecode.

---

## Platform Independence
- Java is **platform independent** (same code can run on any OS).  
- JVM itself is **platform dependent** (there’s a JVM version for Windows, Linux, macOS, etc.).  
- This is why Java follows the principle:  
  **WORA – Write Once, Run Anywhere.**

---

## The `main` Method
- Even if we have **100 Java files**, we must specify **which one is the entry point**.  
- The entry point must have the **`main` method** with this exact signature:  

```java
public static void main(String[] args)
```

# How Java Works (Short & Clear)

## 1. Entry Point
- JVM looks for the **`main` method**:
  ```java
  public static void main(String[] args)
```
-   Without this signature → JVM won’t know where to start.
-  Everything in Java must be inside a **class**.
---
## 2. Compilation vs Execution

- **Compilation (by javac)**
		*javac FileName.java*
→  Produces **bytecode** → `FileName.class`
    
- **Execution (by JVM)**
		*java FileName* 
→ JVM executes the bytecode.
---
## 3. JDK, JRE, JVM

- **JVM** → Runs bytecode.
- **JRE** → JVM + libraries.
- **JDK** → JRE + JVM + tools (compiler, debugger, etc.).
---
## 4. Developer vs User

- **Developer** → needs **JDK** (write + compile + run).
- **User** → only needs **JRE + JVM** (just run).

---
## 5.Java Execution Flow
Source Code (.java) 
       ↓ (compiled by javac)
Bytecode (.class) 
       ↓ (executed by JVM)
Java Virtual Machine (JVM) 
       ↓ (runs on OS & Hardware)
Output

![[Pasted image 20250925223648.png]]

---

# Stack and Heap in java
-  what is there inside a JVM.
		- in Jvm we can have into two parts
			-  *Stack memory* 
			- *Heap memory*
		-  Basically the stack has key and values
		- ![[Pasted image 20251007185455.png]]
		- ![[Pasted image 20251007185541.png]]
		- ![[Pasted image 20251007190222.png]]
		-  object will store in heap memory , in heap the object will be created and that created object will have two columns one is to store instance variable not local variable because local varaible are part of stack , this object will have it own address, and another we have methods in it , but actuall execution is in stack memory.
		-  And the address of the object will be stored in stack memory 