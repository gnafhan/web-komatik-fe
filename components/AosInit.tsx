'use client';
import { useEffect } from 'react';
import { initAOS } from '@/lib/aos';

export default function AosInit() {
  useEffect(() => {
    initAOS();
  }, []);

  return null;
}