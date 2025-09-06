const TrophyIcon = ({ icon, className = '' }) => {
  // Check if icon is SVG string
  if (icon && icon.startsWith('<svg')) {
    return (
      <span 
        className={className}
        dangerouslySetInnerHTML={{ __html: icon }}
      />
    );
  }
  
  // Return emoji or other icon
  return <span className={className}>{icon}</span>;
};

export default TrophyIcon;