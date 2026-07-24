import './App.css';

import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {

    const showBooks = true;
    const showBlogs = true;
    const showCourses = true;

    return (

        <div className="App">

            <h1>Blogger App</h1>

            {/* Method 1 - if */}

            {showBooks ? <BookDetails /> : null}

            <hr />

            {/* Method 2 - && */}

            {showBlogs && <BlogDetails />}

            <hr />

            {/* Method 3 - Element Variable */}

            {(() => {
                let component;

                if (showCourses) {
                    component = <CourseDetails />;
                }

                return component;
            })()}

        </div>

    );

}

export default App;
