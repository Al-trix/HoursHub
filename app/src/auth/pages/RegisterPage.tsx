import Layout from "../../layout/Layout"
import FormRegister from "../components/FormRegister"
import FooterAuth from "../components/FooterAuth" 

const RegisterPage = () => {
  return (
    <Layout>
        <section className="container mx-auto mt-30">
            <div className="flex flex-col  bg-black/20 border border-purple-500/20 rounded-lg mx-auto justify-center h-full w-max p-10 ">
                <div className="">
                    <h1 className="text-4xl font-bold text-white">Register</h1>
                    <p className="text-white/50 text-sm mt-2">Register for an account for free and start tracking your hours</p>
                </div>
                <FormRegister />
                <FooterAuth text="Already have an account?" textLink="sign in" link="/login"/>
            </div>
        </section>
    </Layout>
  )
}

export default RegisterPage