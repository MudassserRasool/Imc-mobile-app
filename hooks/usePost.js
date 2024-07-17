// import { useState } from 'react';

// function usePost(url) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const postData = async (postData) => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(postData),
//       });
//       if (!response.ok) {
//         throw new Error('Network response was not ok', response);
//       }
//       setIsLoading(false);
//       return await response.json();
//     } catch (error) {
//       setError(error);
//       setIsLoading(false);
//       throw error;
//     }
//   };

//   return { postData, isLoading, error };
// }

// export default usePost;
import { useState } from 'react';

function usePost(url) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (postData) => {
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // You can add any additional headers here if needed
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(
          `Network response was not ok. Status: ${response.status}, Message: ${errorMessage}`
        );
      }

      setIsLoading(false);
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      setError(error);
      setIsLoading(false);
      throw error;
    }
  };

  return { postData, isLoading, error };
}

export default usePost;
