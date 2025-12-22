interface ErrorMessageProps {
  children: React.ReactNode;
}

export default function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <p style={{ color: 'var(--color-alert)', padding: '0' }}>
      {children}
    </p>
  );
}
