import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";


export default function ArticleDetails() {


const { id } = useParams();

const [article,setArticle] = useState(null);
const [loading,setLoading] = useState(true);





useEffect(()=>{

getArticle();

},[]);





const getArticle = async()=>{

try{


const res = await api.get(
`/articles/${id}`
);


setArticle(res.data.article);


}
catch(error){

console.log(error);

}
finally{

setLoading(false);

}


};






if(loading){

return(

<div className="
min-h-screen
flex
items-center
justify-center
text-xl
">

Loading Article...

</div>

)

}





if(!article){

return(

<div className="
min-h-screen
flex
items-center
justify-center
text-xl
">

Article Not Found

</div>

)

}





return (

<div className="
min-h-screen
bg-orange-50
py-16
">


<div className="
max-w-5xl
mx-auto
px-6
bg-white
rounded-3xl
shadow-lg
p-10
">



{/* Image */}

<img

src={article.image}

alt={article.title}

className="
w-full
h-[400px]
object-cover
rounded-2xl
"

/>





{/* Category */}

<span className="
inline-block
mt-8
bg-orange-100
text-orange-600
px-4
py-2
rounded-full
font-semibold
">

{article.category}

</span>





{/* Title */}

<h1 className="
text-5xl
font-bold
mt-6
text-gray-900
">

{article.title}

</h1>





{/* Author */}

<div className="
flex
gap-6
mt-5
text-gray-500
">


<span>

👤 {article.author}

</span>


<span>

📚 {article.category}

</span>


</div>





{/* Description */}

<p className="
mt-8
text-xl
text-gray-600
leading-8
">

{article.description}

</p>






{/* Full Content */}

<div className="
mt-10
text-gray-800
text-lg
leading-9
whitespace-pre-line
">


{article.content}


</div>



</div>


</div>


)

}