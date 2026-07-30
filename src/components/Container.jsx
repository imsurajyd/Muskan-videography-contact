
const Container = ({ children, className = "" }) => {
  return (
    <div className={`app-container ${className}`}>
      {children}
    </div>
  );
};

export default Container;