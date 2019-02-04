import MasterPage from '../Components/Master';
import Precio from '../Components/Precio';
import Noticias from '../Components/Noticias';
import Eventos from '../Components/Eventos';
import fetch from 'isomorphic-unfetch';


const Index = (props) => (
    <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2 className="mY-4">Bitcoin Price</h2>
                <Precio 
                    precio={props.precioBitcoin}
                />
            </div>
            <div className="col-md-8">
                <h2 className="mY-4">Bitcoin News</h2>
                   <Noticias 
                    noticias={props.noticias}
                    />
            </div>
            <div className="col-md-4">
                <h2 className="mY-4">Upcoming Bitcoin Events</h2>
                <Eventos 
                    eventos={props.eventos}
                />
            </div>
        </div>
    </MasterPage>
);

Index.getInitialProps = async () => {
    
    //obteniendo la data de los url  mediante isomorphic-unfetch que se usa cuando se trabaja con ssr
    const precio = await fetch('https://api.coinmarketcap.com/v2/ticker/1/');
    const noticias = await fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-01-04&sortBy=publishedAt&apiKey=937c0834d16a435c9c4d4b2de812db4a');
    const eventos = await fetch('https://www.eventbriteapi.com/v3/events/search/?q=bitcoin&location.address=netherlands&token=4QC5V7CYCTMVK3XQBQD6');
    
    //manejando la data que se lee en json con su respuesta
    const resPrecio = await precio.json();
    const resNoticias = await noticias.json();
    const resEvetos = await eventos.json();

    return {
        precioBitcoin: resPrecio.data.quotes.USD,
        noticias: resNoticias.articles,
        eventos: resEvetos.events,
    }

}


export default Index;