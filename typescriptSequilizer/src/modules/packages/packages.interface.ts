import { Request } from 'express';

/**
 * Package object interface
 */
export interface Package {
  id?: string;
  original_id?: number;
  title?: string;
  device_type?: string;
  payment_mode?: string;
  auto_renewal?: string;
  is_corporate?: string;
  no_of_validity_days?: string;
  charge_amount?: string;
  display_amount?: string;
  data_pack_name?: string;
  is_active: number;
  created_at?: Date;
  updated_at?: Date;
}

/**
 * PackageRequest object interface
 */
export interface PackageRequest extends Request {
  package: Package;
}
