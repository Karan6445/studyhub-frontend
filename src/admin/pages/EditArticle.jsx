import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/axios";


export default function EditArticle(){


const {id}=useParams();

const navigate=useNavigate();


const [formData,setFormData]=useState({

title:"",
category:"",
author:"",
image:"",
description:"",
content:""

});





useEffect(()=>{

fetchArticle();

},[]);





const fetchArticle=async()=>{

try{

const res=await api.get(`/articles/${id}`);


setFormData(res.data.article);


}
catch(error){

console.log(error);

}

};






const handleChange=(e)=>{

setFormData({

...formData,

[e.target.name]:e.target.value

});

};







const handleSubmit=async(e)=>{

e.preventDefault();


try{


await api.put(

`/articles/${id}`,

formData

);


alert("Article Updated Successfully");


navigate("/admin/articles");


}
catch(error){

console.log(error);

alert("Update failed");

}


};






return(

<div className="
bg-white
rounded-xl
shadow
p-6
">


<h1 className="
text-3xl
font-bold
mb-6
">

Edit Article

</h1>




<form
onSubmit={handleSubmit}
className="space-y-5"
>


<input

name="title"

value={formData.title}

onChange={handleChange}

className="w-full border p-3 rounded"

placeholder="Title"

/>



<input

name="category"

value={formData.category}

onChange={handleChange}

className="w-full border p-3 rounded"

placeholder="Category"

/>



<input

name="author"

value={formData.author}

onChange={handleChange}

className="w-full border p-3 rounded"

placeholder="Author"

/>



<input

name="image"

value={formData.image}

onChange={handleChange}

className="w-full border p-3 rounded"

placeholder="Image URL"

/>




<textarea

name="description"

value={formData.description}

onChange={handleChange}

className="w-full border p-3 rounded"

placeholder="Description"

/>



<textarea

name="content"

value={formData.content}

onChange={handleChange}

rows="10"

className="w-full border p-3 rounded"

placeholder="Content"

/>




<button

className="
bg-orange-500
text-white
px-6
py-3
rounded-lg
font-semibold
"

>

Update Article

</button>



</form>


</div>


)

}