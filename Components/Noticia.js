const Noticia = (props) => {

    const {urlToImage, url, title, description, source} = props.noticia;

    let desc = description.text;
    if(desc) {
        desc = desc.substr(0,200) + '...';
    }

    let imagen;

    if(urlToImage != '') {
        imagen = <img src={urlToImage} alt={title}
        className="card-img-top" />
    } else {
        imagen = <p className="text-center my-5">Imagen not available</p>
    }

    return ( 
        <div className="col-md-6 col-12 mg-4 align-items-end">
            <div className="card ">
                <div className="card-image">
                    {imagen}
                </div>
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{desc}</p>
                    <p className="card-text">{source.name}</p>
                    <a href={url} target="_blank" className="btn btn-primary d-block">
                        Read News
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default Noticia;