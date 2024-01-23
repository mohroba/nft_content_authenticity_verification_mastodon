import './welcome.css';

import boostsCarouselUrl from '../assets/features/boosts-carousel.jpg';
import groupedNotificationsUrl from '../assets/features/grouped-notifications.jpg';
import multiColumnUrl from '../assets/features/multi-column.jpg';
import multiHashtagTimelineUrl from '../assets/features/multi-hashtag-timeline.jpg';
import nestedCommentsThreadUrl from '../assets/features/nested-comments-thread.jpg';
import logoText from '../assets/logo-text.svg';
import logo from '../assets/logo.svg';

import Link from '../components/link';
import states from '../utils/states';
import useTitle from '../utils/useTitle';
import ITokensLoginButton from "../nft_components/ITokensLoginButton.jsx";

function Welcome() {
  useTitle(null, ['/', '/welcome']);
  return (
    <main id="welcome">
      <div class="hero-container">
        <h1>
          <img
            src="logo.png"
            alt=""
            width="200"
            height="200"
            style={{
              aspectRatio: '1/1',
              marginBlockEnd: -16,
            }}
          />
          <p>
              <small>
                AUTHEN CHAIN MASTODON
              </small>
          </p>
        </h1>
        <p>
          <big>
            <b>
              <Link to="/login" class="button">
                Log in
              </Link>
            </b>
          </big>
        </p>
        <p>
          <big>
            <b>
                <ITokensLoginButton/>
            </b>
          </big>
        </p>
        <p class="desc">A minimalistic opinionated Mastodon web client.</p>
        <p class="desc">NFT content authenticity verification is enabled on this client</p>
      </div>
    </main>
  );
}

export default Welcome;
