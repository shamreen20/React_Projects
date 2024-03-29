import { Fragment,useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import useHttp from '../hooks/use-http';
import { getSingleBlog } from '../lib/API';
import LoadingSpinner from "../Layout/LoadingSpinner";
import Comments from "../Comments/Comments";
import SelectBlog from "../Blogs/SelectBlog";


const BlogDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const { blogId } = params;

  const { sendRequest, status, data: loadedBlog, error } = useHttp(
    getSingleBlog,
    true
  );

  useEffect(() => {
    sendRequest(blogId);
  }, [sendRequest, blogId]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered'>{error}</p>;
  }

  if (!loadedBlog.content) {
    return <p>No Blog found!</p>;
  }

  return (
    <Fragment>
      <SelectBlog content={loadedBlog.content} title={loadedBlog.title} />
      <Route path={match.path} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default BlogDetail;

