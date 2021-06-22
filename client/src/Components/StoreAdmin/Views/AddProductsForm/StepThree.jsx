import {useState} from 'react';
// import {Button} from '@material-ui/core'
import './StepForm.css'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import 'draft-js/dist/Draft.css';

const StepThree = ({PrevPage, NextPage, productData, setProductData}) =>{
	 const [editorState, setEditorState] = useState();
	 const onEditorStateChange = (val) => {
	 	console.log(val)
	 }

	return (
		<div className="container-fluid">
			<Editor
			  editorState={editorState}
			  toolbarClassName="toolbarClassName"
			  wrapperClassName="wrapperClassName"
			  editorClassName="editorClassName"
			  onEditorStateChange={onEditorStateChange}
			/>;
		</div>
		)
}

export default StepThree