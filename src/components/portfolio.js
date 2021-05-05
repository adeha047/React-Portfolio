import React from 'react';

function Portfolio() {
    return (

        
      <div className="container">
        <div className="row">
          {mySites.map((site) => (
            <div className="col-sm-12 col-md-4">
              <div className="card">
                <img
                  src={site.img}
                  className="card-img-top"
                  alt={site.title}
                  width={site.width}
                  height={site.height}
                />
                <div className="card-body">
                  <h5 className="card-title">{site.title}</h5>
                  <p>Libraries I used</p>
                  <ul className="list-unstyled">
                    {site.libraries.map((lib) => (
                      <li className="card-text">{lib}</li>
                    ))}
                  </ul>
                  <a href={site.gitHubLink} className="btn btn-primary">
                    Github Repo
                  </a>
                </div>
              </div>
              <div className="d-block w-100">
                
              </div>
              <div className="d-block w-100">
               
              </div>
              <div className="d-block w-100">
                
              </div>
              <div className="d-block w-100">
                
              </div>
              <div className="d-block w-100">
                
              </div>
              <div className="d-block w-100">
                
              </div>
            </div>
          ))}
        </div>
      </div>
   

    //     <section className="page-section portfolio" id="portfolio">
    //         <div className="container">
                
    // <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Projects</h2>
                
    // <div className="divider-custom">
    //                 <div className="divider-custom-line"></div>
    //                 <div className="divider-custom-icon"><i class="fas fa-star"></i></div>
    //                 <div className="divider-custom-line"></div>
    //             </div>
                
    // <div className="row justify-content-center">
                   
    //     <div className="col-md-6 col-lg-4 mb-5">
    //                     <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
    //                         <div
    //                             className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
    //                             <div className="portfolio-item-caption-content text-center text-white"><i
    //                                 className="fas fa-plus fa-3x"></i></div>
    //                         </div>
    //                         <h1>Burger Generator Application</h1>
    //                     </div>
    //                 </div>
                    
    //     <div className="col-md-6 col-lg-4 mb-5">
    //                     <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
    //                         <div
    //                             className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
    //                             <div className="portfolio-item-caption-content text-center text-white"><i
    //                                 className="fas fa-plus fa-3x"></i></div>
    //                         </div>
    //                         <h1>Weather Dashboard Application</h1>
    //                     </div>
    //                 </div>
                   
    //     <div className="col-md-6 col-lg-4 mb-5">
    //                     <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
    //                         <div
    //                             className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
    //                             <div className="portfolio-item-caption-content text-center text-white"><i
    //                                 className="fas fa-plus fa-3x"></i></div>
    //                         </div>
    //                         <h1>The Right Note Application</h1>
    //                     </div>
    //                 </div>
    //                 <div className="col-md-6 col-lg-4 mb-5">
    //                     <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
    //                         <div
    //                             className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
    //                             <div className="portfolio-item-caption-content text-center text-white"><i
    //                                 className="fas fa-plus fa-3x"></i></div>
    //                         </div>
    //                         <h1>Brewtime Application</h1>
    //                     </div>
    //                 </div>
    //                 <div className="col-md-6 col-lg-4 mb-5">
    //                     <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
    //                         <div
    //                             className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
    //                             <div className="portfolio-item-caption-content text-center text-white"><i
    //                                 className="fas fa-plus fa-3x"></i></div>
    //                         </div>
    //                         <h1>Note Taker Application</h1>
    //                     </div>
    //                 </div>
    //             </div>
    //             </div>
    // </section>
);
}

export default Portfolio;
