import { useState, useEffect } from 'react';
import { IServiceDetails } from '../types';
import { isValidHttpsUrl } from '../utils';

const useServiceDetails = (uri: string): IServiceDetails | null => {
  const [serviceDetails, setServiceDetails] = useState<IServiceDetails | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!isValidHttpsUrl(uri)) {
          throw new Error('Uri not valid: ' + uri);
        }

        const response = await fetch(uri);
        const data: IServiceDetails = await response.json();
        if (data) {
          setServiceDetails(data);
        }
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    };
    fetchData();
  }, [uri]);

  return serviceDetails;
};

export default useServiceDetails;
