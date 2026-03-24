const Loading = () => {
  const pulseStyle = (width: string, height = '16px'): React.CSSProperties => ({
    width,
    height,
    borderRadius: '4px',
    backgroundColor: 'rgba(240, 80, 35, 0.12)',
    animation: 'pulse 1.2s ease-in-out infinite'
  });

  return (
    <div
      style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '48px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}
    >
      <div style={pulseStyle('45%', '28px')} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={pulseStyle('100%')} />
        <div style={pulseStyle('90%')} />
        <div style={pulseStyle('75%')} />
        <div style={pulseStyle('85%')} />
        <div style={pulseStyle('60%')} />
      </div>
      <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }`}</style>
    </div>
  );
};

export default Loading;
