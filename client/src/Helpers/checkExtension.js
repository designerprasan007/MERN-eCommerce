export const checkExtension = (file) =>{
   var mimeType=file['type'];//mimeType=image/jpeg or application/pdf etc...
       if(mimeType.split('/')[0] === 'image'){
         return true
       }
       else{
         return false
       }   
}
