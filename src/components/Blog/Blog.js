import React from "react";
import './Blog.css';

const Blog = () => {
  return (
    <div>
      <div className="question-box">
        <div className="first-question">
          <h3>What is the purpose of react router?</h3>
          <p>
            Client side routing is required to keep your application in sync
            with the browser URL. It is mainly useful for Single Page
            Applications where the backend will be used for RESTful API calls
            via XHR or AJAX calls. Being a SPA uses can book mark your URL and
            when they hit the URL again , your application should load that page
            with the data and its state. The main difference between Server side
            routing and client side routing: 1. In Server Side routing you
            download(serve) the entire page. 2. In client Side routing along
            with the entire page, you can serve a specific portion of a page,
            reuse the DOM, manually manage the URL and history states. eg.
            www.something.com/page1/tab1 will show tab1 in the UI
            www.something.com/page1.tab2 will show tab2 in the UI In this way
            the url can get more complex and you can have sub-routes with
            states.
          </p>
        </div>
        <div className="second-question">
          <h3>How does context api works?</h3>
          <p>
            The React Context API has been around as an experimental feature for
            a while now, but only in React's version 16.3.0 did it become safe
            to use in production. The article below will show you two basic web
            store apps, one built with the Context API and one without it. This
            new API solves one major problem–prop drilling. Even if you're not
            familiar with the term, if you've worked on a React.js app, it has
            probably happened to you. Prop drilling is the processing of getting
            data from component A to component Z by passing it through multiple
            layers of intermediary React components. Component will receive
            props indirectly and you, the React Developer will have to ensure
            everything works out right.
          </p>
        </div>
        <div className="third-question">
          <h3>Where useRef hooks are used?</h3>
          <p>
            useRef is one of the standard hooks provided by React. It will
            return an object that you can use during the whole lifecycle of the
            component. The main use case for the useRef hook is to access a DOM
            child directly. I'll show exactly how to do that in another section.
            Although accessing the DOM is the main use case, it doesn't mean
            it's the only one! useRef can also be very useful to hold a mutable
            value across different renders of your component. For example, it's
            often quite handy when using external libraries that weren't made
            with React in mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
