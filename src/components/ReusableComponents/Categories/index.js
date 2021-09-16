import "./Categories.scss"


const Categories =({image, title})=>{
    return(
        <div className='categories'>
          <div className="categories__container">
            <figure>
              <img className="categories__container__image" src={image} />

              <figcaption className="categories__container__text">
                {title}
              </figcaption>
            </figure>
          </div>
       
      </div>
    )
}

export default Categories