import { ArrowRight, BookOpen, Users, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription } from "../components/ui/Card";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function Landing() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-background pt-16 text-center md:pt-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        
        <motion.div 
          className="container px-4 md:px-6"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="mx-auto max-w-3xl space-y-4">
            <motion.h1 
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
              variants={fadeIn}
            >
              Launch Your Career with <span className="text-primary">Confidence</span>
            </motion.h1>
            <motion.p 
              className="mx-auto max-w-[700px] text-muted-foreground md:text-xl"
              variants={fadeIn}
            >
              Discover your perfect career path, connect with industry mentors, and get a personalized roadmap to success.
            </motion.p>
            <motion.div 
              className="space-x-4"
              variants={fadeIn}
            >
              <Link to="/auth/register">
                <Button size="lg" className="h-12 px-8 text-lg">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/auth/login">
                <Button variant="outline" size="lg" className="h-12 px-8 text-lg">
                  Log In
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container py-12 md:py-24 lg:py-32">
        <motion.div 
          className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Card className="border-none shadow-lg">
            <CardHeader>
              <BookOpen className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Personalized Roadmap</CardTitle>
              <CardDescription>
                Get a step-by-step guide tailored to your interests and career goals.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-none shadow-lg">
            <CardHeader>
              <Users className="h-10 w-10 text-secondary mb-2" />
              <CardTitle>Expert Mentorship</CardTitle>
              <CardDescription>
                Connect with industry professionals for 1-on-1 guidance and advice.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-none shadow-lg">
            <CardHeader>
              <BarChart className="h-10 w-10 text-rose-500 mb-2" />
              <CardTitle>Skill Gap Analysis</CardTitle>
              <CardDescription>
                Identify missing skills and get formatted course recommendations.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}
