import React, {useState, useEffect} from 'react';
// useParams gets the id for each post from the URL.
import { useParams } from 'react-router-dom';
import { z } from "zod";

function EditPost (){
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');

    // fetch blog data by ID 
    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`http://localhost:5000/api/blogs/${id}`);
            const data = await response.json();
            setTitle(data.title);
            setCategory(data.category);
            setAuthor(data.author);
            setBody(data.body);
        };
        fetchPost();
    }, [id]);

    // Handle update
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const updatedPost = { title, category, author, body };
        
        try{
        const response = await fetch(`http://localhost:5000/api/blogs/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedPost),
        });

        if (response.ok) {
            alert('Post updated successfully!');
        } else {
            alert('Error updating post');
        }
        } catch (error) { alert('Something went wrong'); }
    };


// Define schema
const BlogSchema = z.object({
  title: z.string(),
  category: z.string(),
  author: z.string(),
  body: z.string(),
});

// Validate data
const result = BlogSchema.safeParse({
  title: "My Blog",
  category: "Tech",
  author: "Munachi",
  body: "This is my post",
});

if (!result.success) {
  console.error("Invalid data:", result.error);
}

    return(
        <div>
            <h2>Edit Blogs</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                    type="text"
                    id='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                     />
                </div>

                <div>
                    <label htmlFor="category">Category:</label>
                    <input
                    type="text"
                    value={category}
                    id='category'
                    onChange={(e) => setCategory(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="author">Author:</label>
                    <input
                    type="text"
                    id='author'
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="body">Body:</label>
                    <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    />
                </div>

                <button type="submit">Update</button>
            </form>
        </div>
    );
}


export default EditPost;


// My Linkedln connection recommend i should use:
// TanStack query instead of fetch inside useEffect.
// Why Use TanStack Query (React Query):
// Caching: Remembers fetched data, so revisiting a page doesn’t always re‑fetch.

// Loading & Error States: Built‑in isLoading and error — no need for extra useState.

// Cleaner Code: Less boilerplate compared to fetch + useEffect.

// Refetching: Automatically refreshes data when you come back to the app or tab.

// Performance: Reduces unnecessary network calls, making apps faster.

// Scalability: Easier to manage when your project grows with many API calls.

// Professional Standard: Widely used in production React apps for reliability.


// Zod is a JavaScript library that makes validation easy.
// it checks the nature of data (eg.string, boolean etc) being pass from frontend to backend and vice verse