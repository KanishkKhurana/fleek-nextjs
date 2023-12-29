import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FleekSdk, ApplicationAccessTokenService } from '@fleekxyz/sdk';

const applicationService = new ApplicationAccessTokenService({
    clientId: 'client_zudVo_n-6ilfGbgwClmi',
})

const fleekSdk = new FleekSdk({ accessTokenService: applicationService })

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const makeProjectId = async () => {
    console.log('hi');
    // const projectId = await fleekSdk.projects().create({ name: 'My Project' });
    const projects = await fleekSdk.projects().list();
    // console.log(projectId);
    console.log(projects);
    
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <button className='bg-white text-black px-3 py-2 rounded'
        onClick={makeProjectId}
        >
          Make Project Id
        </button>
      </div>
    </main>
  )
}
