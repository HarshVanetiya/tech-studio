import Link from 'next/link';
import { ArrowUpRight, ArrowRight, LoaderCircle } from 'lucide-react';
import ButtonFx from './ButtonFx';

type Common = {
  children: string;
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'hero';
  icon?: 'up-right' | 'right';
  className?: string;
};

type AsLink = Common & { href: string };
type AsButton = Common & { type: 'submit' | 'button'; pending?: boolean; disabled?: boolean; onClick?: () => void };

// Studio pill button: a fill that blooms out of the icon well, a rolling label,
// and an arrow that exits and re-enters on hover. Motion lives in globals.css (.btn).
export default function Button(props: AsLink | AsButton) {
  const { children, variant = 'dark', size = 'md', icon = 'up-right', className = '' } = props;
  const pending = 'pending' in props && props.pending;
  const Arrow = icon === 'right' ? ArrowRight : ArrowUpRight;

  const classes = `btn btn-${variant} btn-${size} btn-icon-${icon} ${className}`;
  const inner = (
    <>
      <span className="btn-label" key={pending ? 'pending' : 'idle'} aria-hidden={pending || undefined}>
        <span>{pending ? 'Sending…' : children}</span>
        <span aria-hidden="true">{pending ? 'Sending…' : children}</span>
      </span>
      <span className="btn-icon" aria-hidden="true">
        {pending ? (
          <LoaderCircle className="btn-spinner" />
        ) : (
          <>
            <Arrow className="btn-arrow" />
            <Arrow className="btn-arrow btn-arrow-next" />
          </>
        )}
      </span>
    </>
  );

  if ('href' in props) {
    const { href } = props;
    if (href.startsWith('/')) {
      return (
        <ButtonFx>
          <Link href={href} className={classes}>
            {inner}
          </Link>
        </ButtonFx>
      );
    }
    return (
      <ButtonFx>
        <a href={href} className={classes}>
          {inner}
        </a>
      </ButtonFx>
    );
  }

  return (
    <ButtonFx>
      <button
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled || pending}
        aria-busy={pending || undefined}
        aria-label={pending ? 'Sending' : undefined}
        className={classes}
      >
        {inner}
      </button>
    </ButtonFx>
  );
}
