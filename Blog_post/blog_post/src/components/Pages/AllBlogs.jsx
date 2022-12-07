import { useEffect } from "react";
import BlogList from "../Blogs/BlogList";
import useHttp from '../hooks/use-http';
import LoadingSpinner from "../Layout/LoadingSpinner";
import PageNotFound from "../Blogs/PageNotFound";
import { getAllBlogs } from "../lib/API";

  
  const AllBlogs = () => {
    const { sendRequest, status, data: loadedBlog, error } = useHttp(
      getAllBlogs,
      true
    );
  
    useEffect(() => {
      sendRequest();
    }, [sendRequest]);
  
    if (status === 'pending') {
      return (
        <div className='centered'>
          <LoadingSpinner />
        </div>
      );
    }
  
    if (error) {
      return <p className='centered focused'>{error}</p>;
    }
  
    if (status === 'completed' && (!loadedBlog || loadedBlog.length === 0)) {
      return <PageNotFound />;
      
    }
    return <BlogList blogs={loadedBlog} />;
  }


export default AllBlogs;