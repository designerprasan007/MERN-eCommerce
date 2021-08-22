import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Editor = ({setdescription, editSpeci, productData}) =>{
    return(
        <div>
             <CKEditor
                editor={ ClassicEditor }
                data={editSpeci === '' ?  productData?.productSpeci : editSpeci}
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    setdescription(data)
                } }
                onBlur={ ( event, editor ) => {
                    console.log( 'Blur.', editor );
                } }
                onFocus={ ( event, editor ) => {
                    console.log( 'Focus.', editor );
                } }
            />
        </div>
    )
}
export default Editor