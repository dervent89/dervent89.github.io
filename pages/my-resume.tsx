import type { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import getPlus from './components/GetPlus';
import styles from '../styles/MyResume.module.scss';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Link from 'next/link';

const MyResume: NextPage = () => {
  const [scrollEl, setScrollElement] = React.useState<any>(null);
  const ref = React.useRef<any>();
  React.useEffect(() => {
    setScrollElement(ref.current);
  });

  const skills = [
    {
      title: 'HTML5',
      score: 100,
    },
    {
      title: 'SCSS/CSS',
      score: 95,
    },
    {
      title: 'Javascript',
      score: 90,
    },
    {
      title: 'jQuery',
      score: 95,
    },
    {
      title: 'VueJS',
      score: 90,
    },
    {
      title: 'Vuex',
      score: 80,
    },
    {
      title: 'NextJs',
      score: 80,
    },
    {
      title: 'ReactJs',
      score: 80,
    },
    {
      title: 'Redux',
      score: 70,
    },
    {
      title: 'NuxtJs',
      score: 80,
    },
    {
      title: 'Firebase',
      score: 90,
    },
    {
      title: 'GitHub',
      score: 90,
    },
    {
      title: 'PHP',
      score: 90,
    },
    {
      title: 'MySql',
      score: 90,
    },
    {
      title: 'Zeplin',
      score: 90,
    },
    {
      title: 'XD',
      score: 90,
    },
    {
      title: 'Illustrator',
      score: 90,
    },
    {
      title: 'Photoshop',
      score: 90,
    },
  ];

  const workData = [
    {
      title: 'SST Technology',
      time: 'Since 2022 January',
      tech: 'HTML 5, SCSS, CSS3, Javascript, ReactJs, NuxtJs, Redux Toolkit, Jira, Figma, Github, Scrum',
      desc: 'I am developing new developments on project (private) and re-developing the site with ReactJs. We run 2-week sprints. I take part in a team of 4 people in total as Front End.',
      works: [],
    },
    {
      title: 'Boyner Group',
      time: '2020 June > 2021 December - 18 Months',
      tech: 'HTML 5, SCSS, CSS3, Javascript, Jquery, VueJs, NuxtJs, Zeplin, Jira, Github, TFS, Scrum',
      desc: 'I am developing new developments on Boyner.com.tr and re-developing the site with VueJs. We run 2-week sprints. For Boyner.com.tr, I take part in a team of 8 people in total as 2 Front End and Morhipo and Altın Yıldız',
      works: [],
    },
    {
      title: 'Koç Digital',
      time: '2020 January > 2020 June - 6 Months',
      tech: 'HTML 5, SCSS, CSS3, Javascript, Jquery, VueJs, Zeplin, Jira, Github, Scrum',
      desc: 'I took part in IOT projects (Ford Otosan, Arçelik etc.). In general, I made special and extensive filtering for datatables on a ready-made admin panel.',
      works: [],
    },
    {
      title: 'Nexum Creative',
      time: '2017 - 2019 2 Years 3 Months',
      tech: 'HTML 5, SCSS, CSS3, Javascript, Jquery, Zeplin, Kanban, TFS',
      desc: 'I worked as the sole FrontEnd Developer in the company. MVC was used on the backend side.',
      works: [
        {
          title: 'Flypgs',
          desc: 'I coded the new design as a facelift on corporate pages and Homepage. Generally, it will be a rapid development without breaking the infrastructure too much. I coded it all by myself. I coded it using jquery and SCSS.',
        },
        {
          title: 'MacFit',
          desc: 'The corporate site and the membership site were worked on as two different projects. The designs came from Zeplin and I coded them using Javascript, Jquery and SCSS by myself.',
        },
        {
          title: 'Cinemaximum',
          desc: 'Although there are ticketing and corporate pages, I worked alone from start to finish. I coded the designs using Javascript, Jquery and SCSS by coming from Zeplin.',
        },
        {
          title: 'Hayat Su',
          desc: 'I worked alone from start to finish, including the purchasing and membership pages. I coded the designs using Javascript, Jquery and SCSS by coming from Zeplin.',
        },
        {
          title: 'KKTCEL Turkcell',
          desc: 'I worked alone from start to finish, including the purchasing and membership pages. I coded the designs using Javascript, Jquery and SCSS by coming from Zeplin.',
        },
        {
          title:
            'Yapı Kredi Leasing, Yapı Kredi Faktoring ve Yapı Kredi Holland',
          desc: 'I coded the corporate pages as Responsive in accordance with their designs. I coded the designs using Javascript, Jquery and SCSS by coming from Zeplin.',
        },
        {
          title: 'Tavuk Dünyası',
          desc: 'I coded the corporate pages as Responsive in accordance with their designs. I coded the designs using Javascript, Jquery and SCSS by coming from Zeplin.',
        },
        {
          title: 'Peugeot İkinci Ell',
          desc: 'I coded the corporate pages as Responsive in accordance with their designs. I coded the designs using Javascript, Jquery and SCSS by coming from the France headquarters via Illustrator.',
        },
      ],
    },
    {
      title: 'Scope Digital',
      time: '2017 4 Months',
      tech: 'HTML 5, SCSS, CSS3, Javascript, Jquery, Zeplin',
      desc: 'I was a part of the two-person FrontEnd team at the company. PHP was used on the backend.',
      works: [
        {
          title: 'Yaris Kabin',
          desc: 'I used Javascript, Jquery and SCSS on the FrontEnd side. The designs were coded to be Responsive by coming from Zeplin.',
        },
        {
          title: 'NEF Basin Ekspress',
          desc: 'I used Javascript, Jquery and SCSS on the FrontEnd side. The designs were coded to be Responsive by coming from Zeplin.',
        },
      ],
    },
    {
      title: 'Proj-e Software',
      time: '2015 2 Years 1 Month',
      tech: 'HTML 5, SCSS, CSS3, Javascript, Jquery, Zeplin',
      desc: 'I took part in the eight-person Front End team of the company.',
      works: [
        {
          title: 'Flormar',
          desc: 'I took part in e-commerce projects. I used Javascript, Jquery and SCSS on the FrontEnd side. The designs were coded to be Responsive by coming from Zeplin.',
        },
        {
          title: 'Arçelik',
          desc: 'I took part in e-commerce projects. I used Javascript, Jquery and SCSS on the FrontEnd side. The designs were coded to be Responsive by coming from Zeplin.',
        },
        {
          title: 'SPX',
          desc: 'I took part in e-commerce projects. I used Javascript, Jquery and SCSS on the FrontEnd side. The designs were coded to be Responsive by coming from Zeplin.',
        },
        {
          title: 'English Home',
          desc: 'I took part in e-commerce projects. I used Javascript, Jquery and SCSS on the FrontEnd side. The designs were coded to be Responsive by coming from Zeplin.',
        },
      ],
    },
    {
      title: 'Enüstkat Interactive',
      time: '2014 5 Months',
      tech: 'I used Javascript, Jquery and LESS on the FrontEnd side. The designs came from Photoshop and were coded as Desktop only. And the sites all consisted of static HTML pages.',
      desc: 'I was a part of the two-person FrontEnd team at the company.',
      works: [
        {
          title: 'Maret',
          desc: '',
        },
        {
          title: 'Ersan Boya',
          desc: '',
        },
        {
          title: 'Atmosfer Balloons',
          desc: '',
        },
        {
          title: 'Kapadokya Jet',
          desc: '',
        },
        {
          title: 'İstanbul Shipyard',
          desc: '',
        },
        {
          title: 'Karina',
          desc: '',
        },
        {
          title: 'Teleset',
          desc: '',
        },
      ],
    },
    {
      title: 'Triaj Agency',
      time: '2013 1 Year 6 Months',
      tech: 'PHP, HTML, LESS, Javascript, Jquery, Photoshop',
      desc: 'I did both FrontEnd and BackEnd (PHP) jobs in the company.',
      works: [
        {
          title: 'Bahat Sağlık Grubu',
          desc: 'I used Javascript, Jquery and LESS on the FrontEnd side. I coded the designs coming from Photoshop as Responsive. On the BackEnd side, I completely set up the infrastructure.',
        },
      ],
    },
    {
      title: 'BirinciMevkii',
      time: '2012 4 Months',
      tech: 'Facebook Apps, HTML, CSS, Javascript, Jquery, Photoshop',
      desc: 'I worked as the only FrontEnd in the company.',
      works: [],
    },
    {
      title: 'Marcamarca',
      time: '2012 8 Months',
      tech: 'Photo Decupe, Photoshop, Flash, Actionscript, HTML, CSS, Javascript',
      desc: 'I was a six-person FrontEnd supplement at the company.',
      works: [],
    },
    {
      title: 'Zenweld Welding',
      time: '2010 1 Years 9 Months',
      tech: 'PHP, HTML, CSS, Javascript, Jquery',
      desc: 'I worked as the only FrontEnd in the company. And I made a product catalog of 80 pages.',
      works: [
        {
          title: 'Zenweld.com',
          desc: 'I made the CMS using PHP and I did the frontend design with Photoshop. I used HTML, CSS and Jquery in frontend coding.',
        },
      ],
    },
  ];

  return (
    <ParallaxProvider scrollContainer={scrollEl}>
      <Head>
        <title>My Resume - MDervent</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className={`page ${styles.myResume}`}>
        <div className={styles.plus_list}>{getPlus({ count: 120 })}</div>
        <div className={styles.scrollArea} ref={ref}>
          <div className={styles.container}>
            <div className={`${styles.row} ${styles.row1}`}>
              <div className={styles.rowLeft}>
                <Parallax scale={[1, 0.5, 'easeInQuad']}>
                  <div className={styles.avatar}>
                    <img src="/murat-dervent.png" alt="" />
                  </div>
                </Parallax>
              </div>
              <div className={styles.rowRight}>
                <h1>Murat Dervent</h1>
                <h2>Sr.Front End Developer</h2>
                <div className={styles.contact}>
                  <ul>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g transform="translate(-2652 -1718)">
                          <g transform="translate(2651.001 1720.002)">
                            <path
                              d="M16.748,1.25H9.25A1.25,1.25,0,0,0,8,2.5v15a1.25,1.25,0,0,0,1.25,1.25h7.5A1.25,1.25,0,0,0,18,17.5V2.5A1.25,1.25,0,0,0,16.748,1.25ZM9.25,0a2.5,2.5,0,0,0-2.5,2.5v15A2.5,2.5,0,0,0,9.25,20h7.5a2.5,2.5,0,0,0,2.5-2.5V2.5a2.5,2.5,0,0,0-2.5-2.5Z"
                              fillRule="evenodd"
                            />
                            <path
                              d="M17,29.5a1.25,1.25,0,1,0-1.25-1.25A1.25,1.25,0,0,0,17,29.5Z"
                              transform="translate(-4.001 -12.003)"
                              fillRule="evenodd"
                            />
                          </g>
                        </g>
                      </svg>
                      <a
                        rel="noreferrer"
                        href="tel:+90 532 552 44 26"
                        target="_blank"
                      >
                        +90 532 552 44 26
                      </a>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g transform="translate(-2652 -1744)">
                          <path
                            d="M17.465,13.1V5.038a6.178,6.178,0,0,1-.724.693q-2.813,2.162-4.471,3.547-.535.451-.871.7a4.828,4.828,0,0,1-.908.509,2.637,2.637,0,0,1-1.076.257H9.393a2.634,2.634,0,0,1-1.076-.257,4.85,4.85,0,0,1-.908-.509q-.336-.252-.871-.7Q4.881,7.892,2.068,5.731a6.177,6.177,0,0,1-.724-.693V13.1a.341.341,0,0,0,.336.336H17.129a.341.341,0,0,0,.336-.336Zm0-11.031V1.81l-.005-.136-.031-.131-.057-.095-.095-.079-.147-.026H1.679a.341.341,0,0,0-.336.336A3.673,3.673,0,0,0,2.886,4.66q2.025,1.6,4.209,3.327l.367.31q.3.258.483.393t.467.331a2.744,2.744,0,0,0,.53.289,1.26,1.26,0,0,0,.451.095h.021a1.242,1.242,0,0,0,.451-.095,2.818,2.818,0,0,0,.53-.288q.289-.194.467-.331t.483-.393l.367-.31Q13.9,6.255,15.921,4.66a4.934,4.934,0,0,0,1.055-1.212,2.625,2.625,0,0,0,.488-1.38Zm1.343-.388V13.1a1.684,1.684,0,0,1-1.679,1.679H1.679a1.617,1.617,0,0,1-1.186-.493A1.617,1.617,0,0,1,0,13.1V1.679A1.617,1.617,0,0,1,.493.493,1.617,1.617,0,0,1,1.679,0H17.128a1.617,1.617,0,0,1,1.186.493,1.617,1.617,0,0,1,.493,1.186Z"
                            transform="translate(2654.596 1748.611)"
                          />
                        </g>
                      </svg>
                      <a
                        rel="noreferrer"
                        href="mailto:hi@mdervent.com"
                        target="_blank"
                      >
                        hi@mdervent.com
                      </a>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g transform="translate(-2652 -1770)">
                          <path
                            d="M12.779,3.375h-.023a9.4,9.4,0,0,0,0,18.808h.023a9.4,9.4,0,0,0,0-18.808ZM13.154,9a13.911,13.911,0,0,0,2.9-.385,16.864,16.864,0,0,1,.484,3.789H13.154V9Zm0-.755V4.189c1.013.28,2.043,1.632,2.695,3.708A13.212,13.212,0,0,1,13.154,8.249ZM12.4,4.18V8.253a13.046,13.046,0,0,1-2.717-.362c.66-2.088,1.7-3.45,2.717-3.712ZM12.4,9v3.4H8.995a16.859,16.859,0,0,1,.484-3.789A14.133,14.133,0,0,0,12.4,9ZM8.235,12.4h-4.1A8.6,8.6,0,0,1,6.1,7.3,13.691,13.691,0,0,0,8.755,8.417a17.771,17.771,0,0,0-.52,3.988Zm0,.75a17.49,17.49,0,0,0,.516,3.988,14.08,14.08,0,0,0-2.658,1.121,8.627,8.627,0,0,1-1.958-5.109h4.1Zm.759,0H12.4v3.4a13.832,13.832,0,0,0-2.925.394A16.864,16.864,0,0,1,9,13.154ZM12.4,17.3v4.078c-1.022-.267-2.057-1.623-2.717-3.712A12.831,12.831,0,0,1,12.4,17.3Zm.75,4.064V17.3a13.306,13.306,0,0,1,2.7.357C15.2,19.737,14.172,21.089,13.154,21.369Zm0-4.819v-3.4H16.54a16.852,16.852,0,0,1-.484,3.784,13.913,13.913,0,0,0-2.9-.389Zm4.142-3.4h4.124a8.608,8.608,0,0,1-1.958,5.109,13.91,13.91,0,0,0-2.681-1.13,17.476,17.476,0,0,0,.516-3.979Zm0-.75a17.711,17.711,0,0,0-.511-3.983A14.019,14.019,0,0,0,19.462,7.3a8.6,8.6,0,0,1,1.958,5.113H17.3Zm1.65-5.687a13.086,13.086,0,0,1-2.364.977A8.455,8.455,0,0,0,14.8,4.367a8.7,8.7,0,0,1,4.151,2.351Zm-8.21-2.343A8.361,8.361,0,0,0,8.959,7.688a12.836,12.836,0,0,1-2.342-.972,8.592,8.592,0,0,1,4.118-2.342ZM6.612,18.837a12.989,12.989,0,0,1,2.342-.972,8.442,8.442,0,0,0,1.781,3.319,8.605,8.605,0,0,1-4.124-2.346ZM14.8,21.193a8.447,8.447,0,0,0,1.79-3.332,13.067,13.067,0,0,1,2.364.977,8.678,8.678,0,0,1-4.155,2.355Z"
                            transform="translate(2651.625 1769.625)"
                          />
                        </g>
                      </svg>
                      <Link href="/">www.mdervent.com</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <a href="#" className={styles.btnWrap}>
              <Parallax translateX={['0px', '-400px']}>
                DOWNLOAD PDF - DOWNLOAD PDF - DOWNLOAD PDF - DOWNLOAD PDF -
                DOWNLOAD PDF - DOWNLOAD PDF - DOWNLOAD PDF - DOWNLOAD PDF -
                DOWNLOAD PDF - DOWNLOAD PDF - DOWNLOAD PDF - DOWNLOAD PDF -
                DOWNLOAD PDF - DOWNLOAD PDF -
              </Parallax>
            </a>
            <div className={`${styles.row} ${styles.row2}`}>
              <div className={styles.rowLeft}>
                <div className={styles.rowLeftTitleWrap}>
                  <Parallax translateX={['-50px', '0px']}>
                    <h3 className={styles.rowLeftTitle}>EDUCATION LIFE</h3>
                  </Parallax>
                </div>
              </div>
              <div className={styles.rowRight}>
                <ul className={styles.eduList}>
                  <li className={styles.eduListItem}>
                    <div className={styles.eduListItemTitle}>
                      Arel University
                    </div>
                    <div className={styles.eduListItemText}>
                      Radio and Television Programming (2009-2013)
                    </div>
                  </li>
                  <li className={styles.eduListItem}>
                    <div className={styles.eduListItemTitle}>
                      Tuncay Azaphan Anatolian Communication Vocational High
                      School
                    </div>
                    <div className={styles.eduListItemText}>
                      Radio and Television (2004-2009)
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${styles.row} ${styles.row2}`}>
              <div className={styles.rowLeft}>
                <div className={styles.rowLeftTitleWrap}>
                  <Parallax translateX={['-50px', '0px']}>
                    <h3 className={styles.rowLeftTitle}>CERTIFICATES</h3>
                  </Parallax>
                </div>
              </div>
              <div className={styles.rowRight}>
                <ul className={styles.eduList}>
                  <li className={styles.eduListItem}>
                    <div className={styles.eduListItemTitle}>Bilge Adam</div>
                    <div className={styles.eduListItemText}>
                      Web Design (300 Saat) - 2012
                      <br />
                      English (300 Saat) - 2013
                    </div>
                  </li>
                  <li className={styles.eduListItem}>
                    <div className={styles.eduListItemTitle}>
                      Neyasis Technology
                    </div>
                    <div className={styles.eduListItemText}>
                      Java Script, Vue/Nuxt, Jest - 2021
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${styles.row} ${styles.row2}`}>
              <div className={styles.rowLeft}>
                <div className={styles.rowLeftTitleWrap}>
                  <Parallax translateX={['-50px', '0px']}>
                    <h3 className={styles.rowLeftTitle}>MY SKILLS</h3>
                  </Parallax>
                </div>
              </div>
              <div className={styles.rowRight}>
                <ul className={styles.skillList}>
                  {skills.map((item, i) => {
                    return (
                      <li key={i} className={styles.skillListItem}>
                        <div className={styles.skillListItemTitle}>
                          {item.title}
                        </div>
                        <div className={styles.skillListItemProgress}>
                          <Parallax scaleY={[0, 1]}>
                            <span style={{ width: `${item.score}%` }}></span>
                          </Parallax>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <hr />
                <ul className={styles.skillList}>
                  <li className={styles.skillListItem}>
                    <div className={styles.skillListItemTitle}>Responsive</div>
                    <div className={styles.skillListItemProgress}>
                      <Parallax scaleY={[0, 1]}>
                        <span style={{ width: '100%' }}></span>
                      </Parallax>
                    </div>
                  </li>
                  <li className={styles.skillListItem}>
                    <div className={styles.skillListItemTitle}>
                      Cross Browser
                    </div>
                    <div className={styles.skillListItemProgress}>
                      <Parallax scaleY={[0, 1]}>
                        <span style={{ width: '100%' }}></span>
                      </Parallax>
                    </div>
                  </li>
                  <li className={styles.skillListItem}>
                    <div className={styles.skillListItemTitle}>Lighthouse</div>
                    <div className={styles.skillListItemProgress}>
                      <Parallax scaleY={[0, 1]}>
                        <span style={{ width: '100%' }}></span>
                      </Parallax>
                    </div>
                  </li>
                  <li className={styles.skillListItem}>
                    <div className={styles.skillListItemTitle}>SEO</div>
                    <div className={styles.skillListItemProgress}>
                      <Parallax scaleY={[0, 1]}>
                        <span style={{ width: '100%' }}></span>
                      </Parallax>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${styles.row} ${styles.row2}`}>
              <div className={styles.rowLeft}>
                <div className={styles.rowLeftTitleWrap}>
                  <Parallax translateX={['-50px', '0px']}>
                    <h3 className={styles.rowLeftTitle}>
                      WORK
                      <br />
                      EXPERIENCES
                    </h3>
                  </Parallax>
                </div>
              </div>
              <div className={styles.rowRight}>
                <ul className={styles.workList}>
                  {workData.map((item, key) => {
                    return (
                      <li key={key} className={styles.workListItem}>
                        <div className={styles.workListItemHead}>
                          <div className={styles.workListItemHeadTitle}>
                            {item.title}
                          </div>
                          <div className={styles.workListItemHeadTime}>
                            {item.time}
                          </div>
                        </div>
                        <div className={styles.workListItemContent}>
                          <div className={styles.workListItemContentTech}>
                            {item.tech}
                          </div>
                          <div className={styles.workListItemContentDesc}>
                            {item.desc}
                          </div>
                        </div>
                        {item.works.length > 0 && (
                          <div className={styles.workListItemDetail}>
                            <ul className={styles.workListItemDetailList}>
                              {item.works.map((work, w) => {
                                return (
                                  <li
                                    key={w}
                                    className={
                                      styles.workListItemDetailListItem
                                    }
                                  >
                                    <div
                                      className={
                                        styles.workListItemDetailListItemTitle
                                      }
                                    >
                                      {work.title}
                                    </div>
                                    <div
                                      className={
                                        styles.workListItemDetailListItemDesc
                                      }
                                    >
                                      {work.desc}
                                    </div>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                paddingTop: 20,
                paddingBottom: 20,
              }}
            >
              <Link href={'/about'}>
                <a className="btn">Return about page</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default MyResume;
