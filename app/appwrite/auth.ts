import { account, database,appwriteconfig } from '~/appwrite/client';
import { OAuthProvider } from 'appwrite';
import { redirect } from 'react-router';

export const loginWithGoogle = async () =>{
  try{
      account.createOAuth2Session(OAuthProvider.Google)

  }catch(e){
    console.log( 'loginWithGoogle' , e)
  }
}

export const logoutUser = async () =>{
  try{

  }catch(e){
    console.log(e)
  }
}
export const getUser = async () =>{
  try{
     const user = await account.get()

    if(!user) return redirect('/sign-in')

    const documents = await database.listDocuments(
      appwriteconfig.databaseId,
      appwriteconfig.userCollectionId,


    )
  }catch(e){
    console.log(e)
  }
}
export const getGooglePicture = async () =>{
  try{

  }catch(e){
    console.log(e)
  }
}
export const storeUserData = async () =>{
  try{

  }catch(e){
    console.log(e)
  }
}
export const getExistingUser = async () =>{
  try{

  }catch(e){
    console.log(e)
  }
}