import React, { useState } from 'react';
import Level6Img from '../Imgs/Level6.PNG'





const Level6 = () => {
    return (
  
      <div className='Level6container'>
          <img class="Level6Img" src={Level6Img} />
      </div>
    )
  }
  export default Level6



















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
  


