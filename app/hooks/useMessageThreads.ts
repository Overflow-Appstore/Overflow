import { useMemo } from 'react';
import { MessageThread } from '@/types/models';

export function useMessageThreads(): MessageThread[] {
  return useMemo(() => ([
    {
      threadId: 'thread-1',
      members: ['Grace'],
      lastMessage: {
        id: 'msg-1',
        threadId: 'thread-1',
        senderId: 'Grace',
        content: 'Thank you for the support update! We received the supplies.',
        contentType: 'text',
        createdAt: new Date().toISOString(),
        safeFlagged: false,
      },
      unreadCountByUser: { current: 0 },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ]), []);
}
