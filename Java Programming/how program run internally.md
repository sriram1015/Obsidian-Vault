
# Computer and Programming Languages  

A **computer** understands only **0s and 1s (binary language)**.  
Programming languages act as a **bridge** between humans and computers, allowing us to write instructions in a readable form. These instructions are then converted into **machine-readable code (binary)** that runs on physical hardware.  

---

## Programming Languages  

Every programming language has a **set of rules (syntax)** that must be followed.  

### Types of Programming Languages  

1. **Low-Level Languages**  
   - Minimal steps, close to hardware.  
   - Faster in execution.  
   - Directly communicates with hardware components.  
   - Example: **Assembly Language**, Operating System code.  

2. **High-Level Languages**  
   - Require many steps before execution.  
   - Easier for humans to read and write.  
   - Not directly communicating with hardware; needs translation.  
   - Examples: **C, C++, Java, Python**, etc.  

---

## Execution Models  

1. **Compilation**  
   - Source code → Compiled → Machine Executable Code (0s and 1s).  
   - Characteristics:  
     - Faster execution.  
     - Platform-dependent (compiled code works only on the target OS).  
     - Source code remains private.  
     - Errors are detected at **compile-time**.  

2. **Interpretation**  
   - Source code → Interpreter → Executes line by line, converting each line into machine code.  
   - Characteristics:  
     - Slower than compilation.  
     - Platform-independent (same code can run anywhere with the interpreter).  
     - Source code must be provided along with execution.  
     - Errors are detected at **runtime**.  

---

## Differences Between Compiler and Interpreter  

| Feature             | Compiler                              | Interpreter                          |
|---------------------|---------------------------------------|--------------------------------------|
| **Speed**           | Faster (whole code compiled at once) | Slower (executes line by line)       |
| **Platform**        | Platform-dependent                   | Platform-independent                 |
| **Source Code**     | Private (not shared)                  | Needed during execution              |
| **Error Detection** | Compile-time errors                   | Runtime errors                       |

---

## Hybrid Languages  

- Source code is first **compiled into bytecode**.  
- Then, an **interpreter/virtual machine** executes the bytecode.  
- Source code remains private (we share **bytecode**, not original source code).  
- Example: **Java** (compiled to bytecode → JVM interprets).  

---
## The Programming Paradigm  

- **Functional Programming**  
  - Entirely based on functions (a set of instructions).  
  - No change in state or mutable data.  
  - Similar to mathematical expressions.  

- **Procedural Programming**  
  - Example: **C Language**.  
  - Executes sequentially from top to bottom.  
  - Supports functions.  
  - Variables can be global or local.  
  - State can be changed during execution.  

- **Object-Oriented Programming (OOPs)**  
  - Based on objects and classes.  
  - Supports features like **encapsulation, inheritance, polymorphism, and abstraction**.  
  - Example: **Java, C++, Python (OOP features)**.  

---

## How a Program Runs Internally  

### Process  
- A **process** is an instance of a running program.  
- When we run a program, the operating system creates a process and maintains it in a **process table**.  
- Each process gets a **virtual address space**, isolated from others.  
  - One process cannot directly read/write another process’s memory.  
- Inside a process, at least one **thread** is created automatically (main thread).  
- **IPC (Inter-Process Communication)** provides ways for processes to communicate (e.g., pipes, sockets) without accessing each other’s memory directly.  

### Thread  
- A **thread** is a lightweight process.  
- The first thread created inside a process is called the **main thread**.  
- Multiple threads can exist within a process.  
- Threads of the same process can **share the process’s memory space**.  

### Memory Management  

A process’s memory is divided into sections:  

1. **Code Segment (Text Segment)**  
   - Contains the program’s machine code.  
   - Read-only memory section.  

2. **Data Segment**  
   - Stores **global and static variables** that are **initialized**.  

3. **BSS (Block Started by Symbol)**  
   - Stores **global and static variables** that are **uninitialized**.  

4. **Heap**  
   - Used for **dynamic memory allocation** (e.g., `malloc` in C, `new` in Java).  
   - Larger and flexible compared to stack.  

5. **Stack**  
   - Follows **Last In, First Out (LIFO)** principle.  
   - Stores function calls, local variables, arguments, and return addresses.  

📌 **Note:**  
- Code, Data Segment, BSS, and Heap → **Process scope** (each process has its own).  
- Stack → **Thread scope** (each thread has its own stack).  

---

## Flowchart and Pseudocode  

### Flowchart  
- A **visual representation** of a program’s flow.  
- Uses standard shapes like:  
  - **Oval** → Start/End  
  - **Rectangle** → Process/Instruction  
  - **Diamond** → Decision (Yes/No)  

**Example Flowcharts:**  
![Flowchart Example](Pasted%20image%2020250911145537.png)  
![Flowchart Example](Pasted%20image%2020250911145712.png)  
![Flowchart Example](Pasted%20image%2020250911145740.png)  
![Flowchart Example](Pasted%20image%2020250911145921.png)  
![Flowchart Example](Pasted%20image%2020250911150051.png)  

---

### Pseudocode  
- **Human-readable** description of program logic.  
- Not actual code, but written in a way that resembles real programming logic.  
- Helps in planning before writing actual code.  

**Examples:**  
![Pseudocode Example](Pasted%20image%2020250911150444.png)  
![Pseudocode Example](Pasted%20image%2020250911150612.png)  
