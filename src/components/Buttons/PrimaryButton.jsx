// src/components/PrimaryButton.jsx

import { Button } from "antd";
import { colors, typography, radius, shadow } from "../../Theme";

export default function PrimaryButton({
    // ── Content ──────────────────────────────
    children,
    icon,

    // ── Size Control (mutable) ───────────────
    width = "100%",       // "100%" | "200px" | "auto"
    height = 46,          // number in px
    size = "large",       // "small" | "middle" | "large"

    // ── Style Variants ───────────────────────
    variant = "primary",  // "primary" | "outline" | "ghost"

    // ── State ────────────────────────────────
    loading = false,
    disabled = false,
    block = false,

    // ── Events ───────────────────────────────
    onClick,
    htmlType = "button",  // "button" | "submit" | "reset"

    // ── Extra style override ──────────────────
    style = {},
}) {

    // ── Variant Styles ───────────────────────
    const variantStyles = {
        primary: {
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
            border: "none",
            color: colors.tertiary,
            boxShadow: shadow.btn,
        },
        outline: {
            background: "transparent",
            border: `1.5px solid ${colors.primary}`,
            color: colors.primary,
            boxShadow: "none",
        },
        ghost: {
            background: "transparent",
            border: "none",
            color: colors.primary,
            boxShadow: "none",
        },
    };

    const baseStyle = {
        // ── Size (mutable via props) ────────────
        width,
        height,

        // ── Typography ─────────────────────────
        ...typography.btn,
        fontFamily: typography.fontFamily,

        // ── Shape ──────────────────────────────
        borderRadius: radius.md,

        // ── Transition ─────────────────────────
        transition: "all 0.25s ease",

        // ── Variant ────────────────────────────
        ...variantStyles[variant],

        // ── Override (from outside) ─────────────
        ...style,
    };

    return (
        <Button
            size={size}
            loading={loading}
            disabled={disabled}
            block={block}
            onClick={onClick}
            htmlType={htmlType}
            icon={icon}
            style={baseStyle}
        >
            {children}
        </Button>
    );
}


// BUTTON USE CASE EXAMPLES
// import { LoginOutlined, PlusOutlined } from "@ant-design/icons";

// // ── Login Page — full width submit ──────────────
// <PrimaryButton htmlType="submit" loading={loading} width="100%" height={46}>
//   Sign in
// </PrimaryButton>

// // ── Small fixed width button ─────────────────────
// <PrimaryButton width={120} height={36} size="middle">
//   Save
// </PrimaryButton>

// // ── Auto width with icon ─────────────────────────
// <PrimaryButton width="auto" icon={<PlusOutlined />}>
//   Add Item
// </PrimaryButton>

// // ── Outline variant ──────────────────────────────
// <PrimaryButton variant="outline" width={160} height={40}>
//   Cancel
// </PrimaryButton>

// // ── Ghost variant ────────────────────────────────
// <PrimaryButton variant="ghost" width="auto">
//   Skip
// </PrimaryButton>

// // ── Custom override ──────────────────────────────
// <PrimaryButton width={200} height={52} style={{ borderRadius: 999 }}>
//   Pill Button
// </PrimaryButton>