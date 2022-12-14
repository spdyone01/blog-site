import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import './_Write.scss';

function Write() {
  const [value, setValue] = useState('');

  return (
    <div className='add'>
      <div className='content'>
        <input type='text' placeholder='Title' />
        <div className='editorContainer'>
          <ReactQuill
            className='editor'
            theme='snow'
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className='menu'>
        <div className='item'>
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visiblity: </b> Draft
          </span>
          <input type='file' name='' id='file' style={{ display: 'none' }} />
          <label className='file' htmlFor='file'>
            Upload Image
          </label>
          <div className='buttons'>
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className='item'>
          <h1>Category</h1>
          <div className='category'>
            <input type='radio' name='cat' value='webdev' id='webdev' />{' '}
            {/* Change the value and id later */}
            <label htmlFor='webdev'>WEB DEVELOPMENT</label>
          </div>
          <div className='category'>
            <input type='radio' name='cat' value='technology' id='technology' />{' '}
            {/* Change the value and id later */}
            <label htmlFor='technology'>TECHNOLOGY</label>
          </div>
          <div className='category'>
            <input type='radio' name='cat' value='3dprinter' id='3dprinter' />{' '}
            {/* Change the value and id later */}
            <label htmlFor='3dprinter'>3D PRINTER</label>
          </div>
          <div className='category'>
            <input
              type='radio'
              name='cat'
              value='photography'
              id='photography'
            />{' '}
            {/* Change the value and id later */}
            <label htmlFor='photography'>Photography</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
