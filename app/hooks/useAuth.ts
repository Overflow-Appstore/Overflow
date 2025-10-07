import { useCallback } from 'react';
import { signOut as firebaseSignOut, getAuth } from 'firebase/auth';
import { useToast } from '@/components/ToastProvider';

export function useAuth() {
  const { showToast } = useToast();
  const auth = getAuth();

  const signOut = useCallback(async () => {
    await firebaseSignOut(auth);
    showToast('Signed out', 'info');
  }, [auth, showToast]);

  return {
    signOut,
  };
}
