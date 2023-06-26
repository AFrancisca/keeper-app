import Header from './Header';
import Footer from './Footer';
import Notes from './Notes';
import Box from './Box';


function App(){
    return (
        <div>
            <Header />
            <Footer />
            {Notes.map ( Note => {
    return (
      <Box
        key={Note.id}
        title={Note.title}
        content={Note.content}
      />
    );
  } )
}
        </div>
    );
}
   




export default App;
