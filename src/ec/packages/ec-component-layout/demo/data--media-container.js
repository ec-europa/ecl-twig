const data = {
  grid: 12,
  component: 'media-container',
  columns_desktop: 2,
  columns_mobile: 1,
  spacing: 's',
  same_height: true,
  items: [
    {
      alt: 'Jean Monnet banner',
      image:
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
      description:
        'The European Commission has put forward ambitious yet realistic proposals for a modern EU budget. It is time for an EU budget that reflects rapid developments in innovation, the economy, the environment and geopolitics, amongst others.',
    },
    {
      alt: 'Jean Monnet banner',
      image:
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
      description:
        'The European Commission has put forward ambitious yet realistic proposals for a modern EU budget. It is time for an EU budget that reflects rapid developments in innovation, the economy, the environment and geopolitics, amongst others.',
      sources: [
        {
          src:
            'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_2MB.mp4',
          type: 'video/mp4',
        },
        {
          src:
            'https://test-videos.co.uk/vids/bigbuckbunny/webm/vp9/720/Big_Buck_Bunny_720_10s_2MB.webm',
          type: 'video/webm',
        },
      ],
      tracks: [
        {
          src: '/captions/bunny-en.vtt',
          kind: 'captions',
          label: 'English',
          src_lang: 'en',
        },
        {
          src: '/captions/bunny-fr.vtt',
          kind: 'captions',
          label: 'français',
          src_lang: 'fr',
        },
      ],
    },
    {
      description:
        'The European Commission has put forward ambitious yet realistic proposals for a modern EU budget. It is time for an EU budget that reflects rapid developments in innovation, the economy, the environment and geopolitics, amongst others.',
      embedded_media:
        '<iframe title="New digital strategy" width="350" height="197" src="https://www.youtube.com/embed/fgi-GSCB6ho" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>',
      ratio: '16-9',
    },
    {
      alt: 'Jean Monnet banner',
      image:
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
      description:
        'The European Commission has put forward ambitious yet realistic proposals for a modern EU budget. It is time for an EU budget that reflects rapid developments in innovation, the economy, the environment and geopolitics, amongst others.',
    },
  ],
};

export default data;
