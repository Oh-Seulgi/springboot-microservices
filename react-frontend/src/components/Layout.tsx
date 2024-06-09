import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();

  const handleProductClick = (path: string) => {
    navigate(path);
  };

  return (
    <div>
      <h3>메인임</h3>
      <button onClick={() => handleProductClick("/")}>홈 버튼임 ㅋ</button>
      <button onClick={() => handleProductClick("apiTest")}>
        ApiTest 화면으로
      </button>
      <Outlet />
    </div>
  );
}
