-  this is keyword which refer to current object

## Constructor
-  A constructor is special block in java that is called while object is created
- its main role is to initialize the object, to set up its internal state , or to assgin default vaules to its attributes.
- This process happens automatically when we use the "new" keyword to create object.

*Characteristics of Constructors:*

- *Same Name as the Class:* A constructor has the same name as the class in which it is defined.
- *No Return Type*: Constructors do not have any return type, not even void. The main purpose of a constructor is to initialize the object, not to return a value.
- *Automatically Called on Object Creation:* When an object of a class is created, the constructor is called automatically to initialize the object’s attributes.
- *Used to Set Initial Values for Object Attributes:* Constructors are primarily used to set the initial state or values of an object’s attributes when it is created.
- *Default Constructor*
```java
class Empolyees{
	public Empolyees(){
		System.out.print("in constructor");
	}
}
class Demo{
	public static void main(String[] args){
		Empolyees emp = new Empolyees();
	}
}
```

## Parameterized Constructor
- A constructor that has parameters.
```java
class Empolyees{
	public Empolyees(String name,int age){
		System.out.print("Name: "+ name +"Age:"+ age);
	}
}
class Demo{
	public static void main(String[] args){
		Empolyees emp = new Empolyees("sriram",21);
	}
}
```

## Constructor Overloading :
-  Constructor allows us to crate multiple constructor by have same class name but with different parameters or no parameters. 
```java
class Empolyees{
	public Empolyees(){
		System.out.print("in constructor");
	}
	public Empolyees(String name,int age){
		System.out.print("Name: "+ name +"Age:"+ age);
	}
}
class Demo{
	public static void main(String[] args){
		Empolyees emp = new Empolyees();
		Empolyees emp = new Empolyees(String name,int age);
	}
}
```