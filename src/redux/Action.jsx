import { Set, 
    Sort_Asc,
     Sort_Dsc,
      Sort_Date_Asc,
       Sort_Date_Dsc,
        Sort_Expilicit, 
        Sort_Quality_Asc,
        Sort_Quality_Dsc } from "./ActionTypes";

        import axios from "axios";

        function Action(){
axios 
.get(`https://fast-reef-22226.herokuapp.com/data`).then((res)=>{
    const users = res.data
    console.log(users)
})
.catch(e=>{
    const eM=e.message
})
        }

        export default Action