import React from 'react';

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  size: 'small' | 'medium' | 'large';
  metric?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  benefits: string[];
}

export enum SectionType {
  HERO = 'hero',
  FEATURES = 'features',
  SERVICES = 'services',
  METRICS = 'metrics',
  CONTACT = 'contact',
}