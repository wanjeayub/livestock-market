export const Header = () => {
  return (
    <div className="container flex flex-row items-center justify-between p-3">
      <div className="main ">
        <div className="logo">Livestock Market</div>
      </div>
      <div className="menu">
        <ul className="flex flex-row gap-3 items-center">
          <li>Account</li>
          <li>Cart</li>
          <li>Help</li>
        </ul>
      </div>
    </div>
  );
};
