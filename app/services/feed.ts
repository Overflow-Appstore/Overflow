import { Post } from '@/types/models';

export async function fetchHomeFeed(): Promise<Post[]> {
  // TODO: integrate with Firestore + caching.
  return [
    {
      id: 'post-1',
      ownerId: 'user-1',
      mediaRefs: [{ type: 'image', url: 'https://picsum.photos/seed/feed/800/600' }],
      caption: 'Delivering nutrition kits to families in Kisumu.',
      tags: ['nutrition', 'kenya'],
      createdAt: new Date().toISOString(),
      visibility: 'public',
      likeCount: 24,
      commentCount: 6,
      shareCount: 3,
    },
  ];
}
