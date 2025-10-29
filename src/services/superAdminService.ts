import api from './api';

export interface SendInvitationRequest {
  email: string;
}

export interface SendInvitationResponse {
  message: string;
}

export const sendAdminInvitation = async (
  email: string
): Promise<SendInvitationResponse> => {
  const response = await api.post<SendInvitationResponse>(
    '/superadmin/grant-admin-access',
    { email }
  );
  return response.data;
};
