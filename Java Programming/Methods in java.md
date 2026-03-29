-   Java Methods are blocks of code that perform a specific task. A method allows us to reuse code, improving both efficiency and organization. All methods in Java must belong to a class. Methods are similar to functions and expose the behavior of objects.
## Syntax of a Method:
![[Pasted image 20251007175308.png]]

### Why Do We Break Code into Methods?
Breaking code into separate methods helps improve readability, reusability, and maintainability

- *Reusability:* Write once, use multiple times without repeating code so that code reusability increase.
- *Readability:* Smaller, named methods make the code easier to read and understand.
- *Maintainability:* It’s easier to fix bugs or update code when it's organized into methods.
- *Testing:* Methods can be tested independently, improving code reliability and easier debugging.
## Method Call Stack in Java

Java is an object-oriented and stack-based programming language where methods play a key role in controlling the program's execution flow. When a method is called, Java uses an internal structure known as the call stack to manage execution, variables, and return addresses.

### What is the Call Stack

The call stack is a data structure used by the program during runtime to manage method calls and local variables. It operates in a Last-In-First-Out (LIFO) manner, meaning the last method called is the first one to complete and exit.

### How Are Methods Executed

When a method is called:

- A new stack frame is added to the call stack to store method details.
- The method runs its code.
- After execution, the stack frame is removed, and control goes back to the calling method.

Java automatically manages the call stack using the Java Virtual Machine (JVM).

## Types of Methods in Java

### 1. Predefined Method

Predefined methods are the method that is already defined in the Java class libraries. It is also known as the standard library method or built-in method. For example, *random()* method which is present in the Math class and we can call it using the *ClassName.methodName()* as shown in the below example.

*Example:*

```
Math.random()    // returns random value Math.PI     // return pi value
```


### 2. User-defined Method

The method written by the user or programmer is known as a user-defined method. These methods are modified according to the requirement.

*Example:*

```
sayHello         // user define method created above in the article 
  Greet()  
  setName() 
  ```
  

## ****Different Ways to Create Java Method****

There are two ways to create a method in Java:

*1.*  *Instance Method* Access the instance data using the object name. Declared inside a class.
*2.* *Static Method* Access the static data using class name. Declared inside class with *static* keyword.

## Method Signature

It consists of the method name and a parameter list.

- Number of parameters
- Type of the parameters
- Order of the parameters

Method Signature of the above function:

> max(int x, int y) Number of parameters is 2, Type of parameter is int.

## Naming a Method

In Java language method name is typically a single word that should be a verb in lowercase or a multi-word, that begins with a verb in lowercase followed by an adjective, noun. After the first word, the first letter of each word should be capitalized.

*Rules to Name a Method:*

- Method names must start with a verb in lowercase.
- Multi-word names should follow camelCase format.
- Method names should be unique within a class unless method overloading is allowed in Java.

## Method Overloading:
-  ![[Pasted image 20251007182907.png]]
- when we have like this , where we have calculator class we have *add* and *add1* method which returns int values.
-  When we have like this , it will be difficult to maintain the code , and difficult to remember the method name.
-  Sometime we might pass different parameters like **number of parameters and might be different type of datatypes that we use we can have same number of parameter with different in datatype that we use** , to maintain all this we have a topic called *Method Overloading*.
-  Method Overloading allow us to define multiple method with same name but  different parameters , This might includes
				 - The number of parameters
				 -  Order of parameters
				 -  The Type of parameters
-  This method overloading is also called has ***Compile-Time Polymorphism,Static Polymorphism or Early binding*** because method is call during the compile time to call this method.
- ![[Pasted image 20251007184256.png]]
