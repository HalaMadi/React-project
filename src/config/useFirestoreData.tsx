import { useQuery } from 'react-query';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

const useFirestoreData = () => {
  const fetchFirestoreData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Information'));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log('Fetched Firestore data:', data); 
      return data;
    } catch (error) {
      console.error('Error fetching Firestore data:', error); 
      throw new Error('Unable to fetch data');
    }
  };

  return useQuery('firestoreData', fetchFirestoreData);
};

export default useFirestoreData;
