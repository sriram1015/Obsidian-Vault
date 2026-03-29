-  The static keyword is used for memory management , allowing variable and methods to belong to the class itself rather an individual instance.
-  The users can use static keyword with variable ,methods , bloack and nested classes.
-  The  static keyword is used for a constant variable or a method that is the same for every instance of a class.
### What is a static Keyword in Java?

The static keyword is a *non-access modifier* used for:

- Variables (class-level, shared across instances)
- Methods (called without object creation)
- Blocks (executed once when the class loads)
- Nested Classes (static inner classes)
## Static variable
-  ![[Pasted image 20251009140410.png]]
- ![[Pasted image 20251009140424.png]]
### Explanation of Static vs Instance Variables

In the example, the variable `name` in the `Mobile` class is declared as **static**.

When a variable is declared as **static**, it means:

- The variable **belongs to the class**, not to any specific object.
    
- **All objects** of that class share the same static variable.
    
- If one object changes the value of the static variable, the **updated value is reflected in all other objects**.
-  Static variable can with their class name , not with their object name which we created, we can call with their object we can avoid it.
-  we can access a static varaible with non static functions
```java
class Mobile {
    String model;        // instance variable
    static String name;  // static variable
}

public class Main {
    public static void main(String[] args) {
        Mobile m1 = new Mobile();
        m1.model = "iPhone";
        Mobile.name = "Apple";

        Mobile m2 = new Mobile();
        m2.model = "Galaxy";
        Mobile.name = "Samsung";

        System.out.println(m1.model + " : " + Mobile.name); // iPhone : Samsung
        System.out.println(m2.model + " : " + Mobile.name); // Galaxy : Samsung
    }
}

```

On the other hand, **instance variables** (non-static variables):

- Belong to individual objects.
    
- Each object has its **own copy** of the variable.
    
- Changing the value in one object **does not affect** the value in another.
## Static method:
``` java
class Mobile {
    String model;        // instance variable
    static String name;  // static variable
    public void show(){
	    System.out.println(name + " " + model);
    }
    public static void show1(){
	    System.out.println("in static method");
    }
}

public class Main {
    public static void main(String[] args) {
        Mobile m1 = new Mobile();
        m1.model = "iPhone";
        Mobile.name = "Apple";

        Mobile m2 = new Mobile();
        m2.model = "Galaxy";
        Mobile.name = "Samsung";
        m1.show();
        m2.show();
        MObile.show1();
        
    }
}

```
- we can call a static method directly with the class name not with the object.
- We can use a static variable inside a static method , but we cannot use instance variable / non static variable inside a static method.
- **Why a non static variable cannot be used inside a static methods** because the instance varaible / non static varible is refer with the object that we created with that , so when we call a non static variable java cannot identified to which this variable is mapping with.
-  Has we cannot access the non static variable inside a static method , but we can access then indirect by passing the object reference ti then , 
- For example:
```java
class Mobile {
    String model;        // instance variable
    static String name;  // static variable
    public void show(){
	    System.out.println(name + " " + model);
    }
    public static void show1(Mobile m1){
	    System.out.println(m1.model + " "+ name);
    }
}

public class Main {
    public static void main(String[] args) {
        Mobile m1 = new Mobile();
        m1.model = "iPhone";
        Mobile.name = "Apple";

        Mobile m2 = new Mobile();
        m2.model = "Galaxy";
        Mobile.name = "Samsung";
        m1.show();
        m2.show();
        MObile.show1(m1);
        
    }
}
```
- ***Why do we can static in main method*** , because if main not static has main is the entry point for program so we want to create object the class where main is presented , so when we create a main method has static we doesnt want to create a main method to object reference to the class to invoke java program.
## Static block:
-  Static block is called only once , irespective to how many block we create.
-  When where we create object there are two steps
	 - class load
	 - Object are instantrated
- When where a class loaded then a static block loaded, so class loaded first when static block is executed first.
- If we doesnt even created a object for class then static bloack also not executed.