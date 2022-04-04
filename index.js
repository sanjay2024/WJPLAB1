
const validate=()=>
{
        var name=document.getElementById("name").value;
var dob=document.getElementById("dob").value;
var department=document.getElementById("branch").value;
var form=document.getElementById("form");
        //  console.log("sanjay");
        if(name!="sanjay")
        {
                alert('please enter the correct name !!!!!!!!!');
                return false;
        };
        if(dob!="05.03.2003")
        {
                alert('please enter the correct dob !!!!!!!!!');
                return false;
        }
        if(department!="IT")
        {
                alert('please enter the choose the correct branch !!!!!!!!!');
                return false;
        }
         form.submit();
}
