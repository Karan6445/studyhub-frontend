import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";


const ManageArticles = () => {


const [articles,setArticles] = useState([]);

const [loading,setLoading] = useState(true);


const navigate = useNavigate();





// ================= FETCH ARTICLES =================

useEffect(()=>{

fetchArticles();

},[]);





const fetchArticles = async()=>{


try{


const res = await api.get("/articles");


setArticles(res.data.articles);



}
catch(error){

console.log(error);

}
finally{

setLoading(false);

}


};







// ================= DELETE ARTICLE =================


const handleDelete = async(id)=>{


const confirmDelete = window.confirm(
"Are you sure you want to delete this article?"
);



if(!confirmDelete) return;




try{


await api.delete(`/articles/${id}`);



alert("Article deleted successfully");



fetchArticles();



}
catch(error){


console.log(error);


alert("Delete failed");


}


};







// ================= EDIT ARTICLE =================


const handleEdit = (id)=>{


navigate(`/admin/edit-article/${id}`);


};







return (

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

Manage Articles

</h1>






{

loading ? (

<p className="text-center text-lg">

Loading articles...

</p>


)


:

articles.length === 0 ? (


<p className="
text-center
text-lg
">

No Articles Found

</p>


)


:


(



<div className="overflow-x-auto">


<table className="w-full">



<thead>


<tr className="bg-gray-100">


<th className="p-3 text-left">

Title

</th>


<th className="p-3">

Category

</th>


<th className="p-3">

Author

</th>


<th className="p-3">

Actions

</th>


</tr>


</thead>





<tbody>



{

articles.map((article)=>(



<tr

key={article._id}

className="
border-b
hover:bg-gray-50
transition
"



>



<td className="p-3 font-medium">

{article.title}

</td>





<td className="text-center">

{article.category}

</td>





<td className="text-center">

{article.author}

</td>





<td className="text-center">


<button


onClick={()=>handleEdit(article._id)}


className="
bg-blue-500
hover:bg-blue-600
text-white
px-4
py-2
rounded
mr-2
transition
"


>


Edit


</button>








<button


onClick={()=>handleDelete(article._id)}


className="
bg-red-500
hover:bg-red-600
text-white
px-4
py-2
rounded
transition
"


>


Delete


</button>





</td>





</tr>



))


}




</tbody>





</table>


</div>


)



}





</div>


);


};


export default ManageArticles;