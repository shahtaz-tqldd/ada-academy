import React from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';

const Blogs = () => {
  return (
    <div className='container question-container'>
      <h1>Questions Answering Section</h1>
      {/* question 1 */}
      <div className='question'>
        <h2>1. What is cors?</h2>
        <p>cors comes from the abbreviation of Cross-Origin Resource Sharing. Generally cors are required when we fetch the data from a server side to the client side. Client side of the application doen't get the permission if cors are not provided from the server. So cors are like the bridge between server and the client and it gives a permission to the client to get the data.</p>
      </div>

      {/* question 2 */}
      <div className='question'>
        <h2>2. Why do we use firebase? What other options are there to implement authentication?</h2>
        <p>Firebase is owned by Google and we use this platform to store user data and other information. Firebase provides a database and it also provides a lot of fuctionality besides. Login Sign Up functionality are the basic and most important service that fiirebase provides. Also we can host our website in the firebase at free of cost. But a bigger project wouldn't be a good idea to get hosted in the firebase.</p>
        <div>
          <p>Though Firebase is the most popular but there are other altrenative of firebase</p>
          <ul>
            <li>Back4up</li>
            <li>Parse</li>
            <li>AWS Amplify</li>
            <li>Backendless</li>
          </ul>
        </div>
      </div>

      {/* question 3 */}
      <div className='question'>
        <h2>3. How does the private route work?</h2>
        <p>Private route works with a conditon preset. Generally private routes works according to the user information. Private route takes the protected route inside it as a children component. If there was a user presents or can be accessed only then it loads the data inside the private route, otherwise it redirects the route to another path where precondition like login or sign in of the user can be fulfilled. </p>
      </div>

      {/* question 4 */}
      <div className='question'>
        <h2>4. What is Node? How does Node work?</h2>
        <p>Node is a run time open source development platform for executing JavaScript code. Its not a library or framework. <br></br><br></br> It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. </p>
        <img className='node' src='https://media.geeksforgeeks.org/wp-content/uploads/20210916203407/WorkingofNodejs1.png'></img>
      </div>
    </div>

  )
}

export default Blogs