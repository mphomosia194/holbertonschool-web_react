import {
  getCurrentYear,
  getFooterCopy,
} from '../utils/utils';

function Footer() {
  return (
    <div className="mt-auto border-t-2 border-[var(--main-color)] py-4 text-center italic">
      <p>
        Copyright {getCurrentYear()} - {getFooterCopy(true)}
      </p>
    </div>
  );
}

export default Footer;
