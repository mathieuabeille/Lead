import React, { useState } from 'react';
import '../stylesheets/calendly.css';
import { useAirtable } from 'use-airtable'


const AddTool = () => {
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Link, setLink] = useState("");
  const [Illustration, setIllustration] = useState("");
  const [records, createRecord, updateRecord, deleteRecord] = useAirtable(
    'Growth',
    'key5moHjnG9kz8y7w',
    'appXKVgrd5Kyo6CGd'
  );


  return (
    <div>
      <form>
            <p>Outil:</p>
            <input
              type='text'
              name='Name'
              placeholder="Type here to translate!"
              onChange={e => setName( e.target.value )}
            />
             <p>Description:</p>
           <input
              type='text'
              name='Description'
              placeholder="Type here to translate!"
              onChange={e => setDescription( e.target.value )}
            />
            <p>Link:</p>
           <input
              type='text'
              name='Link'
              placeholder="Type here to translate!"
              onChange={e => setLink( e.target.value )}
            />
            <p>Illustration:</p>
           <input
              type='text'
              name='Illustration'
              placeholder="Type here to translate!"
              onChange={e => setIllustration( e.target.value )}
            />

            <br/>
            </form>
          <button onClick={() => createRecord( {
            Name: Name,
            Description: Description,
            Illustration: Illustration,
            Lien: Link
          })}>
            Add record
          </button>

    </div>
  )
}

export default AddTool;




