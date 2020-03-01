import React from 'react';

export default function ProductI(props){
  const  {namesList}=props;

    return (
        <div>
            <div className="card" style={{width: '13rem;'}}>
                <img src={namesList.image} className="card-img-top" alt="..." />
                <div className="card-body ">
                    <h5 className="card-title" style={{textAlign: "center"}}>{namesList.name}</h5>
                    <p className="card-text" style={{textAlign: "center"}}>${namesList.price}</p>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <a href={"/products/" + namesList.id} className="btn Product-btn d-block" >Add to chart</a>
                </div>
            </div> 
        </div>
    
    )
}