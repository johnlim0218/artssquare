import { createConnection, getConnectionManager } from "typeorm";

export const connectDatabase = async() => {
  
  await createConnection();

  try {
    if(getConnectionManager().get().isConnected){
      return;
    }
  } catch(e) {
    console.error(e);
  }
  
}