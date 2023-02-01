import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../store/Store";
import Layout from "./Layout";


function Create() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [review, setReview] = useState('')
  const [cover, setCover] = useState('')
  const [intro, setIntro] = useState('')
  const [completed, setCompleted] = useState(false)

  const store = useAppContext()
  const navigate = useNavigate()
  
  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
      
      switch(name){
        case 'title':
          setTitle(value)
        break
        case 'author':
          setAuthor(value)
        break
        case 'review':
          setReview(value)
        break
        case 'cover':
          setCover(value)
        break
        case 'intro':
          setIntro(value)
        break
        case 'completed':
          setCompleted(e.target.checked)
        break
        default:
      }
    }

    function handleChangeFile(e) {
      const element = e.target
      const file = element.files[0]
      const reader = new FileReader()
    
      reader.readAsDataURL(file)
      reader.onloadend = function () {
        setCover(reader.result.toString())
      }
    }

    function handleSubmit(e) {
      e.preventDefault()
      const newBook = {
        id: crypto.randomUUID(),
        title,
        author,
        review,
        intro,
        cover,
        completed
      }
      store.createItem(newBook)
      navigate('/')
    }


  return ( 
  <Layout>
    <form onSubmit={handleSubmit} style={{display:"flex", justifyContent:"space-evenly", alignItems:"center", flexDirection:"column", height:"50vh"}}>

      <div>
        <div>Title</div>
        <input type="text" name="title" value={title} onChange={handleChange}/>
      </div>

      <div>
        <div>Autor</div>
        <input type="text" name="author" value={author} onChange={handleChange}/>
      </div>

      <div>
        <div>Review</div>
        <input type="text" name="review" value={review} onChange={handleChange}/>
      </div>

      <div>
        <div>Cover</div>
        <input type="file" name="cover" onChange={handleChangeFile}/>
        <div>{!! cover ? <img src={cover} width='200' alt="preview"/> : ""}</div>
      </div>

      <div>
        <div>Introduction</div>
        <input type="text" name="intro" value={intro} onChange={handleChange}/>
      </div>

      <div style={{display:"flex"}}>
        <div>Completado</div>
        <input type="checkbox" name="completed" value={completed} onChange={handleChange}/>
      </div>

      <input type="submit" value= "Register Book"/>
    </form>
  </Layout> 
  );
}

export default Create;