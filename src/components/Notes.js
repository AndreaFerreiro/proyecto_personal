import '../styles/layout/noteslist.scss';
import {useState} from 'react';
import añadir from '../images/añadir.png';
const Notes = () => {
  const [notesList, setNotesList] = useState([]);
  const [showForm , setShowForm] = useState('collapsed');
  let eachNote = {
    date: '',
    text: '',
  };
  const [note, setNote] = useState(eachNote);
  const handleNewNote = (event) => {
    event.preventDefault();
    setNote({ ...note, [event.target.id]: event.target.value });
  };
  const handleAddNote = (event) => {
    event.preventDefault();
    if (eachNote.date === '' || eachNote.text === ''){
      return 'Parece que has olvidado algo'
    } else{
      setNotesList([...notesList, note])
    }
  };
  /*const renderNote = () => {
    return note.map((eachNote) => {
      return (
        <li className="noteslist__element">
          <p className="noteslist__element--date">{note.date}</p>
          <p className="noteslist__element--text">{note.text}</p>
        </li>
      );
    });
  };*/
  const handleShowForm = (ev) => {
    ev.preventDefault();
    if (showForm === 'collapsed'){
      setShowForm('');
    } else {
      setShowForm ('collapsed');
    }
  }
  return (
    <main className="main">
      <section className="containerlist">
        <h2 className="containerlist__title">Notas <button onClick={handleShowForm} className='addNoteButton'><img className='addNoteButton__img' src={añadir} title='Nueva nota'></img></button> </h2>
        <form className={`containerlist__form ${showForm}`}>
          <label className="form__date" id="name">
            <span className="form__date--question" id="date">
              Fecha:
            </span>
            <input
              className="form__date--input"
              type="date"
              id="date"
              name="date"
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
              onInput={handleNewNote}
            />
          </label>
          <input type="submit" value="Guardar" className="form__submit" onClick={handleAddNote}/>
          <p className="errormessage"></p>
        </form>
        <ul className="noteslist">
          {/*{renderNote()}*/}
          <li className="noteslist__element">
            <p className="noteslist__element--date">25/07/2023</p>
            <p className="noteslist__element--text">Presentación Proyecto Personal</p>
          </li>
          <li className="noteslist__element">
            <p className="noteslist__element--date">24/07/2023</p>
            <p className="noteslist__element--text">Última Evaluación</p>
          </li>
        </ul>
      </section>
    </main>
  );
};
export default Notes;