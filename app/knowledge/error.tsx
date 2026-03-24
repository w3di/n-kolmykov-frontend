'use client';

const KnowledgeError = ({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        gap: '16px',
        padding: '16px',
        textAlign: 'center'
      }}
    >
      <h2 style={{ margin: 0, fontSize: '24px' }}>
        Не удалось загрузить раздел
      </h2>
      <p style={{ margin: 0, color: '#888', fontSize: '14px' }}>
        {error.message || 'Произошла ошибка при загрузке данных'}
      </p>
      <button
        onClick={reset}
        style={{
          marginTop: '8px',
          padding: '10px 24px',
          backgroundColor: '#f05023',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          fontSize: '14px',
          cursor: 'pointer'
        }}
      >
        Попробовать снова
      </button>
    </div>
  );
};

export default KnowledgeError;
