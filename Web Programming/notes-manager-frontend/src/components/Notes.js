import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import NoteForm from './NoteForm';
import { AuthContext } from '../AuthContext';
import { Card, Button, Badge, Pagination, Form, InputGroup } from 'react-bootstrap';

function Notes() {
  const { logout } = useContext(AuthContext);
  const [notes, setNotes] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const pageSize = 9;
  const [search, setSearch] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [editingNote, setEditingNote] = useState(null);
  const [showNoteForm, setShowNoteForm] = useState(false);
  const navigate = useNavigate();

  const fetchNotes = async () => {
    try {
      const params = { page, pageSize, search, fromDate, endDate };
      const response = await api.get('/notes', { params });
      setNotes(response.data.notes);
      setTotal(response.data.total);
    } catch (error) {
      console.error('Error fetching notes', error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, [page, search, fromDate, endDate]);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/notes/${id}`);
      fetchNotes();
    } catch (error) {
      console.error('Error deleting note', error);
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg shadow">
        <div className="container">
          <a className="navbar-brand" href="/">
            <i className="fas fa-sticky-note me-2"></i>
            Notes Manager
          </a>
          <div>
            <Button 
              variant="outline-light" 
              className="me-3"
              onClick={() => setShowNoteForm(true)}
            >
              <i className="fas fa-plus me-2"></i>
              New Note
            </Button>
            <Button variant="outline-light" onClick={logout}>
              Logout <i className="ms-2 fas fa-sign-out-alt"></i>
            </Button>
          </div>
        </div>
      </nav>

      <main className="flex-grow-1 py-5 bg-light">
        <div className="container">
          <NoteForm 
            show={showNoteForm || !!editingNote}
            onSubmit={fetchNotes}
            editingNote={editingNote}
            onHide={() => {
              setShowNoteForm(false);
              setEditingNote(null);
            }}
          />

          <div className="row g-4 mb-4">
            <div className="col-12">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <InputGroup>
                        <InputGroup.Text>
                          <i className="fas fa-search"></i>
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder="Search notes..."
                          value={search}
                          onChange={e => setSearch(e.target.value)}
                        />
                      </InputGroup>
                    </div>
                    
                    <div className="col-md-3">
                      <Form.Control
                        type="date"
                        value={fromDate}
                        onChange={e => setFromDate(e.target.value)}
                      />
                    </div>
                    
                    <div className="col-md-3">
                      <Form.Control
                        type="date"
                        value={endDate}
                        onChange={e => setEndDate(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {notes.map(note => (
                <div key={note.id} className="col">
                  <Card className="h-100 shadow-sm">
                    <Card.Body>
                      <Card.Title>
                        {note.title}
                        <Badge bg="secondary" className="ms-2">
                          {new Date(note.createdAt).toLocaleDateString()}
                        </Badge>
                      </Card.Title>
                      <Card.Text className="text-muted">
                        {note.description}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-end gap-2">
                      <Button 
                        variant="outline-primary" 
                        size="sm"
                        onClick={() => setEditingNote(note)}
                      >
                        <i className="fas fa-edit"></i>
                      </Button>
                      <Button 
                        variant="outline-danger" 
                        size="sm"
                        onClick={() => handleDelete(note.id)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Card.Footer>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <Pagination>
              <Pagination.Prev 
                disabled={page === 1} 
                onClick={() => setPage(page - 1)}
              />
              <Pagination.Item active>{page}</Pagination.Item>
              <Pagination.Next 
                disabled={(page * pageSize) >= total} 
                onClick={() => setPage(page + 1)}
              />
            </Pagination>
          </div>

          <div className="d-block d-lg-none fixed-bottom p-3">
            <Button 
              variant="primary" 
              size="lg" 
              className="rounded-circle shadow-lg"
              style={{ width: '60px', height: '60px' }}
              onClick={() => setShowNoteForm(true)}
            >
              <i className="fas fa-plus"></i>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Notes;