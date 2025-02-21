import React from 'react';
import { TimeseriesChart } from '@uprootiny/visualization/TimeseriesChart.jsx';
import { DataFlow } from '@uprootiny/data-pipeline/DataFlow.jsx';

export const PredictionModel = () => {
  return (
    <div className="prediction-model">
      <h2>Forecast Model</h2>
      <TimeseriesChart />
      <DataFlow />
    </div>
  );
};
