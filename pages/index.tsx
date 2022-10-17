import { ReactElement } from 'react'
import { WelcomeLayout } from '../components/Layouts/WelcomeLayout'
import { NextPageWithLayout } from './_app'
import { Card, GradientOrientation } from '../components/Welcome/Cards'

const Home: NextPageWithLayout = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <div className="px-4 h-[736px] w-full max-w-7xl">
        <div className="flex flex-col h-full gap-4 md:flex-row">
          <Card imageSrc="/images/moto.jpg">
            <div className="flex flex-col-reverse items-end h-full">
              <h2 className="font-sans text-3xl text-white fond-bold">À propos de moi</h2>
            </div>
          </Card>

          <div className="flex flex-col flex-1 gap-4">
            <Card gradientOrientation={GradientOrientation.Up}>
              <div className="flex flex-col h-full">
                <h2 className="font-sans text-3xl text-white fond-bold">Projets</h2>
              </div>
            </Card>

            <div className="flex flex-col flex-1 gap-4 md:flex-row">
              <Card gradientOrientation={GradientOrientation.Up}>
                <div className="flex flex-col h-full">
                  <h2 className="font-sans text-3xl text-white fond-bold">Blog</h2>
                </div>
              </Card>
              <Card gradientOrientation={GradientOrientation.Up}>
                <div className="flex flex-col h-full">
                  <h2 className="font-sans text-3xl text-white fond-bold">Contact</h2>
                </div>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <WelcomeLayout>{page}</WelcomeLayout>
  )
}

export default Home
