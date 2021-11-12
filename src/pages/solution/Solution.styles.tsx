import styled from 'styled-components';

const SolutionStyles = styled.div`
  display: block;
  scroll-behavior: smooth;

  #top {
    .heading-group {
      margin-block-start: clamp(16px, 10vh, 96px);
      margin-block-end: var(--space-11);
      margin-inline-start: auto;
      margin-inline-end: auto;

      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      img {
        margin-block-end: var(--space-7);
        width: min(222px, 100%);
      }
    }
  }

  #getting-started {
    .step {
      display: flex;
      padding-block-end: 120px;
      position: relative;
      margin-block-start: -16px;

      > * {
        margin-block-start: var(--space-3);
      }

      @media screen and (max-width: $screen-xs-max) {
        flex-direction: column;
        padding-block-end: var(--space-11);
      }

      &:last-of-type {
        padding-block-end: 0;

        &::before {
          display: none;
        }
      }

      &::before {
        content: '';
        z-index: -1;
        position: absolute;
        top: 24px;
        left: 7px;
        bottom: 0;
        width: 1px;
        background: var(--c-carbon-10);

        @media screen and (max-width: $screen-xs-max) {
          display: none;
        }
      }

      sup {
        display: flex;
        align-items: center;
        height: 40px;
        width: 40px;
        margin-block-end: 0;
        background: white;
        position: relative;
        top: -11px;
      }

      .heading-group {
        flex-grow: 1;

        @media screen and (max-width: $screen-xs-max) {
          margin-block-start: 0;
        }

        .ui-heading {
          margin-block-end: var(--space-2);
        }

        > * {
          max-width: 440px;
        }

        .platforms {
          display: flex;
          margin-block-end: var(--space-3);

          img + img {
            margin-inline-start: var(--space-3);
          }
        }
      }
    }

    .code-panel {
      flex-grow: 9999;
      max-width: 560px;
      min-width: 400px;
      margin-inline-start: 32px;

      @media screen and (max-width: $screen-xs-max) {
        min-width: auto;
        margin-inline-start: 0px;
      }
    }
  }

  #continue {
    margin-block-start: 96px;
  }

  #newsletter {
    margin-block-start: 160px;
    margin-block-end: 160px;
  }

  // TODO: Move to generic components
  .ui-fancy-underline {
    display: inline-block;
    position: relative;

    &:before {
      z-index: -1;
      background: #bfe4ff;
      display: block;
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50%;
    }
  }

  .ui-tabs {
    .ui-tab {
      min-height: 300px;
    }
    .ui-tab-bar {
      background: #2e3b4a;
      border-radius: 8px 8px 0 0;
      display: flex;
      flex-direction: row;
      padding: 16px;
      overflow-x: auto;

      &__button {
        cursor: pointer;
        user-select: none;
        font-family: var(--f-family-display);
        font-size: 13px;
        color: var(--c-indigo-30);
        padding: 6px 14px;

        margin-right: 10px;

        &--selected {
          background: #617184;
          color: white;
          border-radius: 6px;
        }
      }
    }
  }
`;

export default SolutionStyles;
