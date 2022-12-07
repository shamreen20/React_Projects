import { useRef, useEffect } from 'react';

import useHttp from '../hooks/use-http';
import { addComment } from '../lib/API';
import LoadingSpinner from '../Layout/LoadingSpinner';
import './NewCommentForm.css';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const { sendRequest, status, error } = useHttp(addComment);

  const { onAddedComment } = props;

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredContent = commentTextRef.current.value;

    

    sendRequest({ commentData: { content: enteredContent }, blogId: props.blogId });
  };

  return (
    <form className='form' onSubmit={submitFormHandler}>
      {status === 'pending' && (
        <div className='centered'>
          <LoadingSpinner />
        </div>
      )}
      <div className='control' onSubmit='submitFormHandler'>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className='actions'>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;