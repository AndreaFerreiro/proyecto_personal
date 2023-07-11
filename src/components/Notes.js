import '../styles/layout/noteslist.scss';
import {useEffect, useState} from 'react';
import añadir from '../images/añadir.png';
import ls from '../services/localStorage';
const Notes = () => {
  const [notesList, setNotesList] = useState(ls.get('notes',[]));
  const [showForm , setShowForm] = useState('collapsed');
  let eachNote = {
    date: '',
    text: '',
  };
  const [note, setNote] = useState(eachNote);
  useEffect (() => {
    ls.set('notes', notesList);
  }, [notesList])
  const handleNewNote = (event) => {
    setNote({ ...note, [event.target.id]: event.target.value });
  };
  const handleAddNote = (event) => {
    setNotesList([...notesList, note]);
    setNote({
      date: '',
    text: ''
    })
    setShowForm('collapsed');
  };
  const renderNote = () => {
    return notesList.map((eachNote) => {
      return (
        <li className="noteslist__element">
          <p className="noteslist__element--date">{eachNote.date}</p>
          <p className="noteslist__element--text">{eachNote.text}</p>
        </li>
      );
    });
  };
  const handleShowForm = (ev) => {
    ev.preventDefault();
    if (showForm === 'collapsed'){
      setShowForm('');
    } else {
      setShowForm ('collapsed');
    }
  }
  const handleSubmit = (ev) => {
    ev.preventDefault();
  }
  return (
    <main className="main">
      <section className="containerlist">
        <h2 className="containerlist__title">Notas <button onClick={handleShowForm} className='addNoteButton'><img className='addNoteButton__img' src={añadir} title='Nueva nota'></img></button> </h2>
        <form onSubmit={handleSubmit} className={`containerlist__form ${showForm}`}>
          <label className="form__date" id="name">
            <span className="form__date--question" id="date">
              Fecha:
            </span>
            <input
              className="form__date--input"
              type="date"
              id="date"
              name="date"
              value={note.date}
              onInput={handleNewNote}
            />
          </label>
          <label className="form__note" id="name">
            <span className="form__note--question" id="text">
              Nota
            </span>
            <input
              className="form__note--input"
              placeholder="Texto nota"
              id="text"
              name="text"
              value={note.text}
              onInput={handleNewNote}
            />
          </label>
          <input type="submit" value="Guardar" className="form__submit" onClick={handleAddNote}/>
          <p className="errormessage"></p>
        </form>
        <ul className="noteslist">
          {renderNote()}
        </ul>
      </section>
    </main>
  );
};
export default Notes;