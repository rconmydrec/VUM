import React, { useState, useEffect } from 'react';
import api from '../api';
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap';

function NoteForm({ show, onSubmit, editingNote, onHide }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setDescription(editingNote.description);
    } else {
      setTitle('');
      setDescription('');
    }
    setErrorMessage('');
  }, [editingNote, show]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingNote) {
        await api.put(`/notes/${editingNote.id}`, { title, description });
      } else {
        await api.post('/notes', { title, description });
      }
      onHide();
      onSubmit();
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Error saving note');
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          <i className="fas fa-edit me-2"></i>
          {editingNote ? 'Edit Note' : 'New Note'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        
        <Form onSubmit={handleSubmit}>
          <FloatingLabel label="Title" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </FloatingLabel>

          <FloatingLabel label="Description">
            <Form.Control
              as="textarea"
              placeholder="Description"
              style={{ height: '150px' }}
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </FloatingLabel>

          <div className="d-flex justify-content-end mt-4 gap-2">
            <Button variant="secondary" onClick={onHide}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              {editingNote ? 'Save Changes' : 'Create Note'}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default NoteForm;