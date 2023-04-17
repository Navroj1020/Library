import React,{useState,useEffect, useRef} from 'react'
import books from './books';
import { InputGroup,Form } from 'react-bootstrap';
import 'Library/src/ccomponents/style.css';


const Filters = () => {
       const searchRef=useRef(null)
        const [searchValue,setSearch]= useState('');
        const handleSearch =(e)=>{
            setSearch(e.target.value)
            clear();

    }
function clear(){
            setsubjects('');
            document.getElementById('ddlAuthor').selectedIndex=0
            document.getElementById('ddlSubject').selectedIndex=0
            document.getElementById('dtFromDate').value='' 
            document.getElementById('dtToDate').value=''
            setFromDate('')
            setToDate('')       
            setauthor('');
}    


 
   
   const [selectedAuthor,setauthor] = useState('');
   const changeAuthor = (e) =>{
    searchRef.current.value=''
    setauthor(e.target.value);
   }
   const [selectedFromDate,setFromDate] = useState('');
   const changeFromDate = (e) =>{
    searchRef.current.value=''
    setFromDate(e.target.value);
   }
   const [selectedToDate,setToDate] = useState('');
   const changeToDate = (e) =>{
    searchRef.current.value=''
    setToDate(e.target.value);
   }
  
  
   
   const [selectedSubject,setsubjects] = useState('');
   const changeSubject = (e) =>{
    searchRef.current.value=''
    setsubjects(e.target.value);
   }
  
   
  var searchRecords = books.filter(item => {
    if (
    (item.subject === selectedSubject && item.author === selectedAuthor)||
    (selectedAuthor === '' && selectedSubject === '' )||
    (selectedAuthor !== '' && selectedSubject === '' && item.author === selectedAuthor)||
    (selectedAuthor === '' && selectedSubject !== '' && item.subject === selectedSubject)
    )
    {
       return true;
    }
    else{
       return false;
    } 
     
 });
 
 if(selectedFromDate !==''){
searchRecords = searchRecords.filter(item => {
  const date = new Date(item.publishedYear);
  return date >= new Date(selectedFromDate)&& date<= new Date(selectedToDate);

 })};
 console.log(searchRecords)
 
 if(searchValue!==''){
  searchRecords = books.filter(item => {
   
     if 
     (item.title.toLowerCase().includes(searchValue.toLowerCase()))
     {
        return true;
     }
     
     else{
        return false;
     }

  });
}

  


  const [displayCount,setDisplayCount]=useState(10);


  useEffect(()=>{
    function handleScroll(){
        const bottom = Math.ceil(window.innerHeight+window.scrollY)>=document.documentElement.scrollHeight;
        if(bottom){
            setDisplayCount(prevCount=>prevCount+10);

        }
    }
    window.addEventListener('scroll',handleScroll);
    return () => window.removeEventListener('scroll',handleScroll);

  },[]);

  let recordsLength = (searchRecords.length)
  return (
    <>
    <div className='container-fluid' >
        <div className='row header'>
        <div className='col-sm-8' >
            <h1>Library</h1>
        </div>
        <div className='col-sm-4' >
        <InputGroup id='search1' className="mb-3 search">
        <Form.Control
          placeholder="Search Books"
          aria-label="Search"
          aria-describedby="basic-addon2"
          id='search'
          ref={searchRef}
          onChange={handleSearch}
        />
        
      </InputGroup>
        </div>
        </div>
        <div className='row'>
        <div className='col-sm-3' >
        <div className='filters '>
        <h5 className='title'>Filters</h5>
        <h6>Number Of Results Found: {recordsLength}</h6>
        <br/>
        <select id='ddlAuthor' placeholder='Select Author' onChange={changeAuthor}>
        <option value=''>Select Author</option>
        {authors.map((authors) => (
            <option value={authors}>{authors}</option>
        ))};
        </select>
        <br/>       
        <div className='row'></div>
        <select id='ddlSubject' placeholder='Select Subject' onChange={changeSubject}>
        <option value=''>Select Subject</option>
        {subject.map((subject) => (
            <option value={subject}>{subject}</option>
        ))};
        </select>
        <br/> 
        <h5>Filter By Date</h5>
        <label>From:</label>
        <input type="date" id='dtFromDate'  onChange={changeFromDate}></input>
        <br/>
        <label>To:</label>
        <input type="date" id='dtToDate'  onChange={changeToDate}></input>
    </div>
            </div>
            <div className='col-sm-9' >
        <div className='row'>
       
            {searchRecords.slice(0,displayCount).map((values)=>{
                const{publishedYear,title,subject,author,thumbnail,id}=values;
            return(
                <>
                 <div className='col-sm-3' >
                 <div className='row'>
                <div className=''key={id}>
                <div className="card" >
                    <img src={thumbnail} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-title">{title}</p>
                            <p className="card-text">{author}</p>
                            <p className="card-text">{publishedYear}</p>
                            <p className="card-text">{subject}</p>
                        </div>
                        
                </div>
                </div>
                </div>
                <br/>
                </div>
                


                </>
            )}
            )}
            </div>
            </div>
            </div>
        </div>
        
   
    
    </> 
  )
}




const authors = books.map(detail => detail.author)
  .filter((value, index, self) => self.indexOf(value) === index)

const subject = books.map(detail => detail.subject)
  .filter((value, index, self) => self.indexOf(value) === index)

// const title = books.map(detail => detail.title)
//   .filter((value, index, self) => self.indexOf(value) === index)



export default Filters
