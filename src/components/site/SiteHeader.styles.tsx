import styled from 'styled-components';
import Breakpoints from '../ui/Breakpoints';

const SiteHeaderStyles = styled.div`
  --link-hover-opacity: 0.7;
  --c-background: #fff;
  --spacing-x: 20px;

  display: block;
  height: 64px;
  position: relative;
  top: 0;
  background: var(--c-background);
  transform: translate(0px);
  z-index: 1000;
  border-block-start: 1px solid rgba(0, 21, 58, 0.06);
  border-block-end: 1px solid rgba(0, 21, 58, 0.06);

  transition: box-shadow 0.2s ease-out;

  &.sticky {
    position: sticky;
  }

  // #region ---------------------- DARK THEME --------------------------
  &.theme--dark {
    --c-background: black;
    background: black;

    .capacitor-logo {
      path:not(.logo) {
        fill: #fff;
      }
    }

    a.ui-paragraph-4 {
      color: #fff;

      &.active {
        color: var(--c-carbon-30);
        pointer-events: none;

        @media screen and (max-width: ${Breakpoints.screenXsMax}) {
          background: initial;
          color: var(--c-capacitor-blue);
        }
      }
    }

    .ui-button {
      transition: background-color 0.2s ease-out;

      &:hover,
      &:active,
      &:focus {
        opacity: 1;
      }
    }

    .separator {
      background: var(--c-carbon-70);
    }

    .more-button {
      --color: #fff;
    }
  }
  // #endregion ---------------------------------------------------------

  .docs-search-wrapper {
    margin-inline-start: var(--space-4);

    docs-search {
      max-width: clamp(100px, 40vw, 251px);
    }

    &.desktop-only {
      margin-inline-start: auto;
    }
  }

  header {
    display: flex;
    align-items: center;
    height: 100%;

    .capacitor-logo {
      margin-inline-end: var(--container);
      display: block;
    }

    .jobs {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      background: linear-gradient(90deg, #62bdff 1.23%, #7489ff 99.18%);
      border-radius: 100px;

      padding: 5px 8px;
    }

    .jobs-wrapper {
      flex-grow: 1;
      display: flex;
      justify-content: flex-end;
      margin-inline-end: 2rem;

      @media (max-width: 1439px) {
        display: none;
      }

      .jobs {
        font-size: 0.75rem;
      }

      .jobs .start {
        display: flex;
        align-items: center;

        color: #f3faff;
        font-weight: 400;

        margin-inline-end: 8px;
      }
      .jobs .start svg {
        margin-inline-end: 4px;
      }

      .jobs .end {
        display: flex;
        align-items: center;

        color: #ffffff;
        font-weight: 600;
      }

      .jobs .end svg {
        transition: transform 0.1s ease-out;
      }
      .jobs:hover .end svg {
        transform: translateX(1px);
      }
    }
  }

  app-menu-toggle {
    margin-inline-end: var(--space-3);
  }

  .routes {
    display: flex;

    transition: transform 0.2s ease-out, opacity 0.2s ease-out, box-shadow 0.2s ease-out;

    &__header {
      display: none;

      justify-content: space-between;
      align-items: center;

      margin-block-end: var(--space-3);

      button.close {
        background: transparent;
        border: none;
        cursor: pointer;
        outline: 2px solid rgba(0, 0, 0, 0);

        transition: opacity 0.2s ease-out;

        &:hover,
        &:active,
        &:focus {
          opacity: 0.7;
        }
      }
    }
  }

  a.ui-paragraph-4 {
    font-weight: 500;
    display: flex;
    align-items: center;
    margin-inline-start: clamp(var(--space-0), 3.5vw, 24px);
    transition: opacity 0.2s ease-out;

    &.active {
      color: var(--c-cyan-100);

      &:hover {
        opacity: 1;
      }
    }

    &:hover {
      opacity: var(--link-hover-opacity);
    }
  }

  .external {
    svg {
      margin-inline-start: 6px;
      margin-block-start: 2px;
    }
  }

  .mobile-only {
    display: none;
  }

  .separator {
    display: inline-block;
    width: 1px;
    height: 28px;
    background: var(--c-indigo-30);
    margin-inline-start: var(--space-5);
  }

  .ctas {
    display: flex;
    align-items: center;

    white-space: nowrap;
    margin-inline-start: var(--space-1);

    > a {
      display: flex;
      align-items: center;
      margin-inline-start: var(--space-3);
    }

    docs-dropdown {
      margin-inline-end: -1rem;
    }

    .ui-button.primary {
      --c-background: var(--c-capacitor-blue);
      color: #fff;

      svg {
        margin-inline-end: 6px;
      }
    }

    .social {
      transition: opacity 0.2s ease-out;

      &:hover,
      &:active,
      &:focus {
        opacity: 0.7;
      }
    }
  }

  .more-button {
    display: none;
    margin-inline-start: var(--container);
  }

  @media screen and (max-width: ${Breakpoints.screenSmMax}) {
    .ctas,
    .sm-hide {
      display: none;
    }
  }

  @media screen and (max-width: ${Breakpoints.screenXsMax}) {
    .desktop-only {
      display: none;
    }

    header > .docs-search-wrapper + .ui-paragraph-4 {
      margin-inline-start: auto;
    }

    .routes {
      flex-direction: column;

      background: var(--c-background);
      width: calc(100% - 24px);
      max-width: 353px;
      position: absolute;
      z-index: 1000;
      right: 12px;
      top: 12px;
      padding: 20px;

      box-shadow: var(--elevation-7);
      border-radius: var(--radius-2);

      transform: translateY(-10px);
      opacity: 0;
      pointer-events: none;

      &__header {
        display: flex;

        a.logo-wrapper {
          padding: 0;
          display: flex;

          &:hover,
          &:active,
          &:focus {
            opacity: 1;
          }
        }
      }

      a {
        display: block;

        margin-inline-start: 0px;
        padding: 7px 10px 8px;

        border-radius: var(--radius-1);

        + a {
          margin-block-start: var(--space-0);
        }

        &.active {
          color: var(--c-capacitor-blue);
          background: var(--c-cyan-0);
          font-weight: 500;
        }

        // &:hover, &:active, &:focus {
        //   opacity: var(--link-hover-opacity);
        // }
      }
    }
    .routes.expanded {
      transform: translateY(0px);
      opacity: 1;
      pointer-events: all;
    }

    .mobile-only {
      display: inline-block;
      margin-inline-start: auto;
      margin-inline-end: clamp(var(--space-0), 1.3vw, var(--space-3));
    }

    .docs-search-wrapper {
      margin-inline-start: 0;
      max-width: 100%;
      margin-block-end: var(--space-2);

      docs-search {
        max-width: 100%;
      }
    }

    .more-button {
      display: block;
    }
  }
`;

export default SiteHeaderStyles;
