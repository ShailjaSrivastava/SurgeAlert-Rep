const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

/**
 * Build a full URL from a path, handling both relative and absolute base URLs
 */
function buildUrl(path, params = {}) {
  // If API_BASE_URL is relative (like "/api"), resolve against window.location.origin
  let fullUrl;
  if (API_BASE_URL.startsWith('http')) {
    fullUrl = `${API_BASE_URL}${path}`;
  } else {
    fullUrl = `${window.location.origin}${API_BASE_URL}${path}`;
  }

  const url = new URL(fullUrl);
  Object.entries(params).forEach(([key, value]) => {
    if (value != null) url.searchParams.append(key, value.toString());
  });
  return url.toString();
}

/**
 * Helper to handle API responses and throw errors cleanly
 */
async function handleResponse(response) {
  if (!response.ok) {
    let errorMessage = `API Error: ${response.status} ${response.statusText}`;
    try {
      const errorData = await response.json();
      if (errorData.detail) {
        errorMessage = Array.isArray(errorData.detail) 
          ? errorData.detail.map(e => e.msg).join(', ') 
          : errorData.detail;
      } else if (errorData.message) {
        errorMessage = errorData.message;
      }
    } catch (e) {
      // Ignore if response is not JSON
    }
    throw new Error(errorMessage);
  }
  return response.json();
}

export const api = {
  /**
   * Submit a new emergency report
   * @param {Object} data - The report data
   * @param {string} data.type - 'TRAFFIC' or 'ACCIDENT'
   * @param {string} data.description
   * @param {number} data.latitude
   * @param {number} data.longitude
   * @param {string} data.address
   * @param {File[]} [data.images] - Array of image files
   * @returns {Promise<Object>} The created report confirmation
   */
  async submitReport(data) {
    const formData = new FormData();
    formData.append('user_id', data.user_id || `user_${Math.random().toString(36).substring(7)}`);
    formData.append('type', data.type);
    formData.append('description', data.description);
    formData.append('latitude', data.latitude.toString());
    formData.append('longitude', data.longitude.toString());
    formData.append('address', data.address);

    if (data.images && data.images.length > 0) {
      data.images.forEach(image => {
        formData.append('images', image);
      });
    }

    const response = await fetch(buildUrl('/reports'), {
      method: 'POST',
      body: formData,
    });

    return handleResponse(response);
  },

  /**
   * Fetch recent reports, optionally filtered by type and location
   * @param {Object} [filters]
   * @param {string} [filters.type]
   * @param {number} [filters.latitude]
   * @param {number} [filters.longitude]
   * @returns {Promise<Array>} List of reports
   */
  async getReports(filters = {}) {
    const response = await fetch(buildUrl('/reports', filters), {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    return handleResponse(response);
  },

  /**
   * Check if the API and Firestore are healthy
   * @returns {Promise<Object>}
   */
  async checkHealth() {
    const response = await fetch(buildUrl('/health/firestore'), {
      method: 'GET',
    });
    return handleResponse(response);
  }
};
