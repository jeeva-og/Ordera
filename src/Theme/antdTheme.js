// src/theme/antdTheme.js
import { colors, radius, typography } from "./index";

export const antdTheme = {
  token: {
    // Brand
    colorPrimary:        colors.primary,
    colorPrimaryHover:   colors.primaryMid,

    // Typography
    fontFamily:          typography.fontFamily,
    fontSize:            typography.bodyMd.fontSize,

    // Border
    borderRadius:        radius.md,
    borderRadiusLG:      radius.lg,

    // Background
    colorBgContainer:    colors.bgPrimary,
    colorBgLayout:       colors.bgSecondary,

    // Text
    colorText:           colors.textPrimary,
    colorTextSecondary:  colors.textSecondary,

    // Status
    colorSuccess:        colors.success,
    colorWarning:        colors.warning,
    colorError:          colors.error,
    colorInfo:           colors.info,
  },
};