'use client';
import { useEffect, useState } from 'react';

export default function TypedRoles({ roles }: { roles: readonly string[] }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 35 : 70;
    const holdAtFull = !deleting && text === current;
    const timeout = setTimeout(
      () => {
        if (holdAtFull) {
          setDeleting(true);
          return;
        }
        if (deleting) {
          if (text === '') {
            setDeleting(false);
            setRoleIndex((i) => (i + 1) % roles.length);
          } else {
            setText(current.slice(0, text.length - 1));
          }
        } else {
          setText(current.slice(0, text.length + 1));
        }
      },
      holdAtFull ? 1400 : speed,
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, roles]);

  return (
    <span>
      {text}
      <span className="animate-cursor text-foreground/40">|</span>
    </span>
  );
}
