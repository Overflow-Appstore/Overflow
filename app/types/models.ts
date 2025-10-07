export type Role = 'worker' | 'donor' | 'volunteer' | 'org_admin' | 'staff';

export interface UserProfile {
  uid: string;
  name: string;
  bio: string;
  role: Role;
  orgId?: string;
  location: {
    country: string;
    region?: string;
    coordinates?: { latitude: number; longitude: number };
  };
  languages: string[];
  verified: boolean;
  stats: {
    followers: number;
    follows: number;
    posts: number;
    donations: number;
  };
  avatarUrl?: string;
  createdAt: string;
}

export interface Organization {
  id: string;
  name: string;
  domain: string;
  description: string;
  regions: string[];
  verificationDocs: string[];
  languages: string[];
  createdAt: string;
}

export interface Project {
  id: string;
  ownerId: string;
  orgId?: string;
  tags: string[];
  country: string;
  status: 'active' | 'paused' | 'completed';
  title: string;
  summary: string;
  supportLinks?: string[];
  createdAt: string;
}

export interface Post {
  id: string;
  ownerId: string;
  mediaRefs: { type: 'image' | 'video'; url: string; thumbnailUrl?: string }[];
  caption: string;
  tags: string[];
  geo?: { latitude: number; longitude: number; placeName?: string };
  createdAt: string;
  visibility: 'public' | 'followers';
  likeCount: number;
  commentCount: number;
  shareCount: number;
}

export interface Follow {
  id: string;
  followerId: string;
  followeeId: string;
  createdAt: string;
}

export interface MessageThread {
  threadId: string;
  members: string[];
  lastMessage?: Message;
  unreadCountByUser: Record<string, number>;
  createdAt: string;
  updatedAt: string;
}

export interface Message {
  id: string;
  threadId: string;
  senderId: string;
  content: string;
  contentType: 'text' | 'image' | 'video';
  createdAt: string;
  safeFlagged: boolean;
}

export interface Donation {
  id: string;
  userId: string;
  orgId?: string;
  projectId?: string;
  amount: number;
  currency: string;
  status: 'pending' | 'succeeded' | 'failed' | 'refunded';
  stripePaymentIntentId: string;
  createdAt: string;
}

export interface Report {
  id: string;
  reporterId: string;
  targetRef: { type: 'user' | 'post' | 'message'; id: string };
  reason: string;
  action: 'queued' | 'warned' | 'suspended' | 'dismissed';
  createdAt: string;
  updatedAt?: string;
}

export interface VolunteerIntent {
  id: string;
  userId: string;
  orgId: string;
  projectId?: string;
  skills: string[];
  availability: string;
  notes?: string;
  consentToShare: boolean;
  createdAt: string;
}

export interface DailyHighlight {
  id: string;
  profileId: string;
  curatedOn: string;
  featuredBy: string;
  reason: string;
}
