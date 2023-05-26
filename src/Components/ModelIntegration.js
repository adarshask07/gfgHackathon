import { useEffect, useState } from 'react';
import joblib from 'joblib';  // Assuming you have a suitable package for loading joblib models in your React application

const ModelIntegration = () => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    // Load the saved model
    const loadedModel = joblib.load('path_to_mutual_fund_model.pkl');
    setModel(loadedModel);
  }, []);

  

  return (
    
        <div></div>

  );
};

export default ModelIntegration;