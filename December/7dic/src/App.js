import foto from './logo-deliveroo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="cv">
        <img src={foto} className="foto" alt="foto" />
        <h1>Giuseppe Gallo Cassarino</h1>

        <h2>Descrizione</h2>

        <p className="description">Lorem Ipsum is simply dummy text of
           the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
           when an unknown printer took a galley of 
           type and scrambled it to make a type specimen book. 
        </p>
          
        </header>
        <div className="container">

                    <div className="job">
                       <h3>Esperienze Lavorative</h3>
                      <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                     Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced 
                     in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>

                     </div>

                         <div className="language">
                           <h3>Lingua</h3>
                          <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                         Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced 
                         in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                        </div>

                              <div className= "hobbie">
                                <h3>Hobbie</h3>
                             <p> The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                              Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced 
                              in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. </p>

                            </div>
         </div>
           <div className="form__cv">
              <form className="concact">
                <h4>Oggetto</h4>
                <input text="text" id="oggetto" name="oggetto"></input>
                <h4>Messaggio</h4>
                <input text="text" id="messaggio" name="messaggio"></input>
              </form>

               


           </div>

           <footer>
            <p>
             Curriculum Vitae Credits by 
            <a href="" target="_blank"> giuseppegallocassarino@libero.it</a>
            </p>
   
          </footer>           
          
    </div>
      




  );
}

export default App;
