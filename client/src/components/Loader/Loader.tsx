import { useAppSelector } from '@app/hooks';
import { CircularProgress } from '@mui/material';
import { LayoutSelectors } from '@store/selectors';
import React from 'react';
import './Loader.scss';

export const Loader: React.FC = () => {
  const loading = useAppSelector(LayoutSelectors.getLoading);

  return (
    <>
      {loading && (
        <div className={'loader-backdrop'}>
          <div className="loader-wrapper">
            <CircularProgress size={80} />
          </div>
        </div>
      )}
    </>
  );
};
