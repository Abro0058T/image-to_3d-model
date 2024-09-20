import axios from 'axios';
import React from 'react'

function FormInterface({setData, setFurniture}) {
        const handleFileUpload = (event) => {
          const file = event.target.files[0];
          const formData = new FormData();
          formData.append("file", file);
          axios
            .post("http://localhost:5000/wall", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin":"*"
              },
            })
            .then((response) => {
              console.log(response.data.furniture);
              // console.log(response.data['furnitureCoordinate'])
              // console.log(JSON.parse(response.data));

              setFurniture(response.data.furniture);
              setData(response.data.wall);

            })
            .catch((error) => {
              console.log(error);
            });

            // axios
            // .post("http://localhost:5000/wall", formData, {
            //   headers: {
            //     "Content-Type": "multipart/form-data",
            //     "x-rapidapi-host": "file-upload8.p.rapidapi.com",
            //     "x-rapidapi-key": "your-rapidapi-key-here",
            //   },
            // })
            // .then((response) => {
            //   console.log(response);
            //   setData(response.data);
            // })
            // .catch((error) => {
            //   console.log(error);
            // });
        }

  return (
    <div>
        <input type="file" onChange={handleFileUpload} />
    </div>
  )
}

export default FormInterface