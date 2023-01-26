import React, { useState } from 'react';
import Level5Img from '../Imgs/Level5.PNG'





const Level5 = () => {
    return (
  
      <div className='Level5container'>
          <img class="Level5Img" src={Level5Img} />
      </div>
    )
  }
  export default Level5



















//   import React, { useState } from 'react';
//   import { Document, Page } from 'react-pdf';
  
  
  
  
  
  
//   const Level4 = () => {
  
//       const [numPages, setNumPages] = useState(null);
//       const [pageNumber, setPageNumber] = useState(1);
//       function onDocumentLoadSuccess({ numPages }) {
//           setNumPages(numPages);
//       }
  
  
//       return (
    
//         <div className='Level4container'>
//              <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
//                   <Page pageNumber={pageNumber} />
//               </Document>
//               <p>
//                   Page {pageNumber} of {numPages}
//               </p>
//         </div>
//       )
//     }
//     export default Level4
  


