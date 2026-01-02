import React, {useState} from 'react';

function CreatePost() {
  // State variables to hold form input values
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBlog = {title, category, author, body};

    try {
      const response = await fetch('http://localhost:5000/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(newBlog),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Blog saved:', data);
        alert('Blog created successfully!');
        
        setTitle('');
        setCategory('');
        setAuthor('');
        setBody('');
      } else {
        console.error('Failed to save blog');
        alert('Error creating blog');
      }
    }
      catch (error) {
      console.error('Error:', error);
      alert('Something went wrong');
    }
  };

  return (
    <div>
      <h2>Create New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input 
            id='title'
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>

        <div>
          <label htmlFor="category">Category:</label>
          <input
          id='category'
          type="text"
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            required 
          />
        </div>

        <div>
          <label htmlFor="author">Author:</label>
          <input
          id='author'
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          />
        </div>

        <div>
          <label htmlFor="body">Body:</label>
          <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
           />
        </div>

        <button type="submit" disabled={!title || !category || !author || !body}>
  Publish
</button>

      </form>
    </div>
  );
}

export default CreatePost;