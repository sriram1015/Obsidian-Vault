## Variables in Java
-  Strongly typed Language what means is what data we to store  a number , a float , a string 

## Data Types:
- *Primitive datatype* 
		-  Integer -> **byte,short,int,long**
		-  Float  -> **double,float**
		-  Character
		-  Boolean ->**True or False**
		**Integer**
		- int -> *4 bytes*
		- long->*8 bytes*
		- short ->*2 bytes*
		- byte -> *1 bytes* -> -2^7 to 2^7 -1-> -128 to 127
		-  when were we declear a long we should have l at last to specify it is long , EX: long l =5857l;
		**Float**
		-  float->*4 bytes*
		-  double ->*8 bytes*
		-  float a = 5.6f;
		- double d=5.6; ->  (default becuase if we have a number like 126.5677... if have preshisan like this we can many like this , but in float we can have limited preshisan  )
		**Character**
		- char -> *2 bytes* it uses UNICODE , we should assign value for char in a single cots ' '.
		-  i other program we have for char with 1 bytes but in java char with 2 bytes because in c program it uses ACSII values but in java it uses UNICODE it is like all the values , symbols etc..
		**Boolean**
		-  it use only true or false not 0s or 1s .
	## Literals
## Type Conversion and Casting:
-  we can change type of the variable or we can assign a value to a variable 
   **For example:**
   ```java
   int a =278;
   byte b=127;
   b=a; // this will not work beacuase the range of byte is from -128 to 127, so the value of int is 278 will not be assign to byte.
   a=b; // this will work 
   // what if if we really want to store the value of value of int to byte.
   int a =278;
   byte b=12; // here what the compiler will tell you that what might the value of a but i cannot store the value of a (int) in b (byte)  
   b=(byte)a; // now to compiler you can say that we are going to convert the vaule a (int) to byte this concept is called **casting** , This basically a conversion but we are going it expictly we doing it, whenever we do expictly conversion it is called casting.
   a=b; // when we say expictly then there will impictly where we are going to store value on byte into int , this **conversion**. 
   byte b=127;
   int a=257;
   b=(byte)a; // when we apply the bigger value to byte ranges out then it uses modulo opertors. 257 % 256; =1;
   float f = 5.6f;
   int x =(int)f; // x=5 
   ```
   