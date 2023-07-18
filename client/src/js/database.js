//IMPORT THE IDB PACKAGE AND CREATE A CONNECTION TO THE DATABASE
import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// LOGIC FOR A METHOD THAT ADDS CONTENT TO THE DATABASE
export const putDb = async (content) => {
  console.log("Update the database");

  //THIS IS TO CREATE A CONNECTION TO THE DATABASE FOR THE VERSION WE WANT TO USE
  const textDb = await openDB("jate", 1);
  //THE IS A NEW TRANSACTION AND SPECIFY THE DATABASE AND DATA PRIVILEGES
  const tx = textDb.transaction("jate", "readwrite");
  // THIS IS TO OPEN UP THE DESIRED OBJECT STORE
  const store = tx.objectStore("jate");
  //THE .PUT() METHOD IS USED ON THE STORE AND CONTENT PASSED IN
  const request = store.put({ id: 1, value: content });
  // RESULT IS THE RETURNED VALUE FROM THE REQUEST
  const result = await request;
  console.log("🚀 - data saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
// LOGIC FOR A METHOD THAT GETS ALL THE CONTENT FROM THE DATABASE
export const getDb = async () => {
  console.log("GET from the database");

  //A CONNECTION TO THE DATABASE FOR THE VERSION WE WANT TO USE
  const textDb = await openDB("jate", 1);
  //THIS IS A NEW TRANSACTION AND SPECIFY THE DATABASE AND DATA PRIVILEGES
  const tx = textDb.transaction("jate", "readonly");
  // THIS IS TO OPEN UP THE DESIRED OBJECT STORE
  const store = tx.objectStore("jate");
  // THE REQUEST IS THE RETURNED VALUE FROM THE STORE USING THE .GET() METHOD
  const request = store.get(1);
  //REQUEST CONFIRMS THE DATA IS RETURNED
  const result = await request;
  console.log("result.value", result);
  return result?.value;
};

initdb();
