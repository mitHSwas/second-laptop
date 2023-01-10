import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto'>
            <div>
                <h1 className="font-bold text-success px-3 text-3xl md:text-3xl lg:text-4xl my-4 md:my-6 lg:my-8">Question 1: What are the different ways to manage a state in a React application?</h1>
                <div >
                    <p className='px-6 md:px-8 lg:px-8 mb-8'>Once you attempt to manage state across multiple components, things get a bit trickier.
                        You will reach a point in your application where patterns like “lifting state up” and passing callbacks down to update your state from components lead to lots and lots of props.
                        What do you do if you want to update a component’s state from basically anywhere in your app? You turn it into global state.
                        To manage it, however, you should opt for a third-party solution. Many developers are inclined to use built-in React features like the Context API to manage their state.
                        To be clear: the Context API is not a state management solution. It is a way to avoid problems like props drilling (creating a bunch of props in components that don’t need it), but it is only helpful for reading state, not updating it.
                        The reason to not use Context for global state management lies in the way it works. The default behavior for Context is to re-render all children components if the value provided to it as a prop changes.</p>
                </div>
            </div>
            <div>
                <h1 className="font-bold text-success  px-3 text-3xl md:text-3xl lg:text-4xl my-4 md:my-6 lg:my-8">Question 2: What is a unit test? Why should we write unit tests?</h1>
                <div className='px-8 mb-10'>
                    <h3 className='text-2xl md:text-2xl lg:text-3xl font-semibold text-warning my-2'>What is a unit test?</h3>
                    <p className='px-6 md:px-8 lg:px-8'>Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.</p>
                    <h3 className='text-2xl md:text-2xl lg:text-3xl font-semibold text-warning my-2'>Why should we write unit tests?</h3>
                    <p className='px-6 md:px-8 lg:px-8'>Unit tests are usually written in the form of functions and check the value and behavior of these functions in various scenarios. For example, let’s imagine a function for the division of two numbers: the developer decides to follow the TDD approach, first writing a test with the input of values ‘4’ and ‘2’ (4 divided by 2) with ‘2’ expected as the result. Another example: when the divisor is zero, we don’t expect that the function will produce a value—we expect that it will generate an exception. We can expect that the function will notify some component about an attempt to divide by zero. Thus, we test two cases:</p>
                </div>
            </div>
            <div>
                <h1 className="font-bold text-success px-3 text-3xl md:text-3xl lg:text-4xl my-4 md:my-6 lg:my-8">Question 3: How does prototypical inheritance work?</h1>

                <p className='px-6 md:px-8 lg:px-8'>Once you attempt to manage state across multiple components, things get a bit trickier.
                    You will reach a point in your application where patterns like “lifting state up” and passing callbacks down to update your state from components lead to lots and lots of props.
                    What do you do if you want to update a component’s state from basically anywhere in your app? You turn it into global state.
                    To manage it, however, you should opt for a third-party solution. Many developers are inclined to use built-in React features like the Context API to manage their state.
                    To be clear: the Context API is not a state management solution. It is a way to avoid problems like props drilling (creating a bunch of props in components that don’t need it), but it is only helpful for reading state, not updating it.
                    The reason to not use Context for global state management lies in the way it works. The default behavior for Context is to re-render all children components if the value provided to it as a prop changes.</p>
            </div>
            <div className='my-10'>
                <h1 className="font-bold text-success  px-3 text-3xl md:text-3xl lg:text-4xl my-4 md:my-6 lg:my-8">Question 4: React vs. Angular vs. Vue? What are the difference among them?</h1>
                <div className='px-8'>
                    <h3 className='text-2xl md:text-2xl lg:text-3xl font-semibold text-warning my-2'>React</h3>
                    <p className='px-6 md:px-8 lg:px-8'>It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript. In React, you develop your applications by creating reusable components that you can think of as independent Lego blocks.</p>
                    <h3 className='text-2xl md:text-2xl lg:text-3xl font-semibold text-warning my-2'>Angular</h3>
                    <p className='px-6 md:px-8 lg:px-8'>Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.</p>
                    <h3 className='text-3xl font-semibold text-warning my-2'>Vue</h3>
                    <p className='px-6 md:px-8 lg:px-8'>Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;