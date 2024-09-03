class EnvironmentService {
  get API_URL() {
    const apiUrl = import.meta.env.VITE_API_URL;
    return apiUrl || '';
  }
}

export const environmentService = new EnvironmentService();
