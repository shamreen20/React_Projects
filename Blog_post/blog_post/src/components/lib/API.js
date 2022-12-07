const FIREBASE_DOMAIN = 'PUT YOUR FIREBASE DOMAIN LINK HERE!!!';

export async function getAllBlogs() {
    const response = await fetch(`${FIREBASE_DOMAIN}/blogs.json`);
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Could not fetch Blogs.');
    }
  
    const transformedBlogs = [];
  
    for (const key in data) {
      const blogObj = {
        id: key,
        ...data[key],
      };
  
      transformedBlogs.push(blogObj);
    }
  
    return transformedBlogs;
  }
  
  export async function getSingleBlog(blogId) {
    const response = await fetch(`${FIREBASE_DOMAIN}/blogs/${blogId}.json`);
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Could not fetch blog.');
    }
  
    const loadedBlog = {
      id: blogId,
      ...data,
    };
  
    return loadedBlog;
  }
  
  export async function addBlog(Data) {
    const response = await fetch(`${FIREBASE_DOMAIN}/blogs.json`, {
      method: 'POST',
      body: JSON.stringify(Data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Could not create blog.');
    }
  
    return null;
  }
  
  export async function addComment(requestData) {
    const response = await fetch(`${FIREBASE_DOMAIN}/comments/${requestData.blogId}.json`, {
      method: 'POST',
      body: JSON.stringify(requestData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Could not add comment.');
    }
  
    return { commentId: data.name };
  }
  
  export async function getAllComments(blogId) {
    const response = await fetch(`${FIREBASE_DOMAIN}/comments/${blogId}.json`);
  
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Could not get comments.');
    }
  
    const transformedComments = [];
  
    for (const key in data) {
      const commentObj = {
        id: key,
        ...data[key],
      };
  
      transformedComments.push(commentObj);
    }
  
    return transformedComments;
  }