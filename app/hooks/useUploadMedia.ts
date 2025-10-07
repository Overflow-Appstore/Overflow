import { useToast } from '@/components/ToastProvider';

interface UploadPayload {
  uri: string;
  caption: string;
  location: string;
  tags: string;
}

export function useUploadMedia() {
  const { showToast } = useToast();

  return async (payload: UploadPayload) => {
    // TODO: integrate Firebase Storage upload + Cloud Function.
    console.log('Uploading media', payload.uri);
    showToast('Post scheduled for upload', 'success');
  };
}
