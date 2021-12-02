import { IconNames } from '@components/Icon';

import Module from '@models/Module';
import User from '@models/User';

export interface CourseInfo {
  sections?: { title: string; description: string }[];
  features?: { title: string; details: string[] }[];
}

export interface PlanInfo {
  products?: string[];
}

export enum ProductType {
  Plan = 'plan',
  Course = 'course',
}

export enum ProductStatus {
  Processing = 'processing',
  Paid = 'paid',
  Declined = 'declined',
  Refunding = 'refunding',
  Refunded = 'refunded',
  Canceling = 'canceling',
  Canceled = 'canceled',
  Pending = 'pending',
}

export enum PreviewProviders {
  YOUTUBE = 'youtube',
}

interface Product<FeatureType = PlanInfo & CourseInfo> {
  id: string;
  type: ProductType;
  title: string;
  cart_icon: IconNames | null;
  cart_icon_bg_color: string | null;
  description: string;
  thumbnail: string;
  slug: string;
  features: FeatureType;
  sections?: string;
  details?: string;
  price: number;
  duration: number;
  max_installments?: number;
  modules: Module[];
  partner?: User;
  is_active_sell?: boolean;
  is_active?: boolean;
}

export interface Course extends Product<CourseInfo> {
  type: ProductType.Course;
  preview?: string;
  preview_provider?: PreviewProviders;
}

export interface Plan extends Product<PlanInfo> {
  type: ProductType.Plan;
}

export default Product;
