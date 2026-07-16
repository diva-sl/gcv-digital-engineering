import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

// 📝 Define form data structure matching the Go backend binding struct
export interface ContactData {
  name: string;
  email: string;
  company: string;
  phone: string;
  services: string[];
  message: string;
}

interface BackendResponse {
  success: boolean;
  message?: string;
  error?: string;
}

// 🌐 Load your backend base URL from React env configurations (defaults to local Go server port 5000)
const API_BASE_URL =
  (import.meta as any).env.VITE_API_URL || "http://localhost:5000/api";

// 🚀 Send the form details securely via Axios post
const submitContactForm = async (
  data: ContactData,
): Promise<BackendResponse> => {
  const response = await axios.post<BackendResponse>(
    `${API_BASE_URL}/contact`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return response.data;
};

// 🎣 Custom hook exposing the mutation, loading status, and callbacks
export function useSubmitContact(
  onSuccessCallback: () => void,
  onErrorCallback: (errorMessage: string) => void,
) {
  return useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => {
      onSuccessCallback();
    },
    onError: (error: Error | AxiosError) => {
      let errorMessage = "Server failed to process contact form inquiry.";

      // 🔍 Safely extract detailed error messages from Axios response errors
      if (axios.isAxiosError(error) && error.response) {
        const responseData = error.response.data as BackendResponse;
        errorMessage = responseData.error || errorMessage;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      onErrorCallback(errorMessage);
    },
  });
}
