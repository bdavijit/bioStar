import React from 'react';

const Blogs = () => {
    return (
          <div>
                <h1 className='text-xl font-bold'>
                      Optimizing performance in a React application
                </h1>
                <p>1. Lazy loading images in React.</p>
                <p>
                      2. Memoizing React components for stop re-renders (Using
                      the useCallback Hook)
                </p>
                <p>3. Try to maximize component usage</p>
                <br></br>
                <br></br>
                <h1 className='text-xl font-bold'>
                      What are the different ways to manage a state in a React
                      application
                </h1>
                <p>1. Manage Local State</p>
                <p>2. Manage Global State </p>
                <p>3. Manage Server State</p>
                <p>4. Manage URL State</p>
                <br></br>
                <br></br>
                <h1 className='text-xl font-bold'>
                      What is a unit test? Why should write unit tests?
                </h1>
                <p>
                      Unit test means testing a part of unit code or components
                      of software.
                </p>
                <h1 className='text-xl font-bold'>
                      Why should write unit tests?
                </h1>
                <p>1. Easily find an error </p>
                <p>2. Reduce Costs</p>
                <p>3. Provides a Documentation</p>
                <p>4. Quality of Code is improve by unit test</p>
                <p>5. Helps us to update a feature</p>
                <br></br>
                <br></br>
                <h1 className='text-xl font-bold'>
                      You have an array of products. Each object has a name,
                      price, description, etc. How will you implement a search
                      to find products by name?
                </h1>
                <p>In this case, I use the filter() method</p>

                <br></br>
                <br></br>
                <h1 className='text-xl font-bold'>Prototypal Inheritance</h1>
                <p>
                      Prototypal Inheritance can inherit the properties and
                      methods of another object. But But not copy every time
                      like others Inheritance.
                </p>

                <br></br>
                <br></br>
          </div>
    );
};

export default Blogs;