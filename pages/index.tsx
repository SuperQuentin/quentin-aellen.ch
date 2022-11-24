import { ReactElement } from 'react'
import { WelcomeLayout } from '../components/Layouts/WelcomeLayout'
import { NextPageWithLayout } from './_app'
import { Card, GradientOrientation } from '../components/Welcome/Cards'

const Home: NextPageWithLayout = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-5">
      <div className="flex flex-col justify-center flex-1 w-full md:px-4 max-w-7xl">
        <div className="flex flex-col flex-1 gap-4 md:flex-row max-h-[720px]">
          <Card href="/me" imageSrc="/images/moto.jpg" title="About me">
            <div className="flex flex-col-reverse items-end h-full">
              <h2 className="font-sans text-3xl text-white fond-bold">À propos de moi</h2>
            </div>
          </Card>

          <div className="flex flex-col flex-1 gap-4">
            <Card href="#" gradientOrientation={GradientOrientation.Up} title="Projects">
              <div className="flex flex-col h-full">
                <h2 className="font-sans text-3xl text-white fond-bold">Projets</h2>
              </div>
            </Card>

            <div className="flex flex-col flex-1 gap-4 md:flex-row">
              <Card href="/blog" gradientOrientation={GradientOrientation.Up} title="Blog">
                <div className="flex flex-col h-full">
                  <h2 className="font-sans text-3xl text-white fond-bold">Blog</h2>
                </div>
              </Card>
              <Card href="#" gradientOrientation={GradientOrientation.Up} title="Contact">
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
