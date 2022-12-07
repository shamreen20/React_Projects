import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { addBlog } from "../lib/API";
import CreateBlogForm from "../Blogs/CreateBlogForm";
import useHttp from "../hooks/use-http";


const NewBlog =() => {
    const {sendRequest,status} = useHttp(addBlog);
    
    const history = useHistory();

    useEffect(() => {
      if(status === "completed"){
        history.push("/blogs")
      }

    },[status,history])

    const addBlogHandler = (Data) => {
        sendRequest(Data)

        history.push('/blogs');
      };
    
      return <CreateBlogForm isLoading={status === "pending"} onAddBlog={addBlogHandler} />;
}

export default NewBlog;