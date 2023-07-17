import React from 'react';
import { useHistory } from 'react-router-dom';

const PetDetailsNotFound = () => {

  const history = useHistory(); 

  const goBack = () => {
    history.goBack()
  }
  
  return (
    <main className="page">
      <h3>404: Who let the dogs out?</h3>
      <p>Sorry, but the details for this pet have not been uploaded by the shelter yet. Check back later!</p>
      <img
        src="https://media.giphy.com/media/pu1X7ZJM2eNIA/giphy.gif"
        alt="Dogs out"
      />
      <div className="actions-container">
        <button className="button" onClick={goBack}>
          Go Back
        </button>
      </div>
    </main>
  );
};

export default PetDetailsNotFound;
