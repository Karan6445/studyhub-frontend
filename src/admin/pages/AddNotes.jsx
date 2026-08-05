import { useState } from "react";
import api from "../../api/axios";


const AddNotes = () => {


const [note,setNote] = useState({

subject:"",
semester:"",
description:"",
pdf:null

});


const [loading,setLoading] = useState(false);





const handleChange=(e)=>{


const {name,value,files}=e.target;


if(name==="pdf"){

setNote({

...note,

pdf:files[0]

});


}
else{


setNote({

...note,

[name]:value

});


}


};







const handleSubmit=async(e)=>{


e.preventDefault();



try{


setLoading(true);



const formData = new FormData();


formData.append(
"subject",
note.subject
);


formData.append(
"semester",
note.semester
);


formData.append(
"description",
note.description
);



formData.append(
"pdf",
note.pdf
);





const res = await api.post(

"/notes",

formData,

{

headers:{

"Content-Type":"multipart/form-data"

}

}

);




alert(res.data.message);



setNote({

subject:"",
semester:"",
description:"",
pdf:null

});



}
catch(error){


console.log(error);


alert(

error.response?.data?.message ||
"Upload failed"

);


}
finally{

setLoading(false);

}


};






return (

<div className="bg-white rounded-xl shadow p-8">


<h1 className="text-3xl font-bold mb-8">

Upload Notes

</h1>





<form

onSubmit={handleSubmit}

className="space-y-5"

>



<input

type="text"

name="subject"

value={note.subject}

placeholder="Subject Name"

className="
w-full
border
rounded-lg
p-3
"

onChange={handleChange}

/>






<select

name="semester"

value={note.semester}

className="
w-full
border
rounded-lg
p-3
"

onChange={handleChange}

>


<option value="">
Select Semester
</option>


<option>
Semester 1
</option>


<option>
Semester 2
</option>


<option>
Semester 3
</option>


<option>
Semester 4
</option>


<option>
Semester 5
</option>


<option>
Semester 6
</option>


<option>
Semester 7
</option>


<option>
Semester 8
</option>



</select>






<textarea

name="description"

value={note.description}

rows="4"

placeholder="Description"

className="
w-full
border
rounded-lg
p-3
"

onChange={handleChange}

/>







<input

type="file"

name="pdf"

accept=".pdf"

className="
w-full
border
rounded-lg
p-3
"

onChange={handleChange}

/>







<button

disabled={loading}

className="
bg-orange-500
hover:bg-orange-600
disabled:bg-orange-300
text-white
px-6
py-3
rounded-lg
"

>

{

loading ?

"Uploading..."

:

"Upload Notes"

}


</button>



</form>


</div>


);


};


export default AddNotes;