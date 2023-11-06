import React from 'react';
import ReactDOM from 'react-dom';
import D100injuries from './d100injuries.tsx';
import D100LibraryBooks from './d100librarybooks.tsx';
import D100SeaEncounters from './d100seaencounters.tsx';
import D100ForestLootItems from './d100forestlootitems.tsx';
import D100CampingintheForest from './d100campingintheforest.tsx';

const rootElement = document.getElementById('root');

// // Definieer een interface voor je component props
// interface D100injuriesProps {
//   csvFilePath: string;
// }

// // Gebruik deze interface in je component definitie
// const D100injuries: React.FC<D100injuriesProps> = ({ csvFilePath }) => {
//   // Rest van je component code...
// };


if (rootElement) {
  const pathname = window.location.pathname;

  if (pathname === '/d100injuries.html') {
    ReactDOM.render(
      <React.StrictMode>
        <D100injuries />
      </React.StrictMode>,
      rootElement
    );
  } else if (pathname === '/d100librarybooks.html') {
    ReactDOM.render(
      <React.StrictMode>
        <D100LibraryBooks />
      </React.StrictMode>,
      rootElement
    );
  } else if (pathname === '/d100seaencounters.html') {
    ReactDOM.render(
      <React.StrictMode>
        <D100SeaEncounters />
      </React.StrictMode>,
      rootElement
    );
  } else if (pathname === '/d100forestlootitems.html') {
    ReactDOM.render(
      <React.StrictMode>
        <D100ForestLootItems />
      </React.StrictMode>,
      rootElement
    );
  } else if (pathname === '/d100campingintheforest.html') {
    ReactDOM.render(
      <React.StrictMode>
        <D100CampingintheForest />
      </React.StrictMode>,
      rootElement
    );
  }
}
