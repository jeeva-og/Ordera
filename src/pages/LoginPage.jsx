import { useState } from "react";
import { Row, Col, Typography, Form } from "antd";
import LoginCard from "../components/LoginCard";
import Logo from "../components/Logo";
import { colors, typography, spacing } from "../theme";

const { Text, Link } = Typography;

export default function LoginPage() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    setError("");
    try {
      await new Promise((res) => setTimeout(res, 1500));
      console.log("Login values:", values);
      setSuccess(true);
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.bgCircle1} />
      <div style={styles.bgCircle2} />

      <Row justify="center" align="middle" style={{ minHeight: "100vh", width: "100%" }}>
        <Col xs={22} sm={16} md={12} lg={8} xl={7}>

          <div style={{ padding: `0px ${spacing.md}px`, display: 'flex', justifyContent: 'center' }}>
            <Logo width={240} />
          </div>

          <LoginCard
            onFinish={onFinish}
            loading={loading}
            error={error}
            success={success}
            setError={setError}
          />

          <div style={styles.footer}>
            <Text style={styles.footerText}>
              By signing in, you agree to our{" "}
              <Link href="#" style={styles.footerLink}>Terms</Link>
              {" "}and{" "}
              <Link href="#" style={styles.footerLink}>Privacy Policy</Link>
            </Text>
          </div>

        </Col>
      </Row>
    </div>
  );
}

// STYLING
const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    fontFamily: typography.fontFamily,
    background: colors.bgLight,
  },

  bgCircle1: {
    position: "absolute",
    width: 1000,
    height: 1000,
    borderRadius: "50%",
    background: `radial-gradient(circle, ${colors.primaryMid}99 0%, transparent 70%)`, // ← from theme
    top: -150,
    left: -150,
    pointerEvents: "none",
  },

  bgCircle2: {
    position: "absolute",
    width: 1000,
    height: 1000,
    borderRadius: "50%",
    background: `radial-gradient(circle, ${colors.primaryMid}99 0%, transparent 70%)`, // ← from theme
    bottom: -100,
    right: -100,
    pointerEvents: "none",
  },

  footer: {
    textAlign: "center",
    marginTop: spacing.lg,                      
    paddingBottom: spacing.sm,                  
  },

  footerText: {
    color: colors.textWhiteSub,                
    ...typography.bodyXs,                      
  },

  footerLink: {
    color: colors.textWhite,                    
    ...typography.bodyXs,                       
  },
};