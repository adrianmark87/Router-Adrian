import { useLocation } from "react-router-dom";
export default function Marketing() {
  const location = useLocation();
  console.log(location);

  return <div> Nos services de marketing </div>;
}
