// import React, { useState, useEffect } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Gallery = () => {
  return (
    <div>
      <h2>Photo Gallery</h2>
      <div>
        <a href="https://photos.app.goo.gl/HYmKkPbN7jT5kiFC8" target="_blank">Mass of Remembrance 2021</a>
      </div>
      <div>
        <a href="https://photos.app.goo.gl/BRMWPn6d2fKJwpv69">Family Fun Night 2019</a>
      </div>
      <div>
        <a href="https://photos.app.goo.gl/scAliTXOgRKmlh6E3">Easter Celebration Malden 2018</a>
      </div>
      <div>
        <a href="https://photos.app.goo.gl/nIiSJQBXjaHMRs672">Mass for Typhoon Haiyan Victims</a>
      </div>
      <div>
        <a href="https://photos.app.goo.gl/TbYIsfyC7Tq9q2Q73">Mass with Cardinal O'Malley</a>
      </div>
      <div>
        <a href="https://photos.app.goo.gl/cQQO44xIpfLd39sG2">Family Fun Night 2013</a>
      </div>
      <div>
        <a href="https://photos.app.goo.gl/5NtSYVdgE3z65V3s2">Christmas in Malden 2012</a>
      </div>
    </div>
  );
}
// const Gallery = () => {
//   const [photos, setPhotos] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);  // Adding loading state

//   useEffect(() => {
//     fetch(`${API_BASE_URL}/photo_gallery/photos`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${localStorage.getItem("access_token")}`, // Make sure to use the token
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.photos) {
//           setPhotos(data.photos); // Set the list of photo URLs
//           setLoading(false);  // Set loading to false when the data is fetched
//         } else {
//           setError("Failed to fetch photos");
//           setLoading(false); // Stop loading if there's an error
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching photos:", err);
//         setError("Failed to fetch photos");
//         setLoading(false);  // Stop loading if there's an error
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading photos...</div>;  // Show loading indicator
//   }

//   return (
//     <div>
//       <h2>Photo Gallery</h2>
      
//       {error && <p>{error}</p>} {/* Show error if there's any */}

//       <div className="gallery">
//         {photos.length === 0 ? (
//           <p>No photos to display</p>
//         ) : (
//           photos.map((photoUrl, index) => (
//             <div key={index} className="gallery-item">
//               <img src={photoUrl} alt={`Photo ${index + 1}`} />
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

export default Gallery;
