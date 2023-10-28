import { useNavigate } from "react-router-dom";

export default function OpenPage(arg) {
    console.log(arg);
    const navigate = useNavigate();

    navigate(arg);
};