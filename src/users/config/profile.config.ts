import { registerAs } from '@nestjs/config';

export default registerAs('profileConfig', () => ({
  apiKeys: process.env.PROFILE_API_KEY
}));