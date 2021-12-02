import User from '@models/User';

export enum Features {
  COMMUNITY = 'community',
}

interface UserFeatures {
  feature: Features;
  user: User;
  is_active: boolean;
}

export default UserFeatures;
