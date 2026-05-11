import {
    Card, Form, Input,
    Divider, Typography, Alert, Row, Checkbox
} from "antd";
import {
    UserOutlined, LockOutlined, EyeTwoTone,
    EyeInvisibleOutlined, GoogleOutlined
} from "@ant-design/icons";

// THEME
import { colors, typography, spacing, radius, shadow } from "../Theme";

// PRIMARY BUTTON
import PrimaryButton from "./Buttons/PrimaryButton";

// TYPOGRAPHY DESTRUCTURE
const { Title, Text, Link } = Typography;

// ── Styles (all from theme) ──────────────────────────────────────
const styles = {
    card: {
        borderRadius: radius.xl,                          
        border: `1px solid ${colors.gray200}`,            
        background: colors.bgPrimary,                     
        boxShadow: shadow.card,                           
        backdropFilter: "blur(20px)",
    },

    cardTitle: {
        margin: 0,
        ...typography.h4,                                 
        color: colors.textPrimary,                       
        textAlign: "center",
    },

    cardSub: {
        ...typography.bodySm,                             
        color: colors.textSecondary,                      
        display: "block",
        marginTop: spacing.xs,                           
        textAlign: "center",
    },

    input: {
        borderRadius: radius.md,                          
        height: 44,
        ...typography.bodySm,                            
        border: `1.5px solid ${colors.gray200}`,         
    },

    fieldLabel: {
        ...typography.label,                              
        color: colors.textPrimary,                       
    },

    checkboxText: {
        ...typography.bodySm,                             
        color: colors.textSecondary,                   
    },

    forgotLink: {
        ...typography.label,                              
        color: colors.primary,                          
    },

    dividerText: {
        color: colors.gray400,                            
        ...typography.bodyXs,                             
    },

    signupRow: {
        textAlign: "center",
        marginTop: spacing.lg,                         
    },

    signupText: {
        color: colors.textSecondary,                      
        ...typography.bodySm,                            
    },

    signupLink: {
        ...typography.bodySm,                             
        fontWeight: 600,
        color: colors.primary,                       
    },

    iconColor: {
        color: colors.primary,                            
    },
};

// ── Component ────────────────────────────────────────────────────
export default function LoginCard({ success, error, setError, loading, onFinish }) {
    const [form] = Form.useForm();

    return (
        <Card
            style={styles.card}
            styles={{ body: { padding: `${spacing.xl}px ${spacing.xl}px` } }}  // theme — 32px
        >
            {/* Title */}
            <Title level={4} style={styles.cardTitle}>
                Sign in to your account
            </Title>

            {/* Subtitle */}
            <Text style={styles.cardSub}>
                Welcome back! Please enter your details.
            </Text>

            <Divider style={{ margin: `${spacing.lg}px 0` }} />  {/* theme — 24px */}

            {/* Error Alert */}
            {error && (
                <Alert
                    message={error}
                    type="error"
                    showIcon
                    closable
                    onClose={() => setError("")}
                    style={{ marginBottom: spacing.lg, borderRadius: radius.md }}
                />
            )}

            {/* Success Alert */}
            {success && (
                <Alert
                    message="Login successful! Redirecting to dashboard…"
                    type="success"
                    showIcon
                    style={{ marginBottom: spacing.lg, borderRadius: radius.md }}
                />
            )}

            {/* Form */}
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={({ errorFields }) => console.log("Failed:", errorFields)}
                requiredMark={false}
                size="large"
                scrollToFirstError
                preserve={false}
            >
                {/* Email Field */}
                <Form.Item
                    label={<Text strong style={styles.fieldLabel}>Email address</Text>}
                    name="email"
                    validateTrigger="onBlur"
                    rules={[
                        { required: true, message: "Please enter your email" },
                        { type: "email", message: "Enter a valid email" },
                    ]}
                >
                    <Input
                        prefix={<UserOutlined style={styles.iconColor} />}
                        placeholder="you@example.com"
                        style={styles.input}
                    />
                </Form.Item>

                {/* Password Field */}
                <Form.Item
                    label={<Text strong style={styles.fieldLabel}>Password</Text>}
                    name="password"
                    validateTrigger="onBlur"
                    rules={[
                        { required: true, message: "Please enter your password" },
                        { min: 6, message: "Password must be at least 6 characters" },
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined style={styles.iconColor} />}
                        placeholder="••••••••"
                        iconRender={(visible) =>
                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                        style={styles.input}
                    />
                </Form.Item>

                {/* Remember Me + Forgot Password */}
                <Form.Item style={{ marginBottom: spacing.lg }}>
                    <Row justify="space-between" align="middle">
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>
                                <Text style={styles.checkboxText}>Remember me</Text>
                            </Checkbox>
                        </Form.Item>
                        <Link href="#" style={styles.forgotLink}>
                            Forgot password?
                        </Link>
                    </Row>
                </Form.Item>

                {/* Submit Button */}
                <Form.Item style={{ marginBottom: spacing.sm }}>
                    <PrimaryButton
                        htmlType="submit"
                        loading={loading}
                        width="100%"
                        height={46}
                    >
                        {loading ? "Signing in…" : "Sign in"}
                    </PrimaryButton>
                </Form.Item>

            </Form>

            {/* Divider */}
            <Divider plain style={styles.dividerText}>
                or continue with
            </Divider>

            {/* Google OAuth Button */}
            <div style={{ display: "flex", gap: spacing.sm, width: "100%" }}>
                <PrimaryButton
                    variant="outline"
                    icon={<GoogleOutlined />}
                    width="100%"
                    height={46}
                >
                    Google
                </PrimaryButton>
            </div>

            {/* Sign Up Link */}
            <div style={styles.signupRow}>
                <Text style={styles.signupText}>Don't have an account? </Text>
                <Link href="#" style={styles.signupLink}>
                    Create one free
                </Link>
            </div>

        </Card>
    );
}