/**
 * The résumé is a static asset served from `public`, so every entry point — hero,
 * navigation, footer — is a plain link to the same path and the site still needs
 * no backend. These values are the only place the file is named: replacing the
 * PDF means dropping a new file at `public/documents` and editing `fileName`.
 */
export const RESUME = {
  /** Public path, resolved by Next from `public/documents`. */
  href: "/documents/Carlie_Endaya_Resume.pdf",
  /**
   * Name the browser saves the download under. Independent of the served path so
   * the visitor keeps a recognisable file among their other downloads.
   */
  fileName: "Carlie_Endaya_Resume.pdf",
  /** Visible label for the hero button and the footer link. */
  label: "Download CV",
  /** Visible label in the global navigation, where space is tighter. */
  navLabel: "Resume",
  /**
   * Names the link for screen readers. The visible labels omit the format, which
   * a visitor needs before committing to a download.
   */
  ariaLabel: "Download résumé as PDF",
} as const;
