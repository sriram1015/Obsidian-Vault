
-  Before Object-Oriented Programming (OOPs), most programs used a procedural approach, where the focus was on writing step-by-step functions. This made it harder to manage and reuse code in large applications.

To overcome these limitations, Object-Oriented Programming was introduced. Java is built around OOPs, which helps in organizing code using classes and objects.

### Key Features of OOP in Java:

- Structures code into logical units (classes and objects)
- Keeps related data and methods together (encapsulation)
- Makes code modular, reusable and scalable
- Prevents unauthorized access to data
- Follows the DRY (Don’t Repeat Yourself) principle
# Characteristics of an OOP(Object Oriented Programming)****

### 1. Class

A [Class](https://www.geeksforgeeks.org/java/classes-objects-java/) is a user-defined blueprint or prototype from which objects are created. It represents the set of properties or methods that are common to all objects of one type. Using classes, you can create multiple objects with the same behavior instead of writing their code multiple times. In general, class declarations can include these components in order: 

- *Modifiers*: A class can be public or have default access (Refer to [this](https://www.geeksforgeeks.org/java/access-modifiers-for-classes-or-interfaces-in-java/) for details).
- ****Class name:**** The class name should begin with the initial letter capitalized by convention.
- *Body:* The class body is surrounded by braces, { }.

### 2. Object

An [Object](https://www.geeksforgeeks.org/java/object-class-in-java/) is a basic unit of Object-Oriented Programming that represents real-life entities. A typical Java program creates many objects, which as you know, interact by invoking methods. The objects are what perform your code, they are the part of your code visible to the viewer/user. An object mainly consists of: 

- *State:* It is represented by the attributes of an object. It also reflects the properties of an object.
- *Behavior:* It is represented by the methods of an object. It also reflects the response of an object to other objects.
- *Identity*: It is a unique name given to an object that enables it to interact with other objects.
- *Method:* A method is a collection of statements that perform some specific task and return the result to the caller.

``` java

```

### 3.Encapsulation
- The process of binding data together  its related methods in a single class is called Encapsulation.
-  Encapsulation can be achieved by declaring all variable has *private* and  *public method* like **getter and setter method**. 
- ![[Pasted image 20251012115115.png]]
```java
class Employees{
	private int id;
	private String name;
	public void setId(int i){
		id = i;
	}
	public void setName(String n){
		name = n;
	}
	public int getId(){
		return id;
	}
	public String getName(){
		return name;
	}
	
}
class Demo{
	public static void mian(String[] arg){
		Employees emp = new Employees;
		emp.setId(101);
		emp.setName("Sriram");
		System.out.println("Name : " + emp.getName()+:"ID:" + emp.getId());
	}
}
```
