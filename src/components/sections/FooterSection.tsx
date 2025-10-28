'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function FooterSection() {
  const params = useParams();

  return (
    <footer className="py-12 px-4 bg-muted/30 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Vitorio</h3>
            <p className="text-muted-foreground">Building amazing web experiences</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors">
                <img src="/Git.svg" alt="GitHub" className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors">
                <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" className="text-muted-foreground hover:text-primary transition-colors">
                <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="text-2xl">🐙</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="text-2xl">💼</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="text-2xl">🐦</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="text-2xl">💻</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted text-center text-muted-foreground">
          <p>&copy; 2024 Vitorio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}