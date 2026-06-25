import React, { useState } from 'react';

const NoteForm = ({onAddNote})=> {


    const [content, setContent] = useState('');

    const cahngeContent = (e) =>{
        setContent(e.target.value)
    }

    const submitContent = () => {
        if (content.trim() === '') {
            alert('Write before submitting');
            return; 
        }

        onAddNote(content);
        
        setContent('');
    };

    return (
        <>
            <div className="form-group">
                <label htmlFor="content">Content</label>
                    <textarea
                    id="content"
                    rows="4"
                    value={content}
                    onChange={cahngeContent}
                    placeholder='Write Here Your Content'
                    required
                    ></textarea>
            </div>
            <button type="submit" onClick={submitContent}>Submit</button>
        </>
    );
};

export default NoteForm;