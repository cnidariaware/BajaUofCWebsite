import { useNavigate } from "react-router-dom";

const OpenPage = (arg) => {    
    const navigate = useNavigate();
    navigate(arg);
    console.log(arg);

};

export default OpenPage;