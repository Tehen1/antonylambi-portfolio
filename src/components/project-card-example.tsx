import { ProjectIcon } from './project-icon';
import { ProjectImage } from './project-image';
import { VideoPlayer } from './video-player';
import { PROJECT_ASSETS, VIDEO_ASSETS } from '@/lib/assets';

/**
 * Exemple d'utilisation des composants ProjectIcon et ProjectImage
 * avec les assets du portfolio
 */
export function ProjectCardExample() {
  const fixierun = PROJECT_ASSETS.fixierun;
  const rhymechain = PROJECT_ASSETS.rhymechain;

  return (
    <div className="space-y-8 p-8">
      {/* Carte Fixie Run */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-lg">
        <div className="flex items-start gap-4">
          {/* Icône du projet */}
          <ProjectIcon
            src={fixierun.icon}
            alt={fixierun.name}
            size="lg"
            priority
          />

          <div className="flex-1">
            <h3 className="text-2xl font-bold text-foreground">
              {fixierun.name}
            </h3>
            <p className="mt-2 text-muted-foreground">
              {fixierun.description}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {fixierun.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Galerie de screenshots */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {fixierun.screenshots.map((screenshot, index) => (
            <ProjectImage
              key={screenshot}
              src={screenshot}
              alt={`${fixierun.name} screenshot ${index + 1}`}
              width={400}
              height={300}
              priority={index === 0}
              className="w-full"
            />
          ))}
        </div>

        {/* Vidéo du projet avec VideoPlayer optimisé */}
        <div className="mt-6">
          <VideoPlayer
            src={VIDEO_ASSETS.fixieRun.base}
            poster={VIDEO_ASSETS.fixieRun.poster}
            className="w-full rounded-lg"
            autoplay={true}
            muted={true}
            loop={true}
            ariaLabel="Démo Fixie Run - Plateforme Web3 gamification"
          />
        </div>
      </div>

      {/* Carte RhymeChain */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <ProjectIcon
            src={rhymechain.icon}
            alt={rhymechain.name}
            size="lg"
          />

          <div className="flex-1">
            <h3 className="text-2xl font-bold text-foreground">
              {rhymechain.name}
            </h3>
            <p className="mt-2 text-muted-foreground">
              {rhymechain.description}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {rhymechain.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Vidéo du projet avec VideoPlayer optimisé */}
        <div className="mt-6">
          <VideoPlayer
            src={VIDEO_ASSETS.rhymechain.base}
            poster={VIDEO_ASSETS.rhymechain.poster}
            className="w-full rounded-lg"
            autoplay={true}
            muted={true}
            loop={true}
            ariaLabel="Démo RhymeChain - NFT Music Marketplace"
          />
        </div>
      </div>
    </div>
  );
}
