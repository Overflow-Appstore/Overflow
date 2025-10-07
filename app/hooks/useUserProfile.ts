import { useEffect, useState } from 'react';
import { UserProfile } from '@/types/models';

export function useUserProfile() {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    // TODO: fetch from Firestore / React Query.
    setProfile({
      uid: 'user-current',
      name: 'Overflow Staff',
      bio: 'Supporting changemakers globally.',
      role: 'worker',
      orgId: 'org-1',
      location: { country: 'Kenya' },
      languages: ['en', 'fr'],
      verified: true,
      stats: { followers: 120, follows: 85, posts: 34, donations: 12 },
      avatarUrl: undefined,
      createdAt: new Date().toISOString(),
    });
  }, []);

  return profile;
}
