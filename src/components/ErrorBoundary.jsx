import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      const status = this.state.error?.status;

      if (status === 400) return <div>Ошибка 400: неверный запрос</div>;
      if (status === 404) return <div>Ошибка 404: не найдено</div>;

      return <div>{this.state.error.message}</div>;
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
