import React,{useState,useEffect, useRef} from 'react'
import books from './books';
import { InputGroup,Form } from 'react-bootstrap';
import './style.css';

// function to handle search query
const Filters = () => {
       const searchRef=useRef(null)
        const [searchValue,setSearch]= useState('');
        const handleSearch =(e)=>{
            setSearch(e.target.value)
            clear();

    }
        // function that clears all the filter so it searches all the data instead of filtered dataset
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


 
    //  function to handle selected author
   const [selectedAuthor,setauthor] = useState('');
   const changeAuthor = (e) =>{
    searchRef.current.value=''
    setSearch('')
    setauthor(e.target.value);
   }
   //   function to handle selected date range
   const [selectedFromDate,setFromDate] = useState('');
   const changeFromDate = (e) =>{
    searchRef.current.value=''
    setSearch('')      
    setFromDate(e.target.value);
   }
   const [selectedToDate,setToDate] = useState('');
   const changeToDate = (e) =>{
    searchRef.current.value=''
    setSearch('')      
    setToDate(e.target.value);
   }
  
  
   //  function to handle selected subject
   const [selectedSubject,setsubjects] = useState('');
   const changeSubject = (e) =>{
    searchRef.current.value=''
    setSearch('')      
    setsubjects(e.target.value);
   }
  
   //  the dataset is filtered according to the selected subject and author
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
 //  searched records are compared with the dataset and returns the true values
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
 // scroll feature that loads more books as the user scrolls down the page

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
               {/* dropdown to show the Authors */}
        <select id='ddlAuthor' placeholder='Select Author' onChange={changeAuthor}>
        <option value=''>Select Author</option>
        {authors.map((authors) => (
            <option value={authors}>{authors}</option>
        ))};
        </select>
        <br/>       
        <div className='row'></div>
{/* dropdown to show the subject of the book */}
        <select id='ddlSubject' placeholder='Select Subject' onChange={changeSubject}>
        <option value=''>Select Subject</option>
        {subject.map((subject) => (
            <option value={subject}>{subject}</option>
        ))};
        </select>
        <br/> 
        <h5>Filter By Date</h5>
{/* From and to dates to filter according to the published dates */}
        <label>From:</label>
        <input type="date" id='dtFromDate'  onChange={changeFromDate}></input>
        <br/>
        <label>To:</label>
        <input type="date" id='dtToDate'  onChange={changeToDate}></input>
    </div>
            </div>
            <div className='col-sm-9' >
        <div className='row'>
       {/* to display the filtered content after the filter is apllied else all the contents are displayed */}
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



// gets unique data from the dataset and returns it to the drop down
const authors = books.map(detail => detail.author)
  .filter((value, index, self) => self.indexOf(value) === index)

const subject = books.map(detail => detail.subject)
  .filter((value, index, self) => self.indexOf(value) === index)




export default Filters
