"use strict";(self.webpackChunkdaku=self.webpackChunkdaku||[]).push([[6599],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Java Exceptions"},o=void 0,l={unversionedId:"SDET/Java/exception",id:"SDET/Java/exception",title:"Java Exceptions",description:"In Java, exceptions are categorized into two main types: checked exceptions and unchecked exceptions. The key difference between them lies in how the compiler enforces handling or declaration.",source:"@site/docs/SDET/Java/exception.md",sourceDirName:"SDET/Java",slug:"/SDET/Java/exception",permalink:"/SDET/Java/exception",draft:!1,tags:[],version:"current",frontMatter:{title:"Java Exceptions"}},p={},c=[{value:"Checked Exceptions:",id:"checked-exceptions",level:3},{value:"Unchecked Exceptions (Runtime Exceptions):",id:"unchecked-exceptions-runtime-exceptions",level:3},{value:"Summary:",id:"summary",level:3},{value:"USer Defined Exceptions",id:"user-defined-exceptions",level:3},{value:"<code>throws</code>:",id:"throws",level:3},{value:"<code>throw</code>:",id:"throw",level:3},{value:"Summary:",id:"summary-1",level:3},{value:"Overriding",id:"overriding",level:3}],s={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In Java, exceptions are categorized into two main types: checked exceptions and unchecked exceptions. The key difference between them lies in how the compiler enforces handling or declaration."),(0,r.kt)("h3",{id:"checked-exceptions"},"Checked Exceptions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Checked by Compiler:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Checked exceptions are checked at compile-time by the Java compiler."),(0,r.kt)("li",{parentName:"ul"},"If a method can potentially throw a checked exception, the compiler enforces that the method must either handle the exception using a ",(0,r.kt)("inlineCode",{parentName:"li"},"try-catch")," block or declare that it throws the exception using the ",(0,r.kt)("inlineCode",{parentName:"li"},"throws")," clause in the method signature."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Examples of Checked Exceptions:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IOException")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SQLException")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FileNotFoundException")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Handling Checked Exceptions:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Developers are required to handle checked exceptions explicitly, either by catching them using a ",(0,r.kt)("inlineCode",{parentName:"li"},"try-catch")," block or by declaring that the method may throw the exception using the ",(0,r.kt)("inlineCode",{parentName:"li"},"throws")," clause.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public void readFile() throws IOException {\n    // code that may throw IOException\n}\n")),(0,r.kt)("h3",{id:"unchecked-exceptions-runtime-exceptions"},"Unchecked Exceptions (Runtime Exceptions):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Not Checked by Compiler:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Unchecked exceptions, also known as runtime exceptions, are not checked at compile-time by the compiler."),(0,r.kt)("li",{parentName:"ul"},"Developers are not required to handle or declare unchecked exceptions explicitly."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Examples of Unchecked Exceptions:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NullPointerException")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ArrayIndexOutOfBoundsException")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ArithmeticException")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Handling Unchecked Exceptions:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"While developers are not obligated to handle unchecked exceptions, it is still considered good practice to catch them in appropriate situations to prevent unexpected program termination.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public void divide(int a, int b) {\n    if (b != 0) {\n        int result = a / b;\n        System.out.println("Result: " + result);\n    } else {\n        System.out.println("Cannot divide by zero!");\n    }\n}\n')),(0,r.kt)("h3",{id:"summary"},"Summary:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Checked Exceptions:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Checked at compile-time."),(0,r.kt)("li",{parentName:"ul"},"Must be handled or declared using ",(0,r.kt)("inlineCode",{parentName:"li"},"throws"),"."),(0,r.kt)("li",{parentName:"ul"},"Typically represents external factors that a program cannot control (e.g., file I/O, network operations)."),(0,r.kt)("li",{parentName:"ul"},"By default, Checked Exceptions are not forwarded in calling chain (propagated)."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Unchecked Exceptions (Runtime Exceptions):")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Not checked at compile-time."),(0,r.kt)("li",{parentName:"ul"},"Handling is optional, but it's still recommended for robust code."),(0,r.kt)("li",{parentName:"ul"},"Often represents programming errors (e.g., null references, array index out of bounds)."),(0,r.kt)("li",{parentName:"ul"},"By default Unchecked Exceptions are forwarded in calling chain (propagated).")))),(0,r.kt)("p",null,"In practice, checked exceptions are used for conditions that a well-behaved application should anticipate and recover from, while unchecked exceptions are often used for unexpected and unrecoverable errors in the program logic."),(0,r.kt)("h3",{id:"user-defined-exceptions"},"USer Defined Exceptions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'    // class represents user-defined exception  \n    class UserDefinedException extends Exception  \n    {  \n        public UserDefinedException(String str)  \n        {  \n            // Calling constructor of parent Exception  \n            super(str);  \n        }  \n    }  \n    // Class that uses above MyException  \n    public class TestThrow3  \n    {  \n        public static void main(String args[])  \n        {  \n            try  \n            {  \n                // throw an object of user defined exception  \n                throw new UserDefinedException("This is user-defined exception");  \n            }  \n            catch (UserDefinedException ude)  \n            {  \n                System.out.println("Caught the exception");  \n                // Print the message from MyException object  \n                System.out.println(ude.getMessage());  \n            }  \n        }  \n    }   \n\n')),(0,r.kt)("p",null,"In Java, ",(0,r.kt)("inlineCode",{parentName:"p"},"throws")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"throw")," are related to exception handling but serve different purposes."),(0,r.kt)("h3",{id:"throws"},(0,r.kt)("inlineCode",{parentName:"h3"},"throws"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Used in Method Signature:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"throws")," is used in the method signature to declare that a method may throw one or more types of exceptions."),(0,r.kt)("li",{parentName:"ul"},"It is part of the method declaration and indicates that the method doesn't handle the specified exceptions itself but allows them to propagate to the calling code."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public void myMethod() throws IOException, SQLException {\n    // method code that may throw IOException or SQLException\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Propagation of Exceptions:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When a method declares ",(0,r.kt)("inlineCode",{parentName:"li"},"throws")," for certain exceptions, it informs the caller that these exceptions might occur, and the caller is responsible for handling or declaring them.")))),(0,r.kt)("h3",{id:"throw"},(0,r.kt)("inlineCode",{parentName:"h3"},"throw"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Used to Explicitly Throw an Exception:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"throw")," is used within the body of a method to explicitly throw an exception."),(0,r.kt)("li",{parentName:"ul"},"It is used when a specific condition occurs, and the program needs to indicate that an exceptional situation has occurred."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public void validateAge(int age) {\n    if (age < 0) {\n        throw new IllegalArgumentException("Age cannot be negative");\n    }\n    // rest of the method code\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Creating and Throwing Custom Exceptions:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Developers can use ",(0,r.kt)("inlineCode",{parentName:"li"},"throw")," to create and throw custom exceptions when the standard Java exceptions don't precisely fit the situation.")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public void myMethod(int value) {\n    if (value < 0) {\n        throw new MyCustomException("Invalid value: " + value);\n    }\n    // rest of the method code\n}\n')))),(0,r.kt)("h3",{id:"summary-1"},"Summary:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"throws"),":")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used in the method signature to declare that a method may throw one or more types of exceptions."),(0,r.kt)("li",{parentName:"ul"},"Indicates that the method does not handle these exceptions and expects the calling code to handle or declare them."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"throw"),":")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used within the body of a method to explicitly throw an exception."),(0,r.kt)("li",{parentName:"ul"},"Indicates that a specific exceptional situation has occurred, and the program needs to handle it.")))),(0,r.kt)("p",null,"In general, ",(0,r.kt)("inlineCode",{parentName:"p"},"throws")," is part of the method declaration, indicating what exceptions might be thrown, while ",(0,r.kt)("inlineCode",{parentName:"p"},"throw")," is used within the method body to actually throw an exception. They work together in the process of exception handling, allowing developers to manage exceptional situations in their code."),(0,r.kt)("h3",{id:"overriding"},"Overriding"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"If the superclass method does not declare an exception\n    If the superclass method does not declare an exception, subclass overridden method cannot declare the checked exception but it can declare unchecked exception.\nIf the superclass method declares an exception\n    If the superclass method declares an exception, subclass overridden method can declare same, subclass exception or no exception but cannot declare parent exception.\n")))}m.isMDXComponent=!0}}]);