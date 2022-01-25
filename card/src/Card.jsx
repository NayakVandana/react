function Card(props) {
    return (
      <>
        <div className="card">
          <img src={props.imgSrc} alt="" />
          <h3>{props.title}</h3>
          <p>
            Just add your desired image size (width & height) after our URL, and
            you'll get a random image.
          </p>
          <a href={props.link}>Read More</a>
        </div>
      </>
    );
  }
  
  export default Card;
  